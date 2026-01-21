import { Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../../auth';

export const authGuard: CanActivateFn = (route, state) => {
  
  const auth = Inject(Auth)
  const router = Inject(Router)

  if (auth.isAuthenticated()) {
    return true;
  }

  return router.createUrlTree(['/login']);
};
