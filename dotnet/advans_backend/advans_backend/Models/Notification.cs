using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace advans_backend.Models
{
    public class Notification
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public string Message { get; set; }

        [Required]
        public int UserId { get; set; }
        public string UserName { get; set; }

        public int IdDemande { get; set; }
        public bool IsRead { get; set; }
        public DateTime DateCreated { get; set; } = DateTime.Now;
    }
}
