using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace advans_backend.Models
{
    public class TypePointVente
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdTypePointVente { get; set; }

        public string? Type { get; set; }


        public ICollection<PointVente>? PointsVente { get; set; }
    }
}
