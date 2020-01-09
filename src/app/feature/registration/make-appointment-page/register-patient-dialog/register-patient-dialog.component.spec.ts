import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPatientDialogComponent } from './register-patient-dialog.component';

describe('RegisterPatientDialogComponent', () => {
  let component: RegisterPatientDialogComponent;
  let fixture: ComponentFixture<RegisterPatientDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterPatientDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPatientDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
