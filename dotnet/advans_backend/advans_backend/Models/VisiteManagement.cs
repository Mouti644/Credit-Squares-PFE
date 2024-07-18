using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace advans_backend.Models
{
    public class VisiteManagement
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdVM { get; set; }

        public string? ElementAverifier { get; set; }
        public string? ElementRecueillis { get; set; }
        public string? AvisDecideur { get; set; }
        public DateTime? DateDebutVM { get; set; }
        public DateTime? DateFinVM { get; set; }
        public int? DureeVM { get; set; }
        //Decision
        public const string Approuve = "Approuvé";
        public const string Rejete = "Rejeté";

        [RegularExpression("^(Approuvé|Rejeté)$")]
        public string? Decision { get; set; }
        public int IdDemande { get; set; }

        [ForeignKey("IdDemande")]
        [JsonIgnore]
        public DemandeCredit? Demande { get; set; }
    }
}
