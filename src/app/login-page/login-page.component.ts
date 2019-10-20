import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ILoginCredentialsDto, LoginCredentialsDto, User, UserServiceProxy } from 'src/shared/service-proxies/service-proxies';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  loginCredentials: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    // password: new FormControl(null, [Validators.required, Validators.minLength(12)]),
    password: new FormControl(null, [Validators.required]),
  });

  constructor(private _userService: UserServiceProxy) {}

  submit(credentials: ILoginCredentialsDto): void {
    this._userService.authenticate(new LoginCredentialsDto(credentials)).subscribe((user: User) => console.log(user));
  }
}
