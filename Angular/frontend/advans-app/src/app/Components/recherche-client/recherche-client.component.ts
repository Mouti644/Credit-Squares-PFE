import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../Services/clients.service';
import { MatDialog } from '@angular/material/dialog';
import { ClientDialogComponentComponent } from '../client-dialog-component/client-dialog-component.component';


@Component({
  selector: 'app-recherche-client',
  templateUrl: './recherche-client.component.html',
  styleUrls: ['./recherche-client.component.css']
})
export class RechercheClientComponent implements OnInit {
  erreurMessage: string = '';
  identiteClient: string = '';
  clientTrouve: any;

  constructor(private clientService: ClientsService, public dialog: MatDialog) { }

  ngOnInit() { }

  rechercherClient() {
    this.clientService.GetClientByIdentity(this.identiteClient)
      .subscribe(
        (response) => {
          this.clientTrouve = response;
          this.clientService.setClientTrouve(this.clientTrouve);
          this.openDialog(this.clientTrouve, null);
        },
        (error) => {
          console.error('Erreur lors de la recherche du client:', error);
          this.erreurMessage = "Aucun client trouvé pour l'identité saisie.";
          this.openDialog(null, this.erreurMessage);
        }
      );
  }

  openDialog(client: any, error: string | null): void {
    this.dialog.open(ClientDialogComponentComponent, {
      data: {
        client: client,
        error: error
      }
    });
  }
}
