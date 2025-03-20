import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { getCurrentWebviewWindow } from "@tauri-apps/api/webviewWindow";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { ApiService } from "../../services/api/api.service";
import { IncidentFactory } from "../../factories/incident.factory";
import { DatabaseService } from "../../services/database/database.service";
import { Hall } from "../../models/hall.model";

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
              private readonly apiService: ApiService) {}

  async ngOnInit(): Promise<void> {
    const halls: Hall[] = await this.databaseService.getHalls();
    halls.forEach(hall => {
      this.hallList.push(hall);
    });
  }

  async submit() {
    // TODO Récupérer les éléments saisis dans le formulaire et le hall concerné
    const selectedHallNumber = <string>this.incidentReportForm.get("selectedHallNumber")?.value;
    const incidentType = <string>this.incidentReportForm.get("incidentType")?.value;
    const incidentDescription = <string>this.incidentReportForm.get("incidentDescription")?.value;

    console.log(incidentType, incidentDescription, parseInt(selectedHallNumber));


    const incident = this.incidentFactory.create(
        null,
        incidentType,
        incidentDescription,
        <Hall>await this.databaseService.getHall(parseInt(selectedHallNumber))
    );
    console.log(incident);
    /*this.apiService.postIncident();
    getCurrentWebviewWindow().close();*/
  }

  returnToHallList() {
    getCurrentWebviewWindow().close();
  }
}
