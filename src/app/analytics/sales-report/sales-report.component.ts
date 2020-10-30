import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements OnInit {

  items: MenuItem[];
  activeItem: MenuItem;

  constructor() { }

  ngOnInit(): void {

    this.items = [
      {label: 'All Sales Rep',
      items: [
        {label: 'John'},
        {label: 'Robert'}
    ]
    }
  ];
  

  }

}
