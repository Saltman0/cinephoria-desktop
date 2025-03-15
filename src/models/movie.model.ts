import { CurrentShowtime } from "./current-showtime.model";

export class Movie {
    id: number;
    title: string;
    imageUrl: string;
    currentShowtime: CurrentShowtime;

    constructor(id: number, title: string, imageUrl: string, currentShowtime: CurrentShowtime) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.currentShowtime = currentShowtime;
    }
}