import { Component, OnInit } from '@angular/core';
import { DemandeCredit, Produit, RelationClientGarant, Statut, TypeClient, TypeGarantie } from '../../models/DemandeCredit.model';
import { CreditsService } from '../../Services/credits.service';
import { Router } from '@angular/router';
import { error } from 'console';
import { RefServiceService } from '../../Services/ref-service.service';
import { ClientsService } from '../../Services/clients.service';

@Component({
  selector: 'app-add-credit',
  templateUrl: './add-credit.component.html',
  styleUrl: './add-credit.component.css'
})
export class AddCreditComponent implements OnInit{

  clientTrouve: any;

  selectedProduitId: number = 0;
  nomProduit: string = "";

  produits:Produit[] = [];
  typesGarantie: TypeGarantie[]=[];
  relationsClientGarant : RelationClientGarant[]=[];


  addcreditrequest: DemandeCredit ={
    idDemande: 0,
    typeClient: TypeClient.Client_Entreprise,
    montant: null,
    dureeDemandee: null,
    commentaires: "",
    disponibilite: "",
    identiteClient: '',
    dateDemande: new Date(),
    dateFinalisation: new Date(),
    idClientEntreprise: null,
    idClientParticulier: null,
    idProduit: 0 ,
    nomProduit: '',
    statut: Statut.DEMANDE_BROUILLON,
    nomAgence: "",
    nomClient: "",
    salaireNetMensuel : '',
    chiffreAffaireMensuel : '',
    garants: [],
    garanties: []
  }
  //produits = Object.values(Produit)
  typesClient = Object.values(TypeClient)
  statuts = Object.values(Statut); // Déclaration des statuts

  errorMessage = '';
  constructor(private clientService: ClientsService,private creditService: CreditsService, private refservice : RefServiceService ,private router:Router){

  }

  ngOnInit(): void {
    this.refservice.GetAllProduits().subscribe(
      data =>{
        this.produits = data;
      }
    );
    this.refservice.GetAllTypesG().subscribe(
      data =>{
        this.typesGarantie = data;
      }
    );
    this.refservice.GetAllRCG().subscribe(
      data =>{
        this.relationsClientGarant = data;
      }
    );

    this.clientTrouve = this.clientService.getClientTrouve();
    this.addcreditrequest.identiteClient = this.clientTrouve.identite;
    this.addcreditrequest.nomAgence = this.clientTrouve.nomAgence;
    this.addcreditrequest.nomClient = this.clientTrouve.nom;

    if(this.clientTrouve.typeClient == "Particulier"){
      this.addcreditrequest.typeClient = TypeClient.Client_Particulier;
      this.addcreditrequest.idClientParticulier = this.clientTrouve.idClient;

    }
    else if(this.clientTrouve.typeClient == "Entreprise") {
      this.addcreditrequest.typeClient = TypeClient.Client_Entreprise;
      this.addcreditrequest.idClientEntreprise = this.clientTrouve.idClient;
    }

    console.log("initial",this.addcreditrequest);

  }

  addCredit() {
    this.creditService.AddCredit(this.addcreditrequest)
    .subscribe({
      next : (credit) => {
        console.log("Réponse de l'API:", credit);
        this.creditService.setIdDemande(credit.idDemande!);
        this.updatestatut(credit.idDemande!, 'Analyse');
        this.router.navigate(['/nav/add-garant']) ;
        
    },
    error: (error) => {
      this.errorMessage ="Une erreur est survenue. Veuillez réessayer.";
      
      console.log(error);
      // this.addcreditrequest.dureeDemandee=0;
      // this.addcreditrequest.idClientEntreprise=0;
      // this.addcreditrequest.idClientParticulier=0;
      // this.addcreditrequest.montant=0;
      console.log("erreur",this.addcreditrequest);
    }
    
})

}


updatestatut(idDemande: number, nouveauStatut: string): void {
  this.creditService.updateStatutDemande(idDemande, nouveauStatut).subscribe(
    response => {
      console.log('Statut de la demande de crédit mis à jour avec succès :', response);
      // Mettez ici toute autre logique que vous souhaitez exécuter après la mise à jour du statut
    },
    error => {
      console.error('Une erreur s\'est produite lors de la mise à jour du statut de la demande de crédit :', error);
      // Mettez ici toute logique de gestion d'erreur appropriée
    }
  );
}




// Méthode appelée lorsqu'un produit est sélectionné
onProduitSelected(): void {
  
  if (this.selectedProduitId !== 0) {
    this.refservice.getNomProduitById(this.selectedProduitId).subscribe(
      nom => {
        this.addcreditrequest.idProduit = this.selectedProduitId;
        this.addcreditrequest.nomProduit = nom;

        
         console.log("Nom",this.addcreditrequest.nomProduit);
        console.log("Id",this.addcreditrequest.idProduit);
      },
      error => {
        console.error("Erreur lors de la récupération du nom du produit :", error);
      }
    );
  } else {
    this.addcreditrequest.nomProduit = "";
  }
}



  }