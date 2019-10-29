import { Component, OnInit, Input } from '@angular/core';
import { CurrentUserDto } from 'src/core/api/service-proxies';
import { AuthenticationService } from 'src/core/services/authentication.service';

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.scss'],
})
export class CurrentUserComponent {
  @Input()
  user: CurrentUserDto;

  constructor(private _authenticationService: AuthenticationService) {}

  logout(): void {
    this._authenticationService.logout();
  }
}
