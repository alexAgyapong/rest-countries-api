import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';



@NgModule({
  declarations: [
    SearchComponent,
    FilterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SearchComponent, FilterComponent]
})
export class SharedModule { }
