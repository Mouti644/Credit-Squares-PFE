using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace advans_backend.Models
{
    public class InteractiviteDecideur
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdInterDecideur { get; set; }

        public int? IdComite { get; set; }

        [ForeignKey("IdComite")]
        [JsonIgnore]
        public Comite? Comite { get; set; }
        public string? Decideur { get; set; }
        public int IdDemande { get; set; }
        public string? Remarque { get; set; }
        public string? Reponse { get; set; }

    }
}
