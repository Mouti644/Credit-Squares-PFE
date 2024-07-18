export enum Sex {
    Male = 'Male',
    Female = 'Female'
  }
 
  
  export interface SituationImmobilierParticulier {
    idSituationImmobilierParticulier: number;
    situation: string;
  }

  export interface SituationFamilialeParticulier {
    idSituationFamilialeParticulier: number;
    situation: string;
  }

//

export interface SecteurActivite {
  idSecteurActivite: number;
  nomSecteur: string;
}

export interface Activite {
  idActivite: number;
  nomActivite: string;
}

export interface SousActivite {
  idSousActivite: number;
  nomSousActivite: string;
}
  
export enum TypeCompte{
Courant = "Courant",
 Epargne = "Epargne",
 DepotATerme = "Dépôt à Terme",
  Autres = "Autres",
}

export enum Frequence {
  Journalier = "Journalier",
  Hebdo = "Hebdo",
  Mensuel = "Mensuel"
}

export enum Segment{
  Client_Particulier = "Client Particulier"
} 

export interface RefAgence{
  idAgence: number;
  nomAgence: string;
  region: string;
  telephone: string;
  adresse: string;
}

  export interface ClientParticulier {
    idClientParticulier: number;
    segment: Segment ;
    nom?: string | null;
    prenom?: string | null;
    nomAgence?: string | null;
    idAgence?:number |null;
    gestionnaire: string | null;
    idSituationImmobilierParticulier?: number;
    situationImmobilier?: string | null;

    idSituationFamilialeParticulier?: number;
    situationFamiliale?: string | null;

    nombre_enfants?: number | null;
    
    sex?: Sex | null;
    age?:string | null;
    dateNaissance?: Date | null;
    telephone: string;
    cycle?: number | null;
    dateDerniereVisite?: Date | null;
    dateCreation?: Date | null;
    fonctionProfessionnelle?:string |null;
    salaireNetMensuel?:string |null;
    autresRevenusMensuel?:string |null;
    idSecteurActivite:number ;
    nomSecteurActivite: string;

    idsousActivite?:number |null;
    nomSousActivite?: string | null;
    idactivite?:number |null;
    nomActivite?: string | null;
    ville: string | null;
    nbrCreditBeneficies?: number | null;
    nbrPointsVente? : number | null;
    identiteClient?: string | null;

    creditRecents: CreditRecentParticulier[] | null;
    referentsFamiliaux: ReferentFamiliaux[] | null;
    comptesBancaire: CompteBancaireParticulier[] | null;
    compte: CompteParticulier[] | null;
  }
   
    
    export interface CreditRecentParticulier {
      idCRecent: number;
      idClientParticulier?: number;
      objet: string | null;
      duree: string | null;
      montantInitial: string | null;
      enCoursRestant: string | null;
      montantEchMens: string | null;
      nbrEchRestant: string | null;
      nbrEchEnRetard: string | null;
      nbrMaxJoursEnRetard: string | null;
    }
 
    export interface ReferentFamiliaux {
      idRefFam: number | null;
      idClientParticulier?: number;
      nom: string | null;
      prenom: string | null;
      telephone: string | null;
      relation: string | null;
    }
    
    export interface CompteBancaireParticulier {
      idCompte: number;
      idClientParticulier?: number;
      banque: string | null;
      typeCompte: TypeCompte | null ;
      solde: string | null;
    }

    export interface CompteParticulier {
        idCompteParticulier: number | undefined;
        idClientParticulier?: number | null;
        dateOuvertureCompte: Date  | null;
        deviseCompte: string | null;
    }
    
 