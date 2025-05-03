import { CurrentShowtime } from "./current-showtime.model";

export class Movie {
    id: number|null;
    title: string;
    imageUrl: string;
    currentShowtime: CurrentShowtime;

    constructor(id: number|null, title: string, imageUrl: string, currentShowtime: CurrentShowtime) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.currentShowtime = currentShowtime;
    }
}