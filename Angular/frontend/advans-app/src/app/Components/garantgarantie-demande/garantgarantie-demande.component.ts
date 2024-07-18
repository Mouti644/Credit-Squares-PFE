import { Component, OnInit } from '@angular/core';
import { Garant, Garantie, RelationClientGarant, TypeGarantie } from '../../models/DemandeCredit.model';
import { RefServiceService } from '../../Services/ref-service.service';
import { CreditsService } from '../../Services/credits.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-garantgarantie-demande',
  templateUrl: './garantgarantie-demande.component.html',
  styleUrl: './garantgarantie-demande.component.css'
})
export class GarantgarantieDemandeComponent implements OnInit {

  
  errorMessage: string = "";

  selectedRelationId: number = 0;
  nomRelation: string = "";
  //
  selectedtypeId: number = 0;
  nomtype: string = "";

  addgarantrequest: Garant ={
    idGarant: null,
    idDemande: 0,
    nomGarant: '' ,
    identiteGarant: '' ,
    relation: '' ,
    idRelationClientGarant: 0,
    valeurMoyenne: 0 ,
    valeurBasse: 0,
    telephone:''
  
  };

  addgarantierequest : Garantie = {
    idGarantie: null  ,
    idDemande: 0,
    proprietaire: ''  ,
    type: '',
    idTypeGarantie: 0,
    valeur_estime: '' 
  }
  
  garant: Garant[]=[];
  garantie: Garantie[]=[];
  typesGarantie: TypeGarantie[]=[];
  relationsClientGarant : RelationClientGarant[]=[];

  constructor(private refservice : RefServiceService ,private creditService: CreditsService, private router:Router ,private route: ActivatedRoute){}

  ngOnInit(): void {
    const idDemande = this.creditService.getIdDemande();
   this.addgarantrequest.idDemande=this.creditService.getIdDemande();
   this.addgarantierequest.idDemande =this.creditService.getIdDemande();
   console.log("Id de la demande", this.addgarantrequest.idDemande);

    
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

    this.creditService.getAllGaranties(idDemande)
  .subscribe({
    next: (garantie) => {
      this.garantie = garantie;
    },
    error: (Response) => {
      console.log("Erreur de Get Garanties",Response);
    }
  });

  this.creditService.getAllGarants(idDemande)
  .subscribe({
    next: (garant) => {
      this.garant = garant;
      console.log(garant)
    },
    error: (Response) => {
      console.log("Erreur de Get Garants",Response);
    }
  });
  }

  //Garant
addGarant(){
  this.creditService.AddGarant(this.addgarantrequest)
  .subscribe({
    next : (garant) => {

      this.garant.push(garant);
      
        this.addgarantrequest.nomGarant= '',
        this.addgarantrequest.identiteGarant= '',
        this.addgarantrequest.relation=''
        this.addgarantrequest.valeurMoyenne= 0,
        this.addgarantrequest.valeurBasse= 0
    
      
  },
  error: (error) => {
    this.errorMessage ="Une erreur est survenue. Veuillez réessayer.";
    console.log(error);
    console.log(this.addgarantrequest)
   
  }

})
}

  onGarantSelected(): void {
  
    if (this.selectedRelationId !== 0) {
      this.refservice.getRelationClientById(this.selectedRelationId).subscribe(
        relation => {
          this.addgarantrequest.idRelationClientGarant = this.selectedRelationId;
          this.addgarantrequest.relation = relation;
  
          
           console.log("Relation",this.addgarantrequest.relation);
          console.log("Id",this.addgarantrequest.idRelationClientGarant);
        },
        error => {
          console.error("Erreur lors de la récupération de la relation :", error);
        }
      );
    } else {
      this.addgarantrequest.relation = "";
    }
  }

//Garantie

addGarantie(){
  this.creditService.AddGarantie(this.addgarantierequest)
  .subscribe({
    next : (garantie) => {

      this.garantie.push(garantie);
      
      this.addgarantierequest.proprietaire= '',
      this.addgarantierequest.valeur_estime= ''
  },
  error: (error) => {
    this.errorMessage ="Une erreur est survenue. Veuillez réessayer.";
    console.log(error);
    console.log(this.addgarantierequest)
   
  }

})
}

ontypeGarantiSelected(): void {
  
  if (this.selectedtypeId !== 0) {
    this.refservice.getTypeGarantieById(this.selectedtypeId).subscribe(
      type => {
        this.addgarantierequest.idTypeGarantie = this.selectedtypeId;
        this.addgarantierequest.type = type;

        
         console.log("Type",this.addgarantierequest.type);
        console.log("Id",this.addgarantierequest.idTypeGarantie);
      },
      error => {
        console.error("Erreur lors de la récupération du type garantie :", error);
      }
    );
  } else {
    this.addgarantierequest.type = "";
  }
}

editGarant(garant: Garant): void {
  this.creditService.setGarantToEdit(garant);
  
}

editGarantie(garantie: Garantie): void {
  this.creditService.setGarantieToEdit(garantie);
  
}

Terminer(){
  this.router.navigate(['/nav/list']) ;
}

}

