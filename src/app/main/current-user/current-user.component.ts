import { Component, Input } from '@angular/core';
import { LoggedInUserDto } from 'src/app/core/api/service-proxies';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.scss'],
})
export class CurrentUserComponent {
  @Input()
  user: LoggedInUserDto;

  constructor(private _authenticationService: AuthenticationService) {}

  logout(): void {
    this._authenticationService.logout();
  }
}
