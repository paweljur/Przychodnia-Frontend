import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatSort, PageEvent, Sort } from '@angular/material';
import { ColumnInfoItem } from './models/ColumnInfoItem';
import { SelectedOption } from './models/SelectedOption';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss'],
})
export class GenericTableComponent {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  private _data: object[] = [];
  private _sortType: Sort;

  @Input()
  set data(data: object[]) {
    this._data = data;
  }
  get data(): object[] {
    return this._data;
  }
  @Input() columnsInfo: ColumnInfoItem[] = [];
  @Input() rowOptions: string[] = [];
  @Input() clickableRows: boolean = false;

  @Output() rowSelected: EventEmitter<object> = new EventEmitter();
  @Output() optionSelected: EventEmitter<SelectedOption> = new EventEmitter();

  pageSize: number = 10;
  pageIndex: number = 0;
  currentActiveRow: object = null;

  get displayData(): object[] {
    const dataToDisplay: any[] = this.sortData(this._data, this._sortType);
    return this.paginate(dataToDisplay, this.pageIndex, this.pageSize);
  }

  get columnDefs(): string[] {
    return this.rowOptions.length > 0
      ? this.columnsInfo.map((c: ColumnInfoItem) => c.columnDef).concat('options')
      : this.columnsInfo.map((c: ColumnInfoItem) => c.columnDef);
  }

  changePage(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }

  setSortType(sort: Sort): void {
    this._sortType = sort;
  }

  rowClick(event: MouseEvent, row: object, i: any): void {
    if (row === this.currentActiveRow) {
      this.currentActiveRow = null;
    } else {
      this.currentActiveRow = row;
    }
    this.rowSelected.emit(this.currentActiveRow);
  }

  optionClick(option: string, row: object): void {
    this.optionSelected.emit({ optionName: option.toLowerCase(), row });
  }

  private sortData(data: any[], sort: Sort): any[] {
    if (sort != null && sort.active && sort.direction !== '') {
      data.sort((a: any, b: any) => {
        const isAsc: boolean = sort.direction === 'asc';
        const column: ColumnInfoItem = this.columnsInfo.find((c: ColumnInfoItem) => c.columnDef === sort.active);
        if (column.cell(a) == null && column.cell(b) == null) {
          return -1;
        }
        if (column.cell(a) == null) {
          return 1;
        }
        if (column.cell(b) == null) {
          return -1;
        }
        return (column.cell(a) < column.cell(b) ? -1 : 1) * (isAsc ? 1 : -1);
      });
    }
    return data;
  }

  private paginate(data: any[], pageIndex: number, pageSize: number): any[] {
    return data.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
  }
}
