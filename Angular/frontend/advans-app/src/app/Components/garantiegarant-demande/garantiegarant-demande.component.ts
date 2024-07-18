import { Component, OnInit } from '@angular/core';
import { Garantie, TypeGarantie } from '../../models/DemandeCredit.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditsService } from '../../Services/credits.service';
import { RefServiceService } from '../../Services/ref-service.service';

@Component({
  selector: 'app-garantiegarant-demande',
  templateUrl: './garantiegarant-demande.component.html',
  styleUrl: './garantiegarant-demande.component.css'
})
export class GarantiegarantDemandeComponent implements OnInit{


  errorMessage: string = "";

  selectedRelationId: number = 0;
  nomRelation: string = "";
  //
  selectedtypeId: number = 0;
  nomtype: string = "";


  addgarantierequest : Garantie = {
    idGarantie: null  ,
    idDemande: 0,
    proprietaire: ''  ,
    type: '',
    idTypeGarantie: 0,
    valeur_estime: '' 
  }
  
 
  garantie: Garantie[]=[];
  typesGarantie: TypeGarantie[]=[];


  constructor(private refservice : RefServiceService ,private creditService: CreditsService, private router:Router ,private route: ActivatedRoute){}

  ngOnInit(): void {
    const idDemande = this.creditService.getIdDemande();

   this.addgarantierequest.idDemande =this.creditService.getIdDemande();

    
    this.refservice.GetAllTypesG().subscribe(
      data =>{
        this.typesGarantie = data;
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


editGarantie(garantie: Garantie): void {
  this.creditService.setGarantieToEdit(garantie);
  
}

Terminer(){
  this.router.navigate(['/nav/list']) ;
}


}
