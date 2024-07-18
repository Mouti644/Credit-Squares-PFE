import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-delete-part-dialog-component',
  templateUrl: './confirm-delete-part-dialog-component.component.html',
  styleUrl: './confirm-delete-part-dialog-component.component.css'
})
export class ConfirmDeletePartDialogComponentComponent {

  constructor( private router:Router ,public dialogRef: MatDialogRef<ConfirmDeletePartDialogComponentComponent>) { }

  confirmDelete(): void {
    this.dialogRef.close(true);
    
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}
