import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from 'shared/services/auth.service';
import { Observable } from 'rxjs';
;import { map } from 'rxjs/operators';

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(
    private authService: AuthService) { }

  canActivate(): Observable<boolean> {
    return this.authService.appUser$
      .pipe(map(appUser => appUser.isAdmin));
  }

}
