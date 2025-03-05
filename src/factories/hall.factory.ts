import {Injectable} from "@angular/core";
import {CurrentShowtime} from "../models/current-showtime.model";
import {Incident} from "../models/incident.model";
import {Hall} from "../models/hall.model";

@Injectable({
    providedIn: 'root'
})
export class HallFactory {

    public create(id: number, number: number, currentShowtime: CurrentShowtime, incidents: Incident[]): Hall {
        return {
            id: id,
            number: number,
            currentShowtime: currentShowtime,
            incidents: incidents
        }
    }

}