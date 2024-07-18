import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {NombreClientsParNomAgence, NombreClientsParNomSecteur, NombreClientsParSex, NombreClientsParSitFam, NombreClientsParSitImm, NombreCreditsParTypeClient, NombreDemandesParNomAgence, NombreDemandesParNomProduit, NombreDemandesParStatut } from '../models/Dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  baseApiUrl:string=environment.baseApiUrl;
  constructor(private http:HttpClient) { }

//Demande
  GetNombreCreditsParTypeClient():Observable<NombreCreditsParTypeClient[]>{
    return this.http.get<NombreCreditsParTypeClient[]>(this.baseApiUrl + '/api/Credits/nombreCreditsParTypeClient')
  }

  getNombreDemandesParNomAgence(): Observable<NombreDemandesParNomAgence[]> {
    return this.http.get<NombreDemandesParNomAgence[]>(this.baseApiUrl + '/api/Credits/nombreDemandesParNomAgence')
  }

  getNombreDemandesParNomProduit(): Observable<NombreDemandesParNomProduit[]> {
    return this.http.get<NombreDemandesParNomProduit[]>(this.baseApiUrl + '/api/Credits/nombreDemandesParNomProduit')
  }

  getNombreDemandesParMontant(): Observable<any> {
    return this.http.get<any>(this.baseApiUrl + '/api/Credits/nombreDemandesParMontant');
  }
  getNombreDemandesParStatut(): Observable<NombreDemandesParStatut[]> {
    return this.http.get<NombreDemandesParStatut[]>(this.baseApiUrl + '/api/Credits/nombreDemandesParStatut')
  }

  getNombreDemandesParDate(): Observable<any> {
    return this.http.get<any>(this.baseApiUrl + '/api/Credits/nombreDemandesParDate');
}


//Client Particulier
getNombreCPParNomAgence(): Observable<NombreClientsParNomAgence[]> {
  return this.http.get<NombreClientsParNomAgence[]>(this.baseApiUrl + '/api/ClientParticulier/nombreClientsParticuliersParNomAgence')
}

getNombreClientsParticuliersParDate(): Observable<any> {
  return this.http.get<any>(this.baseApiUrl + '/api/ClientParticulier/nombreClientsParticuParDate');
}


getNombreClientsParticuliersParNomSecteur(): Observable<NombreClientsParNomSecteur[]> {
  return this.http.get<NombreClientsParNomSecteur[]>(this.baseApiUrl + '/api/ClientParticulier/nombreClientsParticuliersParNomSecteur')
}

getNombreClientsParSitFam(): Observable<NombreClientsParSitFam[]> {
  return this.http.get<NombreClientsParSitFam[]>(this.baseApiUrl + '/api/ClientParticulier/nombreClientsParSitFam')
}
getNombreClientsParticuliersParSitImm(): Observable<NombreClientsParSitImm[]> {
  return this.http.get<NombreClientsParSitImm[]>(this.baseApiUrl + '/api/ClientParticulier/nombreClientsParticuliersParSitImm')
}
getNombreClientsParSex(): Observable<NombreClientsParSex[]> {
  return this.http.get<NombreClientsParSex[]>(this.baseApiUrl + '/api/ClientParticulier/nombreClientsParSex')
}



//Client Entreprise

getNombreCEParNomAgence(): Observable<NombreClientsParNomAgence[]> {
  return this.http.get<NombreClientsParNomAgence[]>(this.baseApiUrl + '/api/ClientEntreprise/nombreClientsEntrepriseParNomAgence')
}

getNombreClientsEntrepriseParDate(): Observable<any> {
  return this.http.get<any>(this.baseApiUrl + '/api/ClientEntreprise/nombreClientsEntrepriseParDate');
}


getNombreClientsEntrepriseParNomSecteur(): Observable<NombreClientsParNomSecteur[]> {
  return this.http.get<NombreClientsParNomSecteur[]>(this.baseApiUrl + '/api/ClientEntreprise/nombreClientsEntrepriseParNomSecteur')
}

getNombreClientsEntrepriseParSitImm(): Observable<NombreClientsParSitImm[]> {
  return this.http.get<NombreClientsParSitImm[]>(this.baseApiUrl + '/api/ClientEntreprise/nombreClientsEntrepriseParSitImm')
}

getNombreClientsParNbrEmployes(): Observable<any> {
  return this.http.get<any>(this.baseApiUrl + '/api/ClientEntreprise/nombreClientsParNbrEmployes');
}

getNombreClientsParChiffreAffaires(): Observable<any> {
  return this.http.get<any>(this.baseApiUrl + '/api/ClientEntreprise/nombreClientsParChiffreAffaire');
}

//
getDureepardemande(id:number): Observable<any> {
  return this.http.get<any>(this.baseApiUrl + '/api/Credits/DureeOperation/' + id);
}

getDureetotale(): Observable<any> {
  return this.http.get<any>(this.baseApiUrl + '/api/Credits/sumDurations');
}

}
