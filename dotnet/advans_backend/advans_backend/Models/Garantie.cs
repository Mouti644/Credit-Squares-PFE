using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace advans_backend.Models
{
    public class Garantie
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int? idGarantie { get; set; }
        public int? IdDemande { get; set; }

        [ForeignKey("IdDemande")]
        [JsonIgnore]
        public DemandeCredit? Demande { get; set; }

        public string? Proprietaire { get; set; }
        //

        public string? Type { get; set; }
        public int? IdTypeGarantie { get; set; }
        [ForeignKey("IdTypeGarantie")]
        [JsonIgnore]
        public TypeGarantie? TypeGarantie { get; set; }
        //
        public long? Valeur_estime { get; set; }
    }
}
