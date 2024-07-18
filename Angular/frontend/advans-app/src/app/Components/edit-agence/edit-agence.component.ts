import { Component, OnInit } from '@angular/core';
import { RefServiceService } from '../../Services/ref-service.service';
import { CreditsService } from '../../Services/credits.service';
import { Router } from '@angular/router';
import { RefAgence } from '../../models/ClientParticulier.model';
import { ConfirmDeleteAgenceDialogComponent } from '../confirm-delete-agence-dialog/confirm-delete-agence-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-agence',
  templateUrl: './edit-agence.component.html',
  styleUrl: './edit-agence.component.css'
})
export class EditAgenceComponent implements OnInit{

  editAgencerequest : RefAgence = {
    idAgence : 0,
    nomAgence :  '' ,
    region :'' ,
    telephone: '' ,
    adresse :''
  }


  constructor(private dialog: MatDialog, private refservice : RefServiceService ,private creditService: CreditsService, private router:Router){}


  ngOnInit(): void {
    this.editAgencerequest=this.refservice.getAgenceToEdit()
  }

  updateAgence(){
    this.refservice.UpdateAgence(this.editAgencerequest.idAgence!,this.editAgencerequest)
    .subscribe({
      next:(agence) => {
        console.log("success")
        this.router.navigate(['/nav/agences']);
      },
      error: (error) => {
        
        console.log(error);
        console.log(this.editAgencerequest);
      }
    })
  }
  

  deleteAgence(id: number) {
    const dialogRef = this.dialog.open(ConfirmDeleteAgenceDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.refservice.deleteAgence(id).subscribe({
          next: () => this.router.navigate(['/nav/agences']),
          error: (error) => console.error(error)
        });
      }
    });
  }
}
