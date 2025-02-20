import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { Router } from "@angular/router";
import { root } from "../app/app.routes";
import { WebViewWindowService } from "../../services/web-view-window/web-view-window.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  firstName: string = "Mathieu";
  lastName: string = "Baudoin";

  constructor(private router: Router, private webViewWindowService: WebViewWindowService) {}

  reportIncident() {
    this.webViewWindowService.createWebviewWindow(
        'incident-report',
        root + '/incident-report',
        "Signalement d'un incident",
        640,
        547,
        false
    );
  }

  disconnect() {
    this.router.navigate(['login']);
  }
}