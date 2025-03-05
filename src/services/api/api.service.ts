import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { jwtDecode } from "jwt-decode";
import {fetch} from "@tauri-apps/plugin-http";
import {ApolloClient, InMemoryCache} from "@apollo/client/core";
import {Apollo} from "apollo-angular";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://172.18.0.6/';

  constructor(private httpClient: HttpClient, private readonly apollo: Apollo) {}

  private initializeClient() {
    return new ApolloClient({
      uri: 'https://your-graphql-endpoint.com/graphql',
      cache: new InMemoryCache(),
    });
  }

  public login(email: string, password: string): Observable<any> {
    return this.httpClient.post<{value: string}>(this.apiUrl + "login", {email: email, password: password});
  }

  public async login2(email: string, password: string): Promise<any> {
    const response: Response = await fetch(this.apiUrl + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email: email, password: password})
    });

    if (!response.ok) {
      throw new Error(response.status.toString());
    }

    return response.json();
  }

  public async getUser(token: string) {
    const userId = jwtDecode<{id: number}>(token).id;
    const response = await fetch(this.apiUrl + `user/${userId}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      }
    });

    if (!response.ok) {
      throw new Error(response.status.toString());
    }

    return response.json();
  }
}