import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { RegistrationServiceProxy, NewPatientDto, ApiError, Patient } from 'src/core/api/service-proxies';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-register-patient-dialog',
  templateUrl: './register-patient-dialog.component.html',
  styleUrls: ['./register-patient-dialog.component.scss'],
})
export class RegisterPatientDialogComponent implements OnInit {
  newPatientForm: FormGroup;

  constructor(
    private _dialogRef: MatDialogRef<Component>,
    private _registrationService: RegistrationServiceProxy,
    private _snackBar: MatSnackBar,
    private _fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.newPatientForm = this._fb.group({
      name: [null],
      surname: [null],
      identityNumber: [null, [Validators.required, Validators.min(10000000000), Validators.max(99999999999)]],
    });
  }

  onSubmit(): void {
    const newPatient: NewPatientDto = {
      name: this.newPatientForm.value.name,
      surname: this.newPatientForm.value.surname,
      identityNumber: this.newPatientForm.value.identityNumber.toString(),
    };
    this._registrationService.addNewPatient(newPatient).subscribe(
      (patient: Patient) => {
        this.showPositiveSnackBar();
        this._dialogRef.close(patient);
      },
      (error: ApiError) => {
        this.showNegativeSnackBar(error.message);
        this.newPatientForm.reset();
      }
    );
  }

  private showPositiveSnackBar(): void {
    const snackBarRef: MatSnackBarRef<SimpleSnackBar> = this._snackBar.open('Success!', 'Ok!');
    snackBarRef.onAction().subscribe(() => snackBarRef.dismiss());
  }

  private showNegativeSnackBar(error: string): void {
    const snackBarRef: MatSnackBarRef<SimpleSnackBar> = this._snackBar.open(error, 'Ok');
    snackBarRef.onAction().subscribe(() => snackBarRef.dismiss());
  }

  abort(): void {
    this._dialogRef.close();
  }

  hasError(form: string, error?: string): boolean {
    const control: AbstractControl = this.newPatientForm.get(form);
    return error ? control.hasError(error) : !control.valid;
  }
}
