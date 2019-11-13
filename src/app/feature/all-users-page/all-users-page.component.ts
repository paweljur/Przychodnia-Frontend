import { Component, OnInit } from '@angular/core';
import { UserServiceProxy, UserInfoDto } from 'src/core/api/service-proxies';
import { ColumnInfoItem } from 'src/app/shared/generic-table/models/ColumnInfoItem';

@Component({
  selector: 'app-all-users-page',
  templateUrl: './all-users-page.component.html',
  styleUrls: ['./all-users-page.component.scss'],
})
export class AllUsersPageComponent implements OnInit {
  users: UserInfoDto[] = [];

  columnsInfo: ColumnInfoItem[] = [
    {
      columnDef: 'id',
      header: 'Id',
      cell: (element: UserInfoDto): string => `${element.id}`,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: UserInfoDto): string => `${element.name == null ? '' : element.name}`,
    },
    {
      columnDef: 'surname',
      header: 'Surname',
      cell: (element: UserInfoDto): string => `${element.surname == null ? '' : element.surname}`,
    },
    {
      columnDef: 'username',
      header: 'Username',
      cell: (element: UserInfoDto): string => `${element.username}`,
    },
    {
      columnDef: 'role',
      header: 'Role',
      cell: (element: UserInfoDto): string => `${element.role}`,
    },
  ];

  constructor(private _userService: UserServiceProxy) {}

  ngOnInit(): void {
    this._userService.getAllUsers().subscribe((users: UserInfoDto[]) => (this.users = users));
  }
}
