import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { BorderCountry } from './../../countries/shared/models/country';

@Component({
  selector: 'app-border-country-list',
  templateUrl: './border-country-list.component.html',
  styleUrls: ['./border-country-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BorderCountryListComponent {
 @Input() borders: BorderCountry[] = [];
}
