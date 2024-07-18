
export interface Produit {
  idProduit: number;
  nomProduit: string;
}
  
  export enum Statut {
    DEMANDE_BROUILLON = "Demande brouillon",
       ANALYSE = "Analyse",
       VERIFICATIONS_AVANT_COMITE = "Vérifications avant comité",
       ANALYSE_RISQUE = "Analyse risque",
       COMITE = "Comité",
       ATTENTE_ACCORD_CLIENT = "Attente accord client",
       PRET_A_DECARISSER = "Prêt à décaisser",
       REFUSE = "Refusé"
  }
  
  export interface RelationClientGarant {
    idRelationClientGarant : number;
    relation: string
  }

  export interface TypeGarantie {
    idTypeGarantie : number;
    type : string
  }


  export enum TypeClient{
    Client_Particulier = "Client Particulier",
    Client_Entreprise = "Client Entreprise"
  } 
  

  export interface DemandeCredit {
    idDemande: number| null;
    typeClient: TypeClient | null;
    montant: number| null;
    dureeDemandee: number| null;
    commentaires: string| null;
    disponibilite: string| null;
    dateDemande: Date;
    dateFinalisation:Date;
    idClientEntreprise: number  | null;
    idClientParticulier: number  | null;
    identiteClient: string | null;
    idProduit:number ;
    nomProduit: string| null;
    statut: Statut| null;
    nomAgence: string| null;
    nomClient: string  | null;
    salaireNetMensuel :string| null;
    chiffreAffaireMensuel :string| null;

    garants: Garant[] | null;
    garanties: Garantie[] | null;
  }
  
  export interface DemandeCreditsanIDdemande {
    // idDemande: number| null;
    typeClient: TypeClient;
    montant: number| null;
    dureeDemandee: number| null;
    commentaires: string| null;
    disponibilite: string| null;
    dateDemande: Date;
    dateFinalisation:Date;
    idClientEntreprise: number  | null;
    idClientParticulier: number  | null;
    identiteClient: string | null;
    idProduit:number ;
    nomProduit: string| null;
    statut: Statut| null;
    nomAgence: string| null;
    nomClient: string  | null;
    garants: Garant[] | null;
    garanties: Garantie[] | null;
  }
  

  export interface Garant {
    idGarant: number |null;
    idDemande: number;
    nomGarant: string| null;
    identiteGarant: string | null;
    relation: string | null;
    idRelationClientGarant: number | null;
    valeurMoyenne: number | null;
    valeurBasse: number|null;
    telephone: string|null;
  }
  
  export interface Garantie {
    idGarantie: number| null;
    idDemande: number;
    proprietaire: string| null;
    type: string | null;
    idTypeGarantie: number| null;
    valeur_estime: string| null;
  }
  