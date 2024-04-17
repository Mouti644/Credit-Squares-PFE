import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { Observable } from 'rxjs';
import { ResetPasswordConfirmRequest } from '../models/ResetPasswordConfirmRequest';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseApiUrl: string= environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  login(email: string, password: string):Observable<any>{
    return this.http.post(this.baseApiUrl + '/api/Auth/login', { email, password });
  }
  resetPassword(email: string): Observable<any> {
    return this.http.post(this.baseApiUrl + '/api/Auth/reset-password', { email });
  }
  resetPasswordConfirm(resetPasswordConfirmRequest: ResetPasswordConfirmRequest, token: string): Observable<any> {
    console.log('Token envoyé  :', resetPasswordConfirmRequest.token);
    return this.http.post(`${this.baseApiUrl}/api/Auth/reset-password-confirm?token=${token}`, resetPasswordConfirmRequest);
  }
}
