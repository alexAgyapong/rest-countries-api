import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CountryListComponent } from './countries/country-list/country-list.component';
import { CountryCardComponent } from './countries/country-card/country-card.component';
import { SharedModule } from './shared/shared.module';
import { CountryDetailComponent } from './countries/country-detail/country-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CountryListComponent,
    CountryCardComponent,
    CountryDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
