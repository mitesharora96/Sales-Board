import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  items: MenuItem[];
  activeItem: MenuItem;

  constructor() { }

  ngOnInit(): void {

    this.items = [
      {label: 'TODAY'},
      {label: 'LAST WEEK'},
      {label: 'LAST MONTH'},
      {label: 'THIS QUARTER'},
      {label: 'THIS YEAR'}
  ];

  this.activeItem = this.items[0];

  }

  Onclick(){
    console.log(this.activeItem.label);
  }
}
