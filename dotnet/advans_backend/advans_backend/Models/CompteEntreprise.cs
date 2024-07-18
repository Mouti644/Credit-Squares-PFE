using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace advans_backend.Models
{
    public class CompteEntreprise
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int? IdCompteEntreprise { get; set; }
        public DateTime? DateOuvertureCompte { get; set; }
        public string? DeviseCompte { get; set; }
        public int? IdClientEntreprise { get; set; }

        [ForeignKey("IdClientEntreprise")]
        [JsonIgnore]
        public ClientEntreprise? ClientEntreprise { get; set; }
    }
}
