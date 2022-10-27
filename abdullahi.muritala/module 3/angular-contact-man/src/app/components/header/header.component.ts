import { Component, OnInit } from '@angular/core';
import { faBars, faHouseUser, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  faBars = faBars;
  faHouse = faHouseUser;
  faPlus = faPlus;
  faUserCirlce = faUserCircle;
  toggle: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleMenu() {
    this.toggle = !this.toggle;
  }
}
