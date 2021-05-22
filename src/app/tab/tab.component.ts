import { Component, Input, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.less'],
})
export class TabComponent implements OnInit {
  @Input() title = '';
  @Input() @HostBinding('class.selected') selected = false;
  @HostBinding('class') class = 'tab';

  constructor() {}

  ngOnInit(): void {
    console.info(this.selected);
  }
}
