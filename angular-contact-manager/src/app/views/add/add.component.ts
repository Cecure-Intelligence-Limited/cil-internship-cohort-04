import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/Contact';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  contacts: Contact[] = [];
  @Output() onAddContact: EventEmitter<Contact> = new EventEmitter();
  name!: string;
  email!: string;
  phone!: string;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.name) {
      alert('Please add a contact');
    }

    const newContact = {
      name: this.name,
      email: this.email,
      phone: this.phone,
    };

    console.log(newContact);
    this.onAddContact.emit(newContact);

    // this.contactService
    //   .onAddContact(newContact)
    //   .subscribe((newContact) => this.contacts.push(newContact));

    this.name = '';
    this.email = '';
    this.phone = '';
  }
}
