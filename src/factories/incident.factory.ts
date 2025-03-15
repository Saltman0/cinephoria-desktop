import { Injectable } from "@angular/core";
import { Incident } from "../models/incident.model";
import { Hall } from "../models/hall.model";

@Injectable({
    providedIn: 'root'
})
export class IncidentFactory {

    public create(id: number, type: string, description: string, hall: Hall): Incident {
        return new Incident(id, type, description, hall);
    }

}