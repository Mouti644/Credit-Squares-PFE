import { Component, OnInit } from '@angular/core';
import { Depense } from '../../models/ClientEntreprise.model';
import { RefServiceService } from '../../Services/ref-service.service';
import { ClientsService } from '../../Services/clients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-depenses',
  templateUrl: './edit-depenses.component.html',
  styleUrl: './edit-depenses.component.css'
})
export class EditDepensesComponent implements OnInit {

  errorMessage: string = "";

  addDepenserequest : Depense = {
    idDepense: 0,
    idClientEntreprise: 0,
    depenses: ''   ,
    coutTotal: ''
  }

  depenses: Depense[]=[];

  constructor(private refservice : RefServiceService ,private clientService: ClientsService, private router:Router){}



  ngOnInit(): void {
    this.addDepenserequest=this.clientService.getDepensesToEdit()
  }

  updateDepenses(){
    this.clientService.UpdateDepense(this.addDepenserequest.idDepense!,this.addDepenserequest)
    .subscribe({
      next:(depense) => {
        console.log("success")
        this.router.navigate(['/nav/add-tabsentreprise']);
      },
      error: (error) => {
        
        console.log(error);
        console.log(this.addDepenserequest);
      }
    })
  }
  
  deleteDepenses(id: number){
    this.clientService.deleteDepense(id)
    .subscribe({
      next: (response)=>{
        this.router.navigate(['/nav/add-tabsentreprise'])
      }
    })
  }
  




}
