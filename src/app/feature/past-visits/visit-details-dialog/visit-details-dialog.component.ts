import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Visit } from 'src/core/api/service-proxies';

@Component({
  selector: 'app-visit-details-dialog',
  templateUrl: './visit-details-dialog.component.html',
  styleUrls: ['./visit-details-dialog.component.scss'],
})
export class VisitDetailsDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public visit: Visit) {}
}
