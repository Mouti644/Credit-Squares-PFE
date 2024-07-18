import { Component, OnInit } from '@angular/core';
import { PointVente, Propriete, TypePointVente } from '../../models/ClientEntreprise.model';
import { RefServiceService } from '../../Services/ref-service.service';
import { ClientsService } from '../../Services/clients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-point-vente',
  templateUrl: './edit-point-vente.component.html',
  styleUrl: './edit-point-vente.component.css'
})
export class EditPointVenteComponent implements OnInit{

  errorMessage: string = "";

  selectedtypeId: number = 0;
  type: string = "";

  addPointVenterequest : PointVente ={
    idPV: 0,
    idClientEntreprise: 0,
    idTypePointVente:0,
    type: '',
    propriete: Propriete.Locataire ,
    nbrJoursOuverture: '' ,
    surface: ''  ,
    emplacement: '' 
  }
  proprietes = Object.values(Propriete);
  typesPointVente : TypePointVente[]=[];
  pointsVente: PointVente[]=[];

  constructor(private refservice : RefServiceService ,private clientService: ClientsService, private router:Router){}

  ngOnInit(): void {
    this.refservice.GetAllTypesPV().subscribe(
      data =>{
        this.typesPointVente = data;
      }
    );

    this.addPointVenterequest=this.clientService.getPointVenteToEdit()
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

  updatePointvente(){
    this.clientService.UpdatePointVente(this.addPointVenterequest.idPV!,this.addPointVenterequest)
    .subscribe({
      next:(pointvente) => {
        console.log("success")
        this.router.navigate(['/nav/add-tabsentreprise']);
      },
      error: (error) => {
        
        console.log(error);
        console.log(this.addPointVenterequest);
      }
    })
  }
  
  deletePointvente(id: number){
    this.clientService.deletePointVente(id)
    .subscribe({
      next: (response)=>{
        this.router.navigate(['/nav/add-tabsentreprise'])
      }
    })
  }

}
