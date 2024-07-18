import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OperationsService } from '../../Services/operations.service';
import { CreditsService } from '../../Services/credits.service';

@Component({
  selector: 'app-operations-dialog',
  templateUrl: './operations-dialog.component.html',
  styleUrl: './operations-dialog.component.css'
})
export class OperationsDialogComponent {
  demandeId: number;
  operations: any = {};

  constructor(
    private router: Router,
    private operationsService: OperationsService,
    private creditService: CreditsService ,
    public dialogRef: MatDialogRef<OperationsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { demandeId: number }
  ) {
    this.demandeId = data.demandeId;
  }

  ngOnInit(): void {
    this.checkOperationsExistence();
    this.creditService.setIdDemande(this.demandeId)
    
  }

  checkOperationsExistence() {
    // Analyse
    this.operationsService.checkAnalyseExists(this.demandeId).subscribe(exists => {
      this.operations.analyse = exists ? 'edit-analyse' : 'analyse';
    });

    // Checklist
    this.operationsService.checkCheckListExists(this.demandeId).subscribe(exists => {
      this.operations.checklist = exists ? 'edit-checklist' : 'checklist';
    });

    // Risque Analyse
    this.operationsService.checkRisqueAnalyseExists(this.demandeId).subscribe(exists => {
      this.operations.risqueAnalyse = exists ? 'edit-risqueAnalyse' : 'risqueAnalyse';
    });

    // Comité Crédit
    this.operationsService.checkComiteExists(this.demandeId).subscribe(exists => {
      this.operations.comiteCredit = exists ? 'edit-inter-decideur-comite' : 'inter-decideur-comite';
    });

    // Visite Management
    this.operationsService.checkVisiteManagementExists(this.demandeId).subscribe(exists => {
      this.operations.visiteManagement = exists ? 'edit-visiteManagement' : 'visiteManagement';
    });
  }

  navigateToOperation(operation: string): void {
    const route = this.operations[operation];
    if (route) {
      this.dialogRef.close();
      this.router.navigate([`/nav/${route}`, this.demandeId]);
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
