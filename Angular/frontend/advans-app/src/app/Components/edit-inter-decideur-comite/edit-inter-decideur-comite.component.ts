import { Component, OnInit } from '@angular/core';
import { Comite, Decision, InteractiviteDecideur } from '../../models/Comite.model';
import { DemandeCredit } from '../../models/DemandeCredit.model';
import { AuthGuard } from '../../guards/auth.guard';
import { CreditsService } from '../../Services/credits.service';
import { OperationsService } from '../../Services/operations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-inter-decideur-comite',
  templateUrl: './edit-inter-decideur-comite.component.html',
  styleUrl: './edit-inter-decideur-comite.component.css'
})
export class EditInterDecideurComiteComponent implements OnInit {
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

    this.operationService.GetInteractiviteByid(this.interactiviterequest.idDemande).subscribe(
      data =>{
        this.interactiviterequest = data;
      }
    );
    

    this.operationService.checkComiteExists(this.interactiviterequest.idDemande).subscribe(exists => {
      console.log("exists :", exists);
      if (exists === false) {
        this.ComiteExists = false;
      } else {
        this.ComiteExists = true;
      }
      
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

  
  updateInteractivite(){

    this.operationService.updateinteractivite(this.interactiviterequest.idInterDecideur!,this.interactiviterequest)
    .subscribe({
      next:(interactivite) => {
        console.log("success")
        this.router.navigate(['/nav/operations', this.interactiviterequest.idDemande]);
      },
      error: (error) => {
        
        console.log(error);
        console.log(this.comiterequest);
      }
    })
  }

  updateComiteIds() {
    this.operationService.updateComiteIds().subscribe({
      next: (response) => {
        console.log("Les IdComite ont été mis à jour avec succès.", response);
      },
      error: (error) => {
        console.error("Une erreur est survenue lors de la mise à jour des IdComite.", error);
      }
    });
  }

}
