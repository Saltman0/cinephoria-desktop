import {Injectable} from '@angular/core';
import Dexie, {PromiseExtended, Table} from 'dexie';
import {IncidentFactory} from "../../factories/incident.factory";
import {CurrentShowtimeFactory} from "../../factories/current-showtime.factory";
import {MovieFactory} from "../../factories/movie.factory";
import {ApiService} from "../api/api.service";
import {LocalStorageService} from "../local-storage/local-storage.service";
import {CurrentShowtimeModel} from "../../models/current-showtime.model";
import {MovieModel} from "../../models/movie.model";
import {HallFactory} from "../../factories/hall.factory";
import {HallModel} from "../../models/hall.model";
import {UserFactory} from "../../factories/user.factory";
import {IncidentModel} from "../../models/incident.model";

export interface CurrentShowtime {
  id: number;
  movieId: number;
  startTime: Date;
  endTime: Date;
  hallId: number;
}

export interface Hall {
  id: number;
  number: number;
  currentShowtimeId: number|null;
}

export interface Incident {
  id: number|null;
  type: string;
  description: string;
  date: Date;
  solved: boolean;
  hallId: number;
}

export interface Movie {
  id: number;
  title: string;
  imageURL: string;
  currentShowtimeId: number;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService extends Dexie {
  users!: Table<User, number>;
  halls!: Table<Hall, number>;
  currentShowtimes!: Table<CurrentShowtime, number>;
  movies!: Table<Movie, number>;
  incidents!: Table<Incident, number>;

  public constructor(private readonly apiService: ApiService,
                     private readonly localStorageService: LocalStorageService,
                     private readonly hallFactory: HallFactory,
                     private readonly currentShowtimeFactory: CurrentShowtimeFactory,
                     private readonly movieFactory: MovieFactory,
                     private readonly incidentFactory: IncidentFactory,
                     private readonly userFactory: UserFactory) {
    super('CinephoriaDatabase');
    this.version(1).stores({
      users: '++id',
      halls: '++id',
      incidents: '++id, hallId',
      currentShowtimes: '++id',
      movies: '++id'
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

  public async populateDatabase(): Promise<void> {

    const responseUser = await this.apiService.getUser(this.localStorageService.getJwtToken());

    this.addUser(this.userFactory.create(responseUser.id, responseUser.firstName, responseUser.lastName));

    const halls: HallModel[] = await this.apiService.getHalls(1);

    for (const hall of halls) {

      const currentShowtime: CurrentShowtimeModel|null = hall.currentShowtime;
      let currentShowtimeId: number|null = null;

      if (currentShowtime !== null) {

        currentShowtimeId = currentShowtime.id;

        const movie: MovieModel = currentShowtime.movie;

        this.addCurrentShowtime(
            this.currentShowtimeFactory.create(
                currentShowtime.id, movie.id, new Date(currentShowtime.startTime),
                new Date(currentShowtime.endTime), hall.id
            )
        );

        this.addMovie(this.movieFactory.create(movie.id, movie.title, movie.imageURL, currentShowtime.movie.id));

      }

      const incidents: IncidentModel[] = hall.incidents;
      incidents.forEach((incident: IncidentModel): void => {
        this.addIncident(
            this.incidentFactory.create(
                incident.id,
                incident.type,
                incident.description,
                incident.date,
                incident.solved,
                hall.id
            )
        );
      });

      this.addHall(this.hallFactory.create(hall.id, hall.number, currentShowtimeId));

    }

  }

  public addUser(user: User): void {
    if (user.id !== null) {
      if (this.users.get(user.id) !== null) {
        this.users.delete(user.id);
      }

      this.users.add(user, user.id);
    }
  }

  public getUser(id: number): PromiseExtended<User|undefined> {
    return this.users.get(id);
  }

  public addHall(hall: Hall): void {
    if (hall.id !== null) {
      if (this.halls.get(hall.id) !== null) {
        this.halls.delete(hall.id);
      }

      this.halls.add(hall, hall.id);
    }
  }

  public getHalls(): PromiseExtended<Hall[]> {
    return this.halls.toArray();
  }

  public getHall(id: number): PromiseExtended<Hall|undefined> {
    return this.halls.get(id);
  }

  public getCurrentShowtime(id: number): PromiseExtended<CurrentShowtime|undefined> {
    return this.currentShowtimes.get(id);
  }

  public addCurrentShowtime(currentShowtime: CurrentShowtime): void {
    if (currentShowtime.id !== null) {
      if (this.currentShowtimes.get(currentShowtime.id) !== null) {
        this.currentShowtimes.delete(currentShowtime.id);
      }

      this.currentShowtimes.add(currentShowtime, currentShowtime.id);
    }
  }

  public getMovie(id: number): PromiseExtended<Movie|undefined> {
    return this.movies.get(id);
  }

  public addMovie(movie: Movie): void {
    if (movie.id !== null) {
      if (this.movies.get(movie.id) !== null) {
        this.movies.delete(movie.id);
      }

      this.movies.add(movie, movie.id);
    }
  }

  public getIncidents(): PromiseExtended<Incident[]> {
    return this.incidents.toArray();
  }

  public getIncidentsByHallId(hallId: number): PromiseExtended<Incident[]> {
    return this.incidents.where("hallId").equals(hallId).toArray();
  }

  public addIncident(incident: Incident): void {
    if (incident.id !== null) {
      if (this.incidents.get(incident.id) !== null) {
        this.incidents.delete(incident.id);
      }

      this.incidents.add(incident, incident.id);
    }
  }
}
