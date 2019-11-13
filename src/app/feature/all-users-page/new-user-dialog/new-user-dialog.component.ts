import { Component } from '@angular/core';
import { MatDialogRef, MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { NewUserDto, UserServiceProxy, ApiError, UserInfo } from 'src/core/api/service-proxies';

@Component({
  selector: 'app-new-user-dialog',
  templateUrl: './new-user-dialog.component.html',
  styleUrls: ['./new-user-dialog.component.scss'],
})
export class NewUserDialogComponent {
  newUserForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    name: new FormControl(),
    surname: new FormControl(),
    role: new FormControl(),
  });

  constructor(private _dialogRef: MatDialogRef<Component>, private _userService: UserServiceProxy, private _snackBar: MatSnackBar) {}

  abort(): void {
    this._dialogRef.close();
  }

  onSubmit(): void {
    const newUser: NewUserDto = {
      name: this.newUserForm.value.name,
      surname: this.newUserForm.value.surname,
      password: this.newUserForm.value.password,
      role: this.newUserForm.value.role,
      username: this.newUserForm.value.username,
    };
    this._userService.registerNewUser(newUser).subscribe(
      (user: UserInfo) => {
        this.showPositiveSnackBar();
        this._dialogRef.close(user);
      },
      (error: ApiError) => {
        this.showNegativeSnackBar(error.message);
        this.newUserForm.reset();
      }
    );
  }

  private showPositiveSnackBar(): void {
    const snackBarRef: MatSnackBarRef<SimpleSnackBar> = this._snackBar.open('Success!', 'Ok!');
    snackBarRef.onAction().subscribe(() => snackBarRef.dismiss());
  }

  private showNegativeSnackBar(error: string): void {
    const snackBarRef: MatSnackBarRef<SimpleSnackBar> = this._snackBar.open(error, 'Ok');
    snackBarRef.onAction().subscribe(() => snackBarRef.dismiss());
  }
}
