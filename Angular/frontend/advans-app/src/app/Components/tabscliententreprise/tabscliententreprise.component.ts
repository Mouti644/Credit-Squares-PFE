import { Component, OnInit } from '@angular/core';
import { Appro, CompteBancaireEntreprise, CompteEntreprise, CreditRecentEntreprise, Depense, Frequence, PointVente, Propriete, TypeCompte, TypePointVente, Vente } from '../../models/ClientEntreprise.model';
import { RefServiceService } from '../../Services/ref-service.service';
import { CreditsService } from '../../Services/credits.service';
import { Router } from '@angular/router';
import { ClientsService } from '../../Services/clients.service';
import { Point } from '@syncfusion/ej2-angular-maps';

@Component({
  selector: 'app-tabscliententreprise',
  templateUrl: './tabscliententreprise.component.html',
  styleUrl: './tabscliententreprise.component.css'
})
export class TabscliententrepriseComponent implements OnInit{

  tabsSelectionne: string = 'Depenses';

  errorMessage: string = "";

  selectedtypeId: number = 0;
  type: string = "";

  addVenterequest : Vente ={
    idvente: 0,
    idClientEntreprise: 0,
    frequence: null,
    valeurHaute: null ,
    valeurMoyenne: null ,
    valeurBasse: null 
  }
  
  addApprorequest : Appro = {
    idAppro: 0,
    idClientEntreprise: 0,
    frequence: null,
    montantMoyen: null
  }

  addcreditRecentrequest:CreditRecentEntreprise =  {
    idCRecent: 0,
    idClientEntreprise: 0,
    objet: '' ,
    duree: ''  ,
    montantInitial: ''  ,
    enCoursRestant: ''  ,
    montantEchMens: ''  ,
    nbrEchRestant: ''  ,
    nbrEchEnRetard: ''  ,
    nbrMaxJoursEnRetard: '' 
  }
  
  addPointVenterequest : PointVente ={
    idPV: 0,
    idClientEntreprise: 0,
    idTypePointVente:0,
    type: '',
    propriete: null ,
    nbrJoursOuverture: '' ,
    surface: ''  ,
    emplacement: '' 
  }
  
  
  addCompteBancaireEntrepriserequest: CompteBancaireEntreprise = {
    idCompteBanq: 0,
    idClientEntreprise: 0,
    banque: '',
    typeCompte: null  ,
    solde: ''
  }
  
  addDepenserequest : Depense = {
    idDepense: 0,
    idClientEntreprise: 0,
    depenses: ''   ,
    coutTotal: ''
  }

  addCompteEntrepriserequest : CompteEntreprise  = {
     idCompteEntreprise: undefined ,
    idClientEntreprise: 0,
    dateOuvertureCompte: new Date() ,
    deviseCompte: ''
}

typesCompte = Object.values(TypeCompte);
proprietes = Object.values(Propriete);
frequences= Object.values(Frequence);


comptesBancaireEntreprise: CompteBancaireEntreprise[]=[];
creditsRecent: CreditRecentEntreprise[]=[];
comptesEntreprise : CompteEntreprise[]=[];
depenses: Depense[]=[];
pointsVente: PointVente[]=[];
ventes : Vente[]=[];
appros : Appro[]=[];
typesPointVente : TypePointVente[]=[];

  constructor(private refservice : RefServiceService ,private clientService: ClientsService, private router:Router) { } 

  ngOnInit(): void {
    this.refservice.GetAllTypesPV().subscribe(
      data =>{
        this.typesPointVente = data;
      }
    );


    const idClient = this.clientService.getIdClientEntreprise();
  this.addcreditRecentrequest.idClientEntreprise=idClient;
  this.addCompteBancaireEntrepriserequest.idClientEntreprise =idClient;
  this.addCompteEntrepriserequest.idClientEntreprise =idClient ;
  this.addDepenserequest.idClientEntreprise=idClient;
  this.addVenterequest.idClientEntreprise =idClient;
  this.addApprorequest.idClientEntreprise =idClient ;
  this.addPointVenterequest.idClientEntreprise =idClient ;

  console.log("Id du client", idClient);
//
  this.clientService.getAllAppros(idClient)
  .subscribe({
    next: (appros) => {
      this.appros = appros;
    },
    error: (Response) => {
      console.log("Erreur de Get ",Response);
    }
  });

  //
  this.clientService.getAllVentes(idClient)
  .subscribe({
    next: (ventes) => {
      this.ventes = ventes;
    },
    error: (Response) => {
      console.log("Erreur de Get ",Response);
    }
  });
  //
  this.clientService.getAllCRE(idClient)
  .subscribe({
    next: (creditrecent) => {
      this.creditsRecent = creditrecent;
    },
    error: (Response) => {
      console.log("Erreur de Get ",Response);
    }
  });
  //
  this.clientService.getAllPointsVente(idClient)
  .subscribe({
    next: (pointsvente) => {
      this.pointsVente = pointsvente;
    },
    error: (Response) => {
      console.log("Erreur de Get ",Response);
    }
  });
  //
  this.clientService.getAllCBE(idClient)
  .subscribe({
    next: (comptesbancaire) => {
      this.comptesBancaireEntreprise = comptesbancaire;
    },
    error: (Response) => {
      console.log("Erreur de Get ",Response);
    }
  });
  //
  this.clientService.getAllDepenses(idClient)
  .subscribe({
    next: (depenses) => {
      this.depenses = depenses;
    },
    error: (Response) => {
      console.log("Erreur de Get ",Response);
    }
  });
  //
  this.clientService.getAllCE(idClient)
  .subscribe({
    next: (comptesentreprise) => {
      this.comptesEntreprise = comptesentreprise;
    },
    error: (Response) => {
      console.log("Erreur de Get ",Response);
    }
  });

  }

  selectTab(tab: string) {
    this.tabsSelectionne = tab;
  }

  // Méthode pour obtenir le label de l'onglet sélectionné
  getSelectedTabLabel(): string {
    switch (this.tabsSelectionne) {
      case 'Depenses':
        return 'Dépenses';
      case 'CompteBancaire':
        return 'Comptes Bancaires';
      case 'CreditRecent':
        return 'Crédits Récents';
      case 'CompteEntreprise':
        return 'Comptes Entreprise';
      case 'PointVente':
        return 'Points de vente';
      case 'Ventes':
        return 'Ventes';
      case 'Approvisionnements':
        return 'Approvisionnements';
      default:
        return 'Sélectionner';
    }
  }

  //RefTypepointVente
  onTypepointVenteSelected(): void {
  
    if (this.selectedtypeId !== 0) {
      this.refservice.getTypesPVById(this.selectedtypeId).subscribe(
        type => {
          this.addPointVenterequest.idTypePointVente = this.selectedtypeId;
          this.addPointVenterequest.type = type;
  
          
           console.log("type",this.addPointVenterequest.type);
          console.log("Id",this.addPointVenterequest.idTypePointVente);
        },
        error => {
          console.error("Erreur lors de la récupération de la relation :", error);
        }
      );
    } else {
      this.addPointVenterequest.type = "";
    }
  }





  //CompteBancaire
  addCompteBancaireEntreprise(){
    this.clientService.AddCompteBancaireEntreprise(this.addCompteBancaireEntrepriserequest)
    .subscribe({
      next : (CompteBancaireEntreprise) => {
  
        this.comptesBancaireEntreprise.push(CompteBancaireEntreprise);
        
          this.addCompteBancaireEntrepriserequest.banque= '',
          this.addCompteBancaireEntrepriserequest.solde=''
      
        
    },
    error: (error) => {
      this.errorMessage ="Une erreur est survenue. Veuillez réessayer.";
      console.log(error);
      console.log(this.addCompteBancaireEntrepriserequest)
     
    }
  
  })
  }
  
   

      //CreditRecent
addCreditRecentEntreprise(){
  this.clientService.AddCreditRecentEntreprise(this.addcreditRecentrequest)
  .subscribe({
    next : (CreditRecentEntreprise) => {

      this.creditsRecent.push(CreditRecentEntreprise);
      
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


    //Compte
addCompteEntreprise(){
  this.clientService.AddCompteEntreprise(this.addCompteEntrepriserequest)
  .subscribe({
    next : (CompteEntreprise) => {

      this.comptesEntreprise.push(CompteEntreprise);
      
        
        this.addCompteEntrepriserequest.deviseCompte= ''
       
    
      
  },
  error: (error) => {
    this.errorMessage ="Une erreur est survenue. Veuillez réessayer.";
    console.log("Erreur bro " ,error);
    console.log(this.addCompteEntrepriserequest)
   
  }

})
}
 //Depenses
 addDepenses(){
  this.clientService.AddDepense(this.addDepenserequest)
  .subscribe({
    next : (Depenses) => {

      this.depenses.push(Depenses);
      
        
        this.addDepenserequest.depenses= '',
        this.addDepenserequest.coutTotal= ''
       
    
      
  },
  error: (error) => {
    this.errorMessage ="Une erreur est survenue. Veuillez réessayer.";
    console.log(error);
    console.log(this.addDepenserequest)
   
  }

})
}
 //Vente
 addVente(){
  this.clientService.AddVente(this.addVenterequest)
  .subscribe({
    next : (Vente) => {

      this.ventes.push(Vente);
      
        
        this.addVenterequest.valeurHaute= 0,
        this.addVenterequest.valeurMoyenne= 0,
        this.addVenterequest.valeurBasse= 0
      
  },
  error: (error) => {
    this.errorMessage ="Une erreur est survenue. Veuillez réessayer.";
    console.log(error);
    console.log(this.addVenterequest)
   
  }

})
}
 //Appro
 addAppro(){
  this.clientService.AddAppro(this.addApprorequest)
  .subscribe({
    next : (Appro) => {

      this.appros.push(Appro);
      
        
        this.addApprorequest.montantMoyen= 0
       
    
      
  },
  error: (error) => {
    this.errorMessage ="Une erreur est survenue. Veuillez réessayer.";
    console.log(error);
    console.log(this.addApprorequest)
   
  }

})
}
 //PointVente
 addPointVente(){
  this.clientService.AddPointVente(this.addPointVenterequest)
  .subscribe({
    next : (PointVente) => {

      this.pointsVente.push(PointVente);
      
        
        this.addPointVenterequest.idTypePointVente= 0,
        this.addPointVenterequest.type= '',
        this.addPointVenterequest.nbrJoursOuverture= '',
        this.addPointVenterequest.surface= '',
        this.addPointVenterequest.emplacement= ''
       
    
      
  },
  error: (error) => {
    this.errorMessage ="Une erreur est survenue. Veuillez réessayer.";
    console.log(error);
    console.log(this.addPointVenterequest)
   
  }

})
}
  



editcreditRecent(creditRecententreprise: CreditRecentEntreprise): void {
  this.clientService.setCreditRecentEntrepriseToEdit(creditRecententreprise);
  
}
editCompteentreprise(compteentreprise: CompteEntreprise): void {
  this.clientService.setCompteEntrepriseToEdit(compteentreprise);
  
}
editCompteBancaireentreprise(compteBancaireentreprise: CompteBancaireEntreprise): void {
  this.clientService.setCompteBancaireEntrepriseToEdit(compteBancaireentreprise);
  
}
editvente(vente: Vente): void {
  this.clientService.setVenteToEdit(vente);
  
}
editAppro(appro: Appro): void {
  this.clientService.setApproToEdit(appro);
  
}
editDepenses(depense: Depense): void {
  this.clientService.setDepensesToEdit(depense);
  
}
editPointVente(pointVente: PointVente): void {
  this.clientService.setPointVenteToEdit(pointVente);
  
}

Terminer(){
  this.router.navigate(['/nav/clients-entreprise']) ;
}



}
