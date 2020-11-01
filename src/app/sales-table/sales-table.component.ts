import { Component, OnInit } from '@angular/core';
import {SalesDetailService} from '../Shared_Service/sales-detail.service'

@Component({
  selector: 'app-sales-table',
  templateUrl: './sales-table.component.html',
  styleUrls: ['./sales-table.component.css']
})
export class SalesTableComponent implements OnInit {

  details:any[];
  constructor(private sDetails:SalesDetailService) { }

  ngOnInit(): void {
    this.sDetails.getSalesDetails().subscribe(
      (data)=>{
        this.details=data;
      }
    )

  }

}
