import { Component, Input } from '@angular/core';
import { NgOptimizedImage, NgStyle } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: 'app-hall',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgStyle
  ],
  templateUrl: './hall.component.html',
  styleUrl: './hall.component.css'
})
export class HallComponent {
  @Input() number: number = 777;
  @Input() currentMovieTitle: string = "Nom du film actuel";
  @Input() currentMovieImage: string = "Image du film actuel";
  @Input() startHour: string = "xxhxx";
  @Input() endHour: string = "xxhxx";
  @Input() numberOfIncidents: number = 777;

  constructor(private router: Router) {}

  displayIncidents() {
    this.router.navigate(['incident-list-component']);
  }
}
