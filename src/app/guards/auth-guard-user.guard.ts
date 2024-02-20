import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';

export const authGuardUserGuard: CanActivateFn = (route, state) => {
  const cs = inject(CookieServiceService);
  const router = inject(Router);
  return true;
};
