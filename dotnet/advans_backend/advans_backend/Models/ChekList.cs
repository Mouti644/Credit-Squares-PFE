using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace advans_backend.Models
{
    public class CheckList
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdCheckList { get; set; }


        //VerifPhotoClient
        public const string Oui = "Oui";
        public const string Non = "Non";
        [RegularExpression("^(Oui|Non)$")]
        public string VerifPhotoClient { get; set; }

        [RegularExpression("^(Oui|Non)$")]
        public string VerifIDClient { get; set; }

        [RegularExpression("^(Oui|Non)$")]
        public string VerifLocalClient { get; set; }

        [RegularExpression("^(Oui|Non)$")]
        public string VerifClientPolitique { get; set; }

        [RegularExpression("^(Oui|Non)$")]
        public string VerifAutorisationActivite { get; set; }

        [RegularExpression("^(Oui|Non)$")]
        public string VerifPhotoGarant { get; set; }

        [RegularExpression("^(Oui|Non)$")]
        public string VerifIDGarant { get; set; }

        [RegularExpression("^(Oui|Non)$")]
        public string VerifFormDemandeSigne { get; set; }

        [RegularExpression("^(Oui|Non)$")]
        public string VerifContratCreditSigne { get; set; }

        [RegularExpression("^(Oui|Non)$")]
        public string VerifContratGarantieSigne { get; set; }

        [RegularExpression("^(Oui|Non)$")]
        public string VerifFicheGarantSigne { get; set; }

        [RegularExpression("^(Oui|Non)$")]
        public string VerifFicheClientSigne { get; set; }

        [RegularExpression("^(Oui|Non)$")]
        public string VerifConditionsGenSigne { get; set; }

        public DateTime? DateDebutCheckList { get; set; }
        public DateTime? DateFinCheckList { get; set; }
        public int? DureeCheckList { get; set; }


        public int IdDemande { get; set; }

        [ForeignKey("IdDemande")]
        [JsonIgnore]
        public DemandeCredit? Demande { get; set; }
    }
}
