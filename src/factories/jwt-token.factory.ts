import {Injectable} from "@angular/core";
import {JwtToken} from "../models/jwt-token.model";

@Injectable({
    providedIn: 'root'
})
export class JwtTokenFactory {

    public create(id: number, value: string): JwtToken {
        return {
            id: id,
            value: value
        }
    }

}