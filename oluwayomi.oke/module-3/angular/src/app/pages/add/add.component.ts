import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/service/restapi.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private service:ContactService, private router: Router) { }

  ngOnInit(): void {
    // this.addcontact()
  }

  handleSubmit(contact: { fullname: string, email: string, phone: string }) {
    // console.log(contact)

    this.service.addContact(contact).subscribe(res => {
      // console.log(res);
    })

    this.router.navigate(['/']);
  }

}
