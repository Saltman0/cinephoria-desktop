import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HallComponent } from "../hall/hall.component";

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
  hallList = [
      { id: "avengers", number: 1, currentMovieTitle: "Avengers : Infinity War", currentMovieImage: "Avengers - Infinity War.png", startHour:  "22h00", endHour: "23h30", numberOfIncidents: 1 },
      { id: "interstellar", number: 2, currentMovieTitle: "Interstellar", currentMovieImage: "Interstellar.jpg", startHour:  "20h30", endHour: "23h00", numberOfIncidents: 0 },
      { id: "moiMocheEtMechant4", number: 3, currentMovieTitle: "Moi moche et méchant 4", currentMovieImage: "Moi moche et méchant 4.png", startHour:  "20h45", endHour: "22h00", numberOfIncidents: 1 },
      { id: "spiderMan3", number: 4, currentMovieTitle: "Spider-man 3", currentMovieImage: "Spider-man 3.jpg", startHour:  "19h30", endHour: "21h30", numberOfIncidents: 50 },
      { id: "starWars3", number: 5, currentMovieTitle: "Star Wars III : La revanche des sith", currentMovieImage: "Star Wars 3.jpg", startHour:  "19h00", endHour: "22h00", numberOfIncidents: 3 },
      { id: "viceVersa", number: 6, currentMovieTitle: "Vice-versa", currentMovieImage: "Vice-versa.png", startHour:  "20h00", endHour: "21h30", numberOfIncidents: 0 }
  ];
}
