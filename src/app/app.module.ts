import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesTableComponent } from './sales-table/sales-table.component';
import { HeaderComponent } from './header/header.component';

import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    SalesTableComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
