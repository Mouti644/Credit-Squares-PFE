import { Component, OnInit } from '@angular/core';
import { Client } from '../../../models/client.model';
import { ClientsService } from '../../../Services/clients.service';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrl: './list-clients.component.css'
})
export class ListClientsComponent implements OnInit{

  clients :Client[] = [];

  
  constructor(private clientsService:ClientsService){

  }
  ngOnInit(): void {
    this.clientsService.GetAllClients()
    .subscribe({
      next: (clients) => {this.clients=clients}
    ,
    error: (response) => {console.log(response)}
    
  } )
  }
}
