import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { response } from 'express';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AuthenticatedResponse } from '../../models/AuthenticatedResponse';
import { NgForm } from '@angular/forms';
import { LoginModel } from '../../models/LoginModel';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent  implements OnInit{

  invalidLogin: boolean = false;
  credentials: LoginModel = {email:'', password:''};
  erreurLogin:string = "Veuillez vérifier vos informations d'identification"
  

  constructor(private router :Router, private http:HttpClient){}
  
  ngOnInit(): void {
  }

  login = ( form: NgForm) => {
    if (form.valid) {
      this.http.post<AuthenticatedResponse>("https://localhost:7258/api/Auth/login", this.credentials, {
        headers: new HttpHeaders({ "Content-Type": "application/json"})
      })
      .subscribe({
        next: (response: AuthenticatedResponse) => {
          const token = response.token;
          const refreshToken = response.refreshToken;
          localStorage.setItem("jwt", token); 
          localStorage.setItem("refreshToken", refreshToken);
          this.invalidLogin = false; 
          this.router.navigate(["/list"]);
        },
        error: (err: HttpErrorResponse) => {
          this.invalidLogin = true;
          
          this.credentials.password="";
      }})

    }
  }

}
