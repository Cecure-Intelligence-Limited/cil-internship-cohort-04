import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/Contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.getContacts().subscribe((res) => (this.contacts = res));
  }

  deleteContact(contact: Contact) {
    this.contactService
      .deleteContact(contact)
      .subscribe((res) => (this.contacts = res));
  }
}
