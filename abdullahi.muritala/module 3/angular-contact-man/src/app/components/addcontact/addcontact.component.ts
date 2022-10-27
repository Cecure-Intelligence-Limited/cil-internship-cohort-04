import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/Contact';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css'],
})
export class AddcontactComponent implements OnInit {
  contactName: string = '';
  contactEmail: string = '';
  contactPhone: string = '';

  constructor(private router: Router, private contactService: ContactService) {}

  ngOnInit(): void {}

  onSubmit() {
    const id = Math.floor(Math.random() * 100000);

    const newContact: Contact = {
      id,
      name: this.contactName,
      email: this.contactEmail,
      phone: this.contactPhone,
    };

    this.contactService.addContact(newContact);

    this.router.navigate(['']);

    this.contactName = '';
    this.contactEmail = '';
    this.contactPhone = '';
  }
}
