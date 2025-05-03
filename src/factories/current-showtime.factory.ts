import { Injectable } from "@angular/core";
import { Movie } from "../models/movie.model";
import { CurrentShowtime } from "../models/current-showtime.model";
import { Hall } from "../models/hall.model";

@Injectable({
    providedIn: 'root'
})
export class CurrentShowtimeFactory {

    public create(id: number|null, movie: Movie, startTime: Date, endTime: Date, hall: Hall): CurrentShowtime {
        return new CurrentShowtime(id, movie, startTime, endTime, hall);
    }

}