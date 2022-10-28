import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestserviceService {

  constructor(private http: HttpClient) { }


  get(url: string ):Observable<any> {
    return this.http.get(url);
  }

  post(url: string, req: any): Observable<any> { 
    return this.http.post(url, req); 
  }
  
  put(url: string, req: any): Observable<any> { 
    return this.http.put(url, req); 
  } 

  delete(url: string): Observable<any> { 
    return this.http.delete(url); 
  } 
}
