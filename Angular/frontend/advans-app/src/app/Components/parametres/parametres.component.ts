import { Component, OnInit } from '@angular/core';
import { Produit } from '../../models/DemandeCredit.model';
import { RefServiceService } from '../../Services/ref-service.service';
import { CreditsService } from '../../Services/credits.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.component.html',
  styleUrl: './parametres.component.css'
})
export class ParametresComponent implements OnInit{
  errorMessage: string = "";
addProduitrequest : Produit = {
  idProduit: 0,
  nomProduit: ''
}

produit: Produit[]=[];
constructor(private refservice : RefServiceService ,private creditService: CreditsService, private router:Router){}

ngOnInit(): void {
  this.refservice.GetAllProduits().subscribe(
    data =>{
      this.produit = data;
    }
  );
}

addProduit(){
  this.refservice.AjoutProduit(this.addProduitrequest)
  .subscribe({
    next : (produit) => {

      this.produit.push(produit);
      this.addProduitrequest.nomProduit = ''
      
    
      
  },
  error: (error) => {
    this.errorMessage ="Une erreur est survenue. Veuillez réessayer.";
    console.log(error);
    console.log(this.addProduitrequest)
   
  }

})
}


editProduit(produit: Produit): void {
  this.refservice.setProduitToEdit(produit);
  
}
}
