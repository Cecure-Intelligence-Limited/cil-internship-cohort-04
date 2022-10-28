import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInfoComponent } from './add-info.component';

describe('AddInfoComponent', () => {
  let component: AddInfoComponent;
  let fixture: ComponentFixture<AddInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
