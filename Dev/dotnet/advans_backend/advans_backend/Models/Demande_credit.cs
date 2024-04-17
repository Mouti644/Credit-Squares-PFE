using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace advans_backend.Models;

public enum Frequence
{
    [JsonPropertyName("Journalier")]
    Journalier,
    [JsonPropertyName("Hebdo")]
    Hebdo,
    [JsonPropertyName("Mensuel")]
    Mensuel

}

public enum TypeObjet
{
    [JsonPropertyName("WC_GOODS")]
    WC_GOODS,
    [JsonPropertyName("WC_RAW_MATERIAL")]
    WC_RAW_MATERIAL,
    [JsonPropertyName("WC_OTHER")]
    WC_OTHER,
    [JsonPropertyName("INVEST_PROPERTY")]
    INVEST_PROPERTY,
    [JsonPropertyName("INVEST_OTHER")]
    INVEST_OTHER,
    [JsonPropertyName("PERSO_EDUCATION")]
    PERSO_EDUCATION,
    [JsonPropertyName("PERSO_HOUSING")]
    PERSO_HOUSING,
    [JsonPropertyName("PERSO_EMERGENCY")]
    PERSO_EMERGENCY,
    [JsonPropertyName("PERSO_OTHER")]
    PERSO_OTHER
}
public enum nbrCredit
{
    zero,
    un,
    deux,
    trois,
    quatre,
    cinq,
    six,
    sept,
    huit,
    neuf,
    dix
}
public enum RelationClient
{
    [JsonPropertyName("Membre_de_la_famille")]
    Membre_de_la_famille,
    [JsonPropertyName("Membre_du_foyer")]
    Membre_du_foyer,
    [JsonPropertyName("Ami")]
    Ami,
    [JsonPropertyName("Client_fournisseur_Partenaire")]
    Client_fournisseur_Partenaire,
    [JsonPropertyName("Lui_meme")]
    Lui_meme
}
public class Demande_credit
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id_Demande { get; set; }
    public string NomGestionnaire { get; set; }
    public string Montant { get; set; }
    public string DescriptionObjet {  get; set; }
    public int DureeDemandee { get; set; }
    public TypeObjet TypeObjet { get; set; }
    public string Capacite { get; set; }
    public string Canal { get; set; }
    public DateTime Date { get; set; }
    public int num_version { get; set; }
    public int Id_Client { get; set; }

    [ForeignKey("Id_Client")]
    [JsonIgnore]
    public Client? Client { get; set; }
    public List<Vente> Ventes { get; set; }

    public List<Appro> Appros { get; set; }
    public List<Garant> Garants { get; set; }
    public List<Garantie> Garanties { get; set; }
    public string commentaire { get; set; }
    public string Disponibilite { get; set; }

    public nbrCredit NbrCredit_EnCours { get; set; }
    public string institutions { get; set; }




    //Produit

    public const string ADVANS_PROGRES = "Advans Progrès";
    public const string ADVANS_CROISSANCE = "Advans Croissance";
    public const string ADVANS_EVOLUTION = "Advans Evolution";
    public const string CREDIT_IMMO = "Crédit Immo";
    public const string ADVANS_JOKER = "Advans Joker";
    public const string CREDIT_BOOST_CT = "Credit Boost CT";
    public const string CREDIT_GROUPE = "Crédit groupe";
    public const string ADVANS_INNOVATION = "Advans Innovation";
    public const string PRET_INDIVIDUEL_PRODUCTEUR = "Prêt Individuel Producteur";
    public const string EQUIP_INTRANT_AGRI = "Equip intrant Agri";
    public const string FLEXIBLE_PERIOD_SCHEDULE = "Flexible period schedule";
    public const string INTRANT_AGRI_LOAN = "Intrant Agri loan";
    public const string AGRI_PARTENARIAT = "Agri Partenariat";
    public const string ADVANS_CAMPAGNE = "Advans Campagne";
    public const string CREDIT_COUP_2_POUSS = "CREDIT COUP 2 POUSS";
    public const string CREDIT_SCOLAIRE_CLASSIQUE = "CREDIT SCOLAIRE (CLASSIQUE)";
    public const string CREDIT_STAFF = "Crédit Staff";


    [RegularExpression("^(Advans Progrès|Advans Croissance|Advans Evolution|Crédit Immo|Advans Joker|Credit Boost CT|Crédit groupe|Advans Innovation|Prêt Individuel Producteur|Equip intrant Agri|Flexible period schedule|Intrant Agri loan|Agri Partenariat|Advans Campagne|CREDIT COUP 2 POUSS|CREDIT SCOLAIRE (CLASSIQUE)|Crédit Staff)$")]
    public string Produit { get; set; }


    //Statut

    public const string DEMANDE_BROUILLON = "Demande brouillon";
    public const string ANALYSE = "Analyse";
    public const string VERIFICATIONS_AVANT_COMITE = "Vérifications avant comité";
    public const string ANALYSE_RISQUE = "Analyse risque";
    public const string COMITE = "Comité";
    public const string ATTENTE_ACCORD_CLIENT = "Attente accord client";
    public const string PRET_A_DECARISSER = "Prêt à décaisser";
    public const string DECAISSE = "Décaissé";
    public const string REFUSE = "Refusé";

    [RegularExpression("^(Demande brouillon|Analyse|Vérifications avant comité|Analyse risque|Comité|Attente accord client|Prêt à décaisser|Décaissé|Refusé)$")]
    public string Statut { get; set; }





    public class Vente
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int idvente { get; set; }
        public Frequence Frequence { get; set; }
        public long ValeurHaute { get; set; }
        public long ValeurMoyenne { get; set; }
        public long ValeurBasse { get; set; }
    }

    
    public class Appro
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id_Appro { get; set; }
        public Frequence Frequence { get; set; }
        public long MontantMoyen_FCFA { get; set; }
    }

    public class Garant
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int idGarant { get; set; }
        public string NomGarant { get; set; }
        public RelationClient RelationClient { get; set; }

        
    }
    public class Garantie
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int idGarantie { get; set; }
        public string Proprietaire { get; set; }
        public long Valeur_estime { get; set; }
    }
}
