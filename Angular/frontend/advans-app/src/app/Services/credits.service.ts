import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { DemandeCredit, DemandeCreditsanIDdemande, Garant, Garantie } from '../models/DemandeCredit.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditsService {
  baseApiUrl:string=environment.baseApiUrl;
  private idDemande: number =0;
  private statutDemande: string = '';
  private garantToEdit: Garant ={
    idGarant: null,
    idDemande: 0,
    nomGarant: '' ,
    identiteGarant: '' ,
    relation: '' ,
    idRelationClientGarant: 0,
    valeurMoyenne: 0 ,
    valeurBasse: 0,
    telephone:''
  
  };

  private garantieToEdit : Garantie = {
    idGarantie: null  ,
    idDemande: 0,
    proprietaire: ''  ,
    type: '',
    idTypeGarantie: 0,
    valeur_estime: '' 
  }

  constructor(private http:HttpClient) { }

  GetAllDemandes():Observable<DemandeCredit[]>{
    return this.http.get<DemandeCredit[]>(this.baseApiUrl + '/api/Credits')
  }
  
  AddCredit(addcreditrequest: DemandeCredit): Observable<DemandeCredit>{
  return  this.http.post<DemandeCredit>(this.baseApiUrl + '/api/Credits', addcreditrequest )
  }

  getDemandeById(idDemande: number): Observable<DemandeCredit> { 
    return this.http.get<DemandeCredit>(`${this.baseApiUrl}/api/Credits/${idDemande}`);
  }

  updateDemande(id: number, updateDemandeRequest: DemandeCredit) : Observable<DemandeCredit>{
    return this.http.put<DemandeCredit>(this.baseApiUrl + '/api/Credits/'+id , updateDemandeRequest)
 }

 deleteDemande(id: number): Observable<DemandeCredit> {
  return this.http.delete<DemandeCredit>(this.baseApiUrl+'/api/Credits/'+id);
 }
  setIdDemande(id: number) {
    this.idDemande = id;
  }

  getIdDemande(): number {
    return this.idDemande;
  }

  setStatut(statut: string) {
    this.statutDemande = statut;
  }

  getStatut(): string {
    return this.statutDemande;
  }

 // Méthode pour mettre à jour le statut de la demande de crédit
 
// Méthode pour mettre à jour le statut de la demande de crédit
updateStatutDemande(idDemande: number, nouveauStatut: string): Observable<any> {
  const body = `"${nouveauStatut}"`; // Encapsuler le nouveau statut dans une chaîne JSON
  return this.http.put(`${this.baseApiUrl}/api/Credits/updateStatut/${idDemande}`, body, {
    headers: {
      'Content-Type': 'application/json' // Spécifier que le contenu est de type JSON
    },
    responseType: 'text' // Indiquer que la réponse est de type texte
  });
}



  //Garants
 

  getAllGarants(idDemande: number): Observable<Garant[]> {
    return this.http.get<Garant[]>(`${this.baseApiUrl}/api/Garant/${idDemande}`);
  }
  AddGarant(addgarantrequest: Garant): Observable<Garant>{
    return  this.http.post<Garant>(this.baseApiUrl + '/api/Garant', addgarantrequest )
    }

    UpdateGarant(idGarant: number, updateGarantRequest: Garant) : Observable<Garant>{
      return this.http.put<Garant>(this.baseApiUrl + '/api/Garant/'+idGarant , updateGarantRequest)
   }

   deleteGarant(id: number): Observable<Garant> {
    return this.http.delete<Garant>(this.baseApiUrl+'/api/Garant/'+id);
   }

  
    setGarantToEdit(garant: Garant): void {
      this.garantToEdit = garant;
    }
  
    getGarantToEdit(): Garant {
      return this.garantToEdit;
    }

  //Garaties
 
  getAllGaranties(idDemande: number): Observable<Garantie[]> {
    return this.http.get<Garantie[]>(`${this.baseApiUrl}/api/Garantie/${idDemande}`);
  }

  AddGarantie(addgarantierequest: Garantie): Observable<Garantie>{
    return  this.http.post<Garantie>(this.baseApiUrl + '/api/Garantie', addgarantierequest )
    }

    UpdateGarantie(idGarantie: number, updateGarantieRequest: Garantie) : Observable<Garantie>{
      return this.http.put<Garantie>(this.baseApiUrl + '/api/Garantie/'+idGarantie , updateGarantieRequest)
   }

   deleteGarantie(id: number): Observable<Garantie> {
    return this.http.delete<Garantie>(this.baseApiUrl+'/api/Garantie/'+id);
   }

    setGarantieToEdit(garantie: Garantie): void {
      this.garantieToEdit = garantie;
    }
  
    getGarantieToEdit(): Garantie {
      return this.garantieToEdit;
    }
    
}
