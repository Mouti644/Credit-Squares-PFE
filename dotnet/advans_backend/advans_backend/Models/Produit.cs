using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace advans_backend.Models
{
    public class Produit
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdProduit { get; set; }

        public string? NomProduit { get; set; }

        public ICollection<DemandeCredit>? DemandeCredit { get; set; }
    }
}
