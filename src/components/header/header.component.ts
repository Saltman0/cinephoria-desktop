import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import {Router} from "@angular/router";

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

  constructor(private router: Router) {}

  reportIncident() {
    this.router.navigate(['incident-report']);
  }

  disconnect() {
    this.router.navigate(['login']);
  }
}