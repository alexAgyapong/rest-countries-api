import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { BorderCountryListComponent } from './border-country-list/border-country-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SearchComponent,
    FilterComponent,
    LoadingIndicatorComponent,
    BorderCountryListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    SearchComponent,
    FilterComponent,
    LoadingIndicatorComponent,
    BorderCountryListComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
