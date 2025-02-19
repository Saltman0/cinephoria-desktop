import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { NgOptimizedImage } from "@angular/common";
import { ApiService } from "../../services/api/api.service";
import { DatabaseService } from "../../services/database/database.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgOptimizedImage, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private router: Router, private apiService: ApiService, private databaseService: DatabaseService) {}

  submit() {

      this.router.navigate(['hall-list']);

    /*let token;

    this.apiService.login(<string>this.loginForm.value.email, <string>this.loginForm.value.password).subscribe(
        response => {
            token = response.value;
            console.log(token);
            this.databaseService.loadDatabase();
            // TODO Récupérer toutes les données
            this.apiService.getUser(token).subscribe(
                response => {
                    console.log(response);
                    this.router.navigate(['hall-list-component']);
                }
            )
        }
    );*/
  }
}