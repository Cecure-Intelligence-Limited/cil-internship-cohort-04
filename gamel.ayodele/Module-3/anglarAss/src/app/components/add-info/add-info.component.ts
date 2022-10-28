import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { Router } from '@angular/router';

import { Info } from '../../Info';
@Component({
  selector: 'app-add-info',
  templateUrl: './add-info.component.html',
  styleUrls: ['./add-info.component.css'],
})
@HostListener('click')
export class AddInfoComponent implements OnInit {
  @Output() onAddInfo: EventEmitter<Info> = new EventEmitter();

  name: string;
  email: string;
  phone: string;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  onSubmit() {
    if (!this.name) {
      alert('please add a Contact');
      return;
    }
    const newInfo: Info = {
      name: this.name,
      email: this.email,
      phone: this.phone,
    };
    this.router.navigate(['/']);
    this.onAddInfo.emit(newInfo);

    this.name = '';
    this.email = '';
    this.phone = '';
  }
}
