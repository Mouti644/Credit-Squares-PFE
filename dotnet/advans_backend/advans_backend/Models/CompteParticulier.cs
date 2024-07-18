using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace advans_backend.Models
{
    public class CompteParticulier
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int? IdCompteParticulier { get; set; }
        public DateTime? DateOuvertureCompte { get; set; }
        public string? DeviseCompte { get; set; }
        public int? IdClientParticulier { get; set; }

        [ForeignKey("IdClientParticulier")]
        [JsonIgnore]
        public ClientParticulier? ClientParticulier { get; set; }
    }
}
