import { Component, OnInit } from '@angular/core';
import { RegistrationServiceProxy, Appointment } from 'src/core/api/service-proxies';
import { ColumnInfoItem } from 'src/app/shared/generic-table/models/ColumnInfoItem';

@Component({
  selector: 'app-all-appointments-page',
  templateUrl: './all-appointments-page.component.html',
  styleUrls: ['./all-appointments-page.component.scss'],
})
export class AllAppointmentsPageComponent implements OnInit {
  appointments: Appointment[] = [];

  columnsInfo: ColumnInfoItem[] = [
    {
      columnDef: 'id',
      header: 'Id',
      cell: (element: Appointment): string => `${element.appointmentDate}`,
    },
    {
      columnDef: 'doctor',
      header: 'Doctor',
      cell: (element: Appointment): string => `${element.doctor.name || ''} ${element.doctor.surname || ''}`,
    },
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
  ];

  constructor(private _registrationService: RegistrationServiceProxy) {}

  ngOnInit(): void {
    this._registrationService.getAllAppointments().subscribe((appointments: Appointment[]) => (this.appointments = appointments));
  }
}
