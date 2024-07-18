using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace advans_backend.Models
{
    public class TypeGarantie
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdTypeGarantie { get; set; }

        public string? Type { get; set; }


        public ICollection<Garantie>? Garanties { get; set; }
    }
}
