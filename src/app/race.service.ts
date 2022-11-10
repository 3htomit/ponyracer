import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RaceModel } from './models/race.model';

@Injectable({
  providedIn: 'root'
})
export class RaceService {
  constructor(private http: HttpClient) {}

  list(): Observable<Array<RaceModel>> {
    const params = { status: 'PENDING' };
    const baseUrl = 'https://ponyracer.ninja-squad.com';

    return this.http.get<Array<RaceModel>>(`${baseUrl}/api/races`, { params });
  }
}
