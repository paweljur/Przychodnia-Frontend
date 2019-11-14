import { Component, OnInit } from '@angular/core';
import { RegistrationServiceProxy, Patient } from 'src/core/api/service-proxies';
import { ColumnInfoItem } from 'src/app/shared/generic-table/models/ColumnInfoItem';

@Component({
  selector: 'app-make-appointment-page',
  templateUrl: './make-appointment-page.component.html',
  styleUrls: ['./make-appointment-page.component.scss'],
})
export class MakeAppointmentPageComponent implements OnInit {
  patients: Patient[] = [];

  columnsInfo: ColumnInfoItem[] = [
    {
      columnDef: 'id',
      header: 'Id',
      cell: (element: Patient): string => `${element.id}`,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: Patient): string => `${element.name || ''}`,
    },
    {
      columnDef: 'surname',
      header: 'Surname',
      cell: (element: Patient): string => `${element.surname || ''}`,
    },
    {
      columnDef: 'pesel',
      header: 'PESEL',
      cell: (element: Patient): string => `${element.identityNumber}`,
    },
  ];

  constructor(private _registrationService: RegistrationServiceProxy) {}

  ngOnInit(): void {
    this._registrationService.getAllPatients().subscribe((patients: Patient[]) => (this.patients = patients));
  }
}
