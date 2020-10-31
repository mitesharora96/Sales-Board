import { Component, Input, OnInit,OnChanges, SimpleChanges } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {SalesDetailService} from '../../sales-detail.service'

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements OnInit,OnChanges {

  @Input() timeframe;
  items: MenuItem[];
  activeItem: MenuItem;
  CDetails:any[];
  contacts=[0,0,0,0,0,0]

  constructor(private db:SalesDetailService) { }

  ngOnChanges(changes: SimpleChanges) {

    let newVal = changes['timeframe'].currentValue;
    this.onTimeChange(newVal);

}
  ngOnInit(): void {

    this.items = [
      {label: 'All Sales Rep',
      items: [
        {label: 'John'},
        {label: 'Robert'}
    ]
    }
  ];
  
    this.db.getContactDetails().subscribe(
      (data)=>{
        this.CDetails=data;
        this.onTimeChange(this.timeframe);
      }
    )
    

  }

  onTimeChange(value){
    this.timeframe=value;
    this.contacts=[0,0,0,0,0,0];
    if(this.timeframe=='TODAY'){
      
      this.contacts[0]=this.CDetails[0].Lead_in;
      this.contacts[1]=this.CDetails[0].Contact_made;
      this.contacts[2]=this.CDetails[0].Needs_defined;
      this.contacts[3]=this.CDetails[0].Proposal_made;
      this.contacts[4]=this.CDetails[0].Negotiations;
      this.contacts[5]=this.CDetails[0].Won;
    }

    else if(this.timeframe=='LAST WEEK'){

      let today= new Date(this.CDetails[0].Date)
      let lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
      let i=0;
      while(this.CDetails[i]!=null){

        let d=new Date(this.CDetails[i].Date)
        if(d>lastWeek){

            
              this.contacts[0]+=parseInt(this.CDetails[i].Lead_in);
              this.contacts[1]+=parseInt(this.CDetails[i].Contact_made);
              this.contacts[2]+=parseInt(this.CDetails[i].Needs_defined);
              this.contacts[3]+=parseInt(this.CDetails[i].Proposal_made);
              this.contacts[4]+=parseInt(this.CDetails[i].Negotiations);
              this.contacts[5]+=parseInt(this.CDetails[i].Won);
           

        }
        i++;

      }
    }

    else if(this.timeframe=='LAST MONTH'){

      let today= new Date(this.CDetails[0].Date)
      let lastMonth = new Date(today.getFullYear(), today.getMonth()-1, today.getDate());
      let i=0;
      while(this.CDetails[i]!=null){

        let d=new Date(this.CDetails[i].Date)
        if(d>lastMonth){

            
              this.contacts[0]+=parseInt(this.CDetails[i].Lead_in);
              this.contacts[1]+=parseInt(this.CDetails[i].Contact_made);
              this.contacts[2]+=parseInt(this.CDetails[i].Needs_defined);
              this.contacts[3]+=parseInt(this.CDetails[i].Proposal_made);
              this.contacts[4]+=parseInt(this.CDetails[i].Negotiations);
              this.contacts[5]+=parseInt(this.CDetails[i].Won);
           

        }
        i++;

      }
    }

    else if(this.timeframe=='THIS QUARTER'){

      let today= new Date(this.CDetails[0].Date)
      let lastQuarter = new Date(today.getFullYear(), today.getMonth()-3, today.getDate());
      let i=0;
      while(this.CDetails[i]!=null){

        let d=new Date(this.CDetails[i].Date)
        if(d>lastQuarter){

            
              this.contacts[0]+=parseInt(this.CDetails[i].Lead_in);
              this.contacts[1]+=parseInt(this.CDetails[i].Contact_made);
              this.contacts[2]+=parseInt(this.CDetails[i].Needs_defined);
              this.contacts[3]+=parseInt(this.CDetails[i].Proposal_made);
              this.contacts[4]+=parseInt(this.CDetails[i].Negotiations);
              this.contacts[5]+=parseInt(this.CDetails[i].Won);
           

        }
        i++;

      }
    }

    else if(this.timeframe=='THIS YEAR'){

      let today= new Date(this.CDetails[0].Date)
      let lastYear = new Date(today.getFullYear()-1, today.getMonth(), today.getDate());
      let i=0;
      while(this.CDetails[i]!=null){

        let d=new Date(this.CDetails[i].Date)
        if(d>lastYear){

            
              this.contacts[0]+=parseInt(this.CDetails[i].Lead_in);
              this.contacts[1]+=parseInt(this.CDetails[i].Contact_made);
              this.contacts[2]+=parseInt(this.CDetails[i].Needs_defined);
              this.contacts[3]+=parseInt(this.CDetails[i].Proposal_made);
              this.contacts[4]+=parseInt(this.CDetails[i].Negotiations);
              this.contacts[5]+=parseInt(this.CDetails[i].Won);
           

        }
        i++;

      }
    }

  }

}
