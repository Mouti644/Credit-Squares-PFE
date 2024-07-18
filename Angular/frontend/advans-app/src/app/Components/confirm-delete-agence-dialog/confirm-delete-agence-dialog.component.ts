import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-delete-agence-dialog',
  templateUrl: './confirm-delete-agence-dialog.component.html',
  styleUrl: './confirm-delete-agence-dialog.component.css'
})
export class ConfirmDeleteAgenceDialogComponent {
  constructor( private router:Router ,public dialogRef: MatDialogRef<ConfirmDeleteAgenceDialogComponent>) { }

  confirmDelete(): void {
    this.dialogRef.close(true);
    
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}
