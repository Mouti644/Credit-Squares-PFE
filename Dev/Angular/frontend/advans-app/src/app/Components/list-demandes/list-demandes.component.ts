import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthGuard } from '../../guards/auth.guard';
import { Credits } from '../../models/credits.model';
import { CreditsService } from '../../Services/credits.service';

@Component({
  selector: 'app-list-demandes',
  templateUrl: './list-demandes.component.html',
  styleUrl: './list-demandes.component.css'
})
export class ListDemandesComponent implements OnInit{

   credits: Credits[] = [
  
  ];
  userName: string= AuthGuard.username;

  constructor(private jwtHelper: JwtHelperService, private http: HttpClient, private router :Router, private authGuard: AuthGuard, private creditService:CreditsService) { }

  ngOnInit(): void {
    this.creditService.GetAllDemandes()
    .subscribe({
      next: (credits) =>{
        this.credits=credits;
      },
      error: (Response) =>{
        console.log(Response)
      }

    })
   
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
