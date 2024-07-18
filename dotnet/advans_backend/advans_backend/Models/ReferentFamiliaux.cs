using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace advans_backend.Models
{
    public class ReferentFamiliaux
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int idRefFam { get; set; }
        public int? IdClientParticulier { get; set; }

        [ForeignKey("IdClientParticulier")]
        [JsonIgnore]
        public ClientParticulier? ClientParticulier { get; set; }
        public string? Nom { get; set; }
        public string? Prenom { get; set; }
        public string? Telephone { get; set; }
        public string? Relation { get; set; }

        
    }
}
