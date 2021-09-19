import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryDetailComponent } from './countries/country-detail/country-detail.component';
import { CountryListComponent } from './countries/country-list/country-list.component';

const routes: Routes = [
  { path: 'detail/:code', component: CountryDetailComponent },
  { path: '', component: CountryListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
