import {Injectable} from "@angular/core";
import {Incident} from "../services/database/database.service";
import {IncidentModel} from "../models/incident.model";
import {HallModel} from "../models/hall.model";

@Injectable({
    providedIn: 'root'
})
export class IncidentFactory {

    public create(
        id: number|null,
        type: string,
        description: string,
        date: Date,
        solved: boolean,
        hallId: number
    ): Incident {
        if (id === null) {
            return {
                id: id,
                type: type,
                description: description,
                date: date,
                solved: solved,
                hallId: hallId
            }
        } else {
            return {
                id: id,
                type: type,
                description: description,
                date: date,
                solved: solved,
                hallId: hallId
            }
        }

    }

    public createModel(
        id: number|null,
        type: string,
        description: string,
        date: Date,
        solved: boolean,
        hall: HallModel
    ): IncidentModel {
        return new IncidentModel(id, type, description, date, solved, hall);
    }

}