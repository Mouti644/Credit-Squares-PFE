export enum Decision {
    Approuve = "Approuvé",
    Rejete = "Rejeté"
}


export interface VisiteManagement {
    idVM : number;
    elementAverifier : string |null;
    elementRecueillis : string |null;
    avisDecideur : string | null ;
    dateDebutVM : Date | null;
    dateFinVM : Date | null;
    dureeVM : number | null ;
    decision : Decision | null
    idDemande : number ;
}