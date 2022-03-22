import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WeatherVM } from '../_models/weatherVM';


@Injectable({
    providedIn: 'root'
  })
  
export class WeatherService {
baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }



// https://localhost:5001/api/weather
  getWeather() {
    const httpOptions_ = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<WeatherVM[]>(this.baseUrl + 'weather', {} ,httpOptions_);
  }

}
