import { Component, OnInit } from '@angular/core';
import { CompteBancaireEntreprise, TypeCompte } from '../../models/ClientEntreprise.model';
import { RefServiceService } from '../../Services/ref-service.service';
import { ClientsService } from '../../Services/clients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-compte-bancaire-entreprise',
  templateUrl: './edit-compte-bancaire-entreprise.component.html',
  styleUrl: './edit-compte-bancaire-entreprise.component.css'
})
export class EditCompteBancaireEntrepriseComponent implements  OnInit {

  errorMessage: string = "";

  addCompteBancaireEntrepriserequest: CompteBancaireEntreprise = {
    idCompteBanq: 0,
    idClientEntreprise: 0,
    banque: '',
    typeCompte: TypeCompte.Autres  ,
    solde: ''
  }
  comptesBancaireEntreprise: CompteBancaireEntreprise[]=[];
  typesCompte = Object.values(TypeCompte);

constructor(private refservice : RefServiceService ,private clientService: ClientsService, private router:Router){}


ngOnInit(): void {
  this.addCompteBancaireEntrepriserequest=this.clientService.getCompteBancaireEntrepriseToEdit()
}


updateBancaireEntreprise(){
  this.clientService.UpdateCBE(this.addCompteBancaireEntrepriserequest.idCompteBanq!,this.addCompteBancaireEntrepriserequest)
  .subscribe({
    next:(comptebancaire) => {
      console.log("success")
      this.router.navigate(['/nav/add-tabsentreprise']);
    },
    error: (error) => {
      
      console.log(error);
      console.log(this.addCompteBancaireEntrepriserequest);
    }
  })
}

deleteBancaireParticulier(id: number){
  this.clientService.deleteCBE(id)
  .subscribe({
    next: (response)=>{
      this.router.navigate(['/nav/add-tabsentreprise'])
    }
  })
}


}
