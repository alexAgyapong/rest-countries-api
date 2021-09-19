import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/data.service';
import { Observable } from 'rxjs';
import { Country } from '../shared/models/country';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {
  country$ = new Observable<Country>();

  constructor(private readonly location: Location,
    private readonly route: ActivatedRoute,
    private readonly dataService: DataService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getCountryDetails(params.code));
  }

  getCountryDetails(code: string): void {
    this.country$ = this.dataService.getCountryDetails(code)
  }

  back(): void {
    this.location.back();
  }
}
