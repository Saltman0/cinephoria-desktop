import { Movie } from "./movie.model";
import { Hall } from "./hall.model";

export class CurrentShowtime {
    id: number;
    movie: Movie;
    startTime: Date;
    endTime: Date;
    hall: Hall;

    constructor(id: number, movie: Movie, startTime: Date, endTime: Date, hall: Hall) {
        this.id = id;
        this.movie = movie;
        this.startTime = startTime;
        this.endTime = endTime;
        this.hall = hall;
    }
}