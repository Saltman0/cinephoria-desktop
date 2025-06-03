import {Component} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {HallComponent} from "../hall/hall.component";
import {DatabaseService, Hall} from "../../services/database/database.service";
import {HallRenderer} from "../../renderers/hall.renderer";

@Component({
  selector: 'app-hall-list',
  standalone: true,
  imports: [
    HeaderComponent,
    HallComponent
  ],
  templateUrl: './hall-list.component.html',
  styleUrl: './hall-list.component.css'
})
export class HallListComponent {
    hallList: any[] = [];

    constructor(private readonly databaseService: DatabaseService, private readonly hallRenderer: HallRenderer) {}

    async ngOnInit(): Promise<void> {
        const halls: Hall[] = await this.databaseService.getHalls();
        for (const hall of halls) {
            this.hallList.push(await this.hallRenderer.render(hall));
        }
    }
}
