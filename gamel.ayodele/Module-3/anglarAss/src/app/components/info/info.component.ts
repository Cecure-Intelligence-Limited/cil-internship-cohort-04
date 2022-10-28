import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Info } from '../../Info';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  @Input() info: Info;
  @Output() OnDeleteInfo: EventEmitter<Info> = new EventEmitter();
  showMyContainer: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  onDelete(info: Info) {
    // console.log(info);
    this.OnDeleteInfo.emit(info);
  }
}
