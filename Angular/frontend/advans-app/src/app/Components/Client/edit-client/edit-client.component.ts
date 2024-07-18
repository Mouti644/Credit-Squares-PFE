import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from '../../../Services/clients.service';
import { Activite, ClientParticulier, CompteBancaireParticulier, CompteParticulier, CreditRecentParticulier, RefAgence, ReferentFamiliaux, SecteurActivite, Segment, Sex, SituationFamilialeParticulier, SituationImmobilierParticulier, SousActivite, TypeCompte } from '../../../models/ClientParticulier.model';
import { AuthGuard } from '../../../guards/auth.guard';
import { RefServiceService } from '../../../Services/ref-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeletePartDialogComponentComponent } from '../../confirm-delete-part-dialog-component/confirm-delete-part-dialog-component.component';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrl: './edit-client.component.css'
})
export class EditClientComponent implements OnInit {
  userName: string= AuthGuard.username;
  showCompteParticulierForm: boolean = false;
  showReferentFamiliauxForm: boolean = false;
  showCompteBancaireForm: boolean = false;
  showCreditRecentForm: boolean = false;

  errorMessage= "";

  CompteBancaireDetails: CompteBancaireParticulier = {
    idCompte: 0,
    idClientParticulier: 0,
    banque: ''  ,
    typeCompte: TypeCompte.Courant ,
    solde: ''  
  };

  CreditRecentDetails: CreditRecentParticulier = {
    idCRecent: 0,
      idClientParticulier: 0,
      objet: '',
      duree:'' ,
      montantInitial: '' ,
      enCoursRestant: '' ,
      montantEchMens: ''  ,
      nbrEchRestant: ''  ,
      nbrEchEnRetard: ''  ,
      nbrMaxJoursEnRetard: ''
  }

  ReferentFamiliauxDetails: ReferentFamiliaux = {
    idRefFam: 0,
      idClientParticulier: 0,
      nom: '',
      prenom: '',
      telephone: '',
      relation: ''
  }

  CompteParticulierDetails: CompteParticulier = {
    idCompteParticulier:  0 ,
    idClientParticulier: 0 ,
    dateOuvertureCompte: new Date() ,
    deviseCompte: ''
  }


  ClientParticulierDetails: ClientParticulier = {
    idClientParticulier: 0,
    segment: Segment.Client_Particulier ,
    nom: ''  ,
    prenom: '' ,
    nomAgence: '' ,
    idAgence:0,
    gestionnaire: '' ,
    idSituationFamilialeParticulier :0 ,
    situationFamiliale : '',
    nombre_enfants: 0 ,
    idSituationImmobilierParticulier: 0,
    situationImmobilier: ''  ,
    sex: Sex.Male ,
    age:'',
    dateNaissance :new Date(),
    telephone: '',
    cycle: 0 ,
    dateDerniereVisite: new Date() ,
    dateCreation: new Date(),
    fonctionProfessionnelle:'' ,
    salaireNetMensuel:'' ,
    autresRevenusMensuel:'',
    nomSecteurActivite: '' ,
    idSecteurActivite:0 ,
    nomSousActivite: '' ,
    nomActivite: '' ,
    
    ville: ''  ,
    nbrCreditBeneficies: 0 ,
    nbrPointsVente : 0,
    identiteClient: ''  ,
    creditRecents: [] ,
    referentsFamiliaux: [] ,
    comptesBancaire: [] ,
    compte:[]  
  };

  selectedSecteurActiviteId: number = 0;
  nomSecteurActivite: string = "";
 

  secteursActivite: SecteurActivite[] = [];
  activite:Activite[] = [];
  sousActivite : SousActivite[] = [];
  agences : RefAgence []= [];  
  situationsImmobilier : SituationImmobilierParticulier []= [];
  situationsFamiliale : SituationFamilialeParticulier []= [];

  sexs = Object.values(Sex);

  constructor(private dialog: MatDialog, private route: ActivatedRoute, private clientService: ClientsService, private router:Router,private refservice : RefServiceService){

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          const clientParticulierId = parseInt(id, 10); // Utiliser parseInt avec la base 10
          this.clientService.getClientParticulier(clientParticulierId)
          .subscribe({
            next: (response) => {
              this.ClientParticulierDetails = response;
              console.log("Voiiila",this.ClientParticulierDetails)
              this.selectedSecteurActiviteId = this.ClientParticulierDetails.idSecteurActivite;
            }
          })
        }
      }
    })

    this.refservice.GetAllSAP().subscribe(
      data =>{
        this.secteursActivite = data;
      }
    );

  }

  // Méthode appelée lorsqu'un secteur d'activité est sélectionné
// onSecteurActiviteSelected(): void {
//   this.ClientParticulierDetails.idSecteurActivite = this.selectedSecteurActiviteId
//   if (this.selectedSecteurActiviteId !== 0) {
//     this.refservice.getNomSecteurActiviteById(this.selectedSecteurActiviteId).subscribe(
//       nom => {
//         this.ClientParticulierDetails.nomSecteurActivite = nom;
//       },
//       error => {
//         console.error("Erreur lors de la récupération du nom de secteur :", error);
//       }
//     );
//   } else {
//     this.ClientParticulierDetails.nomSecteurActivite = "";
//   }
// }

  updateClientParticulier() {

    // this.onSecteurActiviteSelected();

    console.log("Nouvelles valeurs envoyées au backend : ", this.ClientParticulierDetails); // Afficher les nouvelles valeurs à envoyer
    this.clientService.updateClientParticulier(this.ClientParticulierDetails.idClientParticulier!,this.ClientParticulierDetails)
    .subscribe({
      next:(ClientParticulier) => {
        // console.log("Voiiila",this.ClientParticulierDetails)
        console.log("success")
        this.router.navigate(['/nav/clients-particuliers']);
        
      },
      error: (error) => {
        
        console.log(error);
        console.log(this.ClientParticulierDetails);

      }
    })


  }


  deleteClientParticulier(id: number) {
    const dialogRef = this.dialog.open(ConfirmDeletePartDialogComponentComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.clientService.deleteClientParticulier(id).subscribe({
          next: () => this.router.navigate(['/nav/clients-particuliers']),
          error: (error) => console.error(error)
        });
      }
    });
  }

//Compte particulier
  toggleCompteParticulierForm() {
    this.showCompteParticulierForm = !this.showCompteParticulierForm;
  }

  submitCompteParticulier() {
    this.CompteParticulierDetails.idClientParticulier=this.ClientParticulierDetails.idClientParticulier;
    this.clientService.AddCompteParticulier(this.CompteParticulierDetails)
    .subscribe({
      next : (comptepar) => {
    },
    error: (error) => {
      this.errorMessage ="Une erreur est survenue. Veuillez réessayer.";
      console.log(error);
      console.log(this.CompteParticulierDetails)
      
    }

})}

// Referents Familiaux

toggleReferentFamiliauxForm(){
this.showReferentFamiliauxForm = !this.showReferentFamiliauxForm;
}
submitReferentFamiliaux() {
  this.ReferentFamiliauxDetails.idClientParticulier=this.ClientParticulierDetails.idClientParticulier;
  this.clientService.AddReferentFamiliaux(this.ReferentFamiliauxDetails)
  .subscribe({
    next : (RefFam) => {
  },
  error: (error) => {
    this.errorMessage ="Une erreur est survenue. Veuillez réessayer.";
    console.log(error);
    console.log(this.ReferentFamiliauxDetails)
    
  }

})}

// Compte bancaire
toggleCompteBancaireForm() {
  this.showCompteBancaireForm = !this.showCompteBancaireForm;
}

submitCompteBancaire() {
  this.CompteBancaireDetails.idClientParticulier=this.ClientParticulierDetails.idClientParticulier;
  this.clientService.AddCompteBancaireParticulier(this.CompteBancaireDetails)
  .subscribe({
    next : (CompteBancaire) => {
  },
  error: (error) => {
    this.errorMessage ="Une erreur est survenue. Veuillez réessayer.";
    console.log(error);
    console.log(this.CompteBancaireDetails)
    
  }

})}

//CreditRecent

toggleCreditRecentForm() {
  this.showCreditRecentForm = !this.showCreditRecentForm;
}
submitCreditRecent() {
  this.CreditRecentDetails.idClientParticulier=this.ClientParticulierDetails.idClientParticulier;
  this.clientService.AddCreditRecentParticulier(this.CreditRecentDetails)
  .subscribe({
    next : (CreditRecent) => {
  },
  error: (error) => {
    this.errorMessage ="Une erreur est survenue. Veuillez réessayer.";
    console.log(error);
    console.log(this.CreditRecentDetails)
    
  }

})}


redirigerVersAjoutTabsParticulier(){
  this.clientService.setIdClientParticulier(this.ClientParticulierDetails.idClientParticulier!);
  this.router.navigate(['/nav/add-tabsparticulier'])
  console.log("Id clientttt :" ,this.ClientParticulierDetails.idClientParticulier!)
}





}
