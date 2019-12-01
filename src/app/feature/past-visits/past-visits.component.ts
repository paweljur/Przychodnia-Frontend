import { Component, OnInit } from '@angular/core';
import { DoctorServiceProxy, Visit } from 'src/core/api/service-proxies';
import { ColumnInfoItem } from 'src/app/shared/generic-table/models/ColumnInfoItem';

@Component({
  selector: 'app-past-visits',
  templateUrl: './past-visits.component.html',
  styleUrls: ['./past-visits.component.scss'],
})
export class PastVisitsComponent implements OnInit {
  visits: Visit[] = [];

  columnsInfo: ColumnInfoItem[] = [
    {
      columnDef: 'patient',
      header: 'Patient',
      cell: (element: Visit): string => `${element.appointment.patient.name || ''} ${element.appointment.patient.surname || ''}`,
    },
    {
      columnDef: 'pesel',
      header: 'PESEL',
      cell: (element: Visit): string => `${element.appointment.patient.identityNumber}`,
    },
    {
      columnDef: 'date',
      header: 'Date',
      cell: (element: Visit): string => `${new Date(element.appointment.appointmentDate).toLocaleDateString()}`,
    },
    {
      columnDef: 'time',
      header: 'Time',
      cell: (element: Visit): string => `${new Date(element.appointment.appointmentDate).toLocaleTimeString()}`,
    },
  ];

  constructor(private _doctorService: DoctorServiceProxy) {}

  ngOnInit(): void {
    this._doctorService.getPastVisits().subscribe((visits: Visit[]) => (this.visits = visits));
  }
}
