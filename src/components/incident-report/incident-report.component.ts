import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-incident-report',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './incident-report.component.html',
  styleUrl: './incident-report.component.css'
})
export class IncidentReportComponent {

}
