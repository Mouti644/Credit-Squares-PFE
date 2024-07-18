using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace advans_backend.Models
{
    public class PointVente
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int idPV { get; set; }

        public int? IdClientEntreprise { get; set; }

        [ForeignKey("IdClientEntreprise")]
        [JsonIgnore]
        public ClientEntreprise? ClientEntreprise { get; set; }

        public string? Type { get; set; }
        public int? IdTypePointVente { get; set; }
        [ForeignKey("IdTypePointVente")]
        [JsonIgnore]
        public TypePointVente? TypePointVente { get; set; }

        //Propriete
        public const string Proprietaire = "Propriétaire";
        public const string Locataire = "Locataire";
        [RegularExpression("^(Propriétaire|Locataire)$")]
        public string? Propriete { get; set; }

        public string? NbrJoursOuverture { get; set; }
        public string? Surface { get; set; }
        public string? Emplacement { get; set; }

    }
}
