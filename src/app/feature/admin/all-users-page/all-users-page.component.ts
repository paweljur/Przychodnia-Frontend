import { Component, OnInit } from '@angular/core';
import { UserServiceProxy, UserInfo } from 'src/core/api/service-proxies';
import { ColumnInfoItem } from 'src/app/shared/generic-table/models/ColumnInfoItem';
import { MatDialog } from '@angular/material';
import { NewUserDialogComponent } from './new-user-dialog/new-user-dialog.component';

@Component({
  selector: 'app-all-users-page',
  templateUrl: './all-users-page.component.html',
  styleUrls: ['./all-users-page.component.scss'],
})
export class AllUsersPageComponent implements OnInit {
  users: UserInfo[] = [];

  columnsInfo: ColumnInfoItem[] = [
    {
      columnDef: 'id',
      header: 'Id',
      cell: (element: UserInfo): string => `${element.id}`,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: UserInfo): string => `${element.name == null ? '' : element.name}`,
    },
    {
      columnDef: 'surname',
      header: 'Surname',
      cell: (element: UserInfo): string => `${element.surname == null ? '' : element.surname}`,
    },
    {
      columnDef: 'username',
      header: 'Username',
      cell: (element: UserInfo): string => `${element.username}`,
    },
    {
      columnDef: 'role',
      header: 'Role',
      cell: (element: UserInfo): string => `${element.role}`,
    },
  ];

  constructor(private _userService: UserServiceProxy, public _dialog: MatDialog) {}

  ngOnInit(): void {
    this._userService.getAllUsers().subscribe((users: UserInfo[]) => (this.users = users));
  }

  openNewUserDialog(): void {
    this._dialog
      .open(NewUserDialogComponent)
      .afterClosed()
      .subscribe((newUser: UserInfo) => newUser && this.users.push(newUser));
  }
}
