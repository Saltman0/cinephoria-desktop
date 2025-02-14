import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-hall',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './hall.component.html',
  styleUrl: './hall.component.css'
})
export class HallComponent {

}
