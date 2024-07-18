import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../../guards/auth.guard';
import { ClientParticulier } from '../../models/ClientParticulier.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RefServiceService } from '../../Services/ref-service.service';
import { ClientsService } from '../../Services/clients.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-clients-particuliers',
  templateUrl: './list-clients-particuliers.component.html',
  styleUrls: ['./list-clients-particuliers.component.css']
})
export class ListClientsParticuliersComponent implements OnInit {
  userName: string = AuthGuard.username;
  ClientsParticulier: ClientParticulier[] = [];
  filteredClients: ClientParticulier[] = [];
  searchTerm: string = '';
  isValidInput: boolean = true;
  currentPage: number = 1;
  itemsPerPage: number = 10;

  constructor(private jwtHelper: JwtHelperService, private http: HttpClient, private router: Router, private authGuard: AuthGuard, private refservice: RefServiceService, private clientService: ClientsService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    // Ajoutez l'appel pour récupérer les clients particuliers
    this.clientService.GetAllClientsParticulier().subscribe({
      next: (ClientsParticulier) => {
        this.ClientsParticulier = ClientsParticulier;
        this.filteredClients = ClientsParticulier;
      },
      error: (Response) => {
        console.log(Response);
      }
    });
  }
  validateInputLength() {
    this.isValidInput = this.searchTerm.length === 8;
  }

  searchClient() {
    if (this.searchTerm.length === 8) {
      this.filteredClients = this.ClientsParticulier.filter(client =>
        client.identiteClient!.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else if (this.searchTerm.length === 0) {
      this.resetSearch();
    } else {
      this.snackBar.open("L'identifiant doit comporter exactement 8 caractères.", "Fermer", {
        duration: 4000,
        horizontalPosition: 'end',
        verticalPosition: 'bottom',
      });
    }
    this.currentPage = 1; // Reset to the first page after search
  }

  resetSearch() {
    this.filteredClients = this.ClientsParticulier;
    this.currentPage = 1;
  }

  get paginatedClientsParticulier() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredClients.slice(startIndex, startIndex + this.itemsPerPage);
  }

  nextPage() {
    if ((this.currentPage * this.itemsPerPage) < this.filteredClients.length) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
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
      this.router.navigate(['/nav/add-client-particulier']);
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
