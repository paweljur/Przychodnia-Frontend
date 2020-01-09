import { Component, OnInit } from '@angular/core';
import { Appointment, DoctorServiceProxy } from 'src/app/core/api/service-proxies';
import { ColumnInfoItem } from 'src/app/shared/generic-table/models/ColumnInfoItem';
import { SelectedOption } from 'src/app/shared/generic-table/models/SelectedOption';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-my-appointments-page',
  templateUrl: './my-appointments-page.component.html',
  styleUrls: ['./my-appointments-page.component.scss'],
})
export class MyAppointmentsComponent implements OnInit {
  appointments: Appointment[] = [];

  columnsInfo: ColumnInfoItem[] = [
    {
      columnDef: 'patient',
      header: 'Patient',
      cell: (element: Appointment): string =>
        `${element.patient.name || ''} ${element.patient.surname || ''}`,
    },
    {
      columnDef: 'pesel',
      header: 'PESEL',
      cell: (element: Appointment): string => `${element.patient.identityNumber}`,
    },
    {
      columnDef: 'date',
      header: 'Date',
      cell: (element: Appointment): string =>
        `${new Date(element.appointmentDate).toISOString().slice(0, 10)}`,
    },
    {
      columnDef: 'time',
      header: 'Time',
      cell: (element: Appointment): string => `${new Date(element.appointmentDate).toLocaleTimeString()}`,
    },
  ];

  options: string[] = ['Start', 'Cancel'];
  selectedAppointment: Appointment;

  constructor(private _doctorService: DoctorServiceProxy) {}

  ngOnInit(): void {
    this._doctorService
      .getAllAppointments()
      .subscribe((appointments: Appointment[]) => (this.appointments = appointments));
  }

  optionSelected(option: SelectedOption): void {
    switch (option.optionName) {
      case 'Cancel':
        this.cancelAppointment(option.row);
        break;

      case 'Start':
        this.startVisit(option.row);
        break;

      default:
        break;
    }
  }

  private cancelAppointment(appointment: Appointment): void {
    this._doctorService
      .cancelAppointment(appointment.id)
      .pipe(switchMap(() => this._doctorService.getAllAppointments()))
      .subscribe((appointments: Appointment[]) => (this.appointments = appointments));
  }

  private startVisit(appointment: Appointment): void {
    this.selectedAppointment = appointment;
  }

  finished(): void {
    this._doctorService
      .getAllAppointments()
      .subscribe((appointments: Appointment[]) => (this.appointments = appointments));
    this.selectedAppointment = undefined;
  }
}
