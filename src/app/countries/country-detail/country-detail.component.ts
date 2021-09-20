import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/data.service';
import { Observable } from 'rxjs';
import { BorderCountry, Country } from '../shared/models/country';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {
  country$ = new Observable<Country>();
  borders$ = new Observable<BorderCountry[]>();

  constructor(private readonly location: Location,
    private readonly route: ActivatedRoute,
    private readonly dataService: DataService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getCountryDetails(params.code));
  }

  getCountryDetails(code: string): void {
    this.country$ = this.dataService.getCountryDetails(code)
      .pipe(tap(data => this.getBorderCountries(data.borders)));
  }

  back(): void {
    this.location.back();
  }

  private getBorderCountries(codes: string[]): void {
    if (codes.length) {
      this.borders$ = this.dataService.getBorderCountries(codes);
    }
  }
}
