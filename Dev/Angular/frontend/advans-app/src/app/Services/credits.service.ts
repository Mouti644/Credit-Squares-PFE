import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { Credits } from '../models/credits.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditsService {
  baseApiUrl:string=environment.baseApiUrl;

  constructor(private http:HttpClient) { }

  GetAllDemandes():Observable<Credits[]>{
    return this.http.get<Credits[]>(this.baseApiUrl + '/api/Credits')
  }
  
  AddCredit(addcreditrequest: Credits): Observable<Credits>{
  return  this.http.post<Credits>(this.baseApiUrl + '/api/Credits', addcreditrequest )
  }
}
