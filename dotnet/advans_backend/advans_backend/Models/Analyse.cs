using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace advans_backend.Models
{
    public class Analyse
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdAnalyse { get; set; }

        public int? NumVersion { get; set; }
        public string? PertinenceProjet { get; set; }

        public string? HistoriqueCreditClient { get; set; }
        public string? AnalyseGaranties {  get; set; }
        public string? AnalyseRisqueCommercial { get; set; }
        public string? MontantPropose { get; set; }
        public string? TautInteret { get; set; }
        public string? Hypothese { get; set; }
        public string? ExplicationChoix { get; set; }
        public string? AvisStabiliteClient { get; set; }
        public DateTime? DateDebutAnalyse { get; set; }
        public DateTime? DateFinAnalyse { get; set; }
        public int? DureeAnalyse { get; set; }
        public int IdDemande { get; set; }

        [ForeignKey("IdDemande")]
        [JsonIgnore]
        public DemandeCredit? Demande { get; set; }
    }
}
