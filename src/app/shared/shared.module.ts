import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericTableComponent } from './generic-table/generic-table.component';
import { MatPaginatorModule, MatTableModule, MatMenuModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [GenericTableComponent],
  imports: [CommonModule, MatPaginatorModule, MatTableModule, MatMenuModule, MatButtonModule],
  exports: [GenericTableComponent],
  providers: [],
})
export class SharedModule {}
