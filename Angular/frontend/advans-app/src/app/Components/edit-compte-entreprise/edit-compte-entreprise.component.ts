import { Component, OnInit } from '@angular/core';
import { CompteEntreprise } from '../../models/ClientEntreprise.model';
import { RefServiceService } from '../../Services/ref-service.service';
import { ClientsService } from '../../Services/clients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-compte-entreprise',
  templateUrl: './edit-compte-entreprise.component.html',
  styleUrl: './edit-compte-entreprise.component.css'
})
export class EditCompteEntrepriseComponent implements OnInit{

  errorMessage: string = "";
  
  addCompteEntrepriserequest : CompteEntreprise  = {
    idCompteEntreprise: 0 ,
    idClientEntreprise: 0,
    dateOuvertureCompte: new Date() ,
    deviseCompte: ''
}
comptesEntreprise : CompteEntreprise[]=[];

  constructor(private refservice : RefServiceService ,private clientService: ClientsService, private router:Router){}

  ngOnInit(): void {
    this.addCompteEntrepriserequest=this.clientService.getCompteEntrepriseToEdit()
  }


  updateCompteEntreprise(){
    this.clientService.Updatecompteentreprise(this.addCompteEntrepriserequest.idCompteEntreprise!,this.addCompteEntrepriserequest)
    .subscribe({
      next:(compteentreprise) => {
        console.log("success")
        this.router.navigate(['/nav/add-tabsentreprise']);
      },
      error: (error) => {
        
        console.log(error);
        console.log(this.addCompteEntrepriserequest);
      }
    })
  }
  
  deleteCompteEntreprise(id: number){
    this.clientService.deletecompteentreprise(id)
    .subscribe({
      next: (response)=>{
        this.router.navigate(['/nav/add-tabsentreprise'])
      }
    })
  }

}
