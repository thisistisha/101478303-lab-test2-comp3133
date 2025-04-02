// src/app/services/spacex.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Launch } from '../models/launch';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {

  private baseUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}

  getAllLaunches(): Observable<Launch[]> {
    return this.http.get<Launch[]>(this.baseUrl);
  }

  getLaunchById(id: number): Observable<Launch> {
    return this.http.get<Launch>(`https://api.spacexdata.com/v3/launches/${id}`);
  }
  

  getLaunchesByYear(year: string): Observable<Launch[]> {
    return this.http.get<Launch[]>(`https://api.spacexdata.com/v3/launches?launch_year=${year}`);
  }  
}
