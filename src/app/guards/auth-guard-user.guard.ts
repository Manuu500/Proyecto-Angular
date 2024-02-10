import { CanActivateFn } from '@angular/router';

export const authGuardUserGuard: CanActivateFn = (route, state) => {
  return true;
};
