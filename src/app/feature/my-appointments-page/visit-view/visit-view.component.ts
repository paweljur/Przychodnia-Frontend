import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Appointment, DoctorServiceProxy } from 'src/core/api/service-proxies';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-visit-view',
  templateUrl: './visit-view.component.html',
  styleUrls: ['./visit-view.component.scss'],
})
export class VisitViewComponent implements OnInit {
  @Input()
  appointment: Appointment;
  @Output()
  finished: EventEmitter<null> = new EventEmitter();

  visitForm: FormGroup;

  constructor(private _fb: FormBuilder, private _doctorService: DoctorServiceProxy) {}

  ngOnInit(): void {
    this.visitForm = this._fb.group({
      description: [null],
      labTests: this._fb.array([]),
      diagnosis: [null],
    });
  }

  get labTests(): FormArray {
    return this.visitForm.get('labTests') as FormArray;
  }

  onSubmit(formValue: any): void {
    this._doctorService
      .finishAppointment({
        appointmentId: this.appointment.id,
        description: formValue.description,
        diagnosis: formValue.diagnosis,
      })
      .subscribe(() => this.finished.emit(null));
  }

  abort(): void {
    this.finished.emit(null);
  }

  addTest(): void {
    this.labTests.push(
      this._fb.group({
        name: [null, Validators.required],
        note: ['', Validators.required],
      })
    );
  }
}
