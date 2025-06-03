import { CurrentShowtimeModel } from "./current-showtime.model";
import { IncidentModel } from "./incident.model";

export class HallModel {
    id: number;
    number: number;
    currentShowtime: CurrentShowtimeModel|null;
    incidents: IncidentModel[];

    constructor(id: number, number: number, currentShowtime: CurrentShowtimeModel|null, incidents: IncidentModel[]) {
        this.id = id;
        this.number = number;
        this.currentShowtime = currentShowtime;
        this.incidents = incidents;
    }
}