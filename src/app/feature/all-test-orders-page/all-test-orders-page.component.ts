import { Component, OnInit } from '@angular/core';
import { LaboratoryServiceProxy, LabTestOrder } from 'src/core/api/service-proxies';
import { ColumnInfoItem } from 'src/app/shared/generic-table/models/ColumnInfoItem';
import { SelectedOption } from 'src/app/shared/generic-table/models/SelectedOption';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-test-orders-page',
  templateUrl: './all-test-orders-page.component.html',
  styleUrls: ['./all-test-orders-page.component.scss'],
})
export class AllTestOrdersPageComponent implements OnInit {
  labTestOrders: LabTestOrder[] = [];
  options: string[] = ['Start', 'Cancel'];
  selectedOrder: LabTestOrder;
  columnsInfo: ColumnInfoItem[] = [
    {
      columnDef: 'patient',
      header: 'Patient',
      cell: (element: LabTestOrder): string =>
        `${element.patient.name || ''} ${element.patient.surname || ''}`,
    },
    {
      columnDef: 'pesel',
      header: 'PESEL',
      cell: (element: LabTestOrder): string => element.patient.identityNumber,
    },
    {
      columnDef: 'orderName',
      header: 'OrderName',
      cell: (element: LabTestOrder): string => element.name,
    },
    {
      columnDef: 'note',
      header: 'Note',
      cell: (element: LabTestOrder): string => element.doctorsNote,
    },
  ];

  constructor(private _laboratoryService: LaboratoryServiceProxy, private _router: Router) {}

  ngOnInit(): void {
    this._laboratoryService
      .getAllLabTestOrders()
      .subscribe((orders: LabTestOrder[]) => (this.labTestOrders = orders));
  }

  executeOption(option: SelectedOption): void {
    switch (option.optionName) {
      case 'Start':
        this._router.navigate(['/test-result', option.row.id]);
        break;

      case 'Cancel':
        console.log('executing: ', option.optionName, ' on ', option.row);
        break;

      default:
        break;
    }
  }
}
