import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'angular-tabs';
  selected = 2;

  onTabClick(numberOfTab: number) {
    this.selected = numberOfTab;
  }
}
