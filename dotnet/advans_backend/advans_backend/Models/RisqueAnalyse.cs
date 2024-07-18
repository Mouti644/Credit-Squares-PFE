using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace advans_backend.Models
{
    public class RisqueAnalyse
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdRA { get; set; }
        //EvalProjet
        public const string BonEP = "BON - valeur ajoutée et plan de financement clairs";
        public const string MoyenEP = "MOYEN - la valeur ajoutée spécifique du crédit reste à prouver";
        public const string MauvaisEP = "MAUVAIS - risque spécifique identifié sur objet du crédit";

        [RegularExpression("^(BON - valeur ajoutée et plan de financement clairs|MOYEN - la valeur ajoutée spécifique du crédit reste à prouver|MAUVAIS - risque spécifique identifié sur objet du crédit)$")]
        public string EvalProjet { get; set; }

        //EvalRisqueClient
        public const string BonRC = "BON - structure actionnariat claire, bonne stabilité, historique impeccable, transparence";
        public const string MoyenRC = "MOYEN - Rien à signaler, sans plus";
        public const string MauvaisRC = "MAUVAIS - risque spécifique en lien avec la stabilité, l'actionnariat, la transparence";

        [RegularExpression("^(BON - structure actionnariat claire, bonne stabilité, historique impeccable, transparence|MOYEN - Rien à signaler, sans plus|MAUVAIS - risque spécifique en lien avec la stabilité, l'actionnariat, la transparence)$")]
        public string EvalRisqueClient { get; set; }

        //EvalRisqueCommercial
        public const string BonRCO = "BON - long term vision, stratégie commerciale et organisation claires, relations client/fournisseur claires";
        public const string MoyenRCO = "MOYEN - stratégie ou organisation peu développée, relations client/fournisseur peu explicitées";
        public const string MauvaisRCO = "MAUVAIS - fort risque commercial spécifique identifié";

        [RegularExpression("^(BON - long term vision, stratégie commerciale et organisation claires, relations client/fournisseur claires|MOYEN - stratégie ou organisation peu développée, relations client/fournisseur peu explicitées|MAUVAIS - fort risque commercial spécifique identifié)$")]
        public string EvalRisqueCommercial { get; set; }

        //EvalGaranties
        public const string BonGarantie = "BON - garanties solides, évaluées prudemment";
        public const string MoyenGarantie = "MOYEN - correct sans plus";
        public const string MauvaisGarantie = "MAUVAIS - hors politique/dérogation, et/ou vrai risque sur la valorisation";

        [RegularExpression("^(BON - garanties solides, évaluées prudemment|MOYEN - correct sans plus|MAUVAIS - hors politique/dérogation, et/ou vrai risque sur la valorisation)$")]
        public string EvalGaranties { get; set; }

        public string? RecommandationAnalyste { get; set; }
        public string? Commentaires { get; set; }
        public DateTime? DateDebutRA { get; set; }
        public DateTime? DateFinRA { get; set; }
        public int? DureeRA { get; set; }
        public int IdDemande { get; set; }

        [ForeignKey("IdDemande")]
        [JsonIgnore]
        public DemandeCredit? Demande { get; set; }
    }
}
