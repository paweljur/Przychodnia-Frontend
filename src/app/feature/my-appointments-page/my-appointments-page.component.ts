import { Component, OnInit } from '@angular/core';
import { Appointment, DoctorServiceProxy } from 'src/core/api/service-proxies';
import { ColumnInfoItem } from 'src/app/shared/generic-table/models/ColumnInfoItem';

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
      cell: (element: Appointment): string => `${element.patient.name || ''} ${element.patient.surname || ''}`,
    },
    {
      columnDef: 'pesel',
      header: 'PESEL',
      cell: (element: Appointment): string => `${element.patient.identityNumber}`,
    },
    {
      columnDef: 'date',
      header: 'Date',
      cell: (element: Appointment): string => `${new Date(element.appointmentDate).toLocaleDateString()}`,
    },
    {
      columnDef: 'time',
      header: 'Time',
      cell: (element: Appointment): string => `${new Date(element.appointmentDate).toLocaleTimeString()}`,
    },
  ];

  constructor(private _doctorService: DoctorServiceProxy) {}

  ngOnInit(): void {
    this._doctorService.getAllAppointments().subscribe((appointments: Appointment[]) => (this.appointments = appointments));
  }
}
