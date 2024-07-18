import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { Observable } from 'rxjs';
import { Notification } from '../models/Notification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  baseApiUrl:string=environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getNotifications(userId: number): Observable<Notification[]> {
    return this.http.get<Notification[]>(`${this.baseApiUrl}/api/Credits/notifications/${userId}`);
  }

  markAsRead(notificationId: number): Observable<void> {
    return this.http.put<void>(`${this.baseApiUrl}/api/Credits/notifications/${notificationId}/read`, {});
  }
}
