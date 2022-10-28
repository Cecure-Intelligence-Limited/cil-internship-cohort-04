import { Injectable } from '@angular/core';
import { Contact } from '../Contact';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.apiUrl);
  }

  deleteContact(contact: Contact): Observable<Contact> {
    const url = `${this.apiUrl}/${contact.id}`;
    return this.http.delete<Contact>(url);
  }

  // onAddContact(contact: Contact): Observable<Contact> {
  //   return this.http.post<Contact>(this.apiUrl, {name, email, phone}, httpOptions);
  // }
}
