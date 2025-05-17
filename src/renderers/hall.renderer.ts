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
        let startMinute: string | null = null;
        let endHour: string | null = null;
        let endMinute: string | null = null;
        if (currentShowtime !== null) {

            const movie: Movie|null = currentShowtime.movie;

            currentMovieTitle = movie.title;
            currentMovieImage = movie.imageURL;
            startHour = new Date(currentShowtime.startTime).getHours().toString().padStart(2, "0");
            startMinute = new Date(currentShowtime.startTime).getMinutes().toString().padStart(2, "0");
            endHour = new Date(currentShowtime.endTime).getHours().toString().padStart(2, "0");
            endMinute = new Date(currentShowtime.endTime).getMinutes().toString().padStart(2, "0");
        }

        return {
            id: hall.id,
            number: hall.number,
            currentMovieTitle: currentMovieTitle,
            currentMovieImage: currentMovieImage,
            startHour: startHour,
            startMinute: startMinute,
            endHour: endHour,
            endMinute: endMinute,
            numberOfIncidents: hall.incidents.length
        }
    }

}