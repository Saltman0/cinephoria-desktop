import { Component } from '@angular/core';
import { IncidentComponent } from "../incident/incident.component";
import { NgOptimizedImage } from "@angular/common";
import { Router } from "@angular/router";
import { getCurrentWebviewWindow } from "@tauri-apps/api/webviewWindow";

@Component({
  selector: 'app-incident-list',
  standalone: true,
  imports: [IncidentComponent, NgOptimizedImage],
  templateUrl: './incident-list.component.html',
  styleUrl: './incident-list.component.css'
})
export class IncidentListComponent {
  incidentList = [
    { id: 1, type: "Siège endommagé", description: "Siège A2 cassé, nécessite une intervention de notre technicien. \n" +
          "\n" +
          "Problème à régler en urgence.", date: "12/04/2025", hour: "22h00" },
    { id: 2, type: "Siège sale", description: "Les sièges de la rangée A sont dans un mauvais état. \n" +
          "\n" +
          "Nécessite l’intervention d’un agent de nettoyage.", date: "13/04/2025", hour: "18h00" },
    { id: 3, type: "Problème technique", description: "Le film de la séance ne démarre pas.\n" +
          "\n" +
          "Urgent !!!", date: "14/04/2025", hour: "13h00" },
    { id: 4, type: "Incident client", description: "Une dispute a éclaté dans la salle.", date: "14/04/2025", hour: "15h00" }
  ];

  constructor(private router: Router) {}

  returnToHallList() {
    getCurrentWebviewWindow().close();
  }
}
