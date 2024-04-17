import { Component, OnInit } from '@angular/core';
import { Credits, Operation, Secteur, Statut } from '../../models/credits.model';
import { CreditsService } from '../../Services/credits.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-credit',
  templateUrl: './add-credit.component.html',
  styleUrl: './add-credit.component.css'
})
export class AddCreditComponent implements OnInit{

  addcreditrequest: Credits ={
    id: 0 ,
    agence: 0,
    nom_CC: '',
    id_Client: 0,
    nom: '',
    statut: Statut.DEMANDE_BROUILLON ,
    montant: '',
    secteur:Secteur.AGRICULTURE ,
    date:new Date()  ,
    operation: Operation.Analyse,
    num_version: 0
  }
operations = Object.values(Operation);
  secteurs = Object.values(Secteur);
  statuts = Object.values(Statut); // Déclaration des statuts

  constructor(private creditService: CreditsService, private router:Router){

  }

  ngOnInit(): void {
    
  }

  addCredit() {
    this.creditService.AddCredit(this.addcreditrequest)
    .subscribe({
      next : (credit) => {
        this.router.navigate(['list']) ;
    }
      

})}
  }