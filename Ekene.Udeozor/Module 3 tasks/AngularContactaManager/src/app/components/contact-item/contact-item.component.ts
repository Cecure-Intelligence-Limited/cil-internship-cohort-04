import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Contact} from "../../contact";
import {faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {
  @Input() contact!: Contact;
  @Output() onDeleteContact: EventEmitter<Contact> = new EventEmitter();
  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(contact: any){
    console.log(contact);
    this.onDeleteContact.emit(contact);
  }

}
