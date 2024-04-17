export enum Sex {
    Male = 'Male',
    Female = 'Female'
  }
  
  export enum SitFam {
    Marie = 'Marié',
    Pacse = 'Pacsé',
    Divorce = 'Divorcé',
    Célibataire = 'Célibataire',
    Veuf = 'Veuf'
  }
  
  export enum SitImm {
    Proprietaire = 'Proprietaire',
    Locataire = 'Locataire',
    Coproprietaire = 'Coproprietaire'
  }

  export enum type {
    PersonneMorale = 'Personne Morale' ,
    PersonnePhysique = 'Personne Physique'
  }

  export enum Sigle{
   
    ECB ='ECB',
    SCI='SCI',
    CEC='CEC',
    APC='APC',
    MIPC='MIPC'
  }

  export enum Secteur_act {
    AGRI_ELEVAGE = 'AGRI_ELEVAGE',
    AGRICULTURE = 'AGRICULTURE',
    AGRI_HORS_PRODUCTION = 'AGRI_HORS_PRODUCTION',
    PRODUCTION_NON_AGRI = 'PRODUCTION_NON_AGRI',
    COMMERCE_GROS_IMPORT = 'COMMERCE_GROS_IMPORT',
    COMMERCE_DE_DETAIL='COMMERCE_DE_DETAIL',
    TRANSPORT_PERSONNES='TRANSPORT_PERSONNES',
    TRANSPORT_MARCHANDISES='TRANSPORT_MARCHANDISES',
    BTP_SERVICES_AU_BATIMENT='BTP_SERVICES_AU_BATIMENT',
    SERVICES_LOISIR='SERVICES_LOISIR',
    AUTRES_SERVICES='AUTRES_SERVICES',
    INDETERMINE='INDETERMINE'
  }
export enum activite {
  
BOVIN = 'BOVIN',
PORCIN ='PORCIN',
AVICULTURE='AVICULTURE',
AUTRE_ELEVAGE='AUTRE_ELEVAGE',
PLANTATIONS='PLANTATIONS',
BOIS='BOIS',
CEREALE='CEREALE',
TUBERCULE='TUBERCULE',
LEGUME='LEGUME',
FRUITS='FRUITS',
IMPRESSION='IMPRESSION',
INDETERMINE='INDETERMINE'
}

  export enum sous_act {
 BOEUFS = 'BOEUFS',
 VACHES = 'VACHES',
 BOVIN_MIXTE = 'BOVIN_MIXTE',
 CHEVRE = 'CHEVRE',
 POULET_CHAIR = 'POULET_CHAIR',
 POISSONS = 'POISSONS',
 CACAO = 'CACAO',
 BLE = 'BLE',
 ORGE = 'ORGE',
 MAIS = 'MAIS',
 RIZ = 'RIZ',
 ANANAS = 'ANANAS',
 ORANGE = 'ORANGE',
 PAPAYE = 'PAPAYE'
  }
  
export enum Rais_soc{
  
  Entreprise_de_Construction_et_de_Batiment='Entreprise_de_Construction_et_de_Batiment',
  Societ_de_Consultation_en_Informatique='Societ_de_Consultation_en_Informatique',
  Cabinet_Expertise_Comptable='Cabinet_Expertise_Comptable',
  Agence_de_Publicite_et_de_Communication='Agence_de_Publicite_et_de_Communication',
  Manufacture_Industrielle_de_Produits_Chimiques='Manufacture_Industrielle_de_Produits_Chimiques'
}

  export interface Client {
    id_Client?: number;
    agence: string | null;
    cycle?: number | null;
    type: type;
    sigle? : Sigle | null;
    interlocuteur_principal ?: string | null;
    nom?: string | null;
    prenom?: string | null;
    phone: string;
    sex?: Sex | null;
    secteur_activite?: Secteur_act | null;
    sous_activite?: sous_act | null;
    activite?: activite | null; 
    raison_sociale? : Rais_soc | null;
    nombre_enfants?: number | null;
    situation_familiale?: SitFam | null;
    situation_immobiliere?: SitImm | null;
    date_dernier_visite?: Date | null;
  }
  