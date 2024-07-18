import { Component, OnInit } from '@angular/core';
import { CreditsService } from '../../Services/credits.service';
import { OperationsService } from '../../Services/operations.service';
import { Router } from '@angular/router';
import { RisqueAnalyse, evalProjet, evalRisqueClient ,evalRisqueCommercial , evalGaranties} from '../../models/RisqueAnalyse.model';
import { DemandeCredit } from '../../models/DemandeCredit.model';
import { AuthGuard } from '../../guards/auth.guard';

@Component({
  selector: 'app-edit-ra',
  templateUrl: './edit-ra.component.html',
  styleUrl: './edit-ra.component.css'
})
export class EditRAComponent implements OnInit{
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
  this.operationService.GetRisqueAnalyseById(this.risqueanalyserequest.idDemande).subscribe(
    data =>{
      this.risqueanalyserequest = data;
    }
  );
  this.statutRA = this.creditService.getStatut();
  console.log('Le statut de la demande est :', this.statutRA );
}

 // Méthode pour vérifier si le statut est "Analyse"
 isStatutConvenable(): boolean {
  return this.statutRA === 'Analyse risque' && this.userName === 'Analyste risque crédit';
}

updateRA(){
  this.operationService.updateRisqueAnalyse(this.risqueanalyserequest.idRA!,this.risqueanalyserequest)
  .subscribe({
    next:(RA) => {
      console.log("success")
      this.successMessage = "Votre Risque Analyse a été mis a jour avec succès."
    },
    error: (error) => {
      
      console.log(error);
      console.log(this.risqueanalyserequest);
    }
  })}


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
