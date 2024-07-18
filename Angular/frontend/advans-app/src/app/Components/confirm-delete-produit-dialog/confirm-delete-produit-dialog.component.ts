import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-delete-produit-dialog',
  templateUrl: './confirm-delete-produit-dialog.component.html',
  styleUrl: './confirm-delete-produit-dialog.component.css'
})
export class ConfirmDeleteProduitDialogComponent {
  constructor( private router:Router ,public dialogRef: MatDialogRef<ConfirmDeleteProduitDialogComponent>) { }

  confirmDelete(): void {
    this.dialogRef.close(true);
    
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}
