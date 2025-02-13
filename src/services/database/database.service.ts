import { Injectable } from '@angular/core';
import Database from "@tauri-apps/plugin-sql";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private httpClient: HttpClient) {}

  async loadDatabase() {
    await Database.load("sqlite:test.db");
  }
}
