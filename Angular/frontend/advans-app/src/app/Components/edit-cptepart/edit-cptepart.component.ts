import { Component, OnInit } from '@angular/core';
import { CompteParticulier } from '../../models/ClientParticulier.model';
import { ClientsService } from '../../Services/clients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-cptepart',
  templateUrl: './edit-cptepart.component.html',
  styleUrl: './edit-cptepart.component.css'
})
export class EditCptepartComponent implements OnInit {

  errorMessage: string = "";

  addcompteParticulierrequest : CompteParticulier = {
    idCompteParticulier: 0 ,
    idClientParticulier : 0 ,
    dateOuvertureCompte: new Date()  ,
    deviseCompte: '' 
}

compteParticulier : CompteParticulier[]=[]

constructor(private clientService : ClientsService , private router:Router) { }

ngOnInit(): void {
  this.addcompteParticulierrequest=this.clientService.getCompteParticulierToEdit()
}


  Updatecomptepart(){
    this.clientService.Updatecomptepart(this.addcompteParticulierrequest.idCompteParticulier!,this.addcompteParticulierrequest)
    .subscribe({
      next:(comptepar) => {
        console.log("success")
        this.router.navigate(['/nav/add-tabsparticulier']);
      },
      error: (error) => {
        
        console.log(error);
        console.log(this.addcompteParticulierrequest);
      }
    })
  }

  deletecomptepart(id: number){
    this.clientService.deletecomptepart(id)
    .subscribe({
      next: (response)=>{
        this.router.navigate(['/nav/add-tabsparticulier'])
      }
    })
  }
}
