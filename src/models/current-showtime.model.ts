import { MovieModel } from "./movie.model";
import { HallModel } from "./hall.model";

export class CurrentShowtimeModel {
    id: number;
    movie: MovieModel;
    startTime: Date;
    endTime: Date;
    hall: HallModel;

    constructor(id: number, movie: MovieModel, startTime: Date, endTime: Date, hall: HallModel) {
        this.id = id;
        this.movie = movie;
        this.startTime = startTime;
        this.endTime = endTime;
        this.hall = hall;
    }
}