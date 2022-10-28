import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestserviceService } from 'src/app/restservice.service';
import { ContactService } from 'src/app/service/restapi.service';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {

  constructor(private service: ContactService) { }
  
  
active:boolean = false
  ngOnInit(): void {
    this.getAllContacts();
  }

  toggleDiv(id: string) {
    this.active = !this.active
  }

  displayedContacts: string[] = ['fullname', 'email', 'phone']

  userContact: any= [];

  getAllContacts() {
    this.service.getallContacts().subscribe(res => {
      this.userContact = res.reverse();
      // console.log(res);
    })
  }

  handleDelete(id: string) {
    this.service.delete(id).subscribe()
    console.log(`Contact od ID: ${id} deleted`)

    this.getAllContacts();
  }

}
