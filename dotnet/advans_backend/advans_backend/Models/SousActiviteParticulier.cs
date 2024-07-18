using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace advans_backend.Models
{
    public class SousActiviteParticulier
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdSousActivite { get; set; }

        public int IdActivite { get; set; }

        public int IdSecteurActivite { get; set; }

        public string? NomSousActivite { get; set; }

        public ICollection<ClientParticulier>? ClientParticuliers { get; set; }


    }
}
