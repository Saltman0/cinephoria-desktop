import {Injectable} from "@angular/core";
import {Incident} from "../services/database/database.service";

@Injectable({
    providedIn: 'root'
})
export class IncidentRenderer {

    public render(incident: Incident) {
        console.log(incident.date);
        const incidentDate = new Date(incident.date);

        console.log(incidentDate);

        const day: string = incidentDate.getDate().toString().padStart(2, "0");
        const month: string = (incidentDate.getMonth() + 1).toString().padStart(2, "0");
        const year: string = incidentDate.getFullYear().toString().padStart(2, "0");
        console.log(day);
        console.log(month);
        console.log(year);


        const hour: string = incidentDate.getHours().toString().padStart(2, "0");
        const minute: string = incidentDate.getMinutes().toString().padStart(2, "0");

        console.log(day + "/" + month + "/" + year);

        return {
            id: incident.id,
            type: incident.type,
            description: incident.description,
            date: day + "/" + month + "/" + year,
            hour: hour,
            minute: minute
        }
    }

}