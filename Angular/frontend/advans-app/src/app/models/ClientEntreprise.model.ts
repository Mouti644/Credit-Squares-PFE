export interface SituationImmobilierEntreprise {
  idSituationImmobilierEntreprise: number;
  situation: string;
}

  
export enum TypeCompte{
   Courant = "Courant",
 Epargne = "Epargne",
 DepotATerme = "Dépôt à Terme",
  Autres = "Autres",
}
//TypePointVente
export interface TypePointVente {

  idTypePointVente: number;
  type : string;

}

export enum Propriete {
  Proprietaire = "Propriétaire",
  Locataire = "Locataire"
}

export enum Frequence {
  Journalier = "Journalier",
  Hebdo = "Hebdo",
  Mensuel = "Mensuel"
}

export enum Segment{
  Client_Entreprise = "Client Entreprise"
} 



  export interface ClientEntreprise {
    idClientEntreprise: number;
    Segment: Segment ;
    nomAgence?: string | null;
    idAgence?:number |null;
    gestionnaire?: string | null;
    telephone?: string | null;
    idSituationImmobilierEntreprise?: number;
    situationImmobilier?: string | null;
    cycle?: number | null;
    dateDerniereVisite?: Date | null;
    dateCreationEntreprise?: Date | null;
    dateCreation?: Date | null;
    chiffreAffaireMensuel?: string  | null;
    nombreEmployes?: number  | null;
    idSecteurActivite?:number |null;
    nomSecteurActivite: string;
    idsousActivite?:number |null;
    nomSousActivite?: string | null;
    idactivite?:number |null;
    nomActivite?: string | null;
    interlocuteurPrincipal ?: string | null;
    sigle? : string | null;
    ville: string | null;
    identiteClient?: string | null;
    nbrCreditBeneficies?: number | null;
    nbrPointsVente? : number | null;
    raisonSociale? : string | null;
    ventes: Vente[] | null;
    approvisionnements: Appro[] | null;
    creditRecents: CreditRecentEntreprise[] | null;
    pointsVente: PointVente[] | null;
    comptesBancaire: CompteBancaireEntreprise[] | null;
    depenses: Depense[] | null;
    compte: CompteEntreprise[] | null;
  }
    export interface Vente {
      idvente: number;
      idClientEntreprise?: number;
      frequence: Frequence | null;
      valeurHaute: number | null;
      valeurMoyenne: number | null;
      valeurBasse: number | null;
    }
    
    export interface Appro {
      idAppro: number;
      idClientEntreprise?: number;
      frequence: Frequence | null;
      montantMoyen: number | null;
    }
    
    export interface CreditRecentEntreprise {
      idCRecent: number;
      idClientEntreprise?: number;
      objet: string | null;
      duree: string | null;
      montantInitial: string | null;
      enCoursRestant: string | null;
      montantEchMens: string | null;
      nbrEchRestant: string | null;
      nbrEchEnRetard: string | null;
      nbrMaxJoursEnRetard: string | null;
    }
    
    export interface PointVente {
      idPV: number;
      idClientEntreprise?: number;
      idTypePointVente:number,
      type: string | null;
      propriete: Propriete  | null;
      nbrJoursOuverture: string | null;
      surface: string | null;
      emplacement: string | null;
    }
    
    
    export interface CompteBancaireEntreprise {
      idCompteBanq: number;
      idClientEntreprise?: number;
      banque: string | null;
      typeCompte: TypeCompte | null ;
      solde: string | null;
    }
    
    export interface Depense {
      idDepense: number;
      idClientEntreprise?: number;
      depenses: string | null;
      coutTotal: string | null;
    }

    export interface CompteEntreprise {
      idCompteEntreprise: number | undefined;
      idClientEntreprise?: number;
      dateOuvertureCompte: Date  | null;
      deviseCompte: string | null;
  }