import { Injectable } from '@angular/core';
import Dexie, { Table } from 'dexie';
import {JwtToken} from "../../models/jwt-token.model";
import {User} from "../../models/user.model";
import {Hall} from "../../models/hall.model";
import {CurrentShowtime} from "../../models/current-showtime.model";
import {Movie} from "../../models/movie.model";
import {Incident} from "../../models/incident.model";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService extends Dexie {
  jwtTokens!: Table<JwtToken, number>;
  users!: Table<User, number>;
  halls!: Table<Hall, number>;
  currentShowtimes!: Table<CurrentShowtime, number>;
  movies!: Table<Movie, number>;
  incidents!: Table<Incident, number>;

  public constructor() {
    super('CinephoriaDatabase');
    this.version(1).stores({
      jwtTokens: '++id, value',
      users: '++id, firstName, lastName',
      halls: '++id, number, currentShowtime, movie',
      currentShowtimes: '++id, movie, startTime, endTime',
      movies: '++id, title, imageUrl',
      incidents: '++id, type, description'
    });
    /*this.on('populate', () => this.populate());*/
  }

  public async deleteDatabase(): Promise<void> {
    this.close();
  }

  public async addJwtToken(jwtToken: JwtToken): Promise<number> {
    return this.jwtTokens.add(jwtToken);
  }

  public async addUser(user: User): Promise<number> {
    return this.users.add(user);
  }

  public async addHall(hall: Hall): Promise<number> {
    return this.halls.add(hall);
  }

  public async addCurrentShowtime(currentShowtime: CurrentShowtime): Promise<number> {
    return this.currentShowtimes.add(currentShowtime);
  }

  public async addMovie(movie: Movie): Promise<number> {
    return this.movies.add(movie);
  }

  public async addIncident(incident: Incident): Promise<number> {
    return this.incidents.add(incident);
  }
}
