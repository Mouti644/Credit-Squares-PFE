import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

export const adminGuard: CanActivateFn = (route, state) => {
  const jwtHelper = new JwtHelperService();
  const router = inject(Router);
  const token = localStorage.getItem("jwt");

  if (token && !jwtHelper.isTokenExpired(token)) {
    const decodeToken = jwtHelper.decodeToken(token);
    const username = decodeToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
    
    if (username === "Administrateur") {
      return true;
    } else {
      router.navigate(["/accueil"]);
      return false;
    }
  }

  router.navigate(["/accueil"]);
  return false;
};
