import {Injectable} from '@angular/core';
import {jwtDecode} from "jwt-decode";
import {fetch} from "@tauri-apps/plugin-http";
import {HallModel} from "../../models/hall.model";
import {GetHallsGQL} from "../../graphql/get-halls.gql";
import {HallFactory} from "../../factories/hall.factory";
import {Incident} from "../database/database.service";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly apiUrl: string = 'http://172.18.0.6/';

  constructor(private readonly getHallsGQL: GetHallsGQL, private readonly hallFactory: HallFactory) {}

  public async login(email: string, password: string): Promise<any> {
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

  public async getUser(token: string): Promise<any> {
    const userId: number = jwtDecode<{id: number}>(token).id;
    const response: Response = await fetch(this.apiUrl + `user/${userId}`, {
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

  public async getHalls(cinemaId: number): Promise<HallModel[]> {

    let halls: HallModel[] = [];

    let result = await this.getHallsGQL.watch(
        { cinemaId: cinemaId }
    ).result();

    result.data.halls.forEach((hall: HallModel) => {
      halls.push(this.hallFactory.createModel(hall.id, hall.number, hall.currentShowtime, hall.incidents));
    });

    return halls;
  }

  public async getIncidents(hallId: number, token: string): Promise<any> {
    const response: Response = await fetch(this.apiUrl + `hall/${hallId}/incident`, {
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

  public async postIncident(incident: Incident, token: string): Promise<any> {
    const response: Response = await fetch(this.apiUrl + "incident", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "type": incident.type,
        "description": incident.description,
        "date": incident.date.toString(),
        "solved": incident.solved,
        "hallId": incident.hallId
      })
    });

    if (!response.ok) {
      throw new Error(response.status.toString());
    }

    return response.json();
  }

}