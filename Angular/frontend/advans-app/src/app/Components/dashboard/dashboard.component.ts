import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../Services/dashboard.service';
import { Router } from '@angular/router';
import { NombreCreditsParTypeClient, NombreDemandesParNomAgence, NombreDemandesParNomProduit, NombreDemandesParStatut } from '../../models/Dashboard.model';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  nombreCreditsParTypeClient: NombreCreditsParTypeClient[] = [];
  nombreDemandesParNomAgence: NombreDemandesParNomAgence[] = [];
  nombreDemandesParNomProduit: NombreDemandesParNomProduit[] = [];
  nombreDemandesParMontant: any;
  nombreDemandesParDate: any;
  nombreDemandesParStatut: NombreDemandesParStatut[] = [];

  // Configuration du graphique en barres pour le nombre de crédits par type de client
  barChartData: ChartDataset[] = [];
  barChartLabels: string[] = []; // Utilisation d'un tableau de chaînes pour les libellés
  barChartOptions: ChartOptions = { responsive: true };
  barChartLegend = true;
  barChartType: ChartType = 'bar';

  // Configuration du graphique en barres pour le nombre de demandes par nom d'agence
  demandesChartData: ChartDataset[] = [];
  demandesChartLabels: string[] = []; // Utilisation d'un tableau de chaînes pour les libellés
  demandesChartOptions: ChartOptions = { responsive: true };
  demandesChartLegend = true;
  demandesChartType: ChartType = 'bar';

  // Configuration du graphique en secteurs pour le nombre de demandes par nom de produit
  pieChartData: ChartDataset[] = [];
  pieChartLabels: string[] = []; // Utilisation d'un tableau de chaînes pour les libellés
  pieChartOptions: ChartOptions = { 
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Répartition des Demandes par Produit',
        font: {
          size: 16,
          weight: 'bold'
        }
      }
    }
  };
  pieChartLegend = false;
  pieChartType: ChartType = 'pie';

  /////Montant
  demandesParMontantChartData: ChartDataset[] = [];
  demandesParMontantChartLabels: string[] = [];
  demandesParMontantChartOptions: ChartOptions = { responsive: true };
  demandesParMontantChartLegend = true;
  demandesParMontantChartType: ChartType = 'bar';

  //dateDemande 
doughnutChartData: ChartDataset[] = [];
doughnutChartLabels: string[] = []; // Utilisation d'un tableau de chaînes pour les libellés
doughnutChartOptions: ChartOptions = { 
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Nombre de Demandes par Périodes du Mois',
      font: {
        size: 16,
        weight: 'bold'
      }
    }
  }
};
doughnutChartLegend = true;
doughnutChartType: ChartType = 'doughnut';

 // Configuration du graphique en barres pour le nombre de demandes par Statut
 demandesStatutChartData: ChartDataset[] = [];
 demandesStatutLabels: string[] = []; // Utilisation d'un tableau de chaînes pour les libellés
 demandesStatutOptions: ChartOptions = { responsive: true };
 demandesStatutLegend = true;
 demandesStatutType: ChartType = 'bar';


  constructor(private dashboardService: DashboardService, private router: Router) { }

  ngOnInit(): void {
    // Récupération des données du service pour le nombre de crédits par type de client
    this.dashboardService.GetNombreCreditsParTypeClient().subscribe(
      data => {
        this.nombreCreditsParTypeClient = data;
        this.prepareBarChartData();
      },
      error => {
        console.error('Erreur lors de la récupération du nombre de crédits par type de client : ', error);
      }
    );

    // Récupération des données du service pour le nombre de demandes par nom d'agence
    this.dashboardService.getNombreDemandesParNomAgence().subscribe(
      data => {
        this.nombreDemandesParNomAgence = data;
        this.prepareDemandesChartData();
      },
      error => {
        console.error('Erreur lors de la récupération du nombre de demandes par nom d\'agence : ', error);
      }
    );

    // Récupération des données du service pour le nombre de demandes par nom de produit
    this.dashboardService.getNombreDemandesParNomProduit().subscribe(
      data => {
        this.nombreDemandesParNomProduit = data;
        this.preparePieChartData();
      },
      error => {
        console.error('Erreur lors de la récupération du nombre de demandes par produit : ', error);
      }
    );

    //Montant
    this.dashboardService.getNombreDemandesParMontant().subscribe(
      data => {
        this.nombreDemandesParMontant = data;
        this.prepareDemandesParMontantChartData();
      },
      error => {
        console.error('Erreur lors de la récupération du nombre de demandes par montant : ', error);
      }
    );

     // Récupération des données du service pour le nombre de demandes par date
  this.dashboardService.getNombreDemandesParDate().subscribe(
    data => {
      this.nombreDemandesParDate = data;
      this.prepareDoughnutChartData();
    },
    error => {
      console.error('Erreur lors de la récupération du nombre de demandes par date : ', error);
    }
  );


     // Récupération des données du service pour le nombre de demandes par statut
     this.dashboardService.getNombreDemandesParStatut().subscribe(
      data => {
        this.nombreDemandesParStatut = data;
        this.prepareBarStatutChartData();
      },
      error => {
        console.error('Erreur lors de la récupération du nombre de crédits par type de client : ', error);
      }
    );

  }












  // Méthode pour préparer les données du graphique en barres pour les crédits
  prepareBarChartData(): void {
    this.barChartData = [
      {
        data: this.nombreCreditsParTypeClient.map(item => item.nombreCredits),
        label: 'Nombre de demandes par type de client'
      }
    ];
    this.barChartLabels = this.nombreCreditsParTypeClient.map(item => item.typeClient);
  }

  // Méthode pour préparer les données du graphique en barres pour les demandes par agence
  prepareDemandesChartData(): void {
    this.demandesChartData = [
      {
        data: this.nombreDemandesParNomAgence.map(item => item.nombreDemandes),
        label: 'Nombre de demandes par agence',
        // backgroundColor: this.generateColors(this.nombreDemandesParNomAgence.length),
        // borderColor: 'white',
      }
    ];
    this.demandesChartLabels = this.nombreDemandesParNomAgence.map(item => item.nomAgence);
  }

  private generateColors(length: number): string[] {
    const colors = [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ];
    return Array.from({ length }, (_, i) => colors[i % colors.length]);
  }



  // Méthode pour préparer les données du graphique en secteurs pour les demandes par nom de produit
  preparePieChartData(): void {
    this.pieChartData = [
      {
        data: this.nombreDemandesParNomProduit.map(item => item.nombreDemandes),
        label: 'Nombre de demandes '
      }
    ];
    this.pieChartLabels = this.nombreDemandesParNomProduit.map(item => item.nomProduit);
  }
  //Montant
//Montant
prepareDemandesParMontantChartData(): void {
  // Définir les libellés pour les tranches de montant
  const chartLabels: string[] = [
    'Moins de 10000',
    'Entre 10000 Et 50000',
    'Plus De 50000'
  ];

  // Créer les données correspondantes pour chaque tranche de montant
  const chartData: number[] = [
    this.nombreDemandesParMontant.moinsde10000,
    this.nombreDemandesParMontant.entre10000Et50000,
    this.nombreDemandesParMontant.plusDe50000
  ];

  // Assigner les données et les labels au graphique
  this.demandesParMontantChartData = [
    {
      data: chartData,
      label: 'Nombre de demandes par tranche de montant (TND)'
    }
  ];
  this.demandesParMontantChartLabels = chartLabels;
}


  //DateDemande
  prepareDoughnutChartData(): void {
    const chartLabels: string[] = [];
    const chartData: number[] = [];
    
    for (const key in this.nombreDemandesParDate) {
      chartLabels.push(key.replace(/demandesEntre/, 'Entre ').replace(/Et/, ' et '));
      chartData.push(this.nombreDemandesParDate[key]);
    }
    
    this.doughnutChartData = [
      {
        data: chartData,
        label: 'Nombre de demandes'
      }
    ];
    this.doughnutChartLabels = chartLabels;
  }
 

  prepareBarStatutChartData(){
    this.demandesStatutChartData = [
      {
        data: this.nombreDemandesParStatut.map(item => item.nombreDemandes),
        label: 'Nombre de demandes par Statut'
      }
    ];
    this.demandesStatutLabels = this.nombreDemandesParStatut.map(item => item.statut);
  }

  

}
