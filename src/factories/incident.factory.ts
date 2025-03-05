import {Injectable} from "@angular/core";
import {Incident} from "../models/incident.model";

@Injectable({
    providedIn: 'root'
})
export class IncidentFactory {

    public create(id: number, type: string, description: string): Incident {
        return {
            id: id,
            type: type,
            description: description
        }
    }

}