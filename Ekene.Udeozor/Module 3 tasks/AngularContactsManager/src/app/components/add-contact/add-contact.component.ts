import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Contact} from "../../contact";

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  @Output() onAddContact: EventEmitter<Contact> = new EventEmitter();
  name!: string;
  email!: string;
  phone!: string;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.name && this.email && this.phone){
      const newContact = {
        name: this.name,
        email: this.email,
        phone: this.phone
      }
      this.onAddContact.emit(newContact);
      this.name="";
      this.email="";
      this.phone = "";
    }else{alert("Please fill all required fields!")}

  }
}
