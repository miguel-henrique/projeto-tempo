import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TempoService {

  constructor( private http: HttpClient ) { }

  getWeather(location){
    return this.http.get(
        'https://api.hgbrasil.com/weather?woeid=455827'
    );
    }
}
