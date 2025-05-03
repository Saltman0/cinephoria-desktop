import {Injectable} from "@angular/core";
import {Incident} from "../models/incident.model";

@Injectable({
    providedIn: 'root'
})
export class IncidentRenderer {

    public render(incident: Incident) {
        return {
            id: incident.id,
            type: incident.type,
            description: incident.description,
            date: incident.date.getDate().toString(),
            hour: incident.date.getHours().toString()
        }
    }

}