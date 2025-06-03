import {Injectable} from "@angular/core";
import {CurrentShowtime} from "../services/database/database.service";

@Injectable({
    providedIn: 'root'
})
export class CurrentShowtimeFactory {

    public create(id: number, movieId: number, startTime: Date, endTime: Date, hallId: number): CurrentShowtime {
        return {
            id: id,
            movieId: movieId,
            startTime: startTime,
            endTime: endTime,
            hallId: hallId
        }
    }

}