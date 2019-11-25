import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAppointmentsPageComponent } from './all-appointments-page.component';

describe('AllAppointmentsPageComponent', () => {
  let component: AllAppointmentsPageComponent;
  let fixture: ComponentFixture<AllAppointmentsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AllAppointmentsPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAppointmentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
