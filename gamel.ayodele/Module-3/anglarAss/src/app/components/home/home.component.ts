import { Component, OnInit } from '@angular/core';
import { Observable, takeLast } from 'rxjs';
import { InfoService } from 'src/app/services/info.service';
import { Info } from '../../Info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  infos: Info[] = [];

  constructor(private infoService: InfoService) {}

  ngOnInit(): void {
    this.infoService.getInfo().subscribe((infos) => (this.infos = infos));
  }
  deleteInfo(info: Info) {
    this.infoService
      .deleteInfo(info)
      .subscribe(
        () => (this.infos = this.infos.filter((t) => t.id !== info.id))
      );
  }
  addInfo(info: Info) {
    this.infoService.addInfo(info).subscribe((info) => this.infos.push(info));
  }
}
