import { Component, OnInit } from '@angular/core';
import { RegistrationServiceProxy, Patient } from 'src/app/core/api/service-proxies';
import { ColumnInfoItem } from 'src/app/shared/generic-table/models/ColumnInfoItem';
import { MatDialog } from '@angular/material';
import { RegisterPatientDialogComponent } from './register-patient-dialog/register-patient-dialog.component';
import { MakeAppointmentDialogComponent } from './make-appointment-dialog/make-appointment-dialog.component';

@Component({
  selector: 'app-make-appointment-page',
  templateUrl: './make-appointment-page.component.html',
  styleUrls: ['./make-appointment-page.component.scss'],
})
export class MakeAppointmentPageComponent implements OnInit {
  private _patients: Patient[] = [];
  private _filteredPatients: Patient[] = [];
  get patients(): Patient[] {
    return this._filteredPatients;
  }

  filterName: string = '';
  filterSurname: string = '';
  selectedPatient: Patient;

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

  constructor(private _registrationService: RegistrationServiceProxy, private _dialog: MatDialog) {}

  ngOnInit(): void {
    this._registrationService.getAllPatients().subscribe((patients: Patient[]) => {
      this._patients = patients;
      this._filteredPatients = patients;
    });
  }

  filterPatients(): void {
    this._filteredPatients = this._patients.filter(
      (patient: Patient) =>
        patient.name &&
        patient.name.toLowerCase().includes(this.filterName.toLowerCase().trim()) &&
        patient.surname &&
        patient.surname.toLowerCase().includes(this.filterSurname.toLowerCase().trim())
    );
  }

  openPatientDialog(): void {
    this._dialog
      .open(RegisterPatientDialogComponent)
      .afterClosed()
      .subscribe((newPatient: Patient) => {
        if (newPatient) {
          this._patients.push(newPatient);
          this.filterPatients();
        }
      });
  }

  openAppointmentDialog(): void {
    this._dialog
      .open(MakeAppointmentDialogComponent, { data: this.selectedPatient })
      .afterClosed()
      .subscribe(() => (this.selectedPatient = undefined));
  }

  patientSelected(patient: Patient): void {
    this.selectedPatient = patient;
  }
}
