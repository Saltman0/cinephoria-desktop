import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {root} from "../app/app.routes";
import {WebViewWindowService} from "../../services/web-view-window/web-view-window.service";

@Component({
  selector: 'app-hall',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './hall.component.html',
  styleUrl: './hall.component.css'
})
export class HallComponent {
  @Input() id: number = 0;
  @Input() number: number = 777;
  @Input() currentMovieTitle: string = "Nom du film actuel";
  @Input() currentMovieImage: string = "Image du film actuel";
  @Input() startHour: string = "xx";
  @Input() startMinute: string = "xx";
  @Input() endHour: string = "xx";
  @Input() endMinute: string = "xx";
  @Input() numberOfIncidents: number = 777;

  constructor(private readonly webViewWindowService: WebViewWindowService) {}

  displayIncidents(hallId: number): void {
    this.webViewWindowService.createWebviewWindow(
        'incident-list',
        root + '/incident-list/' + hallId,
        'Historique des incidents',
        640,
        547,
        false
    );
  }
}
