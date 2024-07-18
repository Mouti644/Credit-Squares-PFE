using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace advans_backend.Models
{
    public class Depense
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int idDepense { get; set; }

        public int? IdClientEntreprise { get; set; }

        [ForeignKey("IdClientEntreprise")]
        [JsonIgnore]
        public ClientEntreprise? ClientEntreprise { get; set; }

        public string? Depenses { get; set; }
        public string? CoutTotal { get; set; }
    }
}
