import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Output() selectedRegion = new EventEmitter<string>();

  regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  filterForm!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.filterForm = this.formBuilder.group({ region: [''] });

    this.filterForm.valueChanges
      .subscribe((input: { region: string }) => this.selectedRegion.emit(input.region));
  }

}
