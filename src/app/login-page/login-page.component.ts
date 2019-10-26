import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginCredentialsDto, User, ApiException } from 'src/core/api/service-proxies';
import { AuthenticationService } from 'src/core/services/authentication.service';
import { Router } from '@angular/router';
import { MatSnackBar, SimpleSnackBar, MatSnackBarRef } from '@angular/material';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  loginCredentials: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.minLength(11)]),
  });

  constructor(private _authenticationService: AuthenticationService, private _snackBar: MatSnackBar, private _router: Router) {}

  submit(credentials: LoginCredentialsDto): void {
    this._authenticationService
      .authenticate(credentials)
      .subscribe(() => this._handleSuccesfulAuth(), (error: ApiException) => this._handleError(error));
  }

  private _handleSuccesfulAuth(): void {
    this._router.navigate(['/']);
  }

  private _handleError(error: ApiException): void {
    this.loginCredentials.reset();
    const snackBarRef: MatSnackBarRef<SimpleSnackBar> = this._snackBar.open(JSON.parse(error.response).message, 'Ok');
    snackBarRef.onAction().subscribe(() => snackBarRef.dismiss());
  }
}
