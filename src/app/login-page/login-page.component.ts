import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginCredentialsDto, User } from 'src/core/api/service-proxies';
import { AuthenticationService } from 'src/core/services/authentication.service';

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

  constructor(private _authenticationService: AuthenticationService) {}

  submit(credentials: LoginCredentialsDto): void {
    this._authenticationService.authenticate(credentials).subscribe((user: User) => console.log(user));
  }
}
