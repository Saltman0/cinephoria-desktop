import {CurrentShowtimeModel} from "./current-showtime.model";

export class MovieModel {
    id: number;
    title: string;
    imageURL: string;
    currentShowtime: CurrentShowtimeModel;

    constructor(id: number, title: string, imageURL: string, currentShowtime: CurrentShowtimeModel) {
        this.id = id;
        this.title = title;
        this.imageURL = imageURL;
        this.currentShowtime = currentShowtime;
    }
}