import {Injectable} from "@angular/core";
import {Incident} from "../models/incident.model";

@Injectable({
    providedIn: 'root'
})
export class IncidentRenderer {

    public render(incident: Incident) {
        const date = incident.date;

        return {
            id: incident.id,
            type: incident.type,
            description: incident.description,
            date: date.getDate().toString().padStart(2, "0")
                + "/" + date.getMonth().toString().padStart(2, "0")
                + "/" + date.getFullYear().toString().padStart(2, "0"),
            hour: date.getHours().toString().padStart(2, "0") + "h" + date.getMinutes().toString().padStart(2, "0")
        }
    }

}