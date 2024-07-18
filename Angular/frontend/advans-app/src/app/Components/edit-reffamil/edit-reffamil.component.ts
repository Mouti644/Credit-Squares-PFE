import { Component, OnInit } from '@angular/core';
import { ReferentFamiliaux } from '../../models/ClientParticulier.model';
import { ClientsService } from '../../Services/clients.service';
import { CreditsService } from '../../Services/credits.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-reffamil',
  templateUrl: './edit-reffamil.component.html',
  styleUrl: './edit-reffamil.component.css'
})
export class EditReffamilComponent implements OnInit {

  errorMessage: string = "";

  addreferentFamiliauxrequest : ReferentFamiliaux = {
    idRefFam: 0 ,
    idClientParticulier : 0,
    nom: '',
    prenom: '',
    telephone: '',
    relation:''
  }

  referentFamiliaux: ReferentFamiliaux[]=[];

constructor(private clientService : ClientsService , private router:Router){}

ngOnInit(): void {
  this.addreferentFamiliauxrequest=this.clientService.getRefFamilToEdit()
}


  updateRefFamil(){
    this.clientService.UpdateRF(this.addreferentFamiliauxrequest.idRefFam!,this.addreferentFamiliauxrequest)
    .subscribe({
      next:(reffamil) => {
        console.log("success")
        this.router.navigate(['/nav/add-tabsparticulier']);
      },
      error: (error) => {
        
        console.log(error);
        console.log(this.addreferentFamiliauxrequest);
      }
    })
  }
  



  deleteRefFamil(id: number){
    this.clientService.deleteRF(id)
    .subscribe({
      next: (response)=>{
        this.router.navigate(['/nav/add-tabsparticulier'])
      }
    })
  }
}
