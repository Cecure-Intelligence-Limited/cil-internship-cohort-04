import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddInfo: boolean = false;
  private subject = new Subject<any>();

  constructor() {}
}
