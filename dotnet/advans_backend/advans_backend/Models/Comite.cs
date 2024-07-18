using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace advans_backend.Models
{
    public class Comite
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdComite { get; set; }
        public string? Raison { get; set; }
        public string? Montant { get; set; }
        public string? Commentaires { get; set; }
        public DateTime? DateDebutComite { get; set; }
        public DateTime? DateFinComite { get; set; }
        public int? DureeComite { get; set; }
        
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
