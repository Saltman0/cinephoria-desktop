import {Injectable} from "@angular/core";
import {Movie} from "../models/movie.model";

@Injectable({
    providedIn: 'root'
})
export class MovieFactory {

    public create(id: number, title: string, imageUrl: string): Movie {
        return {
            id: id,
            title: title,
            imageUrl: imageUrl
        }
    }

}