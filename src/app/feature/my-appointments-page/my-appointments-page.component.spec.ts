import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAppointmentsComponent } from './my-appointments-page.component';

describe('MyAppointmentsComponent', () => {
  let component: MyAppointmentsComponent;
  let fixture: ComponentFixture<MyAppointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyAppointmentsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
