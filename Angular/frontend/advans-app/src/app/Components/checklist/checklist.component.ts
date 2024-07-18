import { Component, OnInit } from '@angular/core';
import { Bool, CheckList } from '../../models/CheckList.model';
import { CreditsService } from '../../Services/credits.service';
import { OperationsService } from '../../Services/operations.service';
import { Router } from '@angular/router';
import { DemandeCredit } from '../../models/DemandeCredit.model';
import { AuthGuard } from '../../guards/auth.guard';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrl: './checklist.component.css'
})
export class ChecklistComponent implements OnInit {
  userName: string= AuthGuard.username;
  statutCheckList: string = ''; // Variable pour stocker le statut
  errorMessage= "";
  successMessage= "";
  checklistExists: boolean = false;

  checklistequest :  CheckList = {
  idCheckList : 0 ,
  verifIDClient: null,
  verifLocalClient : null,
  verifClientPolitique : null,
  verifAutorisationActivite : null ,
  verifPhotoGarant : null ,
  verifIDGarant : null ,
  verifFormDemandeSigne : null ,
  verifContratCreditSigne : null ,
  verifContratGarantieSigne : null ,
  verifFicheGarantSigne : null ,
  verifFicheClientSigne : null ,
  verifConditionsGenSigne : null ,
  verifPhotoClient : null,
  dateDebutCheckList : new Date(),
  dateFinCheckList: null,
  dureeCheckList: 0 ,
  idDemande : 0 
}
demanded: DemandeCredit | null = null;
bools = Object.values(Bool);
  constructor(private creditService: CreditsService, private operationService: OperationsService,private router:Router) { }

  ngOnInit(): void {
    this.checklistequest.idDemande= this.creditService.getIdDemande()
    this.getDemande(this.checklistequest.idDemande);

    this.operationService.checkCheckListExists( this.checklistequest.idDemande).subscribe(exists => {
      
      if (exists === false) {
        this.checklistExists = false;
      } else {
        this.checklistExists = true;
        }
    });

    this.statutCheckList = this.creditService.getStatut();
    console.log('Le statut de la demande est :', this.statutCheckList );
  }

   // Méthode pour vérifier si le statut est Convenable
 isStatutConvenable(): boolean {
  return this.statutCheckList === 'Vérifications avant comité' && this.userName === 'Responsable des relations client';
}

  addChecklist(){
    this.operationService.AddCheckList(this.checklistequest)
    .subscribe({
      next : (checklist) => {
        console.log("id du checklist :" ,checklist.idCheckList);
        // this.router.navigate(['/nav/operations', this.checklistequest.idDemande]) ;
        this.successMessage = "Votre checklist a été ajoutée avec succès."
        // console.log(this.checklistequest);
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

    this.operationService.updateDateCheckList(this.checklistequest.idCheckList).subscribe(
      (response: CheckList) => {
        console.log('Analyse mise à jour:', response);
        // Autres actions après la mise à jour réussie
      },
      (error) => {
        console.error('Erreur lors de la mise à jour du checklist:', error);
      }
    );

    this.router.navigate(['/nav/list']) ;
  }

}
