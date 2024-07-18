using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace advans_backend.Models;

public class DemandeCredit
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int IdDemande { get; set; }

    public const string Client_Particulier = "Client Particulier";
    public const string Client_Entreprise = "Client Entreprise";
    [RegularExpression("^(Client Particulier|Client Entreprise)$")]
    public string? TypeClient { get; set; }
    public int? Montant { get; set; }
    public int? DureeDemandee { get; set; }
    public string? Commentaires { get; set; }
    public string? Disponibilite { get; set; }
    public string? NomAgence { get; set; }
    public string? NomClient { get; set; }
    public DateTime? DateDemande { get; set; }
    public DateTime? DateFinalisation { get; set; }
    public string? IdentiteClient { get; set; }


    //ClientEntreprise
    public int? IdClientEntreprise { get; set; }

    [ForeignKey("IdClientEntreprise")]
    [JsonIgnore]
    public ClientEntreprise? ClientEntreprise { get; set; }

    //ClientParticulier
    public int? IdClientParticulier { get; set; }

    [ForeignKey("IdClientParticulier")]
    [JsonIgnore]
    public ClientParticulier? ClientParticulier { get; set; }

    [JsonIgnore]
    public VisiteManagement? VisiteManagement { get; set; }
    [JsonIgnore]
    public RisqueAnalyse? RisqueAnalyse { get; set; }
    [JsonIgnore]
    public Comite? Comite { get; set; }
    [JsonIgnore]
    public CheckList? CheckList { get; set; }
    [JsonIgnore]
    public Analyse? Analyse { get; set; }

    public string? NomProduit { get; set; }
    public int? IdProduit { get; set; }
    [ForeignKey("IdProduit")]
    [JsonIgnore]
    public Produit? Produit { get; set; }


    //Statut

    public const string DEMANDE_BROUILLON = "Demande brouillon";
    public const string ANALYSE = "Analyse";
    public const string VERIFICATIONS_AVANT_COMITE = "Vérifications avant comité";
    public const string ANALYSE_RISQUE = "Analyse risque";
    public const string COMITE = "Comité";
    public const string ATTENTE_ACCORD_CLIENT = "Attente accord client";
    public const string PRET_A_DECARISSER = "Prêt à décaisser";
    public const string REFUSE = "Refusé";

    [RegularExpression("^(Demande brouillon|Analyse|Vérifications avant comité|Analyse risque|Comité|Attente accord client|Prêt à décaisser|Refusé)$")]
    public string? Statut { get; set; }


}
