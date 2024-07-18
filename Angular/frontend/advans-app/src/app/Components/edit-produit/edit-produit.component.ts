import { Component, OnInit } from '@angular/core';
import { Produit } from '../../models/DemandeCredit.model';
import { RefServiceService } from '../../Services/ref-service.service';
import { CreditsService } from '../../Services/credits.service';
import { Router } from '@angular/router';
import { ConfirmDeleteProduitDialogComponent } from '../confirm-delete-produit-dialog/confirm-delete-produit-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrl: './edit-produit.component.css'
})
export class EditProduitComponent implements OnInit {
  errorMessage: string = "";

  editProduitrequest : Produit = {
    idProduit: 0,
    nomProduit: ''
  }

  produit: Produit[]=[];
constructor(private dialog: MatDialog,private refservice : RefServiceService ,private creditService: CreditsService, private router:Router){}

ngOnInit(): void {
  this.editProduitrequest=this.refservice.getProduitToEdit()
}

updateProduit(){
  this.refservice.UpdateProduit(this.editProduitrequest.idProduit!,this.editProduitrequest)
  .subscribe({
    next:(produit) => {
      console.log("success")
      this.router.navigate(['/nav/parametres']);
    },
    error: (error) => {
      
      console.log(error);
      console.log(this.editProduitrequest);
    }
  })
}



deleteProduit(id: number) {
  const dialogRef = this.dialog.open(ConfirmDeleteProduitDialogComponent);

  dialogRef.afterClosed().subscribe(result => {
    if (result === true) {
      this.refservice.deleteProduit(id).subscribe({
        next: () => this.router.navigate(['/nav/parametres']),
        error: (error) => console.error(error)
      });
    }
  });
}
}
