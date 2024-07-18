import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-dialog-component',
  templateUrl: './client-dialog-component.component.html',
  styleUrl: './client-dialog-component.component.css'
})
export class ClientDialogComponentComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { client: any; error: string | null },
  private dialogRef: MatDialogRef<ClientDialogComponentComponent>,
  private router: Router
) { }

navigateAndClose() {
  this.router.navigate(['/nav/add-credit']).then(() => {
    this.dialogRef.close();
  });
}
}
