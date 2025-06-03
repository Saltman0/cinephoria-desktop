import {Injectable} from "@angular/core";
import {Hall} from "../services/database/database.service";
import {HallModel} from "../models/hall.model";
import {IncidentModel} from "../models/incident.model";
import {CurrentShowtimeModel} from "../models/current-showtime.model";

@Injectable({
    providedIn: 'root'
})
export class HallFactory {

    public create(id: number, number: number, currentShowtimeId: number|null): Hall {
        return {
            id: id,
            number: number,
            currentShowtimeId: currentShowtimeId
        }
    }

    public createModel(
        id: number,
        number: number,
        currentShowtime: CurrentShowtimeModel|null,
        incidents: IncidentModel[]
    ): HallModel {
        return new HallModel(id, number, currentShowtime, incidents);
    }

}