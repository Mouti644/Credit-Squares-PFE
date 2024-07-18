export interface ResetPasswordConfirmRequest {
    token: string;
    newPassword: string;
    confirmNewPassword: string;
  }