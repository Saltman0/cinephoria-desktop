import {Component} from '@angular/core';
import {IncidentComponent} from "../incident/incident.component";
import {NgOptimizedImage} from "@angular/common";
import {getCurrentWebviewWindow} from "@tauri-apps/api/webviewWindow";
import {DatabaseService, Incident} from "../../services/database/database.service";
import {IncidentRenderer} from "../../renderers/incident.renderer";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-incident-list',
  standalone: true,
  imports: [IncidentComponent, NgOptimizedImage],
  templateUrl: './incident-list.component.html',
  styleUrl: './incident-list.component.css'
})
export class IncidentListComponent {

  incidentList: any[] = [];

  constructor(
      private readonly databaseService: DatabaseService,
      private readonly incidentRenderer: IncidentRenderer,
      private route: ActivatedRoute) {}

  async ngOnInit(): Promise<void> {
    const hallId: number = parseInt(<string>this.route.snapshot.paramMap.get("hallId"));
    const incidents: Incident[] = await this.databaseService.getIncidentsByHallId(hallId);

    incidents.forEach(incident => {
      this.incidentList.push(this.incidentRenderer.render(incident));
    });
  }

  async returnToHallList() {
    await getCurrentWebviewWindow().close();
  }

}
