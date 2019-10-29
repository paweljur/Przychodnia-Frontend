import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginCredentialsDto, UserServiceProxy, CurrentUserDto } from '../api/service-proxies';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {
  private readonly _currentUserKey: string = 'currentUser';
  private readonly _currentUser: BehaviorSubject<CurrentUserDto | null>;

  get currentUser(): CurrentUserDto | null {
    return this._currentUser.value;
  }
  constructor(private _userService: UserServiceProxy, private _router: Router) {
    const userFromStorage: string = localStorage.getItem(this._currentUserKey);
    this._currentUser = new BehaviorSubject<CurrentUserDto>(JSON.parse(userFromStorage));
  }

  authenticate(credentials: LoginCredentialsDto): Observable<CurrentUserDto> {
    return this._userService.authenticate(credentials).pipe(
      map((user: CurrentUserDto) => {
        localStorage.setItem(this._currentUserKey, JSON.stringify(user));
        this._currentUser.next(user);
        return user;
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this._currentUserKey);
    this._currentUser.next(null);
    this._router.navigateByUrl('/login');
  }
}
