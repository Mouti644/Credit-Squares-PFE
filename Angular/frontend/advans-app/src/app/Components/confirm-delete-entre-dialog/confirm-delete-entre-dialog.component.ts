import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-delete-entre-dialog',
  templateUrl: './confirm-delete-entre-dialog.component.html',
  styleUrl: './confirm-delete-entre-dialog.component.css'
})
export class ConfirmDeleteEntreDialogComponent {
  constructor( private router:Router ,public dialogRef: MatDialogRef<ConfirmDeleteEntreDialogComponent>) { }

  confirmDelete(): void {
    this.dialogRef.close(true);
    
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}
