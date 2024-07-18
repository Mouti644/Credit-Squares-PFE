export enum Bool {
    Oui = "Oui",
    Non = "Non"
}


export interface CheckList {
    idCheckList : number ;
    verifIDClient: Bool | null;
    verifLocalClient : Bool| null;
    verifClientPolitique : Bool| null;
    verifAutorisationActivite : Bool| null ;
    verifPhotoGarant : Bool | null;
    verifIDGarant : Bool| null ;
    verifFormDemandeSigne : Bool| null ;
    verifContratCreditSigne : Bool| null ;
    verifContratGarantieSigne : Bool| null ;
    verifFicheGarantSigne : Bool| null ;
    verifFicheClientSigne : Bool| null ;
    verifConditionsGenSigne : Bool| null ;
    verifPhotoClient : Bool| null;
    dateDebutCheckList : Date | null;
    dateFinCheckList : Date | null;
    dureeCheckList: number | null ;
    idDemande : number ;
}