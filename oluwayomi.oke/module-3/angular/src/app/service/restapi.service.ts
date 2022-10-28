import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestserviceService } from '../restservice.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
  
export class ContactService {


  constructor(private restService: RestserviceService){ }
  
  getallContacts() {
    const url = environment.baseUrl + "/contacts";
    return this.restService.get(url);
  }


  addContact(req: any) { 
    const url = environment.baseUrl + "/contacts";
    return this.restService.post(url, req);
  }  

  updateContact(req: any, id : string) {
    const url = environment.baseUrl + `/contacts/${id}`;
    return this.restService.put(url, req);
   }


   delete(id : string) {
    const url = environment.baseUrl + `/contacts/${id}`;
    return this.restService.delete(url);
   }
  
   getContactById(id:any){
     const url = environment.baseUrl + `/contacts/${id}`;   
    return this.restService.get(url);
     
   }
}