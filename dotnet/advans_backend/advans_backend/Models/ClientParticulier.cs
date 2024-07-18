using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using System.Diagnostics;
using static advans_backend.Models.DemandeCredit;

namespace advans_backend.Models;


public class ClientParticulier
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int IdClientParticulier { get; set; }

    //Relation avec la table Agence
    public string? NomAgence { get; set; }
    public int? IdAgence { get; set; }
    [ForeignKey("IdAgence")]
    [JsonIgnore]
    public RefAgence? RefAgence { get; set; }

    public const string Client_Particulier = "Client Particulier";
    [RegularExpression("^(Client Particulier)$")]
    public string? Segment { get; set; }
    public string? Gestionnaire { get; set; }
    public string? Nom { get; set; }
    public string? Prenom { get; set; }
    public string? Telephone { get; set; }

    public DateTime? DateNaissance { get; set; }
    public string? Age { get; set; }

    public string? NomSecteurActivite { get; set; }
    public int? IdSecteurActivite { get; set; }
    [ForeignKey("IdSecteurActivite")]
    [JsonIgnore]
    public SecteurActiviteParticulier? SecteurActivite { get; set; }

    //Activite

    public string? NomActivite { get; set; }

    public int? IdActivite { get; set; }
    [ForeignKey("IdActivite")]
    [JsonIgnore]
    public ActiviteParticulier? Activite { get; set; }
    //SousActivite
    public string? NomSousActivite { get; set; }
    public int? IdSousActivite { get; set; }
    [ForeignKey("IdSousActivite")]
    [JsonIgnore]
    public SousActiviteParticulier? SousActivite { get; set; }


    public string? SituationImmobilier { get; set; }
    public int? IdSituationImmobilierParticulier { get; set; }
    [ForeignKey("IdSituationImmobilierParticulier")]
    [JsonIgnore]
    public SituationImmobilierParticulier? SituationImmobilierParticulier { get; set; }

    public string? SituationFamiliale { get; set; }
    public int? IdSituationFamilialeParticulier { get; set; }
    [ForeignKey("IdSituationFamilialeParticulier")]
    [JsonIgnore]
    public SituationFamilialeParticulier? SituationFamilialeParticulier { get; set; }


    //Sex
    public const string Male = "Male";
    public const string Female = "Female";

    [RegularExpression("^(Male|Female)$")]
    public string? Sex { get; set; }

  

   
    public string? FonctionProfessionnelle { get; set; }
    public string? SalaireNetMensuel { get; set; }
    public string? AutresRevenusMensuel { get; set; }
    public int? Cycle { get; set; }
    public DateTime? DateDerniereVisite { get; set; }
    public DateTime? DateCreation {  get; set; }

   
    
    
    
    public string? Ville { get; set; }

    public int? NbrCreditBeneficies { get; set; }
    public string? IdentiteClient { get; set; }

    [JsonIgnore]
    public CompteParticulier? Compte { get; set; }

    
    


}