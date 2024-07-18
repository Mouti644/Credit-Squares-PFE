using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace advans_backend.Models
{
    public class Appro
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdAppro { get; set; }
        public int? IdClientEntreprise { get; set; }

        [ForeignKey("IdClientEntreprise")]
        [JsonIgnore]
        public ClientEntreprise? ClientEntreprise { get; set; }

        //frequence
        public const string Journalier = "Journalier";
        public const string Hebdo = "Hebdo";
        public const string Mensuel = "Mensuel";
        [RegularExpression("^(Journalier|Hebdo|Mensuel)$")]
        public string? Frequence { get; set; }
        public long? MontantMoyen { get; set; }
    }
}
