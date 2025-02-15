import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {HallComponent} from "../hall/hall.component";

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

}
