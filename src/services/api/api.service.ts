import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://172.18.0.6/';

  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.httpClient.post<{value: string}>(this.apiUrl + "login", {email: email, password: password});
  }

  getUser(token: string): Observable<any> {
    const userId = jwtDecode<{id: number}>(token).id;
    console.log(userId);
    return this.httpClient.get<any>(this.apiUrl + `user/${userId}`, {headers: {Authorization: "Bearer " + token}});
  }
}