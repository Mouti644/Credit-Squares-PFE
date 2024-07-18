import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Analyse } from '../models/Analyse.model';
import { Observable, map } from 'rxjs';
import { CheckList } from '../models/CheckList.model';
import { RisqueAnalyse } from '../models/RisqueAnalyse.model';
import { Comite, InteractiviteDecideur } from '../models/Comite.model';
import { VisiteManagement } from '../models/VisiteManagement.model';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  baseApiUrl:string=environment.baseApiUrl;
  private idComite: number =0;
  constructor(private http:HttpClient) { }

//Analyse
GetAnalyseById(id: number): Observable<Analyse>{
  return this.http.get<Analyse>(this.baseApiUrl+'/api/Analyse/'+id);
}

AddAnalyse(addAnalyserequest: Analyse):Observable<Analyse>{
  return this.http.post<Analyse>(this.baseApiUrl + '/api/Analyse' ,addAnalyserequest )

}

updateAnalyse(id: number, updateAnalyseRequest: Analyse) : Observable<Analyse>{
  return this.http.put<Analyse>(this.baseApiUrl + '/api/Analyse/'+id , updateAnalyseRequest)
}

updateDateAnalyse(id: number): Observable<Analyse> {
  return this.http.put<Analyse>(`${this.baseApiUrl}/api/Analyse/updateDateAnalyse/${id}`, {});
}

checkAnalyseExists(idDemande: number): Observable<boolean> {
  return this.http.get<boolean>(this.baseApiUrl+'/api/Analyse/'+idDemande);
}

//CheckList
GetCheckListById(id: number): Observable<CheckList>{
  return this.http.get<CheckList>(this.baseApiUrl+'/api/CheckList/'+id);

}

AddCheckList(addCheckListrequest: CheckList):Observable<CheckList>{
  return this.http.post<CheckList>(this.baseApiUrl + '/api/CheckList' ,addCheckListrequest )

}
updateCheckList(id: number, updateCheckListRequest: CheckList) : Observable<CheckList>{
  return this.http.put<CheckList>(this.baseApiUrl + '/api/CheckList/'+id , updateCheckListRequest)
}

updateDateCheckList(id: number): Observable<CheckList> {
  return this.http.put<CheckList>(`${this.baseApiUrl}/api/CheckList/updateDateChecklist/${id}`, {});
}

checkCheckListExists(idDemande: number): Observable<boolean> {
  return this.http.get<boolean>(this.baseApiUrl+'/api/CheckList/'+idDemande);
}
//RisqueAnalyse
GetRisqueAnalyseById(id: number): Observable<RisqueAnalyse>{
  return this.http.get<RisqueAnalyse>(this.baseApiUrl+'/api/RA/'+id);

}

AddRisqueAnalyse(addRisqueAnalyserequest: RisqueAnalyse):Observable<RisqueAnalyse>{
  return this.http.post<RisqueAnalyse>(this.baseApiUrl + '/api/RA' ,addRisqueAnalyserequest )

}

updateRisqueAnalyse(id: number, updateRARequest: RisqueAnalyse) : Observable<RisqueAnalyse>{
  return this.http.put<RisqueAnalyse>(this.baseApiUrl + '/api/RA/'+id , updateRARequest)
}


updateDateRA(id: number): Observable<RisqueAnalyse> {
  return this.http.put<RisqueAnalyse>(`${this.baseApiUrl}/api/RA/updateDateRA/${id}`, {});
}

checkRisqueAnalyseExists(idDemande: number): Observable<boolean> {
  return this.http.get<boolean>(this.baseApiUrl+'/api/RA/'+idDemande);
}
//Comite
GetComiteById(id: number): Observable<Comite>{
  return this.http.get<Comite>(this.baseApiUrl+'/api/Comite/'+id);

}

AddComite(addComiterequest: Comite):Observable<Comite>{
  return this.http.post<Comite>(this.baseApiUrl + '/api/Comite' ,addComiterequest )

}

updateComite(id: number, updateComiteRequest: Comite) : Observable<Comite>{
  return this.http.put<Comite>(this.baseApiUrl + '/api/Comite/'+id , updateComiteRequest)
}


updateDateComite(id: number): Observable<Comite> {
  return this.http.put<Comite>(`${this.baseApiUrl}/api/Comite/updateDateComite/${id}`, {});
}

checkComiteExists(idDemande: number): Observable<boolean> {
  return this.http.get<boolean>(this.baseApiUrl+'/api/Comite/'+idDemande);
}






setIdcomite(id: number) {
  this.idComite = id;
}

getIdcomite(): number {
  return this.idComite;
}


//VisiteManagement

GetVisiteManagementById(id: number): Observable<VisiteManagement>{
  return this.http.get<VisiteManagement>(this.baseApiUrl+'/api/VM/'+id);

}

AddVisiteManagement(addVisiteManagementrequest: VisiteManagement):Observable<VisiteManagement>{
  return this.http.post<VisiteManagement>(this.baseApiUrl + '/api/VM' ,addVisiteManagementrequest )

}

updateVisiteManagement(id: number, updateVisiteManagementRequest: VisiteManagement) : Observable<VisiteManagement>{
  return this.http.put<VisiteManagement>(this.baseApiUrl + '/api/VM/'+id , updateVisiteManagementRequest)
}

updateDateVM(id: number): Observable<VisiteManagement> {
  return this.http.put<VisiteManagement>(`${this.baseApiUrl}/api/VM/updateDateVM/${id}`, {});
}

checkVisiteManagementExists(idDemande: number): Observable<boolean> {
  return this.http.get<boolean>(this.baseApiUrl+'/api/VM/'+idDemande);
}

//interactivite
// GetAllInteractiviteById(id: number):Observable<InteractiviteDecideur[]>{
//   return  this.http.get<InteractiviteDecideur[]>(this.baseApiUrl + '/api/InteractiviteDecideur/'+id)
//  }

 getAllInteractiviteById(id: number): Observable<InteractiviteDecideur[]> {
  return this.http.get<InteractiviteDecideur | InteractiviteDecideur[]>(this.baseApiUrl + '/api/InteractiviteDecideur/'+id)
    .pipe(
      map((response: any) => {
        // Si la réponse n'est pas un tableau, transformez-la en un tableau
        if (!Array.isArray(response)) {
          return [response];
        }
        return response;
      })
    );
}

GetInteractiviteByid(id: number): Observable<InteractiviteDecideur>{
  return this.http.get<InteractiviteDecideur>(this.baseApiUrl+'/api/InteractiviteDecideur/'+id);

}

 Addinteractivite(addInteractiviteDecideurrequest: InteractiviteDecideur):Observable<InteractiviteDecideur>{
  return this.http.post<InteractiviteDecideur>(this.baseApiUrl + '/api/InteractiviteDecideur' ,addInteractiviteDecideurrequest )

}

updateinteractivite(id: number, updateinteractiviteRequest: InteractiviteDecideur) : Observable<InteractiviteDecideur>{
  return this.http.put<InteractiviteDecideur>(this.baseApiUrl + '/api/InteractiviteDecideur/'+id , updateinteractiviteRequest)
}

checkinteractiviteExists(idDemande: number, decideur: string): Observable<boolean> {
  return this.http.get<boolean>(`${this.baseApiUrl}/api/InteractiviteDecideur/check-interactivite-exists/${idDemande}/${decideur}`);
}

 // Nouvelle méthode pour mettre à jour les IdComite
 updateComiteIds(): Observable<any> {
  return this.http.post<any>(this.baseApiUrl + '/api/InteractiviteDecideur/update-comite-ids', {});
}



}
