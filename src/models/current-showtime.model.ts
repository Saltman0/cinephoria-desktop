import {Movie} from "./movie.model";

export interface CurrentShowtime {
    id: number;
    movie: Movie;
    startTime: Date;
    endTime: Date;
}