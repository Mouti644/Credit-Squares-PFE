import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreditsService } from '../../Services/credits.service';
import { OperationsService } from '../../Services/operations.service';
import { AuthGuard } from '../../guards/auth.guard';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrl: './operations.component.css'
})
export class OperationsComponent implements OnInit{
  analyseExists: boolean = false;
  checklistExists: boolean = false;
  checkRAExists: boolean = false;
  ComiteExists: boolean = false;
  checVMExists: boolean = false;
  interactiviteExists: boolean = false;

  userName: string= AuthGuard.username;

  iddemande: number = 0;
  constructor(private route: ActivatedRoute, private operationService: OperationsService, private creditService: CreditsService){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const idDemande = params['id'];
      this.iddemande= idDemande;
      this.creditService.setIdDemande(idDemande)
      console.log('ID de la demande :', idDemande);

      
        const statut = this.creditService.getStatut();
    });

    //Analyse
    this.operationService.checkAnalyseExists( this.iddemande).subscribe(exists => {
      
      if (exists === false) {
        this.analyseExists = false;
      } else {
        this.analyseExists = true;
        }
        
    });

    //Checklist
    this.operationService.checkCheckListExists( this.iddemande).subscribe(exists => {
      
      if (exists === false) {
        this.checklistExists = false;
      } else {
        this.checklistExists = true;
        }
    });

    //RA

    this.operationService.checkRisqueAnalyseExists( this.iddemande).subscribe(exists => {

      if (exists === false) {
        this.checkRAExists = false;
      } else {
        this.checkRAExists = true;
        }
    });


    //Comite

    this.operationService.checkComiteExists( this.iddemande).subscribe(exists => {
      
      if (exists === false) {
        this.ComiteExists = false;
      } else {
        this.ComiteExists = true;
        }
        console.log("comite exist ?", this.ComiteExists)
    });

    //VM
    this.operationService.checkVisiteManagementExists( this.iddemande).subscribe(exists => {
      
      if (exists === false) {
        this.checVMExists = false;
      } else {
        this.checVMExists = true;
        }
        console.log("VM exist ?", this.checVMExists)

    });

    //
    this.operationService.checkinteractiviteExists( this.iddemande ,this.userName ).subscribe(exists => {
      
      if (exists === false) {
        this.interactiviteExists = false;
      } else {
        this.interactiviteExists = true;
        }
        console.log("Interactivite exist ?", this.interactiviteExists)

    });

  }
}
