import { Injectable } from "@angular/core";
import { Hall } from "../models/hall.model";
import { CurrentShowtime } from "../models/current-showtime.model";

@Injectable({
    providedIn: 'root'
})
export class HallRenderer {

    public render(hall: Hall) {

        const currentShowtime: CurrentShowtime|null = hall.currentShowtime;
        let currentMovieTitle: string|null = null;
        let currentMovieImage: string|null = null;
        let startHour: string|null = null;
        let endHour: string|null = null;
        if (currentShowtime !== null) {
            currentMovieTitle = currentShowtime.movie.title;
            currentMovieImage = currentShowtime.movie.imageUrl;
            startHour = currentShowtime.startTime.getHours().toString();
            endHour = currentShowtime.endTime.getHours().toString();
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