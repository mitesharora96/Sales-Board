import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-salesman',
  templateUrl: './salesman.component.html',
  styleUrls: ['./salesman.component.css']
})
export class SalesmanComponent implements OnInit {

  items: MenuItem[];
  activeItem: MenuItem;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'TOP'},
      {label: 'BOTTOM'}
  ];
  
  this.activeItem = this.items[0];
  }

}
