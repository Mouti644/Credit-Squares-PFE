export interface Notification {
    id: number;
    message: string;
    userId: number;
    userName: string;
    idDemande : number;
    isRead: boolean;
    dateCreated: Date;
  }