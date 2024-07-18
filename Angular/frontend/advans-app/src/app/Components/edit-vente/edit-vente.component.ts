import { Component, OnInit } from '@angular/core';
import { Frequence, Vente } from '../../models/ClientEntreprise.model';
import { RefServiceService } from '../../Services/ref-service.service';
import { ClientsService } from '../../Services/clients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-vente',
  templateUrl: './edit-vente.component.html',
  styleUrl: './edit-vente.component.css'
})
export class EditVenteComponent implements OnInit{

  addVenterequest : Vente ={
    idvente: 0,
    idClientEntreprise: 0,
    frequence: Frequence.Hebdo,
    valeurHaute: 0 ,
    valeurMoyenne: 0 ,
    valeurBasse: 0 
  }

  ventes : Vente[]=[];
  frequences= Object.values(Frequence);

  constructor(private refservice : RefServiceService ,private clientService: ClientsService, private router:Router) { }

  ngOnInit(): void {
    this.addVenterequest=this.clientService.getVenteToEdit()
  }

  updateVente(){
    this.clientService.UpdateVente(this.addVenterequest.idvente!,this.addVenterequest)
    .subscribe({
      next:(comptebancaire) => {
        console.log("success")
        this.router.navigate(['/nav/add-tabsentreprise']);
      },
      error: (error) => {
        
        console.log(error);
        console.log(this.addVenterequest);
      }
    })
  }
  
  deleteVente(id: number){
    this.clientService.deleteVente(id)
    .subscribe({
      next: (response)=>{
        this.router.navigate(['/nav/add-tabsentreprise'])
      }
    })
  }
}
