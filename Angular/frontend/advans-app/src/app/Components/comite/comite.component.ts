import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Comite, Decision, InteractiviteDecideur } from '../../models/Comite.model';
import { CreditsService } from '../../Services/credits.service';
import { OperationsService } from '../../Services/operations.service';
import { Router } from '@angular/router';
import { DemandeCredit } from '../../models/DemandeCredit.model';
import { AuthGuard } from '../../guards/auth.guard';

@Component({
  selector: 'app-comite',
  templateUrl: './comite.component.html',
  styleUrl: './comite.component.css'
})
export class ComiteComponent implements OnInit {
  userName: string= AuthGuard.username;
  statutComite: string = ''; // Variable pour stocker le statut
  successMessage= "";
  errorMessage= "";
  ComiteExists: boolean = false;

  comiterequest : Comite ={
    idComite  : 0,
    idDemande : 0,
    raison : ''   ,
    montant : '' ,
    commentaires : '' ,
    dateDebutComite : new Date() ,
    dateFinComite : null,
    dureeComite : 0 ,
    decision : null
}

decisions = Object.values(Decision);
interactivitesDecideur: InteractiviteDecideur[] = [];

  constructor(private creditService: CreditsService, private operationService: OperationsService,private router:Router, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.comiterequest.idDemande= this.creditService.getIdDemande()
    
    // this.comiterequest.idComite= this.operationService.getIdcomite()
    // console.log("idcomite",  this.comiterequest.idComite)
    this.updateComiteIds();
    
    this.operationService.getAllInteractiviteById(this.comiterequest.idDemande!)
      .subscribe({
        next: (interactivite) => {
          this.interactivitesDecideur = interactivite;
          console.log("listaaa", this.interactivitesDecideur);
        },
        error: (error) => {
          console.log(error);
        }
      });

    
      this.statutComite = this.creditService.getStatut();
      console.log('Le statut de la demande est :', this.statutComite );


  }

   // Méthode pour vérifier si le statut est "Analyse"
 isStatutConvenable(): boolean {
  return this.statutComite === 'Comité' && this.userName === 'Chef d\'agence';
}

  addComite(){
    this.operationService.AddComite(this.comiterequest)
    .subscribe({
      next : (comite) => {
        console.log("id du comite :" ,comite.idComite);
        // this.router.navigate(['/nav/operations', this.comiterequest.idDemande]) ;
        this.successMessage = "Votre comite a été ajoutée avec succès."
        // console.log(this.comiterequest);
    },
    error: (error) => {
      this.errorMessage ="Une erreur est survenue. Veuillez réessayer.";
      console.log(error);
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

    this.operationService.updateDateComite(this.comiterequest.idComite).subscribe(
      (response: Comite) => {
        console.log('Comite mise à jour:', response);
        // Autres actions après la mise à jour réussie
      },
      (error) => {
        console.error('Erreur lors de la mise à jour du comite:', error);
      }
    );
    this.router.navigate(['/nav/list']) ;
  }


  

}
