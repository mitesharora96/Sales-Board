import { SimpleChanges } from '@angular/core';
import { Component, Input, OnInit,OnChanges } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {SalesDetailService} from '../../sales-detail.service'

@Component({
  selector: 'app-salesman',
  templateUrl: './salesman.component.html',
  styleUrls: ['./salesman.component.css']
})
export class SalesmanComponent implements OnInit,OnChanges {

  @Input() timeframe;
  items: MenuItem[];
  activeItem: MenuItem;
  SDetails:any[];
  MRR=[0,0,0];
  Logos=[0,0,0];
  demo=[0,0,0];

  constructor(private db:SalesDetailService) { }

  ngOnChanges(changes: SimpleChanges){
    let newVal = changes['timeframe'].currentValue;
    this.onTimeChange(newVal);
  }
  ngOnInit(): void {
         this.items = [
           {label: 'TOP'},
           {label: 'BOTTOM'}
          ];
  
          this.activeItem = this.items[0];

          this.db.getSalesManStatus().subscribe(
            (data)=>{this.SDetails=data
            this.onTimeChange(this.timeframe);}
          )          
  }

  onTimeChange(value){
    this.timeframe=value;
    this.MRR=[0,0,0];
    this.Logos=[0,0,0];
    this.demo=[0,0,0];
    if(this.timeframe=='TODAY'){
      let i=0;
      
      for(i=0;i<3;i++)
        {
       
           this.MRR[i]=this.SDetails[i].New_MRR;
           this.Logos[i]=this.SDetails[i].New_logos;
           this.demo[i]=this.SDetails[i].Demo_calls
      
        }
    }

    else if(this.timeframe=='LAST WEEK'){
      let today= new Date(this.SDetails[0].Date)
      let lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
      let i=0;
      while(this.SDetails[i]!=null){

        let d=new Date(this.SDetails[i].Date)
        if(d>lastWeek){

            if(this.SDetails[i].Sname=='John Doe')
            {
              this.MRR[0]+=parseInt(this.SDetails[i].New_MRR);
              this.Logos[0]+=parseInt(this.SDetails[i].New_logos);
              this.demo[0]+=parseInt(this.SDetails[i].Demo_calls);
            }

            else if(this.SDetails[i].Sname=='Jane Smith')
            {
              this.MRR[1]+=parseInt(this.SDetails[i].New_MRR);
              this.Logos[1]+=parseInt(this.SDetails[i].New_logos);
              this.demo[1]+=parseInt(this.SDetails[i].Demo_calls);
            }

            else if(this.SDetails[i].Sname=='Ethan Hunt')
            {
              this.MRR[2]+=parseInt(this.SDetails[i].New_MRR);
              this.Logos[2]+=parseInt(this.SDetails[i].New_logos);
              this.demo[2]+=parseInt(this.SDetails[i].Demo_calls);
            }

        }
        i++;

      }

    }

    else if(this.timeframe=='LAST MONTH'){

      let today= new Date(this.SDetails[0].Date)
      let lastMonth = new Date(today.getFullYear(), today.getMonth()-1, today.getDate());
      let i=0;
      while(this.SDetails[i]!=null){

        let d=new Date(this.SDetails[i].Date)
        if(d>lastMonth){

            if(this.SDetails[i].Sname=='John Doe')
            {
              this.MRR[0]+=parseInt(this.SDetails[i].New_MRR);
              this.Logos[0]+=parseInt(this.SDetails[i].New_logos);
              this.demo[0]+=parseInt(this.SDetails[i].Demo_calls);
            }

            else if(this.SDetails[i].Sname=='Jane Smith')
            {
              this.MRR[1]+=parseInt(this.SDetails[i].New_MRR);
              this.Logos[1]+=parseInt(this.SDetails[i].New_logos);
              this.demo[1]+=parseInt(this.SDetails[i].Demo_calls);
            }

            else if(this.SDetails[i].Sname=='Ethan Hunt')
            {
              this.MRR[2]+=parseInt(this.SDetails[i].New_MRR);
              this.Logos[2]+=parseInt(this.SDetails[i].New_logos);
              this.demo[2]+=parseInt(this.SDetails[i].Demo_calls);
            }

        }
        i++;

      }

      
    }

    else if(this.timeframe=='THIS QUARTER'){

      let today= new Date(this.SDetails[0].Date)
      let lastQuarter = new Date(today.getFullYear(), today.getMonth()-3, today.getDate());
      let i=0;
      while(this.SDetails[i]!=null){

        let d=new Date(this.SDetails[i].Date)
        if(d>lastQuarter){

            if(this.SDetails[i].Sname=='John Doe')
            {
              this.MRR[0]+=parseInt(this.SDetails[i].New_MRR);
              this.Logos[0]+=parseInt(this.SDetails[i].New_logos);
              this.demo[0]+=parseInt(this.SDetails[i].Demo_calls);
            }

            else if(this.SDetails[i].Sname=='Jane Smith')
            {
              this.MRR[1]+=parseInt(this.SDetails[i].New_MRR);
              this.Logos[1]+=parseInt(this.SDetails[i].New_logos);
              this.demo[1]+=parseInt(this.SDetails[i].Demo_calls);
            }

            else if(this.SDetails[i].Sname=='Ethan Hunt')
            {
              this.MRR[2]+=parseInt(this.SDetails[i].New_MRR);
              this.Logos[2]+=parseInt(this.SDetails[i].New_logos);
              this.demo[2]+=parseInt(this.SDetails[i].Demo_calls);
            }

        }
        i++;

      }

    }

    else if(this.timeframe=='THIS YEAR'){
      
      let today= new Date(this.SDetails[0].Date)
      let lastyear = new Date(today.getFullYear()-1, today.getMonth(), today.getDate());
      let i=0;
      while(this.SDetails[i]!=null){

        let d=new Date(this.SDetails[i].Date)
        if(d>lastyear){

            if(this.SDetails[i].Sname=='John Doe')
            {
              this.MRR[0]+=parseInt(this.SDetails[i].New_MRR);
              this.Logos[0]+=parseInt(this.SDetails[i].New_logos);
              this.demo[0]+=parseInt(this.SDetails[i].Demo_calls);
            }

            else if(this.SDetails[i].Sname=='Jane Smith')
            {
              this.MRR[1]+=parseInt(this.SDetails[i].New_MRR);
              this.Logos[1]+=parseInt(this.SDetails[i].New_logos);
              this.demo[1]+=parseInt(this.SDetails[i].Demo_calls);
            }

            else if(this.SDetails[i].Sname=='Ethan Hunt')
            {
              this.MRR[2]+=parseInt(this.SDetails[i].New_MRR);
              this.Logos[2]+=parseInt(this.SDetails[i].New_logos);
              this.demo[2]+=parseInt(this.SDetails[i].Demo_calls);
            }

        }
        i++;

      }
    }

  }

  
  

}
