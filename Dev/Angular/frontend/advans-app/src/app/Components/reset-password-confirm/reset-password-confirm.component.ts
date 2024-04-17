import { Component, OnInit } from '@angular/core';
import { ResetPasswordConfirmRequest } from '../../models/ResetPasswordConfirmRequest';
import { AuthService } from '../../Services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password-confirm',
  templateUrl: './reset-password-confirm.component.html',
  styleUrl: './reset-password-confirm.component.css'
})
export class ResetPasswordConfirmComponent implements OnInit {
  resetPasswordConfirmRequest: ResetPasswordConfirmRequest = {
    token: '',
    newPassword: '',
    confirmNewPassword: ''
  };
  token: string | null = '';
  message?: string;
  messageClass!: string;
constructor(private route: ActivatedRoute, private authService: AuthService) {}

ngOnInit(): void {
  const tokenFromUrl = this.route.snapshot.queryParamMap.get('token');
    if (tokenFromUrl) {
      this.token = decodeURIComponent(tokenFromUrl);
    } else {
      console.error('Token not found in URL');
      this.message="Token not found"
    }
}
resetPassword(): void {
  if (this.token) {
    this.resetPasswordConfirmRequest.token = this.token;
    this.authService.resetPasswordConfirm(this.resetPasswordConfirmRequest, this.token).subscribe(
      response => {
        console.log(response);
        this.message = "Votre mot de passe a été réinitialisé avec succès .";
        this.messageClass = "message-success";
      },
      error => {
        console.error(error);
        
        this.message = "Désolé, une erreur s'est produite. Veuillez vérifier les données que vous avez saisies et réessayer.";
        this.messageClass = "message-error";
        

      }
    );
  } else {
    console.error('Token not found in URL');
    this.message="Token not found"
    this.messageClass = "message-error";
  }
}
}
