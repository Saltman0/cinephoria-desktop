import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { getCurrentWebviewWindow } from "@tauri-apps/api/webviewWindow";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { ApiService } from "../../services/api/api.service";
import { IncidentFactory } from "../../factories/incident.factory";
import { DatabaseService } from "../../services/database/database.service";
import { LocalStorageService } from "../../services/local-storage/local-storage.service";
import { Hall } from "../../models/hall.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-incident-report',
  standalone: true,
  imports: [NgOptimizedImage, ReactiveFormsModule],
  templateUrl: './incident-report.component.html',
  styleUrl: './incident-report.component.css'
})
export class IncidentReportComponent {
  incidentReportForm = new FormGroup({
    selectedHallNumber: new FormControl("", [Validators.required]),
    incidentType: new FormControl('', [Validators.required]),
    incidentDescription: new FormControl('', [Validators.required])
  });

  hallList: Hall[] = [];

  constructor(private readonly incidentFactory: IncidentFactory,
              private readonly databaseService: DatabaseService,
              private readonly apiService: ApiService,
              private readonly localStorageService: LocalStorageService,
              private readonly router: Router) {}

  async ngOnInit(): Promise<void> {
    const halls: Hall[] = await this.databaseService.getHalls();
    halls.forEach(hall => {
      this.hallList.push(hall);
    });
  }

  async submit() {
    const selectedHallNumber = <string>this.incidentReportForm.get("selectedHallNumber")?.value;
    const incidentType = <string>this.incidentReportForm.get("incidentType")?.value;
    const incidentDescription = <string>this.incidentReportForm.get("incidentDescription")?.value;

    const incident = this.incidentFactory.create(
        null,
        incidentType,
        incidentDescription,
        <Hall>await this.databaseService.getHall(parseInt(selectedHallNumber))
    );
    await this.apiService.postIncident(incident, this.localStorageService.getJwtToken());
    this.databaseService.addIncident(incident);

    await this.closeAndNavigateToHallList();
  }

  async returnToHallList() {
    await this.closeAndNavigateToHallList();
  }

  async closeAndNavigateToHallList() {
    await getCurrentWebviewWindow().close();
    await this.router.navigate(['hall-list']);
  }
}
