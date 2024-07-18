import { Component, OnInit } from '@angular/core';
import { CreditsService } from '../../Services/credits.service';
import { RefServiceService } from '../../Services/ref-service.service';
import { Router } from '@angular/router';
import { RefAgence } from '../../models/ClientParticulier.model';

@Component({
  selector: 'app-agences',
  templateUrl: './agences.component.html',
  styleUrl: './agences.component.css'
})
export class AgencesComponent implements OnInit {
  errorMessage: string = "";

  addAgencerequest : RefAgence = {
    idAgence : 0,
    nomAgence :  '' ,
    region :'' ,
    telephone: '' ,
    adresse :''
  }

  agence: RefAgence[]=[];

constructor(private refservice : RefServiceService ,private creditService: CreditsService, private router:Router){}

  ngOnInit(): void {
    this.refservice.GetAllAgences().subscribe(
      data =>{
        this.agence = data;
      }
    );
  }

  addAgence(){
    this.refservice.AjoutAgence(this.addAgencerequest)
    .subscribe({
      next : (agence) => {
  
        this.agence.push(agence);
        this.addAgencerequest.nomAgence = ''
        this.addAgencerequest.region = ''
        this.addAgencerequest.telephone = ''
        this.addAgencerequest.adresse = ''
        
    },
    error: (error) => {
      this.errorMessage ="Une erreur est survenue. Veuillez réessayer.";
      console.log(error);
      console.log(this.addAgencerequest)
     
    }
  
  })
  }
  
  
  editAgence(agence: RefAgence): void {
    this.refservice.setAgenceToEdit(agence);
    
  }
}
