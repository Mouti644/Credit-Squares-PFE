export enum Decision {
    Approuve = "Approuvé",
    Rejete = "Rejeté"
}

export interface Comite {
    idComite  : number;
    idDemande : number;
    raison : string | null;
    montant : string | null ;
    commentaires : string | null;
    dateDebutComite : Date | null;
    dateFinComite : Date | null;
    dureeComite : number | null ;
    decision : Decision | null

}

export interface InteractiviteDecideur {
    idInterDecideur : number | undefined;
    idComite : number | undefined;
    idDemande : number;
    decideur : string | null;
    remarque : string | null;
    reponse : string | null;
}