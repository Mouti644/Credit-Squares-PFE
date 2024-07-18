import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../Services/dashboard.service';
import { Router } from '@angular/router';
import { NombreClientsParNomAgence, NombreClientsParNomSecteur, NombreClientsParSitImm } from '../../models/Dashboard.model';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-dashboard-clients-entreprise',
  templateUrl: './dashboard-clients-entreprise.component.html',
  styleUrl: './dashboard-clients-entreprise.component.css'
})
export class DashboardClientsEntrepriseComponent implements OnInit{

  constructor(private dashboardService: DashboardService, private router: Router) { }

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
  DateChartOptions: ChartOptions = { 
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
     SitImmChartOptions: ChartOptions = { 
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

        //Nombre d'employés
        nombreClientsParnbrEmployes: any;

        nbrEmployesChartData: ChartDataset[] = [];
        nbrEmployesChartLabels: string[] = []; // Utilisation d'un tableau de chaînes pour les libellés
        nbrEmployesChartOptions: ChartOptions = { 
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Répartition des entreprises par Nombre d\'employés',
              font: {
                size: 16,
                weight: 'bold'
              }
            }
          }
        };
        nbrEmployesChartLegend = true;
        nbrEmployesChartType: ChartType = 'pie';

           //Chiffre d'affaires
     nombreClientsParchAffaire: any;

     chAffaireChartData: ChartDataset[] = [];
     chAffaireChartLabels: string[] = []; // Utilisation d'un tableau de chaînes pour les libellés
     chAffaireChartOptions:ChartOptions = { 
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Répartition des entreprises par Chiffre d\'affaires',
          font: {
            size: 16,
            weight: 'bold'
          }
        }
      }
    };
     chAffaireChartLegend = true;
     chAffaireChartType: ChartType = 'pie';

  ngOnInit(): void {
     //Nom Agence
     this.dashboardService.getNombreCEParNomAgence().subscribe(
      data => {
        this.nombreClientsParAgence = data;
        this.prepareAgenceChartData();
      },
      error => {
        console.error('Erreur lors de la récupération du nombre de clients par Agence : ', error);
      }
    );

    //Secteur
    this.dashboardService.getNombreClientsEntrepriseParNomSecteur().subscribe(
      data => {
        this.nombreClientsParSecteur = data;
        this.prepareSecteurChartData();
      },
      error => {
        console.error('Erreur lors de la récupération du nombre de clients par Secteur : ', error);
      }
    );
    
     //Date
     this.dashboardService.getNombreClientsEntrepriseParDate().subscribe(
      data => {
        this.nombreClientsParDate = data;
        this.prepareDateChartData();
      },
      error => {
        console.error('Erreur lors de la récupération du nombre de clients par Date : ', error);
      }
    );
    //Situation Immobiler
    this.dashboardService.getNombreClientsEntrepriseParSitImm().subscribe(
      data => {
        this.nombreClientsParSitImm = data;
        this.prepareSitImmChartData();
      },
      error => {
        console.error('Erreur lors de la récupération du nombre de clients par Situation Immobilier : ', error);
      }
    );
    //Nombre d'employés
    this.dashboardService.getNombreClientsParNbrEmployes().subscribe(
      data => {
        this.nombreClientsParnbrEmployes = data;
        console.log("ahaya", data)
        this.preparenbrEmpChartData();
      },
      error => {
        console.error('Erreur lors de la récupération du nombre de clients par Nombre d\'employés : ', error);
      }
    );
    //Chiffre d'affaires
    this.dashboardService.getNombreClientsParChiffreAffaires().subscribe(
      data => {
        this.nombreClientsParchAffaire = data;
        this.preparechifAffairesChartData();
      },
      error => {
        console.error('Erreur lors de la récupération du nombre de clients par Chiffre d\'affaires : ', error);
      }
    );


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
        label: 'Nombre de clients par Secteurs d\'activités'
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
      label: 'Nombre de Clients par Situation Immobilier'
      // backgroundColor: this.generateColors(this.nombreDemandesParNomAgence.length),
      // borderColor: 'white',
    }
  ];
  this.SitImmChartLabels = this.nombreClientsParSitImm.map(item => item.situationImmobilier);
}

 // Méthode pour préparer les données du graphique en radar pour les Clients par Nombre d'employés
 preparenbrEmpChartData(): void {
  // Définir les libellés pour les tranches du nombre d'employés
  const chartLabels: string[] = [
    'Moins de 10',
    'Entre 10 et 50',
    'Plus de 50'
  ];

  // Créer les données correspondantes pour chaque tranche du nombre d'employés
  const chartData: number[] = [
    this.nombreClientsParnbrEmployes.entrepriseMoinsDe10,
    this.nombreClientsParnbrEmployes.entrepriseEntre10Et50,
    this.nombreClientsParnbrEmployes.entreprisePlusDe50
  ];

  // Assigner les données et les labels au graphique
  this.nbrEmployesChartData = [
    {
      data: chartData,
      label: 'Nombre d\'entreprises'
    }
  ];
  this.nbrEmployesChartLabels = chartLabels;
}

   // Méthode pour préparer les données du graphique en radar pour les Clients par chiffres d'affaires
   preparechifAffairesChartData(): void {
    // Définir les libellés pour les tranches du chiffre d'affaires
    const chartLabels: string[] = [
      'Moins de 5000',
      'Entre 5000 et 50000',
      'Plus de 50000'
    ];
  
    // Créer les données correspondantes pour chaque tranche du chiffre d'affaires
    const chartData: number[] = [
      this.nombreClientsParchAffaire.chiffAffairesMoinsDe5000,
      this.nombreClientsParchAffaire.chiffAffairesEntre5000Et50000,
      this.nombreClientsParchAffaire.chiffAffairesPlusDe50000
    ];
  
    // Assigner les données et les labels au graphique
    this.chAffaireChartData = [
      {
        data: chartData,
        label: 'Nombre d\'entreprises'
      }
    ];
    this.chAffaireChartLabels = chartLabels;
  }
  

  versClientParticulier(){
    
  }

}
