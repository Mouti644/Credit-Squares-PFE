import { Component, OnInit } from '@angular/core';
import { CreditRecentParticulier } from '../../models/ClientParticulier.model';
import { ClientsService } from '../../Services/clients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-creditrecentpart',
  templateUrl: './edit-creditrecentpart.component.html',
  styleUrl: './edit-creditrecentpart.component.css'
})
export class EditCreditrecentpartComponent implements OnInit {

  errorMessage: string = "";

  addcreditRecentrequest:  CreditRecentParticulier = {
    idCRecent: 0,
    idClientParticulier: 0,
    objet: '' ,
    duree:  '' ,
    montantInitial: ''  ,
    enCoursRestant:  ''  ,
    montantEchMens:  '',
    nbrEchRestant:  '',
    nbrEchEnRetard:  '',
    nbrMaxJoursEnRetard:  ''
  } ;
  creditRecent: CreditRecentParticulier[]=[];

  constructor(private clientService : ClientsService , private router:Router) { }
  ngOnInit(): void {
    this.addcreditRecentrequest=this.clientService.getCreditRecentToEdit()
  }

  updateCreditRecent(){
    this.clientService.UpdateCRP(this.addcreditRecentrequest.idCRecent!,this.addcreditRecentrequest)
    .subscribe({
      next:(creditRecent) => {
        console.log("success")
        this.router.navigate(['/nav/add-tabsparticulier']);
      },
      error: (error) => {
        
        console.log(error);
        console.log(this.addcreditRecentrequest);
      }
    })
  }
  



  deleteCreditRecent(id: number){
    this.clientService.deleteCRP(id)
    .subscribe({
      next: (response)=>{
        this.router.navigate(['/nav/add-tabsparticulier'])
      }
    })
  }

}
