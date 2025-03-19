import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HallComponent } from "../hall/hall.component";
import { DatabaseService } from "../../services/database/database.service";
import {HallRenderer} from "../../renderers/hall.renderer";
import {Hall} from "../../models/hall.model";

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
        console.log(halls);
        halls.forEach(hall => {
            this.hallList.push(this.hallRenderer.render(hall));
        });
    }
}
