//Demande

export interface NombreCreditsParTypeClient {
    typeClient: string;
    nombreCredits: number;
  }

  export interface NombreDemandesParNomAgence {
    nomAgence: string;
    nombreDemandes: number;
  }
  export interface NombreDemandesParNomProduit {
    nomProduit: string;
    nombreDemandes: number;
  }
  export interface NombreDemandesParStatut {
    statut: string;
    nombreDemandes: number;
  }

  
//Particulier
  export interface NombreClientsParNomAgence {
    nomAgence: string;
    nombreClients: number;
  }
  export interface NombreClientsParNomSecteur {
    nomSecteurActivite: string;
    nombreClients: number;
  }
 
  export interface NombreClientsParSitFam {
    situationFamiliale: string;
    nombreClients: number;
  }

  export interface NombreClientsParSitImm {
    situationImmobilier: string;
    nombreClients: number;
  }

  export interface NombreClientsParSex {
    sex: string;
    nombreClients: number;
  }


//  Entreprise
