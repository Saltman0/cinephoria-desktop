import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { Router } from "@angular/router";

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
    this.router.navigate(['hall-list']);
  }

  returnToHallList() {
    this.router.navigate(['hall-list']);
  }
}
