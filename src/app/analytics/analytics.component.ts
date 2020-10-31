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
  Time='TODAY';
  constructor() { }

  ngOnInit(): void {

    this.items = [
      {label: 'TODAY',command:(click)=>{this.Onclick('TODAY')}},
      {label: 'LAST WEEK',command:(click)=>{this.Onclick('LAST WEEK')}},
      {label: 'LAST MONTH',command:(click)=>{this.Onclick('LAST MONTH')}},
      {label: 'THIS QUARTER',command:(click)=>{this.Onclick('THIS QUARTER')}},
      {label: 'THIS YEAR',command:(click)=>{this.Onclick('THIS YEAR')}}
  ];

  this.activeItem = this.items[0];
  
  }

  Onclick(value){
    
    this.Time= value;
  }
}
