import { Component, OnInit } from '@angular/core';
import { LaboratoryServiceProxy, LabTestResult } from 'src/core/api/service-proxies';
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
      columnDef: 'id',
      header: 'Id',
      cell: (element: LabTestResult): string => element.id.toString(),
    },
    {
      columnDef: 'patient',
      header: 'Patient',
      cell: (element: LabTestResult): string => element.description || '',
    },
  ];

  constructor(private _laboratoryService: LaboratoryServiceProxy) {}

  ngOnInit(): void {
    this.labResults$ = this._laboratoryService.getAllLabResult();
  }
}
