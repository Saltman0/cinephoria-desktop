import {Injectable} from "@angular/core";
import {CurrentShowtime, DatabaseService, Hall, Incident, Movie} from "../services/database/database.service";

@Injectable({
    providedIn: 'root'
})
export class HallRenderer {

    private constructor(private readonly databaseService: DatabaseService) {}

    public async render(hall: Hall) {
        const currentShowtimeId: number|null = hall.currentShowtimeId;

        let currentMovieTitle: string | null = null;
        let currentMovieImage: string | null = null;
        let startHour: string | null = null;
        let startMinute: string | null = null;
        let endHour: string | null = null;
        let endMinute: string | null = null;
        if (currentShowtimeId !== null) {
            const currentShowtime: CurrentShowtime|null =
                await this.databaseService.getCurrentShowtime(currentShowtimeId) ?? null;

            if (currentShowtime !== null) {

                const movie: Movie|null = await this.databaseService.getMovie(currentShowtime.movieId) ?? null;

                if (movie !== null) {
                    currentMovieTitle = movie.title;
                    currentMovieImage = movie.imageURL;
                }

                startHour = new Date(currentShowtime.startTime).getHours().toString().padStart(2, "0");
                startMinute = new Date(currentShowtime.startTime).getMinutes().toString().padStart(2, "0");
                endHour = new Date(currentShowtime.endTime).getHours().toString().padStart(2, "0");
                endMinute = new Date(currentShowtime.endTime).getMinutes().toString().padStart(2, "0");
            }
        }

        const incidents: Incident[] = await this.databaseService.getIncidentsByHallId(hall.id);

        return {
            id: hall.id,
            number: hall.number,
            currentMovieTitle: currentMovieTitle,
            currentMovieImage: currentMovieImage,
            startHour: startHour,
            startMinute: startMinute,
            endHour: endHour,
            endMinute: endMinute,
            numberOfIncidents: incidents.length
        }
    }

}