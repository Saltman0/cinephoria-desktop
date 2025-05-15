import {Injectable} from "@angular/core";
import {Movie} from "../models/movie.model";
import {CurrentShowtime} from "../models/current-showtime.model";

@Injectable({
    providedIn: 'root'
})
export class MovieFactory {

    public create(id: number|null, title: string, imageURL: string, currentShowtime: CurrentShowtime): Movie {
        return new Movie(id, title, imageURL, currentShowtime);
    }

}