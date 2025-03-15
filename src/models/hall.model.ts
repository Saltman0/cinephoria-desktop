import { CurrentShowtime } from "./current-showtime.model";
import { Incident } from "./incident.model";

export class Hall {
    id: number;
    number: number;
    currentShowtime: CurrentShowtime|null;
    incidents: Incident[];


    constructor(id: number, number: number, currentShowtime: CurrentShowtime|null, incidents: Incident[]) {
        this.id = id;
        this.number = number;
        this.currentShowtime = currentShowtime;
        this.incidents = incidents;
    }
}