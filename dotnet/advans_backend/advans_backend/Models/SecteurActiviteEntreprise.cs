using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace advans_backend.Models
{
    public class SecteurActiviteEntreprise
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdSecteurActivite { get; set; }

        public string? NomSecteur { get; set; }


        public ICollection<ClientEntreprise>? ClientsEntreprise { get; set; }
    }
}
