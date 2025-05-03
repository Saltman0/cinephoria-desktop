import { Component } from '@angular/core';
import { IncidentComponent } from "../incident/incident.component";
import { NgOptimizedImage } from "@angular/common";
import { Router } from "@angular/router";
import { getCurrentWebviewWindow } from "@tauri-apps/api/webviewWindow";
import {DatabaseService} from "../../services/database/database.service";
import {HallRenderer} from "../../renderers/hall.renderer";
import {Hall} from "../../models/hall.model";
import {Incident} from "../../models/incident.model";
import {IncidentRenderer} from "../../renderers/incident.renderer";

@Component({
  selector: 'app-incident-list',
  standalone: true,
  imports: [IncidentComponent, NgOptimizedImage],
  templateUrl: './incident-list.component.html',
  styleUrl: './incident-list.component.css'
})
export class IncidentListComponent {

  incidentList: any[] = [];

  constructor(private readonly databaseService: DatabaseService, private readonly incidentRenderer: IncidentRenderer) {}

  async ngOnInit(): Promise<void> {
    const incidents: Incident[] = await this.databaseService.getIncidents();
    incidents.forEach(incident => {
      this.incidentList.push(this.incidentRenderer.render(incident));
    });
  }

  returnToHallList() {
    getCurrentWebviewWindow().close();
  }

}
