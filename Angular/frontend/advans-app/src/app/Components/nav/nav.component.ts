import { Component, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthGuard } from '../../guards/auth.guard';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router  } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);
  isHovered: boolean = false;
 
  userName: string= AuthGuard.username;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
   

    constructor( private jwtHelper: JwtHelperService, private http: HttpClient, private router :Router, private authGuard: AuthGuard, private route: ActivatedRoute,  private snackBar: MatSnackBar){

    }

    ngOnInit(): void {
     
    }
    
    onMouseOver() {
      this.isHovered = true;
    }
  
    onMouseOut() {
      this.isHovered = false;
    }

    dashclientButtonClick() {
      if (this.userName !== "Administrateur") {
        this.snackBar.open("Vous ne pouvez pas accéder, merci", "Fermer", {
          duration: 4000,
          horizontalPosition: 'end',
          verticalPosition: 'bottom',
        });
      } else {
        this.router.navigate(['/nav/dashboard-ClientsParticuliers']);
      }
    }
    dashdemandeButtonClick() {
      if (this.userName !== "Administrateur") {
        this.snackBar.open("Vous ne pouvez pas accéder, merci", "Fermer", {
          duration: 4000,
          horizontalPosition: 'end',
          verticalPosition: 'bottom',
        });
      } else {
        this.router.navigate(['/nav/dashboard-Credits']);
      }
    }
    dashoperationButtonClick() {
      if (this.userName !== "Administrateur") {
        this.snackBar.open("Vous ne pouvez pas accéder, merci", "Fermer", {
          duration: 4000,
          horizontalPosition: 'end',
          verticalPosition: 'bottom',
        });
      } else {
        this.router.navigate(['/nav/dashboard-Operations']);
      }
    }
    parametreButtonClick() {
      if (this.userName !== "Administrateur") {
        this.snackBar.open("Vous ne pouvez pas accéder, merci", "Fermer", {
          duration: 4000,
          horizontalPosition: 'end',
          verticalPosition: 'bottom',
        });
      } else {
        this.router.navigate(['/nav/parametres']);
      }
    }
   

    isUserAuthenticated = (): boolean => {
      const token = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)){
      return true;
    }
    return false;
    }
    logOut = () => {
      localStorage.removeItem("jwt");
      localStorage.removeItem("refreshToken");
      this.router.navigate(["/accueil"]);
    }
}
