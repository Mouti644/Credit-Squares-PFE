import { Component, OnInit } from '@angular/core';
import { Client, Rais_soc, Secteur_act, Sex, Sigle, SitFam, SitImm, type, activite, sous_act } from '../../../models/client.model';
import { Statut } from '../../../models/credits.model';
import { ClientsService } from '../../../Services/clients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.css'
})
export class AddClientComponent implements OnInit {

  addclientrequest: Client = {
    agence: '',
    cycle: 0,
    type: type.PersonneMorale,
    sigle : null,
    interlocuteur_principal : '',
    nom: '',
    prenom: '',
    phone: '',
    sex: null,
    secteur_activite: null,
    sous_activite: null,
    activite: null ,
    raison_sociale : null,
    nombre_enfants: 0,
    situation_familiale: null,
    situation_immobiliere: null,
    date_dernier_visite: new Date()
  }


  statuts = Object.values(Statut);
  sigles = Object.values(Sigle);
  Sexs = Object.values(Sex);
  SitFams = Object.values(SitFam);
  SitImms = Object.values(SitImm);
  Secteur_acts = Object.values(Secteur_act);
  activites = Object.values(activite);
  sous_acts = Object.values(sous_act);
  Rais_socs = Object.values(Rais_soc);
  Types = Object.values(type);


  constructor(private ClientService: ClientsService, private router:Router){}

  ngOnInit(): void {
    
  }

  addClient(){
    this.ClientService.AddClient(this.addclientrequest)
    .subscribe({
      next: (client) => {
        this.router.navigate(['list-client'])
        
      },
      error: (response) => {console.log(response)}
    })
  }
}
