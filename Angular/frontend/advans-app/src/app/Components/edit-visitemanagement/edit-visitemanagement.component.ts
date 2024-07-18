import { Component, OnInit } from '@angular/core';
import { Decision, VisiteManagement } from '../../models/VisiteManagement.model';
import { CreditsService } from '../../Services/credits.service';
import { OperationsService } from '../../Services/operations.service';
import { Router } from '@angular/router';
import { DemandeCredit } from '../../models/DemandeCredit.model';
import { AuthGuard } from '../../guards/auth.guard';

@Component({
  selector: 'app-edit-visitemanagement',
  templateUrl: './edit-visitemanagement.component.html',
  styleUrl: './edit-visitemanagement.component.css'
})
export class EditVisitemanagementComponent implements OnInit {
  userName: string= AuthGuard.username;
  statutVM: string = ''; // Variable pour stocker le statut

  errorMessage= "";
  successMessage= "";
  checVMExists: boolean = false;
  visiteManagementrequest: VisiteManagement = {
    idVM : 0,
    elementAverifier : '' ,
    elementRecueillis : '' ,
    avisDecideur : '' ,
    dateDebutVM : new Date() ,
    dateFinVM :null ,
    dureeVM : 0  ,
    decision:null,
    idDemande : 0 ,
}

decisions = Object.values(Decision);
demanded: DemandeCredit | null = null;

  constructor(private creditService: CreditsService, private operationService: OperationsService,private router:Router) { }

  ngOnInit(): void {
    this.visiteManagementrequest.idDemande= this.creditService.getIdDemande()
    this.getDemande(this.visiteManagementrequest.idDemande);
    console.log("id demande:",this.visiteManagementrequest.idDemande )
    this.operationService.GetVisiteManagementById(this.visiteManagementrequest.idDemande).subscribe(
      data =>{
        this.visiteManagementrequest = data;
      }
    );
    this.statutVM = this.creditService.getStatut();
    console.log('Le statut de la demande est :', this.statutVM );
  }

     // Méthode pour vérifier si le statut est "Analyse"
 isStatutConvenable(): boolean {
  return this.statutVM === 'Attente accord client' && this.userName === 'Responsable des relations client';
}

  updateVM(){
    this.operationService.updateVisiteManagement(this.visiteManagementrequest.idVM!,this.visiteManagementrequest)
  .subscribe({
    next:(VM) => {
      console.log("success")
      this.successMessage = "Votre Visite Management a été mis a jour avec succès."
    },
    error: (error) => {
      
      console.log(error);
      console.log(this.visiteManagementrequest);
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
    this.operationService.updateDateVM(this.visiteManagementrequest.idVM).subscribe(
      (response: VisiteManagement) => {
        console.log('VM mise à jour:', response);
        // Autres actions après la mise à jour réussie
      },
      (error) => {
        console.error('Erreur lors de la mise à jour du VM:', error);
      }
    );
    this.router.navigate(['/nav/list']) ;

  }

}
