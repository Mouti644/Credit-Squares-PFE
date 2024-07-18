using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace advans_backend.Models
{
    public class CompteBancaireParticulier
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int idCompte { get; set; }
        public int? IdClientParticulier { get; set; }

        [ForeignKey("IdClientParticulier")]
        [JsonIgnore]
        public ClientParticulier? ClientParticulier { get; set; }

        public string? Banque { get; set; }
        //TypeCompte
        public const string Courant = "Courant";
        public const string Epargne = "Epargne";
        public const string DepotaTerme = "Dépôt à terme";
        public const string Autres = "Autres";
        [RegularExpression("^(Courant|Epargne|Dépôt a terme|Autres)$")]
        public string? TypeCompte { get; set; }
        public string? Solde { get; set; }
    }
}
