import {Injectable} from "@angular/core";
import {Movie} from "../models/movie.model";
import {CurrentShowtime} from "../models/current-showtime.model";

@Injectable({
    providedIn: 'root'
})
export class CurrentShowtimeFactory {

    public create(id: number, movie: Movie, startTime: Date, endTime: Date): CurrentShowtime {
        return {
            id: id,
            movie: movie,
            startTime: startTime,
            endTime: endTime
        }
    }

}