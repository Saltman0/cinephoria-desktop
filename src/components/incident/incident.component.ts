import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-incident',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './incident.component.html',
  styleUrl: './incident.component.css'
})
export class IncidentComponent {
  @Input() type: string = "Type d'incident";
  @Input() description: string = "Description de l'incident";
  @Input() date: string = "Date de l'incident";
  @Input() hour: string = "Heure de l'incident";
}
