import { Component, OnInit } from '@angular/core';
import { CompteBancaireParticulier, TypeCompte } from '../../models/ClientParticulier.model';
import { ClientsService } from '../../Services/clients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-cptebancpart',
  templateUrl: './edit-cptebancpart.component.html',
  styleUrl: './edit-cptebancpart.component.css'
})
export class EditCptebancpartComponent implements OnInit {

  errorMessage: string = "";

  addcompteBancaireParticulierrequest : CompteBancaireParticulier = {
    idCompte: 0,
    idClientParticulier: 0,
    banque: '',
    typeCompte: TypeCompte.Courant ,
    solde: '' 
  }
  compteBancaireParticulier: CompteBancaireParticulier[]=[];
  typesCompte = Object.values(TypeCompte);

  constructor(private clientService : ClientsService , private router:Router) { }
  ngOnInit(): void {
    this.addcompteBancaireParticulierrequest=this.clientService.getCompteBancaireToEdit()
  }

  updateBancaireParticulier(){
    this.clientService.UpdateCBP(this.addcompteBancaireParticulierrequest.idCompte!,this.addcompteBancaireParticulierrequest)
    .subscribe({
      next:(comptebancaire) => {
        console.log("success")
        this.router.navigate(['/nav/add-tabsparticulier']);
      },
      error: (error) => {
        
        console.log(error);
        console.log(this.addcompteBancaireParticulierrequest);
      }
    })
  }

  deleteBancaireParticulier(id: number){
    this.clientService.deleteCBP(id)
    .subscribe({
      next: (response)=>{
        this.router.navigate(['/nav/add-tabsparticulier'])
      }
    })
  }

}
