import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  baseUrl : string = environment.baseUrl;

  postCustomer(data:any){
    return this.http.post<any>(this.baseUrl+'/customer',data)
  }
  getAllCustomer(){
    return this.http.get<any>(this.baseUrl+'/customer')
  }
  deleteCustomer(id:any){
    return this.http.delete<any>(this.baseUrl+'/customer/'+id);
  }
  updateCustomer(data:any, id:number){
    return this.http.put<any>(this.baseUrl+'/customer/'+id, data)
  }
  getCustomer(){
    return this.http.get<any>(this.baseUrl);
  }
}
