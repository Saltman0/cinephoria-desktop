import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { NgOptimizedImage } from "@angular/common";
import { ApiService } from "../../services/api/api.service";
import { DatabaseService } from "../../services/database/database.service";
import { Router } from "@angular/router";
import {UserFactory} from "../../factories/user.factory";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgOptimizedImage, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('baudoin.mathieu@protonmail.com', [Validators.required, Validators.email]),
    password: new FormControl('0123456789', [Validators.required])
  });

  constructor(private router: Router,
              private apiService: ApiService,
              private databaseService: DatabaseService,
              private userFactory: UserFactory) {}

  async submit() {

    const response = await this.apiService.login2(<string>this.loginForm.value.email, <string>this.loginForm.value.password);

    console.log(response.value);

    const responseUser = await this.apiService.getUser(response.value);

    console.log(responseUser);

    // TODO Effectuer les différentes requêtes pour stocker dans une BDD locale
    await this.databaseService.addUser(this.userFactory.create(responseUser.id, response.firstName, response.lastName));

    //this.router.navigate(['hall-list']);
  }
}