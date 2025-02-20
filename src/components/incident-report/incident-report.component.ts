import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { Router } from "@angular/router";
import { getCurrentWebviewWindow } from "@tauri-apps/api/webviewWindow";

@Component({
  selector: 'app-incident-report',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './incident-report.component.html',
  styleUrl: './incident-report.component.css'
})
export class IncidentReportComponent {
  constructor(private router: Router) {}

  submitIncident() {
    getCurrentWebviewWindow().close();
  }

  returnToHallList() {
    getCurrentWebviewWindow().close();
  }
}
