import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../../../guards/auth.guard';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { ClientsService } from '../../../Services/clients.service';
import { ClientEntreprise } from '../../../models/ClientEntreprise.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css'],
})
export class ListClientsComponent implements OnInit {
  userName: string = AuthGuard.username;
  ClientsEntreprise: ClientEntreprise[] = [];
  filteredClients: ClientEntreprise[] = [];
  searchTerm: string = '';
  isValidInput: boolean = true;
  currentPageEntreprise: number = 1;
  itemsPerPage: number = 10;

  constructor(
    private jwtHelper: JwtHelperService,
    private http: HttpClient,
    private router: Router,
    private authGuard: AuthGuard,
    private clientService: ClientsService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.clientService.GetAllClientsEntreprise().subscribe({
      next: (ClientsEntreprise) => {
        console.log('ClientsEntreprise:', ClientsEntreprise); // Ajoutez cette ligne pour déboguer
        this.ClientsEntreprise = ClientsEntreprise;
        this.filteredClients = ClientsEntreprise;
      },
      error: (response) => {
        console.log(response);
      }
    });
  }

  validateInputLength() {
    this.isValidInput = this.searchTerm.length === 8;
  }

  searchClient() {
    if (this.searchTerm.length === 8) {
      this.filteredClients = this.ClientsEntreprise.filter(client =>
        client.identiteClient!.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else if (this.searchTerm.length === 0) {
      this.resetSearch();
    } else {
      this.snackBar.open("Le sigle doit comporter exactement 8 caractères.", "Fermer", {
        duration: 4000,
        horizontalPosition: 'end',
        verticalPosition: 'bottom',
      });
    }
    this.currentPageEntreprise = 1; // Reset to the first page after search
  }

  resetSearch() {
    this.filteredClients = this.ClientsEntreprise;
    this.currentPageEntreprise = 1;
  }

  get paginatedClientsEntreprise() {
    const startIndex = (this.currentPageEntreprise - 1) * this.itemsPerPage;
    return this.filteredClients.slice(startIndex, startIndex + this.itemsPerPage);
  }

  nextPageEntreprise() {
    if ((this.currentPageEntreprise * this.itemsPerPage) < this.filteredClients.length) {
      this.currentPageEntreprise++;
    }
  }

  previousPageEntreprise() {
    if (this.currentPageEntreprise > 1) {
      this.currentPageEntreprise--;
    }
  }

  handleButtonClick() {
    if (this.userName !== "Agent d'accueil et service client") {
      this.snackBar.open("Vous ne pouvez pas créer un nouveau client, merci", "Fermer", {
        duration: 4000,
        horizontalPosition: 'end',
        verticalPosition: 'bottom',
      });
    } else {
      this.router.navigate(['/nav/add-client-entreprise']);
    }
  }

  isUserAuthenticated = (): boolean => {
    const token = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    return false;
  }

  logOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("refreshToken");
    this.router.navigate(["/accueil"]);
  }
}
