import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../Services/dashboard.service';
import { Router } from '@angular/router';
import { NombreClientsParNomAgence, NombreClientsParNomSecteur, NombreClientsParSex, NombreClientsParSitFam, NombreClientsParSitImm } from '../../models/Dashboard.model';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
@Component({
  selector: 'app-dashboard-clients',
  templateUrl: './dashboard-clients.component.html',
  styleUrl: './dashboard-clients.component.css'
})
export class DashboardClientsComponent implements OnInit {

  //Sex
nombreClientsParSex: NombreClientsParSex[] = [];

sexChartData: ChartDataset[] = [];
sexChartLabels: string[] = []; // Utilisation d'un tableau de chaînes pour les libellés
sexChartOptions: ChartOptions = { 
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Nombre de clients par genre',
      font: {
        size: 16,
        weight: 'bold'
      }
    }
  }
};
sexChartLegend = true;
sexChartType: ChartType = 'doughnut';

  //Agence
  nombreClientsParAgence: NombreClientsParNomAgence[] = [];

  agenceChartData: ChartDataset[] = [];
  agenceChartLabels: string[] = []; // Utilisation d'un tableau de chaînes pour les libellés
  agenceChartOptions: ChartOptions = { responsive: true };
  agenceChartLegend = true;
  agenceChartType: ChartType = 'bar';
  
  //SecteurActivite
  nombreClientsParSecteur: NombreClientsParNomSecteur[] = [];

  SecteurChartData: ChartDataset[] = [];
  SecteurChartLabels: string[] = []; // Utilisation d'un tableau de chaînes pour les libellés
  SecteurChartOptions: ChartOptions = { responsive: true };
  SecteurChartLegend = true;
  SecteurChartType: ChartType = 'bar';
  
   //Date
   nombreClientsParDate: any;

   DateChartData: ChartDataset[] = [];
   DateChartLabels: string[] = []; // Utilisation d'un tableau de chaînes pour les libellés
   DateChartOptions:  ChartOptions = { 
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Répartition des clients  par date',
        font: {
          size: 16,
          weight: 'bold'
        }
      }
    }
  };
   DateChartLegend = true;
   DateChartType: ChartType = 'pie';

      //Situation Immobilier
      nombreClientsParSitImm: NombreClientsParSitImm[] = [];

      SitImmChartData: ChartDataset[] = [];
      SitImmChartLabels: string[] = []; // Utilisation d'un tableau de chaînes pour les libellés
      SitImmChartOptions:  ChartOptions = { 
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Répartition des clients par situations immobilières',
            font: {
              size: 16,
              weight: 'bold'
            }
          }
        }
      };
      SitImmChartLegend = true;
      SitImmChartType: ChartType = 'pie';

         //Situation Familiale
   nombreClientsParSittFam: NombreClientsParSitFam[] = [];

   SitFamChartData: ChartDataset[] = [];
   SitFamChartLabels: string[] = []; // Utilisation d'un tableau de chaînes pour les libellés
   SitFamChartOptions: ChartOptions = { 
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Répartition des clients par situations familiales',
        font: {
          size: 16,
          weight: 'bold'
        }
      }
    }
  };
   SitFamChartLegend = true;
   SitFamChartType: ChartType = 'pie';
   


  constructor(private dashboardService: DashboardService, private router: Router) { }



  ngOnInit(): void {
  // Client Particulier
  // Sex
    this.dashboardService.getNombreClientsParSex().subscribe(
      data => {
        this.nombreClientsParSex = data;
        this.prepareSexChartData();
      },
      error => {
        console.error('Erreur lors de la récupération du nombre de crédits par sex : ', error);
      }
    );
    //Nom Agence
    this.dashboardService.getNombreCPParNomAgence().subscribe(
      data => {
        this.nombreClientsParAgence = data;
        this.prepareAgenceChartData();
      },
      error => {
        console.error('Erreur lors de la récupération du nombre de crédits par Agence : ', error);
      }
    );

    //Secteur
    this.dashboardService.getNombreClientsParticuliersParNomSecteur().subscribe(
      data => {
        this.nombreClientsParSecteur = data;
        this.prepareSecteurChartData();
      },
      error => {
        console.error('Erreur lors de la récupération du nombre de crédits par Secteur : ', error);
      }
    );
    
     //Date
     this.dashboardService.getNombreClientsParticuliersParDate().subscribe(
      data => {
        this.nombreClientsParDate = data;
        this.prepareDateChartData();
      },
      error => {
        console.error('Erreur lors de la récupération du nombre de crédits par Secteur : ', error);
      }
    );
    //Situation Immobiler
    this.dashboardService.getNombreClientsParticuliersParSitImm().subscribe(
      data => {
        this.nombreClientsParSitImm = data;
        this.prepareSitImmChartData();
      },
      error => {
        console.error('Erreur lors de la récupération du nombre de crédits par Secteur : ', error);
      }
    );
    //Situation Familiale
    this.dashboardService.getNombreClientsParSitFam().subscribe(
      data => {
        this.nombreClientsParSittFam = data;
        this.prepareSitFamChartData();
      },
      error => {
        console.error('Erreur lors de la récupération du nombre de crédits par Secteur : ', error);
      }
    );
    

  }


  prepareSexChartData(): void {
    this.sexChartData = [
      {
        data: this.nombreClientsParSex.map(item => item.nombreClients),
        label: 'Nombre de clients',
        backgroundColor: ['#f31c64', '#3173d4']
      }
    ];
    this.sexChartLabels = this.nombreClientsParSex.map(item => item.sex);
  }

    // Méthode pour préparer les données du graphique en barres pour les Clients par agence
    prepareAgenceChartData(): void {
      this.agenceChartData = [
        {
          data: this.nombreClientsParAgence.map(item => item.nombreClients),
          label: 'Nombre de clients par agence',
          // backgroundColor: this.generateColors(this.nombreDemandesParNomAgence.length),
          // borderColor: 'white',
        }
      ];
      this.agenceChartLabels = this.nombreClientsParAgence.map(item => item.nomAgence);
    }


     // Méthode pour préparer les données du graphique en barres pour les Clients par Secteur
     prepareSecteurChartData(): void {
      this.SecteurChartData = [
        {
          data: this.nombreClientsParSecteur.map(item => item.nombreClients),
          label: 'Nombre de clients par Secteurs d\'activités '
          // backgroundColor: this.generateColors(this.nombreDemandesParNomAgence.length),
          // borderColor: 'white',
        }
      ];
      this.SecteurChartLabels = this.nombreClientsParSecteur.map(item => item.nomSecteurActivite);
    }

   // Méthode pour préparer les données du graphique en radar pour les Clients par date
   prepareDateChartData(): void {
    // Définir les libellés pour les tranches de dates
    const chartLabels: string[] = [
      'Entre 1 et 10',
      'Entre 11 et 20',
      'Entre 21 et 31'
    ];
  
    // Créer les données correspondantes pour chaque tranche de date
    const chartData: number[] = [
      this.nombreClientsParDate.clientsEntre1Et10,
      this.nombreClientsParDate.clientsEntre10Et20,
      this.nombreClientsParDate.clientsEntre20Et31
    ];
  
    // Assigner les données et les labels au graphique
    this.DateChartData = [
      {
        data: chartData,
        label: 'Nombre de clients '
      }
    ];
    this.DateChartLabels = chartLabels;
  }
  
   // Méthode pour préparer les données du graphique en barres pour les Clients par Situation Immobilier
   prepareSitImmChartData(): void {
    this.SitImmChartData = [
      {
        data: this.nombreClientsParSitImm.map(item => item.nombreClients),
        label: 'Nombre de clients'
        // backgroundColor: this.generateColors(this.nombreDemandesParNomAgence.length),
        // borderColor: 'white',
      }
    ];
    this.SitImmChartLabels = this.nombreClientsParSitImm.map(item => item.situationImmobilier);
  }

   // Méthode pour préparer les données du graphique en barres pour les Clients par Situation Familiale
   prepareSitFamChartData(): void {
    this.SitFamChartData = [
      {
        data: this.nombreClientsParSittFam.map(item => item.nombreClients),
        label: 'Nombre de clients'
        // backgroundColor: this.generateColors(this.nombreDemandesParNomAgence.length),
        // borderColor: 'white',
      }
    ];
    this.SitFamChartLabels = this.nombreClientsParSittFam.map(item => item.situationFamiliale);
  }

  
    
}



