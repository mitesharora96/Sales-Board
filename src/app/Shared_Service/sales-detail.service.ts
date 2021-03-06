import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalesDetailService {

  constructor(private http:HttpClient) { }

  getSalesDetails():Observable<any>{
    return this.http.get("../assets/salesRecord.json")
   } 

  getSalesManStatus():Observable<any>{
    return this.http.get("../assets/salesman.json")
  }

  getContactDetails():Observable<any>{
    return this.http.get("../assets/contacts.json")
  }
}
