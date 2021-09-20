import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BorderCountry, Country } from './models/country';

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

  getCountriesByRegion(region: string): Observable<Country[]> {
    const url = `${environment.baseUrl}/region/${region}`;
    return this.http.get<Country[]>(url);
  }

  getCountryDetails(code: string): Observable<Country> {
    const url = `${environment.baseUrl}/alpha/${code}`;
    return this.http.get<Country>(url);
  }

  getBorderCountries(codes: string[]): Observable<BorderCountry[]> {
    const params = new HttpParams().append('codes', codes.join(';'));
    const url = `${environment.baseUrl}/alpha`;
    return this.http.get<Country[]>(url, { params })
      .pipe(
        map(response => response.map((c: Country) => ({
          name: c.name,
          code: c.alpha3Code
        }) as BorderCountry)))
  }
}
