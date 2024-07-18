import { Component, OnInit } from '@angular/core';
import {ClientEntreprise, Frequence, Segment, SituationImmobilierEntreprise, TypePointVente, Vente } from '../../../models/ClientEntreprise.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from '../../../Services/clients.service';
import { Activite, RefAgence, SecteurActivite, SousActivite } from '../../../models/ClientParticulier.model';
import { RefServiceService } from '../../../Services/ref-service.service';

@Component({
  selector: 'app-add-client-entreprise',
  templateUrl: './add-client-entreprise.component.html',
  styleUrl: './add-client-entreprise.component.css'
})
export class AddClientEntrepriseComponent implements OnInit{

  selectedSecteurActiviteId: number = 0;
  nomSecteurActivite: string = "";
//
selectedActiviteId: number = 0;
  nomActivite: string = "";
  //
  selectedSousActiviteId: number = 0;
  nomSousActivite: string = "";
  //

   //
   selectedAgecneId: number = 0;
   nomAgence: string = "";
   //
     //
     selectedSitImmId: number = 0;
     situationImmobilier: string = "";

  secteursActivite: SecteurActivite[] = [];
  activite:Activite[] = [];
  sousActivite : SousActivite[] = [];
  agences : RefAgence[] = [];
  situationsImmobilier : SituationImmobilierEntreprise []= [];

  typepointsVente: TypePointVente[]=[];
  errorMessage= "";


  ventes: Vente[] = [];
  nouvelleVente: Vente = {
    idvente : 0,
    idClientEntreprise : 0,
    frequence: Frequence.Journalier,
    valeurHaute: null,
    valeurMoyenne: null,
    valeurBasse: null
  };
  afficherFormulaire = false;


  addClientEntrepriseRequest: ClientEntreprise = {
    idClientEntreprise: 0,
    Segment: Segment.Client_Entreprise ,
    nomAgence: '' ,
    idAgence:0,
    gestionnaire: '' ,
    telephone: '',
    idSituationImmobilierEntreprise: 0,
    situationImmobilier: ''  ,
    cycle: 0  ,
    dateDerniereVisite: new Date() ,
    dateCreationEntreprise: new Date()   ,
    dateCreation: new Date() ,
    chiffreAffaireMensuel: ''  ,
    nombreEmployes: null  ,
    nomSecteurActivite: '' ,
    nomSousActivite: '' ,
    nomActivite: '',
    interlocuteurPrincipal : '' ,
    sigle : '' ,
    ville: '' ,
    identiteClient: '',
    nbrCreditBeneficies: 0,
    nbrPointsVente : 0,
    raisonSociale : '',
    ventes: [],
    approvisionnements: [],
    creditRecents: [] ,
    pointsVente: []  ,
    comptesBancaire: []  ,
    depenses: [] ,
    compte: [] 
  } ;

  frequences = Object.values(Frequence);
  //agences = Object.values(NomAgence);
  //secteurs = Object.values(SecteurAct) ;
  //sousactivites = Object.values(SousActivite) ;
  //activites  = Object.values(Activite) ;

  //SituationImmobilierEntreprises = Object.values(SituationImmobilierEntreprise);



  constructor(private route: ActivatedRoute, private clientService: ClientsService, private refservice : RefServiceService ,private router:Router){

  }

  ngOnInit(): void {
    this.refservice.GetAllSAE().subscribe(
      data =>{
        this.secteursActivite = data;
      }
    );
    this.refservice.GetAllAE().subscribe(
      data =>{
        this.activite = data;
      }
    );
    this.refservice.GetAllSsAE().subscribe(
      data =>{
        this.sousActivite = data;
      }
    );
    this.refservice.GetAllAgences().subscribe(
      data =>{
        this.agences = data;
      }
    );
    this.refservice.GetAllSIE().subscribe(
      data =>{
        this.situationsImmobilier = data;
      }
    );
    this.refservice.GetAllTypesPV().subscribe(
      data =>{
        this.typepointsVente = data;
      }
    );
  }

  AddClientEntreprise() {
    this.clientService.AddClientEntreprise(this.addClientEntrepriseRequest)
    .subscribe({
      next : (clientEntreprise) => {
        console.log("id du client est :" ,clientEntreprise.idClientEntreprise);
        this.clientService.setIdClientEntreprise(clientEntreprise.idClientEntreprise!);
        this.router.navigate(['/nav/add-tabsentreprise']) ;
        
    },
    error: (error) => {
      this.errorMessage ="Une erreur est survenue. Veuillez réessayer.";
      console.log(error);
      
    }

})}


onSecteurActiviteSelected(): void {
  
  if (this.selectedSecteurActiviteId !== 0) {
    this.refservice.getNomSecteurActiviteById(this.selectedSecteurActiviteId).subscribe(
      nom => {
        this.addClientEntrepriseRequest.nomSecteurActivite = nom;
        this.addClientEntrepriseRequest.idSecteurActivite=this.selectedSecteurActiviteId;
      },
      error => {
        console.error("Erreur lors de la récupération du nom du secteur d'activité :", error);
      }
    );
  } else {
    this.addClientEntrepriseRequest.nomSecteurActivite = "";
  }
}
//
onActiviteSelected(): void {
  
  if (this.selectedActiviteId !== 0) {
    this.refservice.getNomActiviteEntrepriseById(this.selectedActiviteId).subscribe(
      nom => {
        this.addClientEntrepriseRequest.idactivite = this.selectedActiviteId;
        this.addClientEntrepriseRequest.nomActivite = nom;
        console.log("Nom",this.addClientEntrepriseRequest.nomActivite);
        console.log("Id",this.addClientEntrepriseRequest.idactivite);
      },
      error => {
        console.error("Erreur lors de la récupération du nom de l'activite :", error);
        console.log("Error Nom",this.addClientEntrepriseRequest.nomActivite);
        console.log("Id",this.addClientEntrepriseRequest.idactivite);
      }
    );
  } else {
    this.addClientEntrepriseRequest.nomActivite = "";
  }
}
//
onSousActiviteSelected(): void {
  
  if (this.selectedSousActiviteId !== 0) {
    this.refservice.getNomSousActiviteEntrepriseById(this.selectedSousActiviteId).subscribe(
      nom => {
        this.addClientEntrepriseRequest.idsousActivite = this.selectedSousActiviteId;
        this.addClientEntrepriseRequest.nomSousActivite = nom;
        console.log("Nom",this.addClientEntrepriseRequest.nomSousActivite);
        console.log("Id",this.addClientEntrepriseRequest.idsousActivite);
      },
      error => {
        console.error("Erreur lors de la récupération du nom de Sous Activite :", error);
        console.log("Error Nom",this.addClientEntrepriseRequest.nomActivite);
        console.log("Id",this.addClientEntrepriseRequest.idactivite);
      
      }
    );
  } else {
    this.addClientEntrepriseRequest.nomSousActivite = "";
  }
}



// Méthode appelée lorsqu'une agence est sélectionné
onAgenceSelected(): void {
  
  if (this.selectedAgecneId !== 0) {
    this.refservice.getNomAgenceById(this.selectedAgecneId).subscribe(
      nom => {
        this.addClientEntrepriseRequest.idAgence = this.selectedAgecneId;
        this.addClientEntrepriseRequest.nomAgence = nom;
        
         console.log("Nom",this.addClientEntrepriseRequest.nomAgence);
        console.log("Id",this.addClientEntrepriseRequest.idAgence);
      },
      error => {
        console.error("Erreur lors de la récupération du nom du secteur d'activité :", error);
       
      }
    );
  } else {
    this.addClientEntrepriseRequest.nomAgence = "";
  }
}

// Méthode appelée lorsqu'une situation immobilier est sélectionné
onSituationImmobilierSelected(): void {
  
  if (this.selectedSitImmId !== 0) {
    this.refservice.getSituationImmobilierEntrepriseById(this.selectedSitImmId).subscribe(
      nom => {
        this.addClientEntrepriseRequest.idSituationImmobilierEntreprise = this.selectedSitImmId;
        this.addClientEntrepriseRequest.situationImmobilier = nom;
        
         console.log("Situation Immobilier ",this.addClientEntrepriseRequest.situationImmobilier);
        console.log("Id",this.addClientEntrepriseRequest.idSituationImmobilierEntreprise);
      },
      error => {
        console.error("Erreur lors de la récupération du nom du secteur d'activité :", error);
       
      }
    );
  } else {
    this.addClientEntrepriseRequest.nomAgence = "";
  }
}









//vente 


}
