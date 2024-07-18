export interface Analyse {

    idAnalyse: number;
    numVersion: number | null;
    pertinenceProjet: string | null;
    historiqueCreditClient : string | null;
    analyseGaranties : string | null;
    analyseRisqueCommercial : string | null;
    montantPropose : string | null;
    tautInteret : string | null;
    hypothese : string | null;
    explicationChoix : string | null;
    avisStabiliteClient : string | null;
    dateDebutAnalyse : Date | null;
    dateFinAnalyse : Date | null;
    dureeAnalyse : number | null;
    idDemande : number;
    

}