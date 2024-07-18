import { ChangeDetectorRef, Component } from '@angular/core';
import { Comite, Decision,InteractiviteDecideur } from '../../models/Comite.model';
import { CreditsService } from '../../Services/credits.service';
import { OperationsService } from '../../Services/operations.service';
import { Router } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';

@Component({
  selector: 'app-edit-comite',
  templateUrl: './edit-comite.component.html',
  styleUrl: './edit-comite.component.css'
})
export class EditComiteComponent {
  userName: string= AuthGuard.username;

  statutComite: string = ''; // Variable pour stocker le statut
  errorMessage= "";
  successMessage= "";
  ComiteExists: boolean = true;

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

  ngOnInit() {
    this.comiterequest.idDemande= this.creditService.getIdDemande()
    this.operationService.GetComiteById(this.comiterequest.idDemande).subscribe(
      data =>{
        this.comiterequest = data;
      }
    );
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
  return this.statutComite === 'Comité' && this.userName === 'Chef d\'agence' ;
}

  updateComiteIds() {
    this.operationService.updateComiteIds().subscribe({
      next: (response) => {
        console.log("Les IdComite ont été mis à jour avec succès.", response);
        this.successMessage = "Votre comite a été mis a jour avec succès."
      },
      error: (error) => {
        console.error("Une erreur est survenue lors de la mise à jour des IdComite.", error);
      }
    });
  }


  updateComite(){

    this.operationService.updateComite(this.comiterequest.idComite!,this.comiterequest)
    .subscribe({
      next:(comite) => {
        console.log("success")
        // this.router.navigate(['/nav/operations', this.comiterequest.idDemande]);
      },
      error: (error) => {
        
        console.log(error);
        console.log(this.comiterequest);
      }
    })
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
        console.log('Analyse mise à jour:', response);
        // Autres actions après la mise à jour réussie
      },
      (error) => {
        console.error('Erreur lors de la mise à jour du comite:', error);
      }
    );
    this.router.navigate(['/nav/list']) ;
  }


}
