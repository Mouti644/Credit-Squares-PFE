import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
  email!: string;
  message!: string;
  messageClass!: string;
constructor(private authService: AuthService){

}
resetPassword(): void {
  this.authService.resetPassword(this.email).subscribe({
    next: (response: any) => {
      console.log(response); // Afficher la réponse brute dans la console
      this.message = response.message;
      this.messageClass = "message-success";
    },
    error: (error) => {
      console.error(error);
      if (error.status === 400) {
        this.message = "L'utilisateur avec cette adresse e-mail n'existe pas.";
        this.messageClass = "message-error";
      } else {
        this.message = "Une erreur s'est produite. Veuillez réessayer plus tard.";
        this.messageClass = "message-error";
      }
      this.email = "";
    }
  });

}


}
