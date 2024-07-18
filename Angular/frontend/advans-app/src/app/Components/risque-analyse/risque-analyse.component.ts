import { Component } from '@angular/core';
import { RisqueAnalyse, evalProjet, evalRisqueClient ,evalRisqueCommercial , evalGaranties} from '../../models/RisqueAnalyse.model';
import { CreditsService } from '../../Services/credits.service';
import { Router } from '@angular/router';
import { OperationsService } from '../../Services/operations.service';
import { DemandeCredit } from '../../models/DemandeCredit.model';
import { AuthGuard } from '../../guards/auth.guard';

@Component({
  selector: 'app-risque-analyse',
  templateUrl: './risque-analyse.component.html',
  styleUrl: './risque-analyse.component.css'
})
export class RisqueAnalyseComponent {
  userName: string= AuthGuard.username;
  statutRA: string = ''; // Variable pour stocker le statut
  successMessage= "";
  errorMessage= "";
  checkRAExists: boolean = false;

  risqueanalyserequest : RisqueAnalyse ={
    idRA : 0 ,
    evalProjet :null  ,
    evalRisqueClient :null ,
    evalRisqueCommercial :null ,
    evalGaranties :null ,
    recommandationAnalyste : '',
    commentaires : '' ,
    dateDebutRA : new Date() ,
    dateFinRA :null ,
    dureeRA : 0  ,
    idDemande :  0 
}
demanded: DemandeCredit | null = null;
evalsProjet = Object.values(evalProjet);
evalsRisqueClient = Object.values(evalRisqueClient);
evalsRisqueCommercial = Object.values(evalRisqueCommercial);
evalsGaranties = Object.values(evalGaranties);

constructor(private creditService: CreditsService, private operationService: OperationsService,private router:Router) { }

ngOnInit(): void {
  this.risqueanalyserequest.idDemande= this.creditService.getIdDemande()
  this.getDemande(this.risqueanalyserequest.idDemande);

  this.statutRA = this.creditService.getStatut();
    console.log('Le statut de la demande est :', this.statutRA );
}

   // Méthode pour vérifier si le statut est "Analyse"
   isStatutConvenable(): boolean {
    return this.statutRA === 'Analyse risque' && this.userName === 'Analyste risque crédit';
  }

addRA(){
  this.operationService.AddRisqueAnalyse(this.risqueanalyserequest)
  .subscribe({
    next : (risqueAnalyse) => {
      console.log("id du Risque Analyse :" ,risqueAnalyse.idRA);
      // this.router.navigate(['/nav/operations', this.risqueanalyserequest.idDemande]) ;
      this.successMessage = "Votre Risque Analyse a été ajoutée avec succès."
      // console.log(this.risqueanalyserequest);
  },
  error: (error) => {
    this.errorMessage ="Une erreur est survenue. Veuillez réessayer.";
    console.log(error);
  }
})
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

  this.operationService.updateDateRA(this.risqueanalyserequest.idRA).subscribe(
    (response: RisqueAnalyse) => {
      console.log('Analyse mise à jour:', response);
      // Autres actions après la mise à jour réussie
    },
    (error) => {
      console.error('Erreur lors de la mise à jour du RA:', error);
    }
  );
  this.router.navigate(['/nav/list']) ;
}

}
