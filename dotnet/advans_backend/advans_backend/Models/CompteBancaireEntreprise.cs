using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace advans_backend.Models
{
    public class CompteBancaireEntreprise
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int idCompteBanq { get; set; }

        public int? IdClientEntreprise { get; set; }

        [ForeignKey("IdClientEntreprise")]
        [JsonIgnore]
        public ClientEntreprise? ClientEntreprise { get; set; }

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
