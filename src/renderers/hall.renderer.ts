import {Injectable} from "@angular/core";
import {Hall} from "../models/hall.model";
import {CurrentShowtime} from "../models/current-showtime.model";
import {Movie} from "../models/movie.model";

@Injectable({
    providedIn: 'root'
})
export class HallRenderer {

    public render(hall: Hall) {
        const currentShowtime: CurrentShowtime|null = hall.currentShowtime;

        let currentMovieTitle: string | null = null;
        let currentMovieImage: string | null = null;
        let startHour: string | null = null;
        let endHour: string | null = null;
        if (currentShowtime !== null) {

            const movie: Movie|null = currentShowtime.movie;

            currentMovieTitle = movie.title;
            currentMovieImage = movie.imageURL;
            startHour = new Date(currentShowtime.startTime).getHours().toString();
            endHour = new Date(currentShowtime.endTime).getHours().toString();
        }

        return {
            id: hall.id,
            number: hall.number,
            currentMovieTitle: currentMovieTitle,
            currentMovieImage: currentMovieImage,
            startHour: startHour,
            endHour: endHour,
            numberOfIncidents: hall.incidents.length
        }
    }

}