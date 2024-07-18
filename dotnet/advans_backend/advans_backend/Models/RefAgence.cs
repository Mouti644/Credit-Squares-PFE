using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace advans_backend.Models
{
    public class RefAgence
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdAgence { get; set; }
        public string? NomAgence { get; set; }
        public string? Region { get; set; }
        public string? Telephone { get; set; }
        public string? Adresse { get; set; }
        public ICollection<ClientParticulier>? ClientParticuliers { get; set; }
        public ICollection<ClientEntreprise>? ClientEntreprises { get; set; }
    }
}
