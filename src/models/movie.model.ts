import {CurrentShowtime} from "./current-showtime.model";

export class Movie {
    id: number|null;
    title: string;
    imageURL: string;
    currentShowtime: CurrentShowtime;

    constructor(id: number|null, title: string, imageURL: string, currentShowtime: CurrentShowtime) {
        this.id = id;
        this.title = title;
        this.imageURL = imageURL;
        this.currentShowtime = currentShowtime;
    }
}