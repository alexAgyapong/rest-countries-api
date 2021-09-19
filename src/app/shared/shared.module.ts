import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';



@NgModule({
  declarations: [
    SearchComponent,
    FilterComponent,
    LoadingIndicatorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [SearchComponent, FilterComponent, LoadingIndicatorComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
