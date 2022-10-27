import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Contact } from 'src/app/Contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.component.html',
  styleUrls: ['./editcontact.component.css'],
})
export class EditcontactComponent implements OnInit {
  myParam!: string;
  contactName: string = '';
  contactEmail: string = '';
  contactPhone: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => (this.myParam = params['id'])
    );

    this.contactService
      .getContactWithId(Number(this.myParam))
      .subscribe((targetContact) => {
        if (targetContact === undefined) return;
        this.contactName = targetContact.name;
        this.contactEmail = targetContact.email;
        this.contactPhone = targetContact.phone;
      });
  }

  onSubmit() {
    const id = Number(this.myParam);

    const updContact: Contact = {
      id,
      name: this.contactName,
      email: this.contactEmail,
      phone: this.contactPhone,
    };

    this.contactService.updateContact(updContact);

    this.router.navigate(['']);

    this.contactName = '';
    this.contactEmail = '';
    this.contactPhone = '';
  }
}
