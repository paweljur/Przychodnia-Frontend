import { Component, OnInit, Inject } from '@angular/core';
import { Doctor, RegistrationServiceProxy, NewAppointmentDto, Patient, ApiError } from 'src/core/api/service-proxies';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBarRef, SimpleSnackBar, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-make-appointment-dialog',
  templateUrl: './make-appointment-dialog.component.html',
  styleUrls: ['./make-appointment-dialog.component.scss'],
})
export class MakeAppointmentDialogComponent implements OnInit {
  appointmentForm: FormGroup;
  doctors: Doctor[] = [];
  hours: number[] = [];
  minutes: number[] = [];

  constructor(
    private _dialogRef: MatDialogRef<Component>,
    private _fb: FormBuilder,
    private _registrationService: RegistrationServiceProxy,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) private _patient: Patient
  ) {}

  ngOnInit(): void {
    this.appointmentForm = this._fb.group({
      doctor: [null, Validators.required],
      date: [new Date(), Validators.required],
      hour: [null, Validators.required],
      minutes: [null, Validators.required],
    });
    this._registrationService.getAllDoctors().subscribe((doctors: Doctor[]) => (this.doctors = doctors));
    this.hours = this.generateNumbers(8, 18);
    this.minutes = this.generateNumbers(0, 50, 10);
  }

  private generateNumbers(min: number, max: number, step: number = 1): number[] {
    const result: number[] = [];
    for (let i: number = min; i <= max; i += step) {
      result.push(i);
    }

    return result;
  }

  abort(): void {
    this._dialogRef.close();
  }

  onSubmit(): void {
    const appointment: NewAppointmentDto = {
      patientId: this._patient.id,
      doctorId: this.appointmentForm.value.doctor.id,
      appointmentDate: new Date(
        this.appointmentForm.value.date.getFullYear(),
        this.appointmentForm.value.date.getMonth(),
        this.appointmentForm.value.date.getDate(),
        this.appointmentForm.value.hour,
        this.appointmentForm.value.minutes
      ),
    };

    this._registrationService.makeAppointment(appointment).subscribe(
      () => {
        this.showPositiveSnackBar();
        this._dialogRef.close();
      },
      (error: ApiError) => this.showNegativeSnackBar(error.message)
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
}
