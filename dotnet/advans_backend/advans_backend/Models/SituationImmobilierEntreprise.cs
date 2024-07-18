using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace advans_backend.Models
{
    public class SituationImmobilierEntreprise
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdSituationImmobilierEntreprise { get; set; }

        public string? Situation { get; set; }

        public ICollection<ClientEntreprise>? ClientsEntreprise { get; set; }
    }
}
