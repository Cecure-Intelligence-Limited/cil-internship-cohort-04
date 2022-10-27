import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/Contact';
import { Router } from '@angular/router';
import {
  faArrowsAlt,
  faPenSquare,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  @Input()
  contact!: Contact;

  @Output() onDeleteContact: EventEmitter<Contact> = new EventEmitter();
  toggle: boolean = false;

  faArrowsAlt = faArrowsAlt;
  faPenSquare = faPenSquare;
  faTrash = faTrash;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  toggleDetails() {
    this.toggle = !this.toggle;
  }

  onDelete(contact: Contact | undefined) {
    this.onDeleteContact.emit(contact);
  }

  onEdit(contact: Contact | undefined) {
    this.router.navigate(['edit', contact?.id]);
  }
}
