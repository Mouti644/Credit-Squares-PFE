using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace advans_backend.Models
{
    public class CreditRecentEntreprise
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int idCRecent { get; set; }

        public int? IdClientEntreprise { get; set; }

        [ForeignKey("IdClientEntreprise")]
        [JsonIgnore]
        public ClientEntreprise? ClientEntreprise { get; set; }

        public string? Objet { get; set; }
        public string? Duree { get; set; }
        public string? MontantInitial { get; set; }
        public string? EnCoursRestant { get; set; }
        public string? MontantEchMens { get; set; }
        public string? NbrEchRestant { get; set; }
        public string? NbrEchEnRetard { get; set; }
        public string? NbrMaxJoursEnRetard { get; set; }
    }
}
