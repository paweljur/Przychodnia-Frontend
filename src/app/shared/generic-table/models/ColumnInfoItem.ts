export interface ColumnInfoItem {
  columnDef: string;
  header: string;
  cell: (element: any) => string;
}
