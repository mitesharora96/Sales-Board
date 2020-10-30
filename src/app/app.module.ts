import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesTableComponent } from './sales-table/sales-table.component';
import { HeaderComponent } from './header/header.component';

import {TableModule} from 'primeng/table';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';
import {CardModule} from 'primeng/card';

import { AnalyticsComponent } from './analytics/analytics.component';
import { SalesReportComponent } from './analytics/sales-report/sales-report.component';
import { SalesmanComponent } from './analytics/salesman/salesman.component';

@NgModule({
  declarations: [
    AppComponent,
    SalesTableComponent,
    HeaderComponent,
    AnalyticsComponent,
    SalesReportComponent,
    SalesmanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    TabMenuModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
