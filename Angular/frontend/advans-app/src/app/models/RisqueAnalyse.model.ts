export enum evalProjet {
    BonEP = "BON - valeur ajoutée et plan de financement clairs",
    MoyenEP = "MOYEN - la valeur ajoutée spécifique du crédit reste à prouver",
    pMauvaisEP = "MAUVAIS - risque spécifique identifié sur objet du crédit"

}

export enum evalRisqueClient {
    BonRC = "BON - structure actionnariat claire, bonne stabilité, historique impeccable, transparence",
    MoyenRC = "MOYEN - Rien à signaler, sans plus",
    MauvaisRC = "MAUVAIS - risque spécifique en lien avec la stabilité, l'actionnariat, la transparence"

}
export enum evalRisqueCommercial {
     BonRCO = "BON - long term vision, stratégie commerciale et organisation claires, relations client/fournisseur claires",
 MoyenRCO = "MOYEN - stratégie ou organisation peu développée, relations client/fournisseur peu explicitées",
  MauvaisRCO = "MAUVAIS - fort risque commercial spécifique identifié"


}
export enum evalGaranties {
    BonGarantie = "BON - garanties solides, évaluées prudemment",
    MoyenGarantie = "MOYEN - correct sans plus",
    MauvaisGarantie = "MAUVAIS - hors politique/dérogation, et/ou vrai risque sur la valorisation"

}




export interface RisqueAnalyse{
    idRA : number ;
    evalProjet : evalProjet | null;
    evalRisqueClient : evalRisqueClient | null;
    evalRisqueCommercial : evalRisqueCommercial | null;
    evalGaranties : evalGaranties | null;
    recommandationAnalyste : string | null;
    commentaires : string | null;
    dateDebutRA : Date | null;
    dateFinRA : Date | null;
    dureeRA : number | null;
    idDemande :  number | null;
}