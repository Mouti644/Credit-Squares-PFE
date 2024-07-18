import { Component, OnInit } from '@angular/core';
import { Garant, Garantie, RelationClientGarant, TypeGarantie } from '../../models/DemandeCredit.model';
import { RefServiceService } from '../../Services/ref-service.service';
import { CreditsService } from '../../Services/credits.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-garant',
  templateUrl: './edit-garant.component.html',
  styleUrl: './edit-garant.component.css'
})
export class EditGarantComponent implements OnInit {
  errorMessage: string = "";

  selectedRelationId: number = 0;
  nomRelation: string = "";
  //
  selectedtypeId: number = 0;
  nomtype: string = "";

  addgarantrequest: Garant ={
    idGarant: null,
    idDemande: 0,
    nomGarant: '' ,
    identiteGarant: '' ,
    relation: '' ,
    idRelationClientGarant: 0,
    valeurMoyenne: 0 ,
    valeurBasse: 0,
    telephone:''
  
  };

 
  garant: Garant[]=[];
 
 
  relationsClientGarant : RelationClientGarant[]=[];


  constructor(private refservice : RefServiceService ,private creditService: CreditsService, private router:Router){}

  ngOnInit(): void {
    this.addgarantrequest=this.creditService.getGarantToEdit()

   
    this.refservice.GetAllRCG().subscribe(
      data =>{
        this.relationsClientGarant = data;
      }
    );

  }


  onGarantSelected(): void {
  
    if (this.selectedRelationId !== 0) {
      this.refservice.getRelationClientById(this.selectedRelationId).subscribe(
        relation => {
          this.addgarantrequest.idRelationClientGarant = this.selectedRelationId;
          this.addgarantrequest.relation = relation;
  
          
           console.log("Relation",this.addgarantrequest.relation);
          console.log("Id",this.addgarantrequest.idRelationClientGarant);
        },
        error => {
          console.error("Erreur lors de la récupération de la relation :", error);
        }
      );
    } else {
      this.addgarantrequest.relation = "";
    }
  }




  updategarant(){
    this.creditService.UpdateGarant(this.addgarantrequest.idGarant!,this.addgarantrequest)
    .subscribe({
      next:(garant) => {
        console.log("success")
        this.router.navigate(['/nav/add-garant']);
      },
      error: (error) => {
        
        console.log(error);
        console.log(this.addgarantrequest);
      }
    })
  }
  



  deleteGarant(id: number){
    this.creditService.deleteGarant(id)
    .subscribe({
      next: (response)=>{
        this.router.navigate(['/nav/add-garant'])
      }
    })
  }
}
