import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Appointment, DoctorServiceProxy, PatientHistory } from 'src/app/core/api/service-proxies';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

interface VisitForm {
  description: string;
  diagnosis: string;
  labTestOrders: {
    name: string;
    doctorsNote: string;
  }[];
}
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
  patientHistory$: Observable<PatientHistory>;

  constructor(private _fb: FormBuilder, private _doctorService: DoctorServiceProxy) {}

  ngOnInit(): void {
    this.visitForm = this._fb.group({
      description: [null],
      labTestOrders: this._fb.array([]),
      diagnosis: [null],
    });
    this.patientHistory$ = this._doctorService.getPatientHistory(this.appointment.patient.id);
  }

  get labTestOrders(): FormArray {
    return this.visitForm.get('labTestOrders') as FormArray;
  }

  onSubmit(formValue: VisitForm): void {
    this._doctorService
      .finishAppointment({
        appointmentId: this.appointment.id,
        description: formValue.description,
        diagnosis: formValue.diagnosis,
        labTestOrders: formValue.labTestOrders,
      })
      .subscribe(() => this.finished.emit(null));
  }

  abort(): void {
    this.finished.emit(null);
  }

  addTest(): void {
    this.labTestOrders.push(
      this._fb.group({
        name: [null],
        doctorsNote: [''],
      })
    );
  }

  removeTest(index: number): void {
    this.labTestOrders.removeAt(index);
  }
}
