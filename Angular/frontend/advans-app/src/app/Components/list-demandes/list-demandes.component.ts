import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthGuard } from '../../guards/auth.guard';
import { DemandeCredit, Produit, Statut, TypeClient } from '../../models/DemandeCredit.model';
import { CreditsService } from '../../Services/credits.service';
import { RefServiceService } from '../../Services/ref-service.service';
import { RefAgence } from '../../models/ClientParticulier.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClientsService } from '../../Services/clients.service';
import { OperationsDialogComponent } from '../operations-dialog/operations-dialog.component';
import { MatDialog } from '@angular/material/dialog';


declare var $: any;

@Component({
  selector: 'app-list-demandes',
  templateUrl: './list-demandes.component.html',
  styleUrls: ['./list-demandes.component.css']
})
export class ListDemandesComponent implements OnInit {

  Demandes: DemandeCredit[] = [];
  filteredDemandes:  DemandeCredit[] = [];
  displayedColumns: string[] = ['idDemande', 'nomClient', 'typeClient', 'nomAgence', 'montant', 'statut', 'nomProduit', 'dateDemande', 'details'];
  userName: string = AuthGuard.username;

  typeClientEnum = TypeClient;
  statut = Statut;
  statutFilter: string = '';
  AgenceFilter: string = '';
  TypeClientFilter: string = '';
  ProduitFiltre: string = '';

  currentPage: number = 1;
  itemsPerPage: number = 8;

  produits: Produit[] = [];
  agences : RefAgence[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private jwtHelper: JwtHelperService,
    private http: HttpClient,
    private router: Router,
    private authGuard: AuthGuard,
    private creditService: CreditsService,
    private refService : RefServiceService,
    private snackBar: MatSnackBar,
    private clientService : ClientsService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.creditService.GetAllDemandes()
      .subscribe({
        next: (Demandes) => {
          this.Demandes = Demandes;
          this.filteredDemandes = Demandes;
          
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
      
  }

  showOperationsDialog(demandeId: number) {
    const dialogRef = this.dialog.open(OperationsDialogComponent, {
      data: { demandeId: demandeId }
    });
  }

  get paginateddemandes() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredDemandes.slice(startIndex, startIndex + this.itemsPerPage);
  }

  nextPageEntreprise() {
    if ((this.currentPage * this.itemsPerPage) < this.filteredDemandes.length) {
      this.currentPage++;
    }
  }

  previousPageEntreprise() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

 
  handleButtonClick() {
    if (this.userName !== "Agent d'accueil et service client") {
      this.snackBar.open("Vous ne pouvez pas créer une demande, merci", "Fermer", {
        duration: 4000,
        horizontalPosition: 'end',
        verticalPosition: 'bottom',
        
      });
    } else {
      // Logique pour créer une nouvelle demande
      this.router.navigate(['/nav/recherche-client'])
    }
  }

  setStatutSelectionne(statut: string) {
    this.creditService.setStatut(statut);
  }

  setIdClientParticulier(id:number){
    this.clientService.setIdClientParticulier(id);
  }

  setIdClientEntreprise(id:number){
    this.clientService.setIdClientEntreprise(id);
  }

  settypeclient(type:string){
    this.clientService.settypeclient(type);
  }


  applyTypeClientFilter(type: string) {
    this.TypeClientFilter = type;
    console.log('Type de filtre :', type);
    this.filteredDemandes = this.Demandes.filter(demande =>
      type === '' || demande.typeClient === this.typeClientEnum[type as keyof typeof TypeClient]
    );
  }
  
  applyAgenceFilter(agence: string) {
    this.AgenceFilter = agence;
    this.filteredDemandes = this.Demandes.filter(demande =>
      agence === '' || demande.nomAgence === agence
    );
  }
  
  applyStatutFilter(statut: string) {
    this.statutFilter = statut;
    this.filteredDemandes = this.Demandes.filter(demande =>
      statut === '' || demande.statut === this.statut[statut as keyof typeof Statut]
    );
  }
  
  applyProduitFilter(produit: string) {
    this.ProduitFiltre = produit;
    this.filteredDemandes = this.Demandes.filter(demande =>
      produit === '' || demande.nomProduit === produit
    );
  }
  
  isUserAuthenticated(): boolean {
    const token = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    return false;
  }

  logOut(): void {
    localStorage.removeItem("jwt");
    localStorage.removeItem("refreshToken");
    this.router.navigate(["/accueil"]);
  }
}
