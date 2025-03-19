import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { Router } from "@angular/router";
import { getCurrentWebviewWindow } from "@tauri-apps/api/webviewWindow";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { ApiService } from "../../services/api/api.service";
import {IncidentFactory} from "../../factories/incident.factory";
import {DatabaseService} from "../../services/database/database.service";

@Component({
  selector: 'app-incident-report',
  standalone: true,
  imports: [NgOptimizedImage, ReactiveFormsModule],
  templateUrl: './incident-report.component.html',
  styleUrl: './incident-report.component.css'
})
export class IncidentReportComponent {
  incidentReportForm = new FormGroup({
    incidentType: new FormControl('', [Validators.required, Validators.email]),
    incidentDescription: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(private readonly router: Router,
              private readonly incidentFactory: IncidentFactory,
              private readonly databaseService: DatabaseService,
              private readonly apiService: ApiService) {}

  submit() {
    // TODO Récupérer les éléments saisis dans le formulaire et le hall concerné
    /*const incident = this.incidentFactory.create(null, this.incidentReportForm.get("incidentType"), this.incidentReportForm.get("incidentDescription"), this.databaseService.getHall());
    this.apiService.postIncident();*/
    getCurrentWebviewWindow().close();
  }

  returnToHallList() {
    getCurrentWebviewWindow().close();
  }
}
