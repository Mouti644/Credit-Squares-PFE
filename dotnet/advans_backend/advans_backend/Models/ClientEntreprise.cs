using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using System.Diagnostics;
using static advans_backend.Models.DemandeCredit;

namespace advans_backend.Models;


public class ClientEntreprise
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int IdClientEntreprise { get; set; }

    //Relation avec la table Agence
    public string? NomAgence { get; set; }
    public int? IdAgence { get; set; }
    [ForeignKey("IdAgence")]
    [JsonIgnore]
    public RefAgence? Agence { get; set; }

    public const string Client_Entreprise = "Client Entreprise";
    [RegularExpression("^(Client Entreprise)$")]
    public string? Segment { get; set; }
    public string? Gestionnaire { get; set; }
    public string? Telephone { get; set; }

    public string? IdentiteClient { get; set; }

    //SecteurActivite
    public string? NomSecteurActivite { get; set; }
    public int? IdSecteurActivite { get; set; }
    [ForeignKey("IdSecteurActivite")]
    [JsonIgnore]
    public SecteurActiviteEntreprise? SecteurActivite { get; set; }

    //Activite
    public string? NomActivite { get; set; }
    public int? IdActivite { get; set; }
    [ForeignKey("IdActivite")]
    [JsonIgnore]
    public ActiviteEntreprise? Activite { get; set; }
    //SousActivite
    public string? NomSousActivite { get; set; }
    public int? IdSousActivite { get; set; }
    [ForeignKey("IdSousActivite")]
    [JsonIgnore]
    public SousActiviteEntreprise? SousActivite { get; set; }

    //
    public string? SituationImmobilier { get; set; }
    public int? IdSituationImmobilierEntreprise { get; set; }
    [ForeignKey("IdSituationImmobilierEntreprise")]
    [JsonIgnore]
    public SituationImmobilierEntreprise? SituationImmobilierEntreprise { get; set; }



    public string? RaisonSociale { get; set; }
    public int?   NombreEmployes { get; set; }
    public string? ChiffreAffaireMensuel { get; set; }
    public int? Cycle { get; set; }
    public DateTime? DateDerniereVisite { get; set; }
    public DateTime? DateCreationEntreprise { get; set; }
    public DateTime? DateCreation { get; set; }


  
    public string? InterlocuteurPrincipal { get; set; }
    //Sigle
    public string? Sigle { get; set; }
    public string? Ville { get; set; }

    public int? NbrCreditBeneficies { get; set; }
    public int? NbrPointsVente { get; set; }

    [JsonIgnore]
    public CompteEntreprise? Compte { get; set; }
    


}