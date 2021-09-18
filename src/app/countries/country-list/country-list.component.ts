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
  searchTerm: string = '';

  constructor(private readonly dataService: DataService) { }

  ngOnInit(): void {
    this.getAllCountries();
  }

  onSearch(searchTerm: string): void {
    this.searchTerm = searchTerm;
    searchTerm ? this.getCountriesByName(searchTerm) : this.getAllCountries();
  }

  private getAllCountries() {
    this.countries$ = this.dataService.getAllCountries();
  }

  private getCountriesByName(searchTerm: string) {
    this.countries$ = this.dataService.getCountriesByName(searchTerm);
  }
}
