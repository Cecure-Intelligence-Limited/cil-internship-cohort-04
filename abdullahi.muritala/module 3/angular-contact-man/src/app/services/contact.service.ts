import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Contact } from '../Contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contacts: Contact[] = [
    {
      id: 1,
      name: 'Leanne Graham',
      email: 'Sincere@april.biz',
      phone: '1-770-736-8031 x56442',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      email: 'Shanna@melissa.tv',
      phone: '010-692-6593 x09125',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      email: 'Nathan@yesenia.net',
      phone: '1-463-123-4447',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      email: 'Julianne.OConner@kory.org',
      phone: '493-170-9623 x156',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      email: 'Lucio_Hettinger@annie.ca',
      phone: '(254)954-1289',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      email: 'Karley_Dach@jasper.info',
      phone: '1-477-935-8478 x6430',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      email: 'Telly.Hoeger@billy.biz',
      phone: '210.067.6132',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      email: 'Sherwood@rosamond.me',
      phone: '586.493.6943 x140',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      email: 'Chaim_McDermott@dana.io',
      phone: '(775)976-6794 x41206',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      email: 'Rey.Padberg@karina.biz',
      phone: '024-648-3804',
    },
  ];

  constructor() {}

  getContacts(): Observable<Contact[]> {
    return of(this.contacts);
  }

  deleteContact(targetContact: Contact): Observable<Contact[]> {
    this.contacts = this.contacts.filter(
      (contact) => contact.id !== targetContact.id
    );
    return this.getContacts();
  }

  addContact(newContact: Contact) {
    this.contacts.unshift(newContact);
  }

  getContactWithId(id: Number): Observable<Contact | undefined> {
    const targetContact = this.contacts.find((contact) => contact.id === id);
    return of(targetContact);
  }

  updateContact(updContact: Contact) {
    this.contacts = this.contacts.map((contact) => {
      if (contact.id === updContact.id) {
        return updContact;
      } else {
        return contact;
      }
    });
  }
}
