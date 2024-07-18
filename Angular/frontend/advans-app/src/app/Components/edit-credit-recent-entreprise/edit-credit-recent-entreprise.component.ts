import { Component, OnInit } from '@angular/core';
import { CreditRecentEntreprise } from '../../models/ClientEntreprise.model';
import { RefServiceService } from '../../Services/ref-service.service';
import { ClientsService } from '../../Services/clients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-credit-recent-entreprise',
  templateUrl: './edit-credit-recent-entreprise.component.html',
  styleUrl: './edit-credit-recent-entreprise.component.css'
})
export class EditCreditRecentEntrepriseComponent implements OnInit {
  errorMessage: string = "";
  addcreditRecentrequest:CreditRecentEntreprise =  {
    idCRecent: 0,
    idClientEntreprise: 0,
    objet: '' ,
    duree: ''  ,
    montantInitial: ''  ,
    enCoursRestant: ''  ,
    montantEchMens: ''  ,
    nbrEchRestant: ''  ,
    nbrEchEnRetard: ''  ,
    nbrMaxJoursEnRetard: '' 
  }

  creditsRecent: CreditRecentEntreprise[]=[];

  constructor(private refservice : RefServiceService ,private clientService: ClientsService, private router:Router) { } 

  ngOnInit(): void {
    this.addcreditRecentrequest=this.clientService.getCreditRecentEntrepriseToEdit()
  }

  updateCRE(){
    this.clientService.UpdateCRE(this.addcreditRecentrequest.idCRecent!,this.addcreditRecentrequest)
    .subscribe({
      next:(creditrecent) => {
        console.log("success")
        this.router.navigate(['/nav/add-tabsentreprise']);
      },
      error: (error) => {
        
        console.log(error);
        console.log(this.addcreditRecentrequest);
      }
    })
  }
  
  deleteCRE(id: number){
    this.clientService.deleteCRE(id)
    .subscribe({
      next: (response)=>{
        this.router.navigate(['/nav/add-tabsentreprise'])
      }
    })
  }

}
