export enum Operation {
    Analyse = 'Analyse',
    Check_List = 'Check_List',
    Analyse_risque = 'Analyse_risque',
    Comité_crédit = 'Comité_crédit',
    Visite_management = 'Visite_management'
  }
  
  export enum Secteur {
    AGRI_ELEVAGE = 'AGRI_ELEVAGE',
    AGRICULTURE = 'AGRICULTURE',
    AGRI_HORS_PRODUCTION = 'AGRI_HORS_PRODUCTION',
    PRODUCTION_NON_AGRI = 'PRODUCTION_NON_AGRI',
    COMMERCE_GROS_IMPORT = 'COMMERCE_GROS_IMPORT',
    COMMERCE_DE_DETAIL = 'COMMERCE_DE_DETAIL',
    TRANSPORT_PERSONNES = 'TRANSPORT_PERSONNES',
    TRANSPORT_MARCHANDISES = 'TRANSPORT_MARCHANDISES',
    BTP_SERVICES_AU_BATIMENT = 'BTP_SERVICES_AU_BATIMENT',
    SERVICES_LOISIR = 'SERVICES_LOISIR',
    AUTRES_SERVICES = 'AUTRES_SERVICES',
    INDETERMINE = 'INDETERMINE'
  }
  
  export enum Statut {
    DEMANDE_BROUILLON = 'DEMANDE_BROUILLON',
    ANALYSE = 'ANALYSE',
    VERIFICATIONS_AVANT_Commite = 'VERIFICATIONS_AVANT_Commite',
    ANALYSE_RISQUE = 'ANALYSE_RISQUE',
    COMITE = 'COMITE',
    ATTENTE_ACCORD_CLIENT = 'ATTENTE_ACCORD_CLIENT',
    PRET_ADECAISSER = 'PRET_ADECAISSER',
    DECAISSE = 'DECAISSE',
    REFUSE = 'REFUSE'
  }
  
  export interface Credits {
    id: number;
    agence: number;
    nom_CC: string;
    id_Client: number;
    nom: string;
    statut: Statut;
    montant: string;
    secteur: Secteur;
    date: Date;
    operation: Operation;
    num_version: number;
  }
  