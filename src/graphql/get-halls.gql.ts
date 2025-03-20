import { gql, Query } from 'apollo-angular';
import { Injectable } from '@angular/core';
import {Hall} from "../models/hall.model";

export interface Response {
    halls: Hall[];
}

@Injectable({
    providedIn: 'root',
})
export class GetHallsGQL extends Query<Response> {
    document = gql`
        query GetHalls($cinemaId: Int!) {
            halls(cinemaId: $cinemaId) {
                id
                number
                currentShowtime {
                    id
                    movie {
                        id
                        title
                        imageURL
                    }
                    startTime
                    endTime
                }
                incidents {
                    id
                    type
                    description
                }
            }
        }
    `;
}