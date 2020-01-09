import { Component, OnInit } from '@angular/core';
import { LaboratoryServiceProxy, LabTestResult } from 'src/app/core/api/service-proxies';
import { Observable } from 'rxjs';
import { ColumnInfoItem } from 'src/app/shared/generic-table/models/ColumnInfoItem';

@Component({
  selector: 'app-past-test-results-page',
  templateUrl: './past-test-results-page.component.html',
  styleUrls: ['./past-test-results-page.component.scss'],
})
export class PastTestResultsPageComponent implements OnInit {
  labResults$: Observable<LabTestResult[]>;

  columnsInfo: ColumnInfoItem[] = [
    {
      columnDef: 'patient',
      header: 'Patient',
      cell: (element: LabTestResult): string => `${element.patient.name} ${element.patient.surname}`,
    },
    {
      columnDef: 'laborant',
      header: 'Laborant',
      cell: (element: LabTestResult): string => `${element.laborant.name} ${element.laborant.surname}`,
    },
    {
      columnDef: 'test',
      header: 'Test',
      cell: (element: LabTestResult): string => element.testName,
    },
    {
      columnDef: 'result',
      header: 'Result',
      cell: (element: LabTestResult): string => element.result,
    },
  ];

  constructor(private _laboratoryService: LaboratoryServiceProxy) {}

  ngOnInit(): void {
    this.labResults$ = this._laboratoryService.getAllLabResult();
  }
}
