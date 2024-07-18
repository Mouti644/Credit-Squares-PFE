import { Component, OnInit } from '@angular/core';
import { RefServiceService } from '../../Services/ref-service.service';
import { CreditsService } from '../../Services/credits.service';
import { Router } from '@angular/router';
import { CompteBancaireParticulier, CompteParticulier, CreditRecentParticulier, ReferentFamiliaux, TypeCompte } from '../../models/ClientParticulier.model';
import { ClientsService } from '../../Services/clients.service';

@Component({
  selector: 'app-tabsclientparticulier',
  templateUrl: './tabsclientparticulier.component.html',
  styleUrl: './tabsclientparticulier.component.css'
})
export class TabsclientparticulierComponent implements OnInit{

  tabsSelectionne: string = 'ReferentFamiliaux';

  errorMessage: string = "";


  addcreditRecentrequest:  CreditRecentParticulier = {
    idCRecent: 0,
    idClientParticulier: 0,
    objet: '' ,
    duree:  '' ,
    montantInitial: ''  ,
    enCoursRestant:  ''  ,
    montantEchMens:  '',
    nbrEchRestant:  '',
    nbrEchEnRetard:  '',
    nbrMaxJoursEnRetard:  ''
  } ;

  addreferentFamiliauxrequest : ReferentFamiliaux = {
    idRefFam: 0 ,
    idClientParticulier : 0,
    nom: '',
    prenom: '',
    telephone: '',
    relation:''
  }

  addcompteBancaireParticulierrequest : CompteBancaireParticulier = {
    idCompte: 0,
    idClientParticulier: 0,
    banque: '',
    typeCompte: null ,
    solde: '' 
  }

  typesCompte = Object.values(TypeCompte); // Déclaration des statuts

  addcompteParticulierrequest : CompteParticulier = {
    idCompteParticulier: undefined,
    idClientParticulier : 0 ,
    dateOuvertureCompte: new Date()  ,
    deviseCompte: '' 
}
  
  referentFamiliaux: ReferentFamiliaux[]=[];
  compteBancaireParticulier: CompteBancaireParticulier[]=[];
  creditRecent: CreditRecentParticulier[]=[];
  compteParticulier : CompteParticulier[]=[];

constructor(private clientService : ClientsService ,private creditService: CreditsService, private router:Router){}

ngOnInit(): void {
  const idClient = this.clientService.getIdClientParticulier();
  this.addcreditRecentrequest.idClientParticulier=this.clientService.getIdClientParticulier();
  this.addreferentFamiliauxrequest.idClientParticulier =this.clientService.getIdClientParticulier();
  this.addcompteBancaireParticulierrequest.idClientParticulier =this.clientService.getIdClientParticulier();
  this.addcompteParticulierrequest.idClientParticulier =this.clientService.getIdClientParticulier();


  console.log("Id du client", idClient);
//refFam
  this.clientService.getAllRF(idClient)
  .subscribe({
    next: (referentsFamiliaux) => {
      this.referentFamiliaux = referentsFamiliaux;
    },
    error: (Response) => {
      console.log("Erreur de Get Garanties",Response);
    }
  });

  //RecentCredits
  this.clientService.getAllCRP(idClient)
  .subscribe({
    next: (creditrecent) => {
      this.creditRecent = creditrecent;
    },
    error: (Response) => {
      console.log("Erreur de Get Garanties",Response);
    }
  });

  //CompteBancaire
  this.clientService.getAllCBP(idClient)
  .subscribe({
    next: (comptebancaire) => {
      this.compteBancaireParticulier = comptebancaire;
    },
    error: (Response) => {
      console.log("Erreur de Get Garanties",Response);
    }
  });
  //CompteParticulier
  this.clientService.getAllCP(idClient)
  .subscribe({
    next: (compteparticulier) => {
      this.compteParticulier = compteparticulier;
    },
    error: (Response) => {
      console.log("Erreur de Get Garanties",Response);
    }
  });
}

selectTab(tab: string) {
  this.tabsSelectionne = tab;
}

// Méthode pour obtenir le label de l'onglet sélectionné
getSelectedTabLabel(): string {
  switch (this.tabsSelectionne) {
    case 'ReferentFamiliaux':
      return 'Référents Familiaux';
    case 'CompteBancaireParticulier':
      return 'Comptes Bancaires';
    case 'CreditRecent':
      return 'Crédits Récents';
    case 'CompteParticulier':
      return 'Comptes Particulier';
    default:
      return 'Sélectionner une option';
  }
}



  //RefFam
  addRefFamil(){
    this.clientService.AddReferentFamiliaux(this.addreferentFamiliauxrequest)
    .subscribe({
      next : (ReferentFamiliaux) => {
  
        this.referentFamiliaux.push(ReferentFamiliaux);
        
          this.addreferentFamiliauxrequest.nom= '',
          this.addreferentFamiliauxrequest.prenom= '',
          this.addreferentFamiliauxrequest.telephone=''
          this.addreferentFamiliauxrequest.relation= ''
  
        
    },
    error: (error) => {
      this.errorMessage ="Une erreur est survenue. Veuillez réessayer.";
      console.log(error);
      console.log(this.addreferentFamiliauxrequest)
     
    }
  
  })
  }
  
    //CompteBancaireParticulier
    addCompteBancaireParticulier(){
      this.clientService.AddCompteBancaireParticulier(this.addcompteBancaireParticulierrequest)
      .subscribe({
        next : (CompteBancaireParticulier) => {
    
          this.compteBancaireParticulier.push(CompteBancaireParticulier);
          
            this.addcompteBancaireParticulierrequest.banque= '',
            this.addcompteBancaireParticulierrequest.solde=''
        
          
      },
      error: (error) => {
        this.errorMessage ="Une erreur est survenue. Veuillez réessayer.";
        console.log(error);
        console.log(this.addcompteBancaireParticulierrequest)
       
      }
    
    })
    }
    
     
  
        //CreditRecentParticulier
  addCreditRecentParticulier(){
    this.clientService.AddCreditRecentParticulier(this.addcreditRecentrequest)
    .subscribe({
      next : (CreditRecentParticulier) => {
  
        this.creditRecent.push(CreditRecentParticulier);
        
          this.addcreditRecentrequest.objet= '',
          this.addcreditRecentrequest.duree= '',
          this.addcreditRecentrequest.montantInitial=''
          this.addcreditRecentrequest.enCoursRestant= '',
          this.addcreditRecentrequest.montantEchMens= '',
          this.addcreditRecentrequest.nbrEchRestant= '',
          this.addcreditRecentrequest.nbrEchEnRetard=''
          this.addcreditRecentrequest.nbrMaxJoursEnRetard= ''
      
        
    },
    error: (error) => {
      this.errorMessage ="Une erreur est survenue. Veuillez réessayer.";
      console.log(error);
      console.log(this.addcreditRecentrequest)
     
    }
  
  })
  }

  
      //CompteParticulier
  addCompteParticulier(){
    this.clientService.AddCompteParticulier(this.addcompteParticulierrequest)
    .subscribe({
      next : (CompteParticulier) => {
  
        this.compteParticulier.push(CompteParticulier);
        
          
          this.addcompteParticulierrequest.deviseCompte= ''
         
      
        
    },
    error: (error) => {
      this.errorMessage ="Une erreur est survenue. Veuillez réessayer.";
      console.log(error);
      console.log(this.addcompteParticulierrequest)
     
    }
  
  })
  }
  

  editRefFamil(referentFamiliaux: ReferentFamiliaux): void {
    this.clientService.setRefFamilToEdit(referentFamiliaux);
    
  }
  
  editcreditRecent(creditRecentparticulier: CreditRecentParticulier): void {
    this.clientService.setCreditRecentToEdit(creditRecentparticulier);
    
  }
  editCompteparticulier(compteparticulier: CompteParticulier): void {
    this.clientService.setCompteParticulierToEdit(compteparticulier);
    
  }
  editCompteBancaireparticulier(compteBancaireparticulier: CompteBancaireParticulier): void {
    this.clientService.setCompteBancaireToEdit(compteBancaireparticulier);
    
  }
  
  Terminer(){
    this.router.navigate(['/nav/clients-particuliers']) ;
  }



}
