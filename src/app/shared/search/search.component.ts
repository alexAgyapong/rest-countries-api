import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() searchTerm = new EventEmitter<string>();
  searchForm!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({ searchTerm: [''] });

    this.searchForm.valueChanges
      .pipe(debounceTime(500))
      .subscribe((input: { searchTerm: string }) => this.searchTerm.emit(input.searchTerm));
  }
}
