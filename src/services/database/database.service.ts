import { Injectable } from '@angular/core';
import Dexie, { PromiseExtended, Table } from 'dexie';
import { User } from "../../models/user.model";
import { Hall } from "../../models/hall.model";
import { CurrentShowtime } from "../../models/current-showtime.model";
import { Movie } from "../../models/movie.model";
import { Incident } from "../../models/incident.model";
import { IncidentFactory } from "../../factories/incident.factory";
import { CurrentShowtimeFactory } from "../../factories/current-showtime.factory";
import { MovieFactory } from "../../factories/movie.factory";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService extends Dexie {
  users!: Table<User, number>;
  halls!: Table<Hall, number>;
  currentShowtimes!: Table<CurrentShowtime, number>;
  movies!: Table<Movie, number>;
  incidents!: Table<Incident, number>;

  public constructor(private readonly currentShowtimeFactory: CurrentShowtimeFactory,
                     private readonly movieFactory: MovieFactory,
                     private readonly incidentFactory: IncidentFactory) {
    super('CinephoriaDatabase');
    this.version(1).stores({
      users: '++id, firstName, lastName',
      halls: '++id, number, currentShowtime, movie',
      currentShowtimes: '++id, movie, startTime, endTime',
      movies: '++id, title, imageUrl',
      incidents: '++id, type, description'
    });
  }

  public openDatabase(): void {
    this.open();
  }

  public closeDatabase(): void {
    this.close();
  }

  public deleteDatabase(): void {
    this.delete();
  }

  public populateDatabase(halls: Hall[]): void {

    halls.forEach((hall: Hall) => {

      this.addHall(hall);

      const currentShowtime: CurrentShowtime|null = hall.currentShowtime;
      if (currentShowtime !== null) {
        this.addCurrentShowtime(
            this.currentShowtimeFactory.create(
                currentShowtime.id, currentShowtime.movie, currentShowtime.startTime, currentShowtime.endTime, hall
            )
        );

        const movie: Movie|null = currentShowtime.movie;
        if (movie !== null) {
          this.addMovie(this.movieFactory.create(movie.id, movie.title, movie.imageUrl, movie.currentShowtime));
        }
      }

      hall.incidents.forEach((incident: Incident) => {
        this.addIncident(this.incidentFactory.create(incident.id, incident.type, incident.description, hall));
      });

    });

  }

  public addUser(user: User): void {
    if (this.users.get(user.id) !== null) {
      this.users.delete(user.id);
    }

    this.users.add(user, user.id);
  }

  public getUser(id: number): PromiseExtended<User|undefined> {
    return this.users.get(id);
  }

  public addHall(hall: Hall): void {
    if (this.halls.get(hall.id) !== null) {
      this.halls.delete(hall.id);
    }

    this.halls.add(hall, hall.id);
  }

  public addCurrentShowtime(currentShowtime: CurrentShowtime): void {
    if (this.currentShowtimes.get(currentShowtime.id) !== null) {
      this.currentShowtimes.delete(currentShowtime.id);
    }

    this.currentShowtimes.add(currentShowtime, currentShowtime.id);
  }

  public addMovie(movie: Movie): void {
    if (this.movies.get(movie.id) !== null) {
      this.movies.delete(movie.id);
    }

    this.movies.add(movie, movie.id);
  }

  public addIncident(incident: Incident): void {
    if (this.incidents.get(incident.id) !== null) {
      this.incidents.delete(incident.id);
    }

    this.incidents.add(incident, incident.id);
  }
}
