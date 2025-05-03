import { Hall } from "./hall.model";

export class Incident {
    id: number|null;
    type: string;
    description: string;
    hall: Hall;


    constructor(id: number|null, type: string, description: string, hall: Hall) {
        this.id = id;
        this.type = type;
        this.description = description;
        this.hall = hall;
    }
}