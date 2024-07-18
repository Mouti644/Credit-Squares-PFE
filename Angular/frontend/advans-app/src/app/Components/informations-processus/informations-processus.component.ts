import { Component, OnInit } from '@angular/core';
import { CreditsService } from '../../Services/credits.service';
import { AuthGuard } from '../../guards/auth.guard';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandeCredit, Statut, TypeClient } from '../../models/DemandeCredit.model';

@Component({
  selector: 'app-informations-processus',
  templateUrl: './informations-processus.component.html',
  styleUrl: './informations-processus.component.css'
})
export class InformationsProcessusComponent implements OnInit{

  iddemande: number = 0;

  editcreditrequest: DemandeCredit ={
    idDemande: 0,
    typeClient: TypeClient.Client_Entreprise,
    montant: 0,
    dureeDemandee: 0,
    commentaires: "",
    disponibilite: "",
    identiteClient: '',
    dateDemande: new Date(),
    dateFinalisation: new Date(),
    idClientEntreprise: null,
    idClientParticulier: null,
    idProduit: 0 ,
    nomProduit: '',
    salaireNetMensuel : '',
    chiffreAffaireMensuel : '',
    statut: null,
    nomAgence: "",
    nomClient: "",
    garants: [],
    garanties: []
  }
  statuts = Object.values(Statut);


  constructor( 
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private authGuard: AuthGuard,
    private creditService: CreditsService) { }

  ngOnInit(): void {
    
   
    this.route.params.subscribe(params => {
      const idDemande = params['id'];
      this.iddemande= idDemande;
      this.creditService.setIdDemande(idDemande)
      console.log('ID de la demande :', idDemande);

      
        const statut = this.creditService.getStatut();
    });
    this.creditService.getDemandeById(this.iddemande)
    .subscribe({
      next: (response) => {
        this.editcreditrequest = response;
      }
    })
  }




  updateCredit(){
    this.creditService.updateDemande(this.editcreditrequest.idDemande!,this.editcreditrequest)
    .subscribe({
      next:(credit) => {
        console.log("success")
        this.router.navigate(['/nav/list']);
      },
      error: (error) => {
        
        console.log(error);
       
      }
    })
  }

  redirigerVersAjoutTabsDemande(){
    this.creditService.setIdDemande(this.editcreditrequest.idDemande!);
    this.router.navigate(['/nav/add-garant']) ;
    console.log("Id Demande :" ,this.editcreditrequest.idDemande!)
  }

  

  deleteDemande(id: number){
    this.creditService.deleteDemande(id)
    .subscribe({
      next: (response)=>{
        this.router.navigate(['/nav/list'])
      }
    })
  }
}
