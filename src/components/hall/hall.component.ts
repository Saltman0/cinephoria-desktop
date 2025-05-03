import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { root } from "../app/app.routes";
import { WebViewWindowService } from "../../services/web-view-window/web-view-window.service";

@Component({
  selector: 'app-hall',
  standalone: true,
  imports: [NgOptimizedImage],
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

  constructor(private readonly webViewWindowService: WebViewWindowService) {}

  displayIncidents(): void {
    this.webViewWindowService.createWebviewWindow(
        'incident-list',
        root + '/incident-list',
        'Historique des incidents',
        640,
        547,
        false
    );
  }
}
