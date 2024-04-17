import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  baseApiUrl:string=environment.baseApiUrl;
  constructor(private http:HttpClient) { }


  GetAllClients():Observable<Client[]>{
   return  this.http.get<Client[]>(this.baseApiUrl + '/api/Client')
  }

  AddClient(addclientrequest: Client):Observable<Client>{
    return this.http.post<Client>(this.baseApiUrl + '/api/Client' ,addclientrequest )
  }
}
