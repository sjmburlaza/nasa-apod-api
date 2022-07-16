import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, take } from "rxjs/operators";
import { Apod } from './model/apod';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  private apiKey = environment.NASA_KEY;

  constructor(private http: HttpClient) { }

  public getNasaImage(date: Date): Observable<Apod> {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    this.apiKey = environment.NASA_KEY;
    const apodUrl = `https://api.nasa.gov/planetary/apod?date=${year}-${month}-${day}&api_key=${this.apiKey}&hd=true`;
    
    return this.http.get<Apod>(apodUrl).pipe(
      take(1),
      catchError((err: any) => {
        return throwError(() => err);
      })
    );
  }
}
