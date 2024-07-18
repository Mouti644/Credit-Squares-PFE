import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appro, ClientEntreprise, CompteBancaireEntreprise, CompteEntreprise, CreditRecentEntreprise, Depense, Frequence, PointVente, Propriete, Vente } from '../models/ClientEntreprise.model';
import { ClientParticulier, CompteBancaireParticulier, CompteParticulier, CreditRecentParticulier, ReferentFamiliaux, TypeCompte } from '../models/ClientParticulier.model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  baseApiUrl:string=environment.baseApiUrl;

  private clientTrouve: any;
  private idClientParticulier: number =0;

  private idClientEntreprise: number =0;
  private typeclient : string = '';
  private  creditRecentToEdit:  CreditRecentParticulier = {
    idCRecent: 0,
    idClientParticulier: 0,
    objet: '' ,
    duree:  '' ,
    montantInitial: ''  ,
    enCoursRestant:  ''  ,
    montantEchMens:  '',
    nbrEchRestant:  '',
    nbrEchEnRetard:  '',
    nbrMaxJoursEnRetard:  ''
  } ;
  private referentFamiliauxToEdit : ReferentFamiliaux = {
    idRefFam: 0 ,
    idClientParticulier : 0,
    nom: '',
    prenom: '',
    telephone: '',
    relation:''
  }

  private compteBancaireParticulierToEdit : CompteBancaireParticulier = {
    idCompte: 0,
    idClientParticulier: 0,
    banque: '',
    typeCompte: TypeCompte.Courant ,
    solde: '' 
  }

  private  compteParticulierToEdit : CompteParticulier = {
    idCompteParticulier: 0 ,
    idClientParticulier : 0 ,
    dateOuvertureCompte: new Date()  ,
    deviseCompte: '' 
}

///////////////////////////////////////////////////////
private VenteToEdit : Vente ={
  idvente: 0,
  idClientEntreprise: 0,
  frequence: Frequence.Hebdo,
  valeurHaute: 0 ,
  valeurMoyenne: 0 ,
  valeurBasse: 0 
}

private ApproToEdit : Appro = {
  idAppro: 0,
  idClientEntreprise: 0,
  frequence: Frequence.Hebdo,
  montantMoyen: 0 
}

private creditRecentEntrepriseToEdit:CreditRecentEntreprise =  {
  idCRecent: 0,
  idClientEntreprise: 0,
  objet: '' ,
  duree: ''  ,
  montantInitial: ''  ,
  enCoursRestant: ''  ,
  montantEchMens: ''  ,
  nbrEchRestant: ''  ,
  nbrEchEnRetard: ''  ,
  nbrMaxJoursEnRetard: '' 
}

private PointVenteToEdit : PointVente ={
  idPV: 0,
  idClientEntreprise: 0,
  idTypePointVente:0,
  type: '',
  propriete: Propriete.Locataire ,
  nbrJoursOuverture: '' ,
  surface: ''  ,
  emplacement: '' 
}


private CompteBancaireEntrepriseToEdit: CompteBancaireEntreprise = {
  idCompteBanq: 0,
  idClientEntreprise: 0,
  banque: '',
  typeCompte: TypeCompte.Autres  ,
  solde: ''
}

private DepenseToEdit : Depense = {
  idDepense: 0,
  idClientEntreprise: 0,
  depenses: ''   ,
  coutTotal: ''
}

private CompteEntrepriseToEdit : CompteEntreprise  = {
  idCompteEntreprise: 0 ,
  idClientEntreprise: 0,
  dateOuvertureCompte: new Date() ,
  deviseCompte: ''
}



  constructor(private http:HttpClient) { }


  GetAllClientsEntreprise():Observable<ClientEntreprise[]>{
   return  this.http.get<ClientEntreprise[]>(this.baseApiUrl + '/api/ClientEntreprise')
  }

  AddClientEntreprise(addclientEntrepriserequest: ClientEntreprise):Observable<ClientEntreprise>{
    return this.http.post<ClientEntreprise>(this.baseApiUrl + '/api/ClientEntreprise' ,addclientEntrepriserequest )
  }

  GetAllClientsParticulier():Observable<ClientParticulier[]>{
    return  this.http.get<ClientParticulier[]>(this.baseApiUrl + '/api/ClientParticulier')
   }
    
   AddClientParticulier(addclientParticulierrequest: ClientParticulier):Observable<ClientParticulier>{
     return this.http.post<ClientParticulier>(this.baseApiUrl + '/api/ClientParticulier' ,addclientParticulierrequest )
   }

   getClientParticulier(id: number): Observable<ClientParticulier>{
    return this.http.get<ClientParticulier>(this.baseApiUrl+'/api/ClientParticulier/'+id);
   }

   updateClientParticulier(id: number, updateClientParticulierRequest: ClientParticulier) : Observable<ClientParticulier>{
      return this.http.put<ClientParticulier>(this.baseApiUrl + '/api/ClientParticulier/'+id , updateClientParticulierRequest)
   }

   getClientEntreprise(id: number): Observable<ClientEntreprise>{
    return this.http.get<ClientEntreprise>(this.baseApiUrl+'/api/ClientEntreprise/'+id);
   }

   updateClientEntreprise(id: number, updateClientEntrepriseRequest: ClientEntreprise) : Observable<ClientEntreprise>{
      return this.http.put<ClientEntreprise>(this.baseApiUrl + '/api/ClientEntreprise/'+id , updateClientEntrepriseRequest)
   }

   deleteClientParticulier(id: number): Observable<ClientParticulier> {
    return this.http.delete<ClientParticulier>(this.baseApiUrl+'/api/ClientParticulier/'+id);
   }

   deleteClientEntreprise(id: number): Observable<ClientEntreprise> {
    return this.http.delete<ClientEntreprise>(this.baseApiUrl+'/api/ClientEntreprise/'+id);
   }

   /////////Tab Particulier
   AddCompteParticulier(addCompteParticulierRequest: CompteParticulier):Observable<CompteParticulier>{
    return this.http.post<CompteParticulier>(this.baseApiUrl + '/api/CompteParticulier' ,addCompteParticulierRequest )
   }

   getAllCP(IdClientParticulier: number): Observable<CompteParticulier[]> {
    return this.http.get<CompteParticulier[]>(`${this.baseApiUrl}/api/CompteParticulier/${IdClientParticulier}`);
  }

  Updatecomptepart(idCompteParticulier: number, updateCPRequest: CompteParticulier) : Observable<CompteParticulier>{
    return this.http.put<CompteParticulier>(this.baseApiUrl + '/api/CompteParticulier/'+idCompteParticulier , updateCPRequest)
 }

 deletecomptepart(id: number): Observable<CompteParticulier> {
  return this.http.delete<CompteParticulier>(this.baseApiUrl+'/api/CompteParticulier/'+id);
 }



   //
   AddReferentFamiliaux(addReferentFamiliauxRequest: ReferentFamiliaux):Observable<ReferentFamiliaux>{
    return this.http.post<ReferentFamiliaux>(this.baseApiUrl + '/api/ReferentFamiliaux' ,addReferentFamiliauxRequest )
   }

   getAllRF(IdClientParticulier: number): Observable<ReferentFamiliaux[]> {
    return this.http.get<ReferentFamiliaux[]>(`${this.baseApiUrl}/api/ReferentFamiliaux/${IdClientParticulier}`);
  }

  UpdateRF(idReferent: number, updateRFRequest: ReferentFamiliaux) : Observable<ReferentFamiliaux>{
    return this.http.put<ReferentFamiliaux>(this.baseApiUrl + '/api/ReferentFamiliaux/'+idReferent , updateRFRequest)
 }

 deleteRF(id: number): Observable<ReferentFamiliaux> {
  return this.http.delete<ReferentFamiliaux>(this.baseApiUrl+'/api/ReferentFamiliaux/'+id);
 }


   //
   AddCompteBancaireParticulier(addCompteBancaireParticulierRequest: CompteBancaireParticulier):Observable<CompteBancaireParticulier> {
   return this.http.post<CompteBancaireParticulier>(this.baseApiUrl + '/api/CompteBancaireParticulier' ,addCompteBancaireParticulierRequest )
  }

  getAllCBP(IdClientParticulier: number): Observable<CompteBancaireParticulier[]> {
    return this.http.get<CompteBancaireParticulier[]>(`${this.baseApiUrl}/api/CompteBancaireParticulier/${IdClientParticulier}`);
  }

  UpdateCBP(idCompteBan: number, updateCBPequest: CompteBancaireParticulier) : Observable<CompteBancaireParticulier>{
    return this.http.put<CompteBancaireParticulier>(this.baseApiUrl + '/api/CompteBancaireParticulier/'+idCompteBan , updateCBPequest)
 }

 deleteCBP(id: number): Observable<CompteBancaireParticulier> {
  return this.http.delete<CompteBancaireParticulier>(this.baseApiUrl+'/api/CompteBancaireParticulier/'+id);
 }

  //
  AddCreditRecentParticulier(addCreditRecentParticulierRequest: CreditRecentParticulier):Observable<CreditRecentParticulier>{
    return this.http.post<CreditRecentParticulier>(this.baseApiUrl + '/api/CreditRecentParticulier' ,addCreditRecentParticulierRequest )

  }

  getAllCRP(IdClientParticulier: number): Observable<CreditRecentParticulier[]> {
    return this.http.get<CreditRecentParticulier[]>(`${this.baseApiUrl}/api/CreditRecentParticulier/${IdClientParticulier}`);
  }

  UpdateCRP(idCreditRecPar: number, updateCRPequest: CreditRecentParticulier) : Observable<CreditRecentParticulier>{
    return this.http.put<CreditRecentParticulier>(this.baseApiUrl + '/api/CreditRecentParticulier/'+idCreditRecPar , updateCRPequest)
 }

 deleteCRP(id: number): Observable<CreditRecentParticulier> {
  return this.http.delete<CreditRecentParticulier>(this.baseApiUrl+'/api/CreditRecentParticulier/'+id);
 }

  ///////////////////////////////////////////////////////Tab Entreprise

  //CompteEntreprise

  AddCompteEntreprise(addCompteEntrepriseRequest: CompteEntreprise):Observable<CompteEntreprise>{
    return this.http.post<CompteEntreprise>(this.baseApiUrl + '/api/CompteEntreprise' ,addCompteEntrepriseRequest )
   }

   getAllCE(IdClientEntreprise: number): Observable<CompteEntreprise[]> {
    return this.http.get<CompteEntreprise[]>(`${this.baseApiUrl}/api/CompteEntreprise/${IdClientEntreprise}`);
  }

  Updatecompteentreprise(idCompteEntreprise: number, updateCERequest: CompteEntreprise) : Observable<CompteEntreprise>{
    return this.http.put<CompteEntreprise>(this.baseApiUrl + '/api/CompteEntreprise/'+idCompteEntreprise , updateCERequest)
 }

 deletecompteentreprise(id: number): Observable<CompteEntreprise> {
  return this.http.delete<CompteEntreprise>(this.baseApiUrl+'/api/CompteEntreprise/'+id);
 }

  //Depenses
  AddDepense(addDepenseRequest: Depense):Observable<Depense>{
    return this.http.post<Depense>(this.baseApiUrl + '/api/Depense' ,addDepenseRequest )
  
  }
  
  getAllDepenses(IdClientEntreprise: number): Observable<Depense[]> {
    return this.http.get<Depense[]>(`${this.baseApiUrl}/api/Depense/${IdClientEntreprise}`);
  }
  
  UpdateDepense(idDepense: number, updateDepenserequest: Depense) : Observable<Depense>{
    return this.http.put<Depense>(this.baseApiUrl + '/api/Depense/'+idDepense , updateDepenserequest)
  }
  
  deleteDepense(id: number): Observable<Depense> {
  return this.http.delete<Depense>(this.baseApiUrl+'/api/Depense/'+id);
  }


  //CompteBancaireEntreprise
  AddCompteBancaireEntreprise(addCompteBancaireEntrepriseRequest: CompteBancaireEntreprise):Observable<CompteBancaireEntreprise> {
    return this.http.post<CompteBancaireEntreprise>(this.baseApiUrl + '/api/CompteBancaireEntreprise' ,addCompteBancaireEntrepriseRequest )
   }
 
   getAllCBE(IdClientEntreprise: number): Observable<CompteBancaireEntreprise[]> {
     return this.http.get<CompteBancaireEntreprise[]>(`${this.baseApiUrl}/api/CompteBancaireEntreprise/${IdClientEntreprise}`);
   }
 
   UpdateCBE(idCompteBan: number, updateCBErequest: CompteBancaireEntreprise) : Observable<CompteBancaireEntreprise>{
     return this.http.put<CompteBancaireEntreprise>(this.baseApiUrl + '/api/CompteBancaireEntreprise/'+idCompteBan , updateCBErequest)
  }
 
  deleteCBE(id: number): Observable<CompteBancaireEntreprise> {
   return this.http.delete<CompteBancaireEntreprise>(this.baseApiUrl+'/api/CompteBancaireEntreprise/'+id);
  }

//PointVente
AddPointVente(addPointVenteRequest: PointVente):Observable<PointVente>{
  return this.http.post<PointVente>(this.baseApiUrl + '/api/PointVente' ,addPointVenteRequest )

}

getAllPointsVente(IdClientEntreprise: number): Observable<PointVente[]> {
  return this.http.get<PointVente[]>(`${this.baseApiUrl}/api/PointVente/${IdClientEntreprise}`);
}

UpdatePointVente(idPointVente: number, updatePointVenterequest: PointVente) : Observable<PointVente>{
  return this.http.put<PointVente>(this.baseApiUrl + '/api/PointVente/'+idPointVente , updatePointVenterequest)
}

deletePointVente(id: number): Observable<PointVente> {
return this.http.delete<PointVente>(this.baseApiUrl+'/api/PointVente/'+id);
}


//CreditRecent
AddCreditRecentEntreprise(addCreditRecentEntrepriseRequest: CreditRecentEntreprise):Observable<CreditRecentEntreprise>{
  return this.http.post<CreditRecentEntreprise>(this.baseApiUrl + '/api/CreditRecentEntreprise' ,addCreditRecentEntrepriseRequest )

}

getAllCRE(IdClientEntreprise: number): Observable<CreditRecentEntreprise[]> {
  return this.http.get<CreditRecentEntreprise[]>(`${this.baseApiUrl}/api/CreditRecentEntreprise/${IdClientEntreprise}`);
}

UpdateCRE(idCreditRecEntre: number, updateCRErequest: CreditRecentEntreprise) : Observable<CreditRecentEntreprise>{
  return this.http.put<CreditRecentEntreprise>(this.baseApiUrl + '/api/CreditRecentEntreprise/'+idCreditRecEntre , updateCRErequest)
}

deleteCRE(id: number): Observable<CreditRecentEntreprise> {
return this.http.delete<CreditRecentEntreprise>(this.baseApiUrl+'/api/CreditRecentEntreprise/'+id);
}

//Vente
AddVente(addVenteRequest: Vente):Observable<Vente>{
  return this.http.post<Vente>(this.baseApiUrl + '/api/Vente' ,addVenteRequest )

}

getAllVentes(IdClientEntreprise: number): Observable<Vente[]> {
  return this.http.get<Vente[]>(`${this.baseApiUrl}/api/Vente/${IdClientEntreprise}`);
}

UpdateVente(idVente: number, updateVenterequest: Vente) : Observable<Vente>{
  return this.http.put<Vente>(this.baseApiUrl + '/api/Vente/'+idVente , updateVenterequest)
}

deleteVente(id: number): Observable<Vente> {
return this.http.delete<Vente>(this.baseApiUrl+'/api/Vente/'+id);
}


//Approvisionnement
AddAppro(addApproRequest: Appro):Observable<Appro>{
  return this.http.post<Appro>(this.baseApiUrl + '/api/Appro' ,addApproRequest )

}

getAllAppros(IdClientEntreprise: number): Observable<Appro[]> {
  return this.http.get<Appro[]>(`${this.baseApiUrl}/api/Appro/${IdClientEntreprise}`);
}

UpdateAppro(idAppro: number, updateApprorequest: Appro) : Observable<Appro>{
  return this.http.put<Appro>(this.baseApiUrl + '/api/Appro/'+idAppro , updateApprorequest)
}

deleteAppro(id: number): Observable<Appro> {
return this.http.delete<Appro>(this.baseApiUrl+'/api/Appro/'+id);
}











//
  GetClientByIdentity(identiteClient: string): Observable<any>{
    return this.http.get<any>(`${this.baseApiUrl}/api/Credits/identiteClient?identiteClient=${identiteClient}`);
  }

  getClientTrouve(): any {
    return this.clientTrouve;
  }

  setClientTrouve(clientTrouve: any): void {
    this.clientTrouve = clientTrouve;
  }

  settypeclient(type: string) {
    this.typeclient = type;
  }

  gettypeclient(): string {
    return this.typeclient;
  }

/////////
  setIdClientParticulier(id: number) {
    this.idClientParticulier = id;
  }

  getIdClientParticulier(): number {
    return this.idClientParticulier;
  }

  setIdClientEntreprise(id: number) {
    this.idClientEntreprise = id;
  }

  getIdClientEntreprise(): number {
    return this.idClientEntreprise;
  }


  //edit particulier
  
  setRefFamilToEdit(referentFamiliaux: ReferentFamiliaux): void {
    this.referentFamiliauxToEdit = referentFamiliaux;
  }

  getRefFamilToEdit(): ReferentFamiliaux {
    return this.referentFamiliauxToEdit;
  }
  //
  setCreditRecentToEdit(credtRecent: CreditRecentParticulier): void {
    this.creditRecentToEdit = credtRecent;
  }

  getCreditRecentToEdit(): CreditRecentParticulier {
    return this.creditRecentToEdit;
  }

  //
  setCompteBancaireToEdit(compteBancireParticulier: CompteBancaireParticulier): void {
    this.compteBancaireParticulierToEdit = compteBancireParticulier;
  }

  getCompteBancaireToEdit(): CompteBancaireParticulier {
    return this.compteBancaireParticulierToEdit;
  }

  //
  setCompteParticulierToEdit(compteparticulier: CompteParticulier): void {
    this.compteParticulierToEdit = compteparticulier;
  }

  getCompteParticulierToEdit(): CompteParticulier {
    return this.compteParticulierToEdit;
  }


    //edit entreprise
    setCreditRecentEntrepriseToEdit(credtRecent: CreditRecentEntreprise): void {
      this.creditRecentEntrepriseToEdit = credtRecent;
    }
  
    getCreditRecentEntrepriseToEdit(): CreditRecentEntreprise {
      return this.creditRecentEntrepriseToEdit;
    }
  
    //
    setCompteBancaireEntrepriseToEdit(compteBancireEntreprise: CompteBancaireEntreprise): void {
      this.CompteBancaireEntrepriseToEdit = compteBancireEntreprise;
    }
  
    getCompteBancaireEntrepriseToEdit(): CompteBancaireEntreprise {
      return this.CompteBancaireEntrepriseToEdit;
    }
  
    //
    setCompteEntrepriseToEdit(compteEntreprise: CompteEntreprise): void {
      this.CompteEntrepriseToEdit = compteEntreprise;
    }
  
    getCompteEntrepriseToEdit(): CompteEntreprise {
      return this.CompteEntrepriseToEdit;
    }
    //
    setVenteToEdit(vente: Vente): void {
      this.VenteToEdit = vente;
    }
  
    getVenteToEdit(): Vente {
      return this.VenteToEdit;
    }
    //
    setApproToEdit(appro: Appro): void {
      this.ApproToEdit = appro;
    }
  
    getApproToEdit(): Appro {
      return this.ApproToEdit;
    }
    //
    setPointVenteToEdit(pointVente: PointVente): void {
      this.PointVenteToEdit = pointVente;
    }
  
    getPointVenteToEdit(): PointVente {
      return this.PointVenteToEdit;
    }
    //
    setDepensesToEdit(depense: Depense): void {
      this.DepenseToEdit = depense;
    }
  
    getDepensesToEdit(): Depense {
      return this.DepenseToEdit;
    }
}
