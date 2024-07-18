import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../../guards/auth.guard';
import { NotificationsService } from '../../Services/notifications.service';
import { Notification } from '../../models/Notification.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent implements OnInit {
  notifications: Notification[] = []
   
  userName: string= AuthGuard.username;
  userId?: number;

  constructor(private notificationService: NotificationsService,private router:Router){}

  ngOnInit(): void {
    this.setUserId();
    console.log("user connecté" , this.userId)
    this.loadNotifications();

  }

  setUserId(): void {
    switch (this.userName) {
      case 'Responsable des relations client':
        this.userId = 1;
        break;
      case 'Analyste risque crédit':
        this.userId = 9;
        break;
      case 'Chef d\'agence':
        this.userId = 10;
        break;
      default:
        this.userId = 0; // Ou une autre valeur par défaut
        break;
    }
  }

  loadNotifications(): void {
    if (this.userId! > 0) { // Vérifie que userId est valide
      this.notificationService.getNotifications(this.userId!).subscribe(
        (data: Notification[]) => {
          this.notifications = data;
        },
        (error) => {
          console.error('Erreur lors de la récupération des notifications:', error);
        }
      );
    }
  }

  markAsRead(notificationId: number): void {
    this.notificationService.markAsRead(notificationId).subscribe(
      () => {
        // Mettre à jour l'état de la notification localement
        this.notifications = this.notifications.map(n => {
          if (n.id === notificationId) {
            n.isRead = true;
          }
          return n;
        });
      },
      
      (error) => {
        console.error('Erreur lors de la mise à jour de la notification', error);
      }
    );
  }

}
