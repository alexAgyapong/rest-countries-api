import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
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
  isLoading = false;

  constructor(private readonly dataService: DataService) { }

  ngOnInit(): void {
    this.getAllCountries();
  }

  onSearch(searchTerm: string): void {
    this.searchTerm = searchTerm;
    searchTerm ? this.getCountriesByName(searchTerm) : this.getAllCountries();
  }

  onFilter(region: string): void {
    region ? this.getCountriesByRegion(region) : this.getAllCountries();
  }

  private getCountriesByRegion(region: string) {
    this.isLoading = true;
    this.countries$ = this.dataService.getCountriesByRegion(region)
      .pipe(tap(() => this.isLoading = false));
  }

  private getAllCountries() {
    this.isLoading = true;
    this.countries$ = this.dataService.getAllCountries()
      .pipe(tap(() => this.isLoading = false));
  }

  private getCountriesByName(searchTerm: string) {
    this.isLoading = true;
    this.countries$ = this.dataService.getCountriesByName(searchTerm)
      .pipe(tap(() => this.isLoading = false));
  }
}
