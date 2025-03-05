import {CurrentShowtime} from "./current-showtime.model";
import {Incident} from "./incident.model";

export interface Hall {
    id: number;
    number: number;
    currentShowtime: CurrentShowtime;
    incidents: Incident[];
}