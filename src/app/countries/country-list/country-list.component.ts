import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../shared/data.service';
import { Country } from '../shared/models/country';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
  countries$ = new Observable<Country[]>();

  constructor(private readonly dataService: DataService) { }

  ngOnInit(): void {
    this.countries$ = this.dataService.getAllCountries();
  }

}
