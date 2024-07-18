import { Component, OnInit } from '@angular/core';
import { Garantie, RelationClientGarant, TypeGarantie } from '../../models/DemandeCredit.model';
import { RefServiceService } from '../../Services/ref-service.service';
import { CreditsService } from '../../Services/credits.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-garantie',
  templateUrl: './edit-garantie.component.html',
  styleUrl: './edit-garantie.component.css'
})
export class EditGarantieComponent implements OnInit {
  errorMessage: string = "";

  selectedRelationId: number = 0;
  nomRelation: string = "";
  //
  selectedtypeId: number = 0;
  nomtype: string = "";



  addgarantierequest : Garantie = {
    idGarantie: null  ,
    idDemande: 0,
    proprietaire: ''  ,
    type: '',
    idTypeGarantie: 0,
    valeur_estime: '' 
  }
  
  garantie: Garantie[]=[];
  typesGarantie: TypeGarantie[]=[];
  relationsClientGarant : RelationClientGarant[]=[];

  constructor(private refservice : RefServiceService ,private creditService: CreditsService, private router:Router){}

  ngOnInit(): void {
    this.addgarantierequest=this.creditService.getGarantieToEdit()

    this.refservice.GetAllTypesG().subscribe(
      data =>{
        this.typesGarantie = data;
      }
    );
  }

  ontypeGarantiSelected(): void {
  
    if (this.selectedtypeId !== 0) {
      this.refservice.getTypeGarantieById(this.selectedtypeId).subscribe(
        type => {
          this.addgarantierequest.idTypeGarantie = this.selectedtypeId;
          this.addgarantierequest.type = type;
  
          
           console.log("Type",this.addgarantierequest.type);
          console.log("Id",this.addgarantierequest.idTypeGarantie);
        },
        error => {
          console.error("Erreur lors de la récupération du type garantie :", error);
        }
      );
    } else {
      this.addgarantierequest.type = "";
    }
  }


  updategarantie(){
    this.creditService.UpdateGarantie(this.addgarantierequest.idGarantie!,this.addgarantierequest)
    .subscribe({
      next:(garantie) => {
        console.log("success")
        this.router.navigate(['/nav/add-garant']);
      },
      error: (error) => {
        
        console.log(error);
        console.log(this.addgarantierequest);
      }
    })
  }


  deleteGarantie(id: number){
    this.creditService.deleteGarantie(id)
    .subscribe({
      next: (response)=>{
        this.router.navigate(['/nav/add-garant'])
      }
    })
  }


}
