using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace advans_backend.Models
{
    public class RelationClientGarant
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdRelationClientGarant { get; set; }

        public string? Relation { get; set; }

        public ICollection<Garant>? Garants { get; set; }
    }
}
