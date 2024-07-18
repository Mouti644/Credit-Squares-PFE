import { Component, OnInit } from '@angular/core';
import { Comite, Decision, InteractiviteDecideur } from '../../models/Comite.model';
import { AuthGuard } from '../../guards/auth.guard';
import { CreditsService } from '../../Services/credits.service';
import { OperationsService } from '../../Services/operations.service';
import { Router } from '@angular/router';
import { DemandeCredit } from '../../models/DemandeCredit.model';

@Component({
  selector: 'app-inter-decideur-comite',
  templateUrl: './inter-decideur-comite.component.html',
  styleUrl: './inter-decideur-comite.component.css'
})
export class InterDecideurComiteComponent implements OnInit {

  statutComite: string = ''; // Variable pour stocker le statut
  errorMessage= "";
  successMessage= "";

  interactiviterequest : InteractiviteDecideur = {
    idInterDecideur : undefined,
    idComite : undefined ,
    idDemande : 0,
    decideur : '' ,
    remarque : '' ,
    reponse : ''  
}

comiterequest : Comite ={
  idComite  : 0,
  idDemande : 0,
  raison : ''   ,
  montant : '' ,
  commentaires : '' ,
  dateDebutComite : new Date() ,
  dateFinComite : null,
  dureeComite : 0 ,
  decision : Decision.Approuve 

}
demanded: DemandeCredit | null = null;
decisions = Object.values(Decision);
idDemande : number = 0;
idComite : number = 0;
userName: string= AuthGuard.username;
ComiteExists: boolean = false;

  constructor(private creditService: CreditsService, private operationService: OperationsService,private router:Router) { }

  ngOnInit(): void {
    //const idDemande = this.creditService.getIdDemande()
    //this.idDemande = idDemande
  
    this.interactiviterequest.idDemande= this.creditService.getIdDemande()
    this.operationService.checkComiteExists(this.interactiviterequest.idDemande).subscribe(exists => {
      console.log("exists :", exists);
      if (exists === false) {
        this.ComiteExists = false;
      } else {
        this.ComiteExists = true;
      }
      console.log("Rouh zebda :", this.ComiteExists);
      // Placez ici tout autre code qui dépend de la valeur de this.ComiteExists
    });
    console.log("id demandeeee :",this.interactiviterequest.idDemande)
    

    this.getDemande(this.interactiviterequest.idDemande);

    this.statutComite = this.creditService.getStatut();
    console.log('Le statut de la demande est :', this.statutComite );

  }

    // Méthode pour vérifier si le statut est "Analyse"
 isStatutConvenable(): boolean {
  return this.statutComite === 'Comité';
}

isUserConvenable(): boolean {
  return this.statutComite === 'Comité' && this.userName === 'Chef d\'agence';
}

addInterDecideur() {
  this.interactiviterequest.decideur = this.userName;
  // this.interactiviterequest.idComite = this.idComite;
  // this.operationService.setIdcomite(this.idComite);
  // console.log("id comite:" ,this.interactiviterequest.idComite);
  this.operationService.Addinteractivite(this.interactiviterequest)
    .subscribe({
      next: (interactivite) => {
        console.log("id du Demande:", interactivite.idDemande);
        this.idDemande = interactivite.idDemande ;
        // this.router.navigate(['/nav/comite', interactivite.idDemande]);
        // console.log(this.interactiviterequest);
        this.successMessage = "Votre décision a été ajoutée avec succès."
      },
      error: (error) => {
        if (error.error === "Un enregistrement avec le même nom existe déjà dans cette demande.") {
          this.errorMessage = "Un enregistrement avec le même nom existe déjà dans cette demande.";
        } else {
          this.errorMessage = "Une erreur est survenue. Veuillez réessayer.";
        }
        console.log(error);
      }
    });
}



versComite() {
  if (this.ComiteExists == true) {
      this.router.navigate(['/nav/edit-comite', this.interactiviterequest.idDemande]);
  } else {
      this.router.navigate(['/nav/comite', this.interactiviterequest.idDemande]);
  }
}
  
getDemande(idDemande: number): void {
  this.creditService.getDemandeById(idDemande).subscribe({
    next: (response: DemandeCredit) => {
      this.demanded = response;
      console.log('demande:', this.demanded);
    },
    error: (error) => {
      console.error('Erreur lors de la récupération de la demande:', error);
    }
  });
}

}
