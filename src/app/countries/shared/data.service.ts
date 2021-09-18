import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country } from './models/country';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private readonly http: HttpClient) { }

  getAllCountries(): Observable<Country[]> {
    const url = `${environment.baseUrl}/all`;
    return this.http.get<Country[]>(url);
  }

  getCountriesByName(name: string): Observable<Country[]> {
    const url = `${environment.baseUrl}/name/${name}`;
    return this.http.get<Country[]>(url);
  }
  
}
