import { Component, OnInit } from '@angular/core';
import {Activite, ClientParticulier, RefAgence, SecteurActivite, Segment, Sex, SituationFamilialeParticulier, SituationImmobilierParticulier, SousActivite } from '../../../models/ClientParticulier.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from '../../../Services/clients.service';
import { RefServiceService } from '../../../Services/ref-service.service';

@Component({
  selector: 'app-add-client-particulier',
  templateUrl: './add-client-particulier.component.html',
  styleUrl: './add-client-particulier.component.css'
})
export class AddClientParticulierComponent implements OnInit {

  selectedSecteurActiviteId: number = 0;
  nomSecteurActivite: string = "";
  //
  selectedActiviteId: number = 0;
  nomActivite: string = "";
  //
  selectedSousActiviteId: number = 0;
  nomSousActivite: string = "";
  //
  selectedAgenceId: number = 0;
  nomAgence: string = "";
    //
    selectedSitImmId: number = 0;
    situationImmobilier: string = "";
      //
      selectedSitFamId: number = 0;
      situationFamiliale: string = "";

  secteursActivite: SecteurActivite[] = [];
  activite:Activite[] = [];
  sousActivite : SousActivite[] = [];
  agences : RefAgence []= [];  
  situationsImmobilier : SituationImmobilierParticulier []= [];
  situationsFamiliale : SituationFamilialeParticulier []= [];

  errorMessage= "";

  addClientParticulierRequest:  ClientParticulier = {
    idClientParticulier: 0,
    segment: Segment.Client_Particulier ,
    nom: ''  ,
    prenom: '' ,
    nomAgence: '' ,
    idAgence:0,
    gestionnaire: '' ,
    idSituationFamilialeParticulier :0 ,
    situationFamiliale : '',
    nombre_enfants: 0 ,
    idSituationImmobilierParticulier: 0,
    situationImmobilier: ''  ,
    
    sex: Sex.Male ,
    age:'',
    dateNaissance :new Date(),
    telephone: '',
    cycle: 0 ,
    dateDerniereVisite: new Date() ,
    dateCreation: new Date(),
    fonctionProfessionnelle:'' ,
    salaireNetMensuel:'' ,
    autresRevenusMensuel:'',
    nomSecteurActivite: '' ,
    idSecteurActivite:0,
    nomSousActivite: '' ,
    nomActivite: '' ,
    
    ville: ''  ,
    nbrCreditBeneficies: 0 ,
    nbrPointsVente : 0,
    identiteClient: ''  ,
    creditRecents: [] ,
    referentsFamiliaux: [] ,
    comptesBancaire: [] ,
    compte:[]  
  };

  

  //agences = Object.values(NomAgence);
  //secteurs = Object.values(SecteurAct) ;
  //sousactivites = Object.values(SousActivite) ;
  //activites  = Object.values(Acitivite) ;
  sexs = Object.values(Sex);
  //sitsFam = Object.values(SitFam);
 // sitsImm = Object.values(SitImm);


constructor(private route: ActivatedRoute, private clientService: ClientsService,private refservice : RefServiceService ,private router:Router){

}

ngOnInit(): void {

 
  this.refservice.GetAllSAP().subscribe(
    data =>{
      this.secteursActivite = data;
    }
  );
  this.refservice.GetAllAP().subscribe(
    data =>{
      this.activite = data;
    }
  );
  this.refservice.GetAllSsAP().subscribe(
    data =>{
      this.sousActivite = data;
    }
  );
  this.refservice.GetAllAgences().subscribe(
    data =>{
      this.agences = data;
    }
  );

  this.refservice.GetAllSIP().subscribe(
    data =>{
      this.situationsImmobilier = data;
    }
  );

  this.refservice.GetAllSFP().subscribe(
    data =>{
      this.situationsFamiliale = data;
    }
  );
}

  addClientParticulier() {
    
    this.addClientParticulierRequest.idSecteurActivite=this.selectedSecteurActiviteId;
    this.clientService.AddClientParticulier(this.addClientParticulierRequest)
    .subscribe({
      next : (clientParticulier) => {
        console.log("id du client est :" ,clientParticulier.idClientParticulier);
        this.clientService.setIdClientParticulier(clientParticulier.idClientParticulier!);
        this.router.navigate(['/nav/add-tabsparticulier']) ;
        console.log(this.addClientParticulierRequest);
    },
    error: (error) => {
      this.errorMessage ="Une erreur est survenue. Veuillez réessayer.";
      console.log(error);
    }
})}

// Méthode appelée lorsqu'un secteur d'activité est sélectionné
onSecteurActiviteSelected(): void {
  
  if (this.selectedSecteurActiviteId !== 0) {
    this.refservice.getNomSecteurActiviteById(this.selectedSecteurActiviteId).subscribe(
      nom => {
        this.addClientParticulierRequest.nomSecteurActivite = nom;
      },
      error => {
        console.error("Erreur lors de la récupération du nom de l'agence :", error);
      }
    );
  } else {
    this.addClientParticulierRequest.nomSecteurActivite = "";
  }
}

//
onActiviteSelected(): void {
  
  if (this.selectedActiviteId !== 0) {
    this.refservice.getNomActiviteParticulierById(this.selectedActiviteId).subscribe(
      nom => {
        this.addClientParticulierRequest.idactivite = this.selectedActiviteId;
        this.addClientParticulierRequest.nomActivite = nom;
        console.log("Nom",this.addClientParticulierRequest.nomActivite);
        console.log("Id",this.addClientParticulierRequest.idactivite);
      },
      error => {
        console.error("Erreur lors de la récupération du nom de l'activite :", error);
        console.log("Error Nom",this.addClientParticulierRequest.nomActivite);
        console.log("Id",this.addClientParticulierRequest.idactivite);
      }
    );
  } else {
    this.addClientParticulierRequest.nomActivite = "";
  }
}
//
onSousActiviteSelected(): void {
  
  if (this.selectedSousActiviteId !== 0) {
    this.refservice.getNomSousActiviteParticulierById(this.selectedSousActiviteId).subscribe(
      nom => {
        this.addClientParticulierRequest.idsousActivite = this.selectedSousActiviteId;
        this.addClientParticulierRequest.nomSousActivite = nom;
        console.log("Nom",this.addClientParticulierRequest.nomSousActivite);
        console.log("Id",this.addClientParticulierRequest.idsousActivite);
      },
      error => {
        console.error("Erreur lors de la récupération du nom de Sous Activite :", error);
        console.log("Error Nom",this.addClientParticulierRequest.nomActivite);
        console.log("Id",this.addClientParticulierRequest.idactivite);
      
      }
    );
  } else {
    this.addClientParticulierRequest.nomSousActivite = "";
  }
}

// Méthode appelée lorsqu'un secteur d'activité est sélectionné
onAgenceSelected(): void {
  
  if (this.selectedAgenceId !== 0) {
    this.refservice.getNomAgenceById(this.selectedAgenceId).subscribe(
      nom => {
        this.addClientParticulierRequest.idAgence = this.selectedAgenceId;
        this.addClientParticulierRequest.nomAgence = nom;
        
         console.log("Nom",this.addClientParticulierRequest.nomAgence);
        console.log("Id",this.addClientParticulierRequest.idAgence);
      },
      error => {
        console.error("Erreur lors de la récupération du nom du secteur d'activité :", error);
        
      }
    );
  } else {
    this.addClientParticulierRequest.nomAgence = "";
  }
}


// Méthode appelée lorsqu'une situation immobilier est sélectionné
onSituationImmobilierSelected(): void {
  
  if (this.selectedSitImmId !== 0) {
    this.refservice.getSituationImmobilierEntrepriseById(this.selectedSitImmId).subscribe(
      nom => {
        this.addClientParticulierRequest.idSituationImmobilierParticulier = this.selectedSitImmId;
        this.addClientParticulierRequest.situationImmobilier = nom;
        
         console.log("Situation Immobilier ",this.addClientParticulierRequest.situationImmobilier);
        console.log("Id",this.addClientParticulierRequest.idSituationImmobilierParticulier);
      },
      error => {
        console.error("Erreur lors de la récupération du nom du situation immobilier :", error);
       
      }
    );
  } else {
    this.addClientParticulierRequest.situationImmobilier = "";
  }
}

// Méthode appelée lorsqu'une situation Familiale est sélectionné
onSituationFamilialeSelected(): void {
  
  if (this.selectedSitFamId !== 0) {
    this.refservice.getSituationFamilialeParticulierById(this.selectedSitFamId).subscribe(
      nom => {
        this.addClientParticulierRequest.idSituationFamilialeParticulier = this.selectedSitFamId;
        this.addClientParticulierRequest.situationFamiliale = nom;
        
         console.log("Situation Familiale",this.addClientParticulierRequest.situationFamiliale);
        console.log("Id",this.addClientParticulierRequest.idSituationFamilialeParticulier);
      },
      error => {
        console.error("Erreur lors de la récupération du nom du situation familiale :", error);
        
      }
    );
  } else {
    this.addClientParticulierRequest.situationFamiliale = "";
  }
}



}
