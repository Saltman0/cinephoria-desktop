import {Injectable} from '@angular/core';
import Dexie, {PromiseExtended, Table} from 'dexie';
import {User} from "../../models/user.model";
import {Hall} from "../../models/hall.model";
import {CurrentShowtime} from "../../models/current-showtime.model";
import {Movie} from "../../models/movie.model";
import {Incident} from "../../models/incident.model";
import {IncidentFactory} from "../../factories/incident.factory";
import {CurrentShowtimeFactory} from "../../factories/current-showtime.factory";
import {MovieFactory} from "../../factories/movie.factory";

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
      users: '++id',
      halls: '++id, currentShowtime',
      currentShowtimes: '++id, hall',
      movies: '++id, currentShowtime',
      incidents: '++id, hall'
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

  public async populateDatabase(halls: Hall[]): Promise<void> {

    for (const hall of halls) {

      const currentShowtime: CurrentShowtime|null = hall.currentShowtime ?? null;

      if (currentShowtime !== null) {

        const movie: Movie|null = currentShowtime.movie;

        this.addCurrentShowtime(
            this.currentShowtimeFactory.create(
                currentShowtime.id, currentShowtime.movie, new Date(currentShowtime.startTime),
                new Date(currentShowtime.endTime), hall
            )
        );

        if (movie !== null) {
          this.addMovie(this.movieFactory.create(movie.id, movie.title, movie.imageURL, currentShowtime));
        }

      }

      const incidents: Incident[] = hall.incidents;
      incidents.forEach((incident: Incident): void => {
        this.addIncident(
            this.incidentFactory.create(
                incident.id,
                incident.type,
                incident.description,
                new Date(incident.date),
                incident.solved,
                hall
            )
        );
      });

      this.addHall(hall);

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
    return this.incidents.where("hall").equals(hallId).toArray();
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
