import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() themeSwitched = new EventEmitter();


  toggleTheme(): void {
    this.themeSwitched.emit();
  }
}
