using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace advans_backend.Models
{
    public class Garant
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int? idGarant { get; set; }
        public int? IdDemande { get; set; }

        [ForeignKey("IdDemande")]
        [JsonIgnore]
        public DemandeCredit? Demande { get; set; }

        public string? NomGarant { get; set; }
        public string? IdentiteGarant { get; set; }
        //

        public string? Relation { get; set; }
        public int? IdRelationClientGarant { get; set; }
        [ForeignKey("IdRelationClientGarant")]
        [JsonIgnore]
        public RelationClientGarant? RelationClientGarant { get; set; }
        //
        public long? ValeurMoyenne { get; set; }
        public long? ValeurBasse { get; set; }
        public string? Telephone { get; set; }
    }
}
