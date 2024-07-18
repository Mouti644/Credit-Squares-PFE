import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CreditsService } from '../../Services/credits.service';
import { AuthGuard } from '../../guards/auth.guard';
import { DemandeCredit, Produit, Statut, TypeClient } from '../../models/DemandeCredit.model';
import { MatTableDataSource } from '@angular/material/table';
import { RefAgence } from '../../models/ClientParticulier.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { RefServiceService } from '../../Services/ref-service.service';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { DashboardService } from '../../Services/dashboard.service';

@Component({
  selector: 'app-dashboard-operations',
  templateUrl: './dashboard-operations.component.html',
  styleUrl: './dashboard-operations.component.css'
})
export class DashboardOperationsComponent implements OnInit{

  Demandes: DemandeCredit[] = [];
  filteredDemandes!: MatTableDataSource<DemandeCredit>;
  displayedColumns: string[] = ['idDemande', 'statut', 'details'];
  userName: string = AuthGuard.username;

  typeClientEnum = TypeClient;
  statut = Statut;
  statutFilter: string = '';
  AgenceFilter: string = '';
  TypeClientFilter: string = '';
  ProduitFiltre: string = '';

  idDemande: number=0;

  produits: Produit[] = [];
  agences : RefAgence[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

   //duree
   nombreoperationsPardureedemande: any[] = [];

   dureedemandeChartData: ChartDataset[] = [];
   dureedemandeChartLabels: string[] = []; // Utilisation d'un tableau de chaînes pour les libellés
   dureedemandeChartOptions: ChartOptions = { responsive: true };
   dureedemandeChartLegend = true;
   dureedemandeChartType: ChartType = 'bar';

   //Totale
   nombredureeTotaleparoperation : any[] = [];

   dureetotaleChartData: ChartDataset[] = [];
   dureetotaleChartLabels: string[] = []; // Utilisation d'un tableau de chaînes pour les libellés
   dureetotaleChartOptions: ChartOptions = { 
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Somme des Durées des Opérations pour Toutes les Demandes',
        font: {
          size: 16,
          weight: 'bold'
        }
      }
    }
  };
   dureetotaleChartLegend = false;
   dureetotaleChartType: ChartType = 'pie';

  constructor(private dashboardService: DashboardService ,private refService: RefServiceService, private http: HttpClient, private router :Router, private authGuard: AuthGuard, private creditService:CreditsService){}

  ngOnInit(): void {
    this.creditService.GetAllDemandes()
      .subscribe({
        next: (Demandes) => {
          this.Demandes = Demandes;
          this.filteredDemandes = new MatTableDataSource(Demandes);
          this.filteredDemandes.paginator = this.paginator;
          this.filteredDemandes.sort = this.sort;
        },
        error: (Response) => {
          console.log(Response);
        }
      });

      this.refService.GetAllProduits()
      .subscribe(produits => {
        this.produits = produits;
      });
      
      this.refService.GetAllAgences()
      .subscribe(agences => {
        this.agences = agences;
      });
  
   //Somme des Durées
   this.dashboardService.getDureetotale().subscribe(
    data => {
      this.nombredureeTotaleparoperation = data;
      this.prepareDureeTotaleChartData();
    },
    error => {
      console.error('Erreur lors de la récupération de la durée des opérations d\'une demande : ', error);
    }
  );
   
  
    }

  setIDSelectionne(id: number) {
    this.creditService.setIdDemande(id);
    this.idDemande = id;
        //Durée
        this.dashboardService.getDureepardemande(this.idDemande).subscribe(
          data => {
            this.nombreoperationsPardureedemande = data;
            this.prepareDureeDemadneChartData();
          },
          error => {
            console.error('Erreur lors de la récupération de la durée des opérations d\'une demande : ', error);
          }
        );
      
  }

  applyTypeClientFilter(type: string) {
    this.TypeClientFilter = type;
    console.log('Type de filtre :', type);
    if (type === 'Client_Particulier' || type === 'Client_Entreprise') {
      this.filteredDemandes.filterPredicate = (data: DemandeCredit, filter: string) => data.typeClient === this.typeClientEnum[type as keyof typeof TypeClient];
    } else {
      this.filteredDemandes.filterPredicate = (data: DemandeCredit, filter: string) => true;
    }
    this.filteredDemandes.filter = type.trim().toLowerCase();  // Force le déclenchement du filtrage
  }

  applyAgenceFilter(agence: string) {
    this.AgenceFilter = agence;
    if (agence) {
      this.filteredDemandes.filterPredicate = (data: DemandeCredit, filter: string) => data.nomAgence === agence;
    } else {
      this.filteredDemandes.filterPredicate = (data: DemandeCredit, filter: string) => true;
    }
    this.filteredDemandes.filter = agence.trim().toLowerCase();  // Force le déclenchement du filtrage
  }

  applyStatutFilter(statut: string) {
    this.statutFilter = statut;
    if (statut) {
      const statutEnumValue = this.statut[statut as keyof typeof Statut];
      this.filteredDemandes.filterPredicate = (data: DemandeCredit, filter: string) => data.statut === statutEnumValue;
    } else {
      this.filteredDemandes.filterPredicate = (data: DemandeCredit, filter: string) => true;
    }
    this.filteredDemandes.filter = statut.trim().toLowerCase();  // Force le déclenchement du filtrage
  }

  applyProduitFilter(produit: string) {
    this.ProduitFiltre = produit;
    if (produit) {
      this.filteredDemandes.filterPredicate = (data: DemandeCredit, filter: string) => data.nomProduit === produit;
    } else {
      this.filteredDemandes.filterPredicate = (data: DemandeCredit, filter: string) => true;
    }
    this.filteredDemandes.filter = produit.trim().toLowerCase();  // Force le déclenchement du filtrage
  }

  prepareDureeDemadneChartData(): void {
    const chartLabels: string[] = [];
    const chartData: number[] = [];
  
    for (const key in this.nombreoperationsPardureedemande) {
      chartLabels.push(key.replace(/duree/, 'Durée'));
      chartData.push(this.nombreoperationsPardureedemande[key]);
    }
  
    this.dureedemandeChartData = [
      {
        data: chartData,
        label: 'Durée passée en heures pour chaque opération'
      }
    ];
    this.dureedemandeChartLabels = chartLabels;
  }


  prepareDureeTotaleChartData(): void {
    const chartLabels: string[] = [];
    const chartData: number[] = [];
  
    for (const key in this.nombredureeTotaleparoperation) {
      chartLabels.push(key.replace(/duree/, 'Durée'));
      chartData.push(this.nombredureeTotaleparoperation[key]);
    }
  
    this.dureetotaleChartData = [
      {
        data: chartData,
        label: 'Durée Totale passée en heures'
      }
    ];
    this.dureetotaleChartLabels = chartLabels;
  }



}
