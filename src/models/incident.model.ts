import { Hall } from "./hall.model";

export class Incident {
    id: number|null;
    type: string;
    description: string;
    date: Date;
    hall: Hall;

    constructor(id: number|null, type: string, description: string, date: Date, hall: Hall) {
        this.id = id;
        this.type = type;
        this.description = description;
        this.date = date;
        this.hall = hall;
    }
}