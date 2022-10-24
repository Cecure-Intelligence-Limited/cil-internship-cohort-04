import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactItemComponent } from './contact-item.component';

describe('ContactItemComponent', () => {
  let component: ContactItemComponent;
  let fixture: ComponentFixture<ContactItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
