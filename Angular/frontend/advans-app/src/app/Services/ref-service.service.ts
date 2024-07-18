import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { Activite, RefAgence, SecteurActivite, SituationFamilialeParticulier, SituationImmobilierParticulier, SousActivite } from '../models/ClientParticulier.model';
import { Observable, map } from 'rxjs';
import { SituationImmobilierEntreprise, TypePointVente } from '../models/ClientEntreprise.model';
import { Produit, RelationClientGarant, TypeGarantie } from '../models/DemandeCredit.model';

@Injectable({
  providedIn: 'root'
})
export class RefServiceService {
  baseApiUrl:string=environment.baseApiUrl;

  private produitToEdit : Produit = {
    idProduit: 0,
    nomProduit: ''
  }

  private agenceToEdit : RefAgence = {
    idAgence : 0,
    nomAgence :  '' ,
    region :'' ,
    telephone: '' ,
    adresse :''
  }

  constructor(private http:HttpClient) { }

  GetAllSAP():Observable<SecteurActivite[]>{
    return  this.http.get<SecteurActivite[]>(this.baseApiUrl + '/api/SecteurActiviteParticulier')
   }


  getNomSecteurActiviteById(idSecteur: number): Observable<string> {
    // Remplacez l'URL par l'URL de votre API backend qui récupère le nom du secteur d'activité par son ID
    const url = `${this.baseApiUrl}/api/SecteurActiviteParticulier/${idSecteur}`;
    return this.http.get<{ secteurActivite: string }>(url).pipe(
      map(response => response.secteurActivite)
  );
}

   
  AjoutSAP(addSecteurActiviteParticulierrequest: SecteurActivite):Observable<SecteurActivite>{
    return this.http.post<SecteurActivite>(this.baseApiUrl + '/api/SecteurActiviteParticulier' ,addSecteurActiviteParticulierrequest )
  }

  GetAllSAE():Observable<SecteurActivite[]>{
    return  this.http.get<SecteurActivite[]>(this.baseApiUrl + '/api/SecteurActiviteEntreprise')
   }

   getNomSecteurActiviteEntrepriseById(idSecteur: number): Observable<string> {
    // Remplacez l'URL par l'URL de votre API backend qui récupère le nom du secteur d'activité par son ID
    const url = `${this.baseApiUrl}/api/SecteurActiviteEntreprise/${idSecteur}`;
    return this.http.get<{ secteurActivite: string }>(url).pipe(
      map(response => response.secteurActivite)
  );
}

  AjoutSAE(addSecteurActiviteEntrepriserequest: SecteurActivite):Observable<SecteurActivite>{
    return this.http.post<SecteurActivite>(this.baseApiUrl + '/api/SecteurActiviteEntreprise' ,addSecteurActiviteEntrepriserequest )
  }
//--------------
  GetAllSsAE():Observable<SousActivite[]>{
    return  this.http.get<SousActivite[]>(this.baseApiUrl + '/api/SousActiviteEntreprise')
   }

   getNomSousActiviteEntrepriseById(idSousActivite: number): Observable<string> {
    // Remplacez l'URL par l'URL de votre API backend qui récupère le nom du secteur d'activité par son ID
    const url = `${this.baseApiUrl}/api/SousActiviteEntreprise/${idSousActivite}`;
    return this.http.get<{ sousActivite: string }>(url).pipe(
      map(response => response.sousActivite)
  );
}
  AjoutSsAE(addSousActiviteEntrepriserequest: SousActivite):Observable<SousActivite>{
    return this.http.post<SousActivite>(this.baseApiUrl + '/api/SousActiviteEntreprise' ,addSousActiviteEntrepriserequest )
  }

 
  GetAllSsAP():Observable<SousActivite[]>{
    return  this.http.get<SousActivite[]>(this.baseApiUrl + '/api/SousActiviteParticulier')
   }

   getNomSousActiviteParticulierById(idSousActivite: number): Observable<string> {
    // Remplacez l'URL par l'URL de votre API backend qui récupère le nom du secteur d'activité par son ID
    const url = `${this.baseApiUrl}/api/SousActiviteParticulier/${idSousActivite}`;
    return this.http.get<{ sousActivite: string }>(url).pipe(
      map(response => response.sousActivite)
  );
}

  AjoutSsAP(addSousActiviteParticulierrequest: SousActivite):Observable<SousActivite>{
    return this.http.post<SousActivite>(this.baseApiUrl + '/api/SousActiviteParticulier' ,addSousActiviteParticulierrequest )
  }
  //------------

  GetAllAP():Observable<Activite[]>{
    return  this.http.get<Activite[]>(this.baseApiUrl + '/api/ActiviteParticulier')
   }

   getNomActiviteParticulierById(idActivite: number): Observable<string> {
    // Remplacez l'URL par l'URL de votre API backend qui récupère le nom du secteur d'activité par son ID
    const url = `${this.baseApiUrl}/api/ActiviteParticulier/${idActivite}`;
    return this.http.get<{ activite: string }>(url).pipe(
      map(response => response.activite)
  );
}
   
  AjoutAP(addActiviteParticulierrequest: Activite):Observable<Activite>{
    return this.http.post<Activite>(this.baseApiUrl + '/api/ActiviteParticulier' ,addActiviteParticulierrequest )
  }

  GetAllAE():Observable<Activite[]>{
    return  this.http.get<Activite[]>(this.baseApiUrl + '/api/ActiviteEntreprise')
   }

   getNomActiviteEntrepriseById(idActivite: number): Observable<string> {
    // Remplacez l'URL par l'URL de votre API backend qui récupère le nom du secteur d'activité par son ID
    const url = `${this.baseApiUrl}/api/ActiviteEntreprise/${idActivite}`;
    return this.http.get<{ activite: string }>(url).pipe(
      map(response => response.activite)
  );
}

  AjoutAE(addActiviteEntrepriserequest: Activite):Observable<Activite>{
    return this.http.post<Activite>(this.baseApiUrl + '/api/ActiviteEntreprise' ,addActiviteEntrepriserequest )
  }
//----------------------
GetAllSIE():Observable<SituationImmobilierEntreprise[]>{
  return  this.http.get<SituationImmobilierEntreprise[]>(this.baseApiUrl + '/api/SituationImmobilierEntreprise')
 }

 getSituationImmobilierEntrepriseById(idSituationImmobilierEntreprise: number): Observable<string> {
  // Remplacez l'URL par l'URL de votre API backend qui récupère le nom du secteur d'activité par son ID
  const url = `${this.baseApiUrl}/api/SituationImmobilierEntreprise/${idSituationImmobilierEntreprise}`;
  return this.http.get<{ situationImmobilierEntreprise: string }>(url).pipe(
    map(response => response.situationImmobilierEntreprise)
);
}


AjoutSIE(addSituationImmobilierEntrepriserequest: SituationImmobilierEntreprise):Observable<SituationImmobilierEntreprise>{
  return this.http.post<SituationImmobilierEntreprise>(this.baseApiUrl + '/api/SituationImmobilierEntreprise' ,addSituationImmobilierEntrepriserequest )
}

GetAllSIP():Observable<SituationImmobilierParticulier[]>{
  return  this.http.get<SituationImmobilierParticulier[]>(this.baseApiUrl + '/api/SituationImmobilierParticulier')
 }

 getSituationImmobilierParticulierById(idSituationImmobilierParticulier: number): Observable<string> {
  // Remplacez l'URL par l'URL de votre API backend qui récupère le nom du secteur d'activité par son ID
  const url = `${this.baseApiUrl}/api/SituationImmobilierParticulier/${idSituationImmobilierParticulier}`;
  return this.http.get<{ situationImmobilierParticulier: string }>(url).pipe(
    map(response => response.situationImmobilierParticulier)
);
}

AjoutSIP(addSituationImmobilierParticulierrequest: SituationImmobilierParticulier):Observable<SituationImmobilierParticulier>{
  return this.http.post<SituationImmobilierParticulier>(this.baseApiUrl + '/api/SituationImmobilierParticulier' ,addSituationImmobilierParticulierrequest )
}
//----------------------

GetAllSFP():Observable<SituationFamilialeParticulier[]>{
  return  this.http.get<SituationFamilialeParticulier[]>(this.baseApiUrl + '/api/SituationFamilialeParticulier')
 }

 getSituationFamilialeParticulierById(idSituationFamiliale: number): Observable<string> {
  // Remplacez l'URL par l'URL de votre API backend qui récupère le nom du secteur d'activité par son ID
  const url = `${this.baseApiUrl}/api/SituationFamilialeParticulier/${idSituationFamiliale}`;
  return this.http.get<{ situationFamiliale: string }>(url).pipe(
    map(response => response.situationFamiliale)
);
}
 
AjoutSFP(addSituationFamilialeParticulierrequest: SituationFamilialeParticulier):Observable<SituationFamilialeParticulier>{
  return this.http.post<SituationFamilialeParticulier>(this.baseApiUrl + '/api/SituationFamilialeParticulier' ,addSituationFamilialeParticulierrequest )
}
//-------------------
GetAllRCG():Observable<RelationClientGarant[]>{
  return  this.http.get<RelationClientGarant[]>(this.baseApiUrl + '/api/RelationClientGarant')
 }

 getRelationClientById(idRelationClientGarant: number): Observable<string> {
  // Remplacez l'URL par l'URL de votre API backend qui récupère le nom du secteur d'activité par son ID
  const url = `${this.baseApiUrl}/api/RelationClientGarant/${idRelationClientGarant}`;
  return this.http.get<{ relationClient: string }>(url).pipe(
    map(response => response.relationClient)
);
}

AjoutRCG(addRelationClientGarantrequest: RelationClientGarant):Observable<RelationClientGarant>{
  return this.http.post<RelationClientGarant>(this.baseApiUrl + '/api/RelationClientGarant' ,addRelationClientGarantrequest )
}

//---------------
GetAllTypesPV():Observable<TypePointVente[]>{
  return  this.http.get<TypePointVente[]>(this.baseApiUrl + '/api/TypePointVente')
 }
 getTypesPVById(idTypesPV: number): Observable<string> {
  const url = `${this.baseApiUrl}/api/TypePointVente/${idTypesPV}`;
  return this.http.get<{ typepointvente: string }>(url).pipe(
    map(response => response.typepointvente)
);
}

AjoutTypePV(addTypePointVenterequest: TypePointVente):Observable<TypePointVente>{
  return this.http.post<TypePointVente>(this.baseApiUrl + '/api/TypePointVente' ,addTypePointVenterequest )
}

//----------------
GetAllTypesG():Observable<TypeGarantie[]>{
  return  this.http.get<TypeGarantie[]>(this.baseApiUrl + '/api/TypeGarantieGarant')
 }

 getTypeGarantieById(idTypeGarantie: number): Observable<string> {
  const url = `${this.baseApiUrl}/api/TypeGarantieGarant/${idTypeGarantie}`;
  return this.http.get<{ typeGarantie: string }>(url).pipe(
    map(response => response.typeGarantie)
);
}

AjoutTypeG(addTypeGarantierequest: TypeGarantie):Observable<TypeGarantie>{
  return this.http.post<TypeGarantie>(this.baseApiUrl + '/api/TypeGarantieGarant' ,addTypeGarantierequest )
}
//-------------
GetAllProduits():Observable<Produit[]>{
  return  this.http.get<Produit[]>(this.baseApiUrl + '/api/Produit')
 }

 getNomProduitById(idProduit: number): Observable<string> {
  // Remplacez l'URL par l'URL de votre API backend qui récupère le nom du secteur d'activité par son ID
  const url = `${this.baseApiUrl}/api/Produit/${idProduit}`;
  return this.http.get<{ produit: string }>(url).pipe(
    map(response => response.produit)
);
}

AjoutProduit(addProduitrequest: Produit):Observable<Produit>{
  return this.http.post<Produit>(this.baseApiUrl + '/api/Produit' ,addProduitrequest )
}

UpdateProduit(idProduit: number, updateProduitRequest: Produit) : Observable<Produit>{
  return this.http.put<Produit>(this.baseApiUrl + '/api/Produit/'+idProduit , updateProduitRequest)
}

deleteProduit(id: number): Observable<Produit> {
return this.http.delete<Produit>(this.baseApiUrl+'/api/Produit/'+id);
}

setProduitToEdit(produit: Produit): void {
  this.produitToEdit = produit;
}

getProduitToEdit(): Produit {
  return this.produitToEdit;
}
//---------------------
GetAllAgences():Observable<RefAgence[]>{
  return  this.http.get<RefAgence[]>(this.baseApiUrl + '/api/Agence')
 }
 getNomAgenceById(idAgence: number): Observable<string> {
  // Remplacez l'URL par l'URL de votre API backend qui récupère le nom du secteur d'activité par son ID
  const url = `${this.baseApiUrl}/api/Agence/${idAgence}`;
  return this.http.get<{ agence: string }>(url).pipe(
    map(response => response.agence)
);
}
AjoutAgence(addAgencerequest: RefAgence):Observable<RefAgence>{
  return this.http.post<RefAgence>(this.baseApiUrl + '/api/Agence' ,addAgencerequest )
}

UpdateAgence(idAgence: number, updateAgenceRequest: RefAgence) : Observable<RefAgence>{
  return this.http.put<RefAgence>(this.baseApiUrl + '/api/Agence/'+idAgence , updateAgenceRequest)
}

deleteAgence(id: number): Observable<RefAgence> {
return this.http.delete<RefAgence>(this.baseApiUrl+'/api/Agence/'+id);
}


setAgenceToEdit(agence: RefAgence): void {
  this.agenceToEdit = agence;
}

getAgenceToEdit(): RefAgence {
  return this.agenceToEdit;
}
}
