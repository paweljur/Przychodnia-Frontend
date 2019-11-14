import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeAppointmentPageComponent } from './make-appointment-page.component';

describe('MakeAppointmentPageComponent', () => {
  let component: MakeAppointmentPageComponent;
  let fixture: ComponentFixture<MakeAppointmentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MakeAppointmentPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeAppointmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
