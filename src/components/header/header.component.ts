import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { Router } from "@angular/router";
import { root } from "../app/app.routes";
import { WebViewWindowService } from "../../services/web-view-window/web-view-window.service";
import { DatabaseService } from "../../services/database/database.service";
import { LocalStorageService } from "../../services/local-storage/local-storage.service";

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

  constructor(private readonly router: Router,
              private readonly webViewWindowService: WebViewWindowService,
              private readonly databaseService: DatabaseService,
              private readonly localStorageService: LocalStorageService) {}

  reportIncident(): void {
    this.webViewWindowService.createWebviewWindow(
        'incident-report',
        root + '/incident-report',
        "Signalement d'un incident",
        640,
        547,
        false
    );
  }

  async disconnect(): Promise<void> {
    this.databaseService.closeDatabase();
    this.databaseService.deleteDatabase();
    this.localStorageService.deleteJwtToken();
    await this.router.navigate(['login']);
  }
}