import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../login/login.service'
import { inject } from '@angular/core';

export const loginguardGuard: CanActivateFn = (route, state) => {

  return inject(LoginService).islogged ? true : inject(Router).navigateByUrl("/login");
};
