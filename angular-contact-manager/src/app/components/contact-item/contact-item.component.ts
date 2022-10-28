import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/Contact';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css'],
})
export class ContactItemComponent implements OnInit {
  @Input()
  contact: Contact | any;
  @Input()
  detailsOpen: boolean = false;

  @Output() handleDeleteContact: EventEmitter<Contact> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  handleDelete(contact: Contact) {
    this.handleDeleteContact.emit(contact);
  }

  handleDetails(detailsOpen: boolean) {
    this.detailsOpen = !detailsOpen;
  }
}
