import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Info } from '../Info';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  onSubmit(info: Info) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:3000/infos';

  constructor(private http: HttpClient) {}

  getInfo(): Observable<Info[]> {
    return this.http.get<Info[]>(this.apiUrl);
  }

  deleteInfo(info: Info): Observable<Info> {
    const url = `${this.apiUrl}/${info.id}`;
    return this.http.delete<Info>(url);
  }

  addInfo(info: Info): Observable<Info> {
    return this.http.post<Info>(this.apiUrl, info, httpOptions);
  }
}
