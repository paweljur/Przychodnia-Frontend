import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthenticationService } from 'src/core/services/authentication.service';
import { CurrentUserDto } from 'src/core/api/service-proxies';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  isHandset$: Observable<boolean> = this._breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result: BreakpointState) => result.matches),
    shareReplay()
  );

  currentUser: CurrentUserDto;

  constructor(private _breakpointObserver: BreakpointObserver, private _authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this.currentUser = this._authenticationService.currentUser;
  }

  logout(): void {
    this._authenticationService.logout();
  }
}
