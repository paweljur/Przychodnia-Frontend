import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthenticationService } from 'src/core/services/authentication.service';
import { LoggedInUserDto } from 'src/core/api/service-proxies';
import { Router } from '@angular/router';

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

  currentUser: LoggedInUserDto;

  constructor(
    private _breakpointObserver: BreakpointObserver,
    private _authenticationService: AuthenticationService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.currentUser = this._authenticationService.currentUser;

    switch (this.currentUser.role) {
      case 'admin':
        this._router.navigate(['/users']);
        break;
      case 'registrant':
        this._router.navigate(['/appointments']);
        break;
      case 'doctor':
        this._router.navigate(['/my-appointments']);
        break;
      case 'laborant':
        this._router.navigate(['/test-orders']);
        break;
      default:
        break;
    }
  }

  logout(): void {
    this._authenticationService.logout();
  }
}
