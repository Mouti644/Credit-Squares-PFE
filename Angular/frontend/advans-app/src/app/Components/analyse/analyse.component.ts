import { Component, OnInit } from '@angular/core';
import { Analyse } from '../../models/Analyse.model';
import { CreditsService } from '../../Services/credits.service';
import { OperationsService } from '../../Services/operations.service';
import { Router } from '@angular/router';
import { DemandeCredit, Garantie, Statut, TypeClient } from '../../models/DemandeCredit.model';
import { AuthGuard } from '../../guards/auth.guard';
import { ClientParticulier, CreditRecentParticulier } from '../../models/ClientParticulier.model';
import { ClientsService } from '../../Services/clients.service';
import { ClientEntreprise } from '../../models/ClientEntreprise.model';

@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.component.html',
  styleUrl: './analyse.component.css'
})
export class AnalyseComponent implements OnInit{
  userName: string= AuthGuard.username;
  statutAnalyse: string = ''; // Variable pour stocker le statut de l'analyse
  successMessage= "";
  errorMessage= "";
  analyseExists: boolean = false;

  idClientParticulier: number = 0;
  idClientEntreprise: number = 0;
  typeclient: string = '';

  analyserequest :Analyse = {

    idAnalyse: 0,
    numVersion: 0 ,
    pertinenceProjet: '' ,
    historiqueCreditClient : '' ,
    analyseGaranties : '' ,
    analyseRisqueCommercial : '',
    montantPropose : '' ,
    tautInteret : '' ,
    hypothese : '' ,
    explicationChoix : '' ,
    avisStabiliteClient : '' ,
    dateDebutAnalyse : new Date(),
    dateFinAnalyse : null,
    
    dureeAnalyse : 0 ,
    idDemande : 0
}

creditRecent: CreditRecentParticulier[]=[];
garantie: Garantie[]=[];
demanded: DemandeCredit | null = null;

  constructor( private creditService: CreditsService, private operationService: OperationsService,private router:Router, private clientService : ClientsService) { }

  ngOnInit(): void {
    this.analyserequest.idDemande= this.creditService.getIdDemande()
    this.getDemande(this.analyserequest.idDemande);
    console.log("eeet", this.demanded)

    this.operationService.checkAnalyseExists( this.analyserequest.idDemande).subscribe(exists => {
      
      if (exists === false) {
        this.analyseExists = false;
      } else {
        this.analyseExists = true;
        }
  
    });

    this.idClientParticulier=this.clientService.getIdClientParticulier();
    this.idClientEntreprise=this.clientService.getIdClientEntreprise();
    this.typeclient=this.clientService.gettypeclient();

    

    console.log("idClientParticulier", this.idClientParticulier);
    console.log("idClientEntreprise", this.idClientEntreprise);
    console.log("typeclient", this.typeclient);

    //RecentCredits
    if (this.typeclient === 'Client Particulier') {
      this.clientService.getAllCRP(this.idClientParticulier)
        .subscribe({
          next: (creditrecent) => {
            this.creditRecent = creditrecent;
          },
          error: (Response) => {
            console.log("Erreur", Response);
          }
        });
    } else if (this.typeclient === 'Client Entreprise') {
      this.clientService.getAllCRP(this.idClientEntreprise)
        .subscribe({
          next: (creditrecent) => {
            this.creditRecent = creditrecent;
          },
          error: (Response) => {
            console.log("Erreur", Response);
          }
        });
    }

    this.creditService.getAllGaranties(this.analyserequest.idDemande)
    .subscribe({
      next: (garantie) => {
        this.garantie = garantie;
      },
      error: (Response) => {
        console.log("Erreur de Get Garanties",Response);
      }
    });

    this.statutAnalyse = this.creditService.getStatut();
    console.log('Le statut de la demande est :', this.statutAnalyse );
    console.log('L\'utilisateur est :', this.userName );
  }

 // Méthode pour vérifier si le statut est "Analyse"
 isStatutAnalyse(): boolean {
  return this.statutAnalyse === 'Analyse' && this.userName === 'Responsable des relations client';
}

  addAnalyse(){
    this.operationService.AddAnalyse(this.analyserequest)
    .subscribe({
      next : (analyse) => {
        console.log("id de l'analyse :" ,analyse.idAnalyse);
        this.successMessage = "Votre Analyse a été ajoutée avec succès."
        console.log(this.analyserequest);
       
    },
    error: (error) => {
      this.errorMessage ="Une erreur est survenue. Veuillez réessayer.";
      console.log(error);
    }
})
  }
//récupérer les données du client (de la table demande)
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
    this.operationService.updateDateAnalyse(this.analyserequest.idAnalyse).subscribe(
      (response: Analyse) => {
        console.log('Analyse mise à jour:', response);
        // Autres actions après la mise à jour réussie
      },
      (error) => {
        console.log('IIIIIIIIIIIIIIIIIIIIDDDDDDDDDDDD:', this.analyserequest.idAnalyse);
        console.error('Erreur lors de la mise à jour de l\'analyse:', error);
      }
    );
    this.router.navigate(['/nav/list']) ;

  }

  setStatutSelectionne(statut: string) {
    this.creditService.setStatut(statut);
  }

}
