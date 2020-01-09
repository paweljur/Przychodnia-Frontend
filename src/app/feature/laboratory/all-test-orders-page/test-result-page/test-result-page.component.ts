import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { LaboratoryServiceProxy, LabTestOrder, LabTestResult } from 'src/core/api/service-proxies';
import { Observable } from 'rxjs/internal/Observable';
import { FormGroup, FormBuilder } from '@angular/forms';

interface LabResultFormValue {
  result: string;
  resultFile: string;
}

@Component({
  selector: 'app-test-result-page',
  templateUrl: './test-result-page.component.html',
  styleUrls: ['./test-result-page.component.scss'],
})
export class TestResultPageComponent implements OnInit {
  labTestOrder$: Observable<LabTestOrder>;
  labResultForm: FormGroup;

  constructor(
    private _route: ActivatedRoute,
    private _laboratoryService: LaboratoryServiceProxy,
    private _fb: FormBuilder,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.labTestOrder$ = this._route.paramMap.pipe(
      switchMap((params: ParamMap) => this._laboratoryService.getLabTestOrder(+params.get('id')))
    );
    this.labResultForm = this._fb.group({
      result: [null],
    });
  }

  abort(): void {
    this._router.navigate(['/test-orders']);
  }

  onSubmit(formValue: LabResultFormValue, labTestOrderId: number): void {
    this._laboratoryService
      .finishLabTest(formValue.result, labTestOrderId)
      .subscribe(() => this._router.navigate(['/test-orders']));
  }
}
