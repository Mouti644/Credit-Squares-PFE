import { Component, OnInit } from '@angular/core';
import { ClientEntreprise, Segment } from '../../../models/ClientEntreprise.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from '../../../Services/clients.service';
import { AuthGuard } from '../../../guards/auth.guard';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteEntreDialogComponent } from '../../confirm-delete-entre-dialog/confirm-delete-entre-dialog.component';

@Component({
  selector: 'app-edit-client-entreprise',
  templateUrl: './edit-client-entreprise.component.html',
  styleUrl: './edit-client-entreprise.component.css'
})
export class EditClientEntrepriseComponent implements OnInit{
  userName: string= AuthGuard.username;
  ClientEntrepriseDetails: ClientEntreprise = {
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
    nombreEmployes: 0  ,
    nomSecteurActivite: '' ,
    nomSousActivite: '' ,
    nomActivite: '' ,
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
  }

  constructor(private dialog: MatDialog,private route: ActivatedRoute, private clientService: ClientsService, private router:Router){

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          const clientEntrepriseId = parseInt(id, 10); // Utiliser parseInt avec la base 10
          this.clientService.getClientEntreprise(clientEntrepriseId)
          .subscribe({
            next: (response) => {
              this.ClientEntrepriseDetails = response;
            }
          })
        }
      }
    })
  }

  updateClientEntreprise() {
    this.clientService.updateClientEntreprise(this.ClientEntrepriseDetails.idClientEntreprise,this.ClientEntrepriseDetails)
    .subscribe({
      next:(ClientEntreprise) => {
        console.log("success")
        this.router.navigate(['/nav/list-clients']);
      },
      error: (error) => {
        
        console.log(error);
        console.log(this.ClientEntrepriseDetails);
      }
    })


  }



  deleteClientEntreprise(id: number) {
    const dialogRef = this.dialog.open(ConfirmDeleteEntreDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.clientService.deleteClientEntreprise(id).subscribe({
          next: () => this.router.navigate(['/nav/clients-entreprise']),
          error: (error) => console.error(error)
        });
      }
    });
  }


  redirigerVersAjoutTabsEntreprise(){
    this.clientService.setIdClientEntreprise(this.ClientEntrepriseDetails.idClientEntreprise!);
    this.router.navigate(['/nav/add-tabsentreprise'])
    console.log("Id clientttt :" ,this.ClientEntrepriseDetails.idClientEntreprise!)
  }
}
