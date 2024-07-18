using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace advans_backend.Models
{
    public class SituationImmobilierParticulier
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdSituationImmobilierParticulier { get; set; }

        public string? Situation { get; set; }

        public ICollection<ClientParticulier>? ClientParticuliers { get; set; }
    }
}
