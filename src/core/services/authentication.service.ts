import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginCredentialsDto, User, UserServiceProxy } from '../api/service-proxies';

@Injectable()
export class AuthenticationService {
  private readonly _currentUserKey: string = 'currentUser';
  private readonly _currentUser: BehaviorSubject<User | null>;

  get currentUser(): User | null {
    return this._currentUser.value;
  }
  constructor(private _userService: UserServiceProxy) {
    const userFromStorage: string = localStorage.getItem(this._currentUserKey);
    this._currentUser = new BehaviorSubject<User>(JSON.parse(userFromStorage));
  }

  authenticate(credentials: LoginCredentialsDto): Observable<User> {
    return this._userService.authenticate(credentials).pipe(
      map((user: User) => {
        localStorage.setItem(this._currentUserKey, JSON.stringify(user));
        this._currentUser.next(user);
        return user;
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this._currentUserKey);
    this._currentUser.next(null);
  }
}
