﻿using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace advans_backend.Models
{
    public class ActiviteParticulier
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdActivite { get; set; }

        public int IdSecteurActivite { get; set; }

        public string? NomActivite { get; set; }

        public ICollection<ClientParticulier>? ClientParticuliers { get; set; }


    }
}
