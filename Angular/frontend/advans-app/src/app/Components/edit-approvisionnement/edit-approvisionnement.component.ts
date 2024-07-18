import { Component, OnInit } from '@angular/core';
import { Appro, Frequence } from '../../models/ClientEntreprise.model';
import { RefServiceService } from '../../Services/ref-service.service';
import { ClientsService } from '../../Services/clients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-approvisionnement',
  templateUrl: './edit-approvisionnement.component.html',
  styleUrl: './edit-approvisionnement.component.css'
})
export class EditApprovisionnementComponent implements OnInit {


  errorMessage: string = "";

  
  addApprorequest : Appro = {
    idAppro: 0,
    idClientEntreprise: 0,
    frequence: Frequence.Hebdo,
    montantMoyen: 0 
 }

 frequences= Object.values(Frequence);
 appros : Appro[]=[];


  constructor(private refservice : RefServiceService ,private clientService: ClientsService, private router:Router){}


  ngOnInit(): void {
    this.addApprorequest=this.clientService.getApproToEdit()
  }


  updateAppro(){
    this.clientService.UpdateAppro(this.addApprorequest.idAppro!,this.addApprorequest)
    .subscribe({
      next:(appro) => {
        console.log("success")
        this.router.navigate(['/nav/add-tabsentreprise']);
      },
      error: (error) => {
        
        console.log(error);
        console.log(this.addApprorequest);
      }
    })
  }
  
  deleteAppro(id: number){
    this.clientService.deleteAppro(id)
    .subscribe({
      next: (response)=>{
        this.router.navigate(['/nav/add-tabsentreprise'])
      }
    })
  }



}
