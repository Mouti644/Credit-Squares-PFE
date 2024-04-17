﻿using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using System.Diagnostics;

namespace advans_backend.Models;


public class Client
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id_Client { get; set; }
    public string Agence { get; set; }
    public int? Cycle { get; set; }
    public string? Interlocuteur_principal { get; set; }
    public string? Nom { get; set; }
    public string? Prenom { get; set; }
    public string? Age { get; set; }
    public string? Phone { get; set; }
    public int? Nombre_enfants { get; set; }

    public DateTime Date_dernier_visite { get; set; }

    //Type
    public const string PersonneMorale = "Personne Morale";
    public const string PersonnePhysique = "Personne Physique";

    [RegularExpression("^(Personne Morale|Personne Physique)$")]
    public string Type { get; set; }

    //Sex
    public const string Male = "Male";
    public const string Female = "Female";

    [RegularExpression("^(Male|Female)$")]
    public string Sex { get; set; }

    //Sit_fam

    public const string Marie = "Marié";
    public const string Pacse = "Pacsé";
    public const string Divorce = "Divorcé";
    public const string Celibataire = "Célibataire";
    public const string Veuf = "Veuf";

    [RegularExpression("^(Marié|Pacsé|Divorcé|Célibataire|Veuf)$")]
    public string Sit_fam { get; set; }

    //Sigle

    public const string ECB = "ECB";
    public const string SCI = "SCI";
    public const string CEC = "CEC";
    public const string APC = "APC";
    public const string MIPC = "MIPC";

    [RegularExpression("^(ECB|SCI|CEC|APC|MIPC)$")]
    public string Sigle { get; set; }

    //Sit_imm

    public const string Proprietaire = "Propriétaire";
    public const string Locataire = "Locataire";
    public const string COLOCATAIRE = "CO-LOCATAIRE";
    public const string MAISON_FAMILIALE = "MAISON FAMILIALE";
    public const string AUTRE = "AUTRE";
            

    [RegularExpression("^(Propriétaire|Locataire|CO-LOCATAIRE|MAISON FAMILIALE|AUTRE)$")]
    public string Sit_imm { get; set; }

    //Rais_soc

    public const string Entreprise_de_Construction_et_de_Batiment = "Entreprise de Construction et de Bâtiment";
    public const string Societ_de_Consultation_en_Informatique = "Sociét de Consultation en Informatique";
    public const string Cabinet_Expertise_Comptable = "Cabinet Expertise Comptable";
    public const string Agence_de_Publicite_et_de_Communication = "Agence de Publicité et de Communication";
    public const string Manufacture_Industrielle_de_Produits_Chimiques = "Manufacture Industrielle de Produits Chimiques";

    [RegularExpression("^(Entreprise de Construction et de Bâtiment|Sociét de Consultation en Informatique|Cabinet Expertise Comptable|Agence de Publicité et de Communication|Manufacture Industrielle de Produits Chimiques)$")]
    public string Rais_soc { get; set; }

    //Type Compte
    public const string Courant = "Courant";
    public const string Epargne = "Epargne";
    public const string DepotATerme = "Dépôt à Terme";
    public const string Autres = "Autres";

    [RegularExpression("^(Courant|Epargne|Dépôt à Terme|Autres)$")]
    public string TypeCompte { get; set; }

    //Secteur_act


    public const string AGRI_ELEVAGE = "AGRI ELEVAGE";
    public const string AGRICULTURE = "AGRICULTURE";
    public const string AGRI_HORS_PRODUCTION = "AGRI-HORS PRODUCTION";
    public const string PRODUCTION_NON_AGRI = "PRODUCTION NON AGRI";
    public const string COMMERCE_GROS_IMPORT = "COMMERCE GROS IMPORT";
    public const string COMMERCE_DE_DETAIL = "COMMERCE DE DETAIL";
    public const string TRANSPORT_PERSONNES = "TRANSPORT PERSONNES";
    public const string TRANSPORT_MARCHANDISES = "TRANSPORT MARCHANDISES";
    public const string BTP_SERVICES_AU_BATIMENT = "BTP SERVICES AU BATIMENT";
    public const string SERVICES_LOISIR = "SERVICES LOISIR";
    public const string AUTRES_SERVICES = "AUTRES SERVICES";
    public const string INDETERMINE = "INDETERMINE";

    [RegularExpression("^(AGRI ELEVAGE|AGRICULTURE|PRODUCTION NON AGRI|COMMERCE GROS IMPORT|COMMERCE DE DETAIL|TRANSPORT PERSONNES|TRANSPORT MARCHANDISES|BTP SERVICES AU BATIMENT|SERVICES LOISIR|AUTRES SERVICES|INDETERMINE)$")]
    public string Secteur_act { get; set; }


    //activite
    public const string BOVIN = "BOVIN";
    public const string OVINCAPRIN = "OVIN/CAPRIN";
    public const string PORCIN = "PORCIN";
    public const string AVICULTURE = "AVICULTURE";
    public const string PISCICULTURE = "PISCICULTURE";
    public const string AUTRE_ELEVAGE = "AUTRE ÉLEVAGE";
    public const string PLANTATIONS = "PLANTATIONS";
    public const string BOIS = "BOIS";
    public const string CEREALE = "CÉRÉALE";
    public const string TUBERCULE = "TUBERCULE";
    public const string CULTURE_DU_HARICOT = "CULTURE DU HARICOT";
    public const string LEGUME = "LÉGUME";
    public const string FRUITS = "FRUITS";
    public const string HORTICULTURE_PEPINIERE = "HORTICULTURE/PÉPINIÈRE";
    public const string TRSF_MATIERE_1ERE_AGRI_ALIMENT = "TRSF MATIÈRE 1ÈRE AGRI ALIMENT";
    public const string TRSF_AGRI_NON_ALIMENTAIRE = "TRSF AGRI NON-ALIMENTAIRE";
    public const string CHARBON_DE_BOIS = "CHARBON DE BOIS";
    public const string VENTE_OUTILLAGE_ET_EQUIPEMENT = "VENTE OUTILLAGE ET ÉQUIPEMENT";
    public const string VENTE_INTRANTS_AGRI = "VENTE INTRANTS AGRICOLES";
    public const string COMMERCE_PRODUITS_AGRI = "COMMERCE PRODUITS AGRICOLES";
    public const string ARTISANAT_TEXTILE_CUIR = "ARTISANAT TEXTILE/CUIR";
    public const string ARTISANAT_AUTRE = "ARTISANAT AUTRE";
    public const string RECYCLAGE = "RECYCLAGE";
    public const string PRODUCTION_MACHINE_VEHICULE_PR = "PRODUCTION MACHINE/VÉHICULE/PR";
    public const string PRODUCTION_CHIMIQUE_COSMETIQUE = "PRODUCTION CHIMIQUE/COSMÉTIQUE";
    public const string TRANSFORMATION_BOIS = "TRANSFORMATION BOIS";
    public const string PRODUCTION_BRIQUE_CONSTRUCTION = "PRODUCTION BRIQUE/CONSTRUCTION";
    public const string PRODUCTION_CIMENT_BETON = "PRODUCTION CIMENT/BÉTON";
    public const string PRODUCTION_DISTRIBUTION_D_EN = "PRODUCTION & DISTRIBUTION D’EN";
    public const string PRODUCTION_MINIERE = "PRODUCTION MINIÈRE";
    public const string EQUIPEMENTS_PROFESSIONNEL_QUI = "ÉQUIPEMENTS PROFESSIONNEL, QUI";
    public const string AUTO_ET_PIECES = "AUTO ET PIÈCES";
    public const string MAISON_DECORATION = "MAISON/DÉCORATION";
    public const string PUERICULTURE = "PUÉRICULTURE";
    public const string PRODUITS_ALIMENTAIRES = "PRODUITS ALIMENTAIRES";
    public const string HYGIENE_ET_BEAUTE = "HYGIÈNE ET BEAUTÉ";
    public const string MEDICAL_PARAMEDICAL = "MÉDICAL/PARAMÉDICAL";
    public const string LIBRAIRIE_PAPETERIE = "LIBRAIRIE/PAPETERIE";
    public const string MULTIMEDIA = "MULTIMEDIA";
    public const string TEXTILE_CHAUSSURES_ACCESSOIRE = "TEXTILE/ CHAUSSURES/ACCESSOIRE";
    public const string QUINCAILLERIE_ET_MATERIAUX = "QUINCAILLERIE ET MATÉRIAUX";
    public const string PRODUITS_PERISSABLES = "PRODUITS PÉRISSABLES";
    public const string ALIMENTATION_GENERALE = "ALIMENTATION GÉNÉRALE";
    public const string MOTO_TAXI = "MOTO-TAXI";
    public const string TAXI = "TAXI";
    public const string MINIBUS_URBAIN = "MINIBUS URBAIN";
    public const string BUS_INTER_URBAIN = "BUS INTER-URBAIN";
    public const string LOCATION_DE_VEHICULES = "LOCATION DE VÉHICULES";
    public const string PRODUITS_DANGEREUX = "PRODUITS DANGEREUX";
    public const string AUTRES_PRODUITS = "AUTRES PRODUITS";
    public const string COURSIERS = "COURSIERS";
    public const string PROMOTEUR = "PROMOTEUR";
    public const string ARTISANS_BTP = "ARTISANS BTP";
    public const string LOCATION_ENGINS_MATERIEL_TRAVA = "LOCATION ENGINS/MATÉRIEL TRAVA";
    public const string HOTELLERIE = "HOTELLERIE";
    public const string RESTAURATION = "RESTAURATION";
    public const string CAFE_ET_BARS = "CAFÉ ET BARS";
    public const string AGENCES_VOYAGE = "AGENCES VOYAGE";
    public const string SPORT = "SPORT";
    public const string SERVICES_ASSOCIATIFS_CULTURELS = "SERVICES ASSOCIATIFS CULTURELS";
    public const string MEDICAL_ET_PARAMEDICAL = "MEDICAL ET PARAMÉDICAL";
    public const string COMMUNICATION = "COMMUNICATION";
    public const string CONSULTING = "CONSULTING";
    public const string EDUCATION = "ÉDUCATION";
    public const string REPARATION_ENTRETIEN_VEHICULES = "RÉPARATION/ENTRETIEN VÉHICULES";
    public const string REPARATION_AUTRES_EQUIPEMENTS = "RÉPARATION AUTRES ÉQUIPEMENTS";
    public const string COUTURE_ET_CORDONNERIE = "COUTURE ET CORDONNERIE";
    public const string BLANCHISSERIE_LAVAGE_TEXTILE = "BLANCHISSERIE/LAVAGE TEXTILE";
    public const string IMPRESSION = "IMPRESSION";
    public const string EAU_ET_DISTRIBUTION_D_EAU = "EAU ET DISTRIBUTION D’EAU";
    public const string SERVICE_MULTIMEDIA = "SERVICE MULTIMEDIA";
    public const string COIFFURE_ET_BEAUTE = "COIFFURE ET BEAUTÉ";
    public const string LOCATION_MATERIEL_HORS_BTP = "LOCATION MATÉRIEL HORS BTP";
    public const string PRODUITS_PETROCHIMIQUES_COMBUS = "PRODUITS PÉTROCHIMIQUES/COMBUS";
    public const string COMMERCE_PRODUITS_AGRI_VIVRIER = "COMMERCE PRODUITS AGRI VIVRIER";
    public const string INDETERMINE_Act = "INDETERMINE";

    [RegularExpression(@"^(BOVIN|OVIN/CAPRIN|PORCIN|AVICULTURE|PISCICULTURE|AUTRE ÉLEVAGE|PLANTATIONS|BOIS|CÉRÉALE|TUBERCULE|CULTURE DU HARICOT|LÉGUME|FRUITS|HORTICULTURE/PÉPINIÈRE|TRSF MATIÈRE 1ÈRE AGRI ALIMENT|TRSF AGRI NON-ALIMENTAIRE|CHARBON DE BOIS|VENTE OUTILLAGE ET ÉQUIPEMENT|VENTE INTRANTS AGRICOLES|COMMERCE PRODUITS AGRICOLES|ARTISANAT TEXTILE/CUIR|ARTISANAT AUTRE|RECYCLAGE|PRODUCTION MACHINE/VÉHICULE/PR|PRODUCTION CHIMIQUE/COSMÉTIQUE|TRANSFORMATION BOIS|PRODUCTION BRIQUE/CONSTRUCTION|PRODUCTION CIMENT/BETON|PRODUCTION & DISTRIBUTION D’EN|PRODUCTION MINIÈRE|ÉQUIPEMENTS PROFESSIONNEL, QUI|AUTO ET PIÈCES|MAISON/DÉCORATION|PUÉRICULTURE|PRODUITS ALIMENTAIRES|HYGIÈNE ET BEAUTÉ|MÉDICAL/PARAMÉDICAL|LIBRAIRIE/PAPETERIE|MULTIMEDIA|TEXTILE/ CHAUSSURES/ACCESSOIRE|QUINCAILLERIE ET MATÉRIAUX|PRODUITS PÉRISSABLES|ALIMENTATION GÉNÉRALE|HYGIÈNE ET BEAUTÉ|MÉDICAL/PARAMÉDICAL|LIBRAIRIE/PAPETERIE|VENTE MULTIMEDIA|TEXTILE/ CHAUSSURES/ACCESSOIRE|MOTO-TAXI|TAXI|MINIBUS URBAIN|BUS INTER-URBAIN|LOCATION DE VÉHICULES|PRODUITS DANGEREUX|AUTRES PRODUITS|COURSIERS|PROMOTEUR|ARTISANS BTP|LOCATION ENGINS/MATÉRIEL TRAVA|HOTELLERIE|RESTAURATION|CAFÉ ET BARS|AGENCES VOYAGE|SPORT|SERVICES ASSOCIATIFS CULTURELS|MÉDICAL ET PARAMÉDICAL|COMMUNICATION|CONSULTING|ÉDUCATION|RÉPARATION/ENTRETIEN VÉHICULES|RÉPARATION AUTRES ÉQUIPEMENTS|COUTURE ET CORDONNERIE|BLANCHISSERIE/LAVAGE TEXTILE|IMPRESSION|EAU ET DISTRIBUTION D’EAU|SERVICE MULTIMEDIA|COIFFURE ET BEAUTÉ|LOCATION MATÉRIEL HORS BTP|PRODUITS PÉTROCHIMIQUES/COMBUS|COMMERCE PRODUITS AGRI VIVRIER|INDETERMINE)$")]
    public string Acitivite { get; set; }

    //sous Activite

    public const string BOEUFS = "BOEUFS";
    public const string VACHES = "VACHES";
    public const string BOVIN_MIXTE = "BOVIN MIXTE";
    public const string MOUTONS_BELIERS_BREBIS = "MOUTONS BELIERS BREBIS";
    public const string CHEVRE = "CHEVRE";
    public const string PORC_COCHON = "PORC/COCHON";
    public const string POULET_CHAIR = "POULET CHAIR";
    public const string POULES_PONDEUSES = "POULES PONDEUSES";
    public const string AVICOLE_MIXTE = "AVICOLE MIXTE";
    public const string POISSONS = "POISSONS";
    public const string CRUSTACÉS = "CRUSTACÉS";
    public const string ELEVAGE_AUTRE = "ELEVAGE AUTRE";
    public const string CACAO = "CACAO";
    public const string ANACARDE = "ANACARDE";
    public const string PALMIER_HUILE = "PALMIER HUILE";
    public const string HEVEA = "HEVEA";
    public const string BOIS_EXPORT = "BOIS EXPORT";
    public const string BLÉ = "BLÉ";
    public const string ORGE = "ORGE";
    public const string MAIS = "MAIS";
    public const string RIZ = "RIZ";
    public const string MANIOC = "MANIOC";
    public const string IGNAME = "IGNAME";
    public const string POMME_DE_TERRE = "POMME DE TERRE";
    public const string HARICOT = "HARICOT";
    public const string MARAICHAGE_DIVERSIFIÉ = "MARAICHAGE DIVERSIFIÉ";
    public const string TOMATE = "TOMATE";
    public const string OIGNON = "OIGNON";
    public const string SALADE = "SALADE";
    public const string AUBERGINE = "AUBERGINE";
    public const string ANANAS = "ANANAS";
    public const string ORANGE = "ORANGE";
    public const string PAPAYE = "PAPAYE";
    public const string DIVERISIFIÉ = "DIVERISIFIÉ";
    public const string ARBRES = "ARBRES";
    public const string FLEURS = "FLEURS";
    public const string POISSON = "POISSON";
    public const string VIANDE = "VIANDE";
    public const string FRUIT_LÉGUME = "FRUIT LÉGUME";
    public const string PRODUITS_LAITIERS_Y_C_BEURRE = "PRODUITS LAITIERS Y.C BEURRE";
    public const string HUILERIES = "HUILERIES";
    public const string MINOTERIE_CÉRÉALES = "MINOTERIE/ CÉRÉALES";
    public const string GRAINES_SEMENCES = "GRAINES/ SEMENCES";
    public const string FIBRES_VÉGÉTALES_TEXTILE = "FIBRES VÉGÉTALES TEXTILE";
    public const string CAOUTCHOUC = "CAOUTCHOUC";
    public const string VENTE_CHARBON_DE_BOIS = "VENTE CHARBON DE BOIS";
    public const string VENTE_OUTILL_EQUIPEMENT_AGRI = "VENTE OUTILL ÉQUIPEMENT AGRI";
    public const string VENTE_INTRANTS_AGRICOLES = "VENTE INTRANTS AGRICOLES";
    public const string CACAOS = "CACAO";
    public const string ANACARDES = "ANACARDE";
    public const string ANANASS = "ANANAS";
    public const string FABR_TISSUS = "FABR.TISSUS";
    public const string FABR_SOIE = "FABR SOIE";
    public const string FABR_CHAUSSURE = "FABR.CHAUSSURE";
    public const string FABR_MAROQUINERIE = "FABR. MAROQUINERIE";
    public const string FABR_INSTRUMENTS_MUSIQUE = "FABR. INSTRUMENTS MUSIQUE";
    public const string FABRICATION_MEUBLES = "FABRICATION MEUBLES";
    public const string POTERIE = "POTERIE";
    public const string BIJOUTERIE = "BIJOUTERIE";
    public const string PRODUCTION_EN_VERRE = "PRODUCTION EN VERRE";
    public const string FABRICATION_OBJET_DECO_LAMPE = "FABRICATION OBJET DÉCO";
    public const string RECYCLAGE_PAPIER_CARTON = "RECYCLAGE PAPIER/CARTON";
    public const string RECYCLAGE_METAL = "RECYCLAGE METAL";
    public const string RECYCLAGE_VERRE = "RECYCLAGE VERRE";
    public const string BATEAUX = "BATEAUX";
    public const string AUTRES = "AUTRES";
    public const string SAVON = "SAVON";
    public const string AUTRE_COSMETIQUE = "AUTRE COSMÉTIQUE";
    public const string MEUBLES = "MEUBLES";
    public const string SCIERIE = "SCIÈRIE";
    public const string BRIQUE = "BRIQUE";
    public const string FAIENCE = "FAIENCE";
    public const string CIMENT = "CIMENT";
    public const string BETON = "BETON";
    public const string GAZ = "GAZ";
    public const string PETROLE = "PÉTROLE";
    public const string ELECTRICITE = "ELECTRICITÉ";
    public const string PRODUCTION__MINIERE = "PRODUCTION MINIÈRE";
    public const string EQUIPEMENT_PROFESSIONNEL = "EQUIPEMENT PROFESSIONNEL";
    public const string INTRANTS_ET_MATERIAUX_BRUTS = "INTRANTS ET MATÉRIAUX BRUTS";
    public const string QUINCAILLERIES = "QUINCAILLERIES";
    public const string AUTOMOBILES_MOTOS = "AUTOMOBILES/MOTOS";
    public const string PD_AUTO = "PD AUTO";
    public const string ELECTROMENAGER = "ELECTROMÉNAGER";
    public const string MEUBLES_ARTISANAT_OBJETS_DECO = "MEUBLES ARTISANAT OBJETS DECO";
    public const string OBJETS_MENAGERS_PLASTIQUE_DR = "OBJETS MÉNAGERS";
    public const string JOUETS_OU_PUERICULTURE = "JOUETS OU PUERICULTURE";
    public const string PRODUITS_HYGIENE_BEBE = "PRODUITS HYGIÈNE BÉBÉ";
    public const string PRODT_ALIMENT_NON_PERISSABLES = "PRODT ALIMENT NON PÉRISSABLES";
    public const string BOISSON = "BOISSON";
    public const string PRODT_ALIMENTAIRES_PERISSABLES = "PRODT ALIMENTAIRES PÉRISSABLES";
    public const string PARFUMERIE_COSMETIQUE = "PARFUMERIE/COSMÉTIQUE";
    public const string MECHES_PRODUITS_CAPILLAIRES = "MÈCHES/PRODUITS CAPILLAIRES";
    public const string PRODUITS_ENTRETIEN = "PRODUITS ENTRETIEN";
    public const string MEDICAUX = "MÉDICAUX";
    public const string OPTIQUE = "OPTIQUE";
    public const string EQUIPEMENT_LIBRAIRIE = "EQUIPEMENT LIBRAIRIE";
    public const string EQUIPEMENT_PAPETERIE = "EQUIPEMENT PAPETERIE";
    public const string TELEPHONE = "TELEPHONE";
    public const string EQUIPEMENT_INFORMATIQUE = "EQUIPEMENT INFORMATIQUE";
    public const string VETEMENT_NEUF = "VETEMENT NEUF";
    public const string FRIPE_VETEMENT = "FRIPE VETEMENT";
    public const string TISSUS_PAGNES = "TISSUS/PAGNES";
    public const string CHAUSSURES_NEUF = "CHAUSSURES NEUF";
    public const string FRIPE_CHAUSSURE_ACCESSOIRES = "FRIPE CHAUSSURE ACCESSOIRES";
    public const string MAROQUINERIE_ACCESSOIRE_NEUF = "MAROQUINERIE ACCESSOIRE NEUF";
    public const string MONTRE_BIJOUX = "MONTRE/BIJOUX";
    public const string ARTICLES_DE_SPORT = "ARTICLES DE SPORT";
    public const string VTE_EQUIPEMENT_PROF_HORS_AGRI = "VTE ÉQUIPEMENT PROF HORS AGRI";
    public const string QUINCAILLERIES_2 = "QUINCAILLERIES";
    public const string VENTE_CIMENT = "VENTE CIMENT";
    public const string VENTE_SABLE_GRAVIERS = "VENTE SABLE/GRAVIERS";
    public const string VENTE_SOL_CARRELAGE_CERAMIQUE = "VENTE SOLS/CARRELAGE/CÉRAMIQUE";
    public const string STAFFEUR_ELEMENTS_PLAFONDS = "STAFFEUR/ELEMENTS PLAFONDS";
    public const string VENTE_AUTOMOBILES = "VENTE AUTOMOBILES";
    public const string VENTE_CYCLES = "VENTE CYCLES";
    public const string PD_AUTO_2 = "PD AUTO";
    public const string CASSE_AUTO = "CASSE AUTO";
    public const string STATION_SERVICE = "STATION SERVICE";
    public const string VENTE_ELECTROMENAGER = "VENTE ÉLECTROMÉNAGER";
    public const string VENTE_ARTISANAT = "VENTE ARTISANAT";
    public const string VENTE_OBJETS_DECORATION = "VENTE OBJETS DÉCORATION";
    public const string VENTE_OBJET_PLASTIQU_DROGUERIE = "VENTE OBJET PLASTIQU/DROGUERIE";
    public const string VENTE_VAISSELLE_TROUSSEAU = "VENTE VAISSELLE/TROUSSEAU";
    public const string VENTE_MEUBLES_2 = "VENTE MEUBLES";
    public const string VENTE_TAPIS = "VENTE TAPIS";
    public const string VENTE_JOUETS = "VENTE JOUETS";
    public const string VENTE_ARTICLES_DE_BEBE = "VENTE ARTICLES DE BEBE";
    public const string PRODUITS_HYGIENE_BEBE_2 = "PRODUITS HYGIÈNE BÉBÉ";
    public const string BOUCHER = "BOUCHER";
    public const string POISSONNIER = "POISSONNIER";
    public const string VENTE_FRUITS_LEGUME = "VENTE FRUITS/LÉGUME";
    public const string FLEURISTE = "FLEURISTE";
    public const string BOULANGERIE = "BOULANGERIE";
    public const string PATISSERIE = "PATISSERIE";
    public const string SUPERMARCHE_SUPRETTE = "SUPERMARCHÉ/SUPÉRETTE";
    public const string MAGASIN_ALIMENTATION_KIOSQUE = "MAGASIN ALIMENTATION/KIOSQUE";
    public const string VENTE_BOISSONS = "VENTE BOISSONS";
    public const string PARFUMERIE_COSMETIQUE_2 = "PARFUMERIE/COSMÉTIQUE";
    public const string MECHES_PRODUITS_CAPILLAIRES_2 = "MÈCHES/PRODUITS CAPILLAIRES";
    public const string PRODUITS_ENTRETIEN_2 = "PRODUITS ENTRETIEN";
    public const string PRODUITS_HYGIENE_2 = "PRODUITS HYGIÈNE";
    public const string EQUIPEMENT_CONSOMMABLE_MEDICAU = "EQUIPEMENT/CONSOMMABLE MÉDICAU";
    public const string PHARMACIE_2 = "PHARMACIE";
    public const string OPTIQUE_2 = "OPTIQUE";
    public const string LIBRAIRIE_2 = "LIBRAIRIE";
    public const string PAPETERIE_JOURNAUX = "PAPETERIE/JOURNAUX";
    public const string TELEPHONE_2 = "TELEPHONE";
    public const string CREDIT_TELEPHONIQUE = "CRÉDIT TELEPHONIQUE";
    public const string EQUIPEMENT_INFORMATIQUE_2 = "EQUIPEMENT INFORMATIQUE";
    public const string VETEMENT_NEUF_2 = "VETEMENT NEUF";
    public const string FRIPE_VETEMENT_2 = "FRIPE VETEMENT";
    public const string TISSUS_PAGNES_2 = "TISSUS/PAGNES";
    public const string CHAUSSURES_NEUF_2 = "CHAUSSURES NEUF";
    public const string FRIPE_CHAUSSURE_ACCESSOIRES_2 = "FRIPE CHAUSSURE ACCESSOIRES";
    public const string MAROQUINERIE_ACCESSOIRE_NEUF_2 = "MAROQUINERIE ACCESSOIRE NEUF";
    public const string MONTRE_BIJOUX_2 = "MONTRE/BIJOUX";
    public const string ARTICLES_SPORT = "ARTICLES SPORT";
    public const string MOTO_TAXI_TRICYCLES = "MOTO-TAXI/ TRICYCLES";
    public const string TAXI_TAXI_COMMUNAL_VTC = "TAXI/ TAXI COMMUNAL/ VTC";
    public const string MINIBUS__URBAIN = "MINIBUS URBAIN";
    public const string CAR_INTERURBAIN = "CAR INTERURBAIN";
    public const string CAR_INTERNATIONAL = "CAR INTERNATIONAL";
    public const string LOCATION_DE_VOITURE = "LOCATION DE VOITURE";
    public const string LOCATION_DE_MOTO_CYCLES = "LOCATION DE MOTO/CYCLES";
    public const string PRODUITS_PETROLIERS = "PRODUITS PÉTROLIERS";
    public const string PRODUITS__ALIMENTAIRES = "PRODUITS ALIMENTAIRES";
    public const string AUTRES__PRODUITS = "AUTRES PRODUITS";
    public const string COURSIER = "COURSIERS";
    public const string ARCHITECTE = "ARCHITECTE";
    public const string MAITRE_OEUVRE = "MAITRE OEUVRE";
    public const string PROMOTEURS = "PROMOTEUR";
    public const string TOUS_CORPS_GENERALISTE = "TOUS CORPS";
    public const string PEINTRE_BATIMENT = "PEINTRE BÂTIMENT";
    public const string ELECTRICIEN_2 = "ELECTRICIEN";
    public const string PLOMBIER_CHAUFFAGIST_CLIMATIST = "PLOMBIER/CHAUFFAGIST/CLIMATIST";
    public const string MACON = "MAÇON";
    public const string LOCATION_ENGINS_CHANTIER = "LOCATION ENGINS CHANTIER";
    public const string LOCATION_ECHAFFAUDAGES = "LOCATION ÉCHAFFAUDAGES";
    public const string LOCATION_MATERIEL_TRAVAUX_BAT = "LOCATION MATÉRIEL TRAVAUX BAT";
    public const string HOTEL = "HOTEL";
    public const string RESTAURANT_2 = "RESTAURANT";
    public const string MAQUIS_KIOSQUE = "MAQUIS / KIOSQUE";
    public const string FAST_FOOD = "FAST-FOOD";
    public const string SALON_THE_THE = "SALON THE THÉ";
    public const string CAFE = "CAFÉ";
    public const string BAR = "BAR";
    public const string BOITE_DE_NUIT = "BOITE DE NUIT";
    public const string AGENCES__VOYAGE = "AGENCES VOYAGE";
    public const string SALLES_DE_SPORT_TERRAIN_FOOT = "SALLES DE SPORT, TERRAIN FOOT";
    public const string EGLISES = "EGLISES";
    public const string ASSOCIATIONS_2 = "ASSOCIATIONS";
    public const string MEDECIN = "MÉDECIN";
    public const string VETERINAIRE = "VÉTÉRINAIRE";
    public const string POMPES_FUNEBRES = "POMPES FUNEBRES";
    public const string EVENEMENTIEL = "EVENEMENTIEL";
    public const string PHOTOGRAPHIE = "PHOTOGRAPHIE";
    public const string PUBLICITE = "PUBLICITÉ";
    public const string TV_RADIO = "TV/RADIO";
    public const string CONSULTING_MANAGEMENT = "CONSULTING MANAGEMENT";
    public const string AVOCATS_HUISSIERS = "AVOCATS/HUISSIERS";
    public const string INTERIM = "INTERIM";
    public const string GARDERIES_ENFANT = "GARDERIES ENFANT";
    public const string ECOLES = "ECOLES";
    public const string CENTRES_DE_FORMATION = "CENTRES DE FORMATION";
    public const string GARAGES = "GARAGES";
    public const string LAVAGE_VEHICULE = "LAVAGE VÉHICULE";
    public const string VULCANISATEUR = "VULCANISATEUR";
    public const string REPARATION_CYCLES = "RÉPARATION CYCLES";
    public const string REPARATION_ELECTROMENAGER = "RÉPARATION ELECTROMÉNAGER";
    public const string SOUDEUR_FORGERON = "SOUDEUR/FORGERON";
    public const string REPARATION_MONTRES_BIJOUX = "RÉPARATION MONTRES/BIJOUX";
    public const string COUTURIER = "COUTURIER";
    public const string CORDONNIER = "CORDONNIER";
    public const string PRESSING = "PRESSING…";
    public const string IMPRIMERIE = "IMPRIMERIE";
    public const string PHOTOCOPIE = "PHOTOCOPIE";
    public const string IMPRESSION_PHOTOS = "IMPRESSION PHOTOS";
    public const string DISTRIBUTION_EAU_VTE_EAU_BTLE = "DISTRIBUTION EAU VTE EAU BTLE";
    public const string GESTION_DES_DECHETS = "GESTION DES DÉCHETS";
    public const string DUPLICATION_MULTIMEDIA = "DUPLICATION MULTIMEDIA";
    public const string CYBER_CAFES = "CYBER CAFES";
    public const string SALLE_JEU_VIDEO = "SALLE JEU VIDEO";
    public const string REPARATION_INFORMATIQUE_2 = "RÉPARATION INFORMATIQUE";
    public const string SALON_DE_COIFFURE = "SALON DE COIFFURE";
    public const string INSTITUT_DE_BEAUTE = "INSTITUT DE BEAUTÉ";
    public const string LOCATION_ROBES = "LOCATION ROBES";
    public const string LOCATION_MATERIEL_RECEPTION = "LOCATION MATÉRIEL RÉCEPTION";
    public const string NOIX_DE_KARITE = "NOIX DE KARITÉ";
    public const string NOIX_DE_COCO = "NOIX DE COCO";
    public const string MARCHE_LOCAL_DU_BOIS = "MARCHÉ LOCAL DU BOIS";
    public const string MILLET_2 = "MILLET";
    public const string IGNAME_2 = "IGNAME";
    public const string AUTRES_2 = "AUTRES";
    public const string PLANTAIN = "PLANTAIN";
    public const string BANANE = "BANANE";
    public const string MANGUE = "MANGUE";
    public const string PASTEQUE = "PASTÈQUE";
    public const string GOYAVE = "GOYAVE";
    public const string COROSSOL = "COROSSOL";
    public const string VENTE_DE_CHARBON_DE_BOIS_2 = "VENTE DE CHARBON DE BOIS";
    public const string CULTURES_VIVRIERES = "CULTURES VIVRIÈRES";
    public const string RECYCLAGE_DU_CAOUTCHOUC = "RECYCLAGE DU CAOUTCHOUC";
    public const string RECYCLAGE_DU_PLASTIQUE = "RECYCLAGE DU PLASTIQUE";
    public const string FRAISEUSE = "FRAISEUSE";
    public const string BROUETTE = "BROUETTE";
    public const string VEHICULE_A_MOTEUR = "VÉHICULE À MOTEUR";
    public const string CARRIERES = "CARRIÈRES";
    public const string ACCESSOIRES_DE_VEHICULE = "ACCESSOIRES DE VÉHICULE";
    public const string JOURNAUX_MAGAZINES = "JOURNAUX/MAGAZINES";
    public const string BIJOUX_ET_ACCESSOIRES = "BIJOUX ET ACCESSOIRES";
    public const string LES_PRODUITS_LAITIERS = "LES PRODUITS LAITIERS";
    public const string TROUPE_CULTURELLE = "TROUPE CULTURELLE";
    public const string PHARMACIEN_2 = "PHARMACIEN";
    public const string TECHNICIENS_DE_LABORATOIRE = "TECHNICIENS DE LABORATOIRE";
    public const string MEDECIN_ASSISTANT = "MÉDECIN ASSISTANT";
    public const string INFIRMIER = "INFIRMIER";
    public const string SERVICE_MEDIA_SOCIAUX_EN_LIGNE = "SERVICE MÉDIA SOCIAUX/EN LIGNE";
    public const string MECANIQUE = "MÉCANIQUE";
    public const string SERVICES_DE_BLANCHISSERIE = "SERVICES DE BLANCHISSERIE";
    public const string REPARATIONS_TV_AUDIO = "RÉPARATIONS TV/AUDIO";
    public const string EQUIPEMENTS_DE_BUREAU = "ÉQUIPEMENTS DE BUREAU";
    public const string AUTRES_3 = "AUTRES";
    public const string STATION_GAZ = "STATION GAZ";
    public const string VENTE_CYLINDRES_GAZ = "VENTE CYLINDRES GAZ";
    public const string BAIN_DE_MORT = "BAIN DE MORT";
    public const string CAFE_2 = "CAFE";
    public const string COTON_2 = "COTON";
    public const string AUTRES_4 = "AUTRES";
    public const string BOISSONS_ALCOOLISEES = "BOISSONS ALCOOLISEES";
    public const string ALIMENTATION_ANIMAUX_ET_BETAIL = "ALIMENTATION ANIMAUX ET BETAIL";
    public const string VENTE_PRODUITS_PHYTOSANITAIRES = "VENTE PRODUITS PHYTOSANITAIRES";
    public const string HUILES_VEGETALES = "HUILES VEGETALES";
    public const string BOIS_2 = "BOIS";
    public const string COLA = "COLA";
    public const string MAIS_2 = "MAIS";
    public const string RIZ_2 = "RIZ";
    public const string MANIOC_2 = "MANIOC";
    public const string IGNAME_3 = "IGNAME";
    public const string MARAICHAGE_DIVERSIFIE = "MARAICHAGE DIVERSIFIÉ";
    public const string TOMATE_2 = "TOMATE";
    public const string OIGNON_2 = "OIGNON";
    public const string AUTRES_LEGUMES = "AUTRES LÉGUMES";
    public const string BANANE_PLANTAIN = "BANANE PLANTAIN";
    public const string AUTRES_FRUITS = "AUTRES FRUITS";
    public const string VEHICULES_2 = "VEHICULES";
    public const string TUILE = "TUILE";
    public const string LITERIE_AMEUBLEMENT = "LITERIE AMEUBLEMENT";
    public const string POISSONS_CONGELES = "POISSONS CONGELES";
    public const string PRODUITS_CONGELES_DIVERS = "PRODUITS CONGELES DIVERS";
    public const string PRODUITS_LAITIERS_2 = "PRODUITS LAITIERS";
    public const string VENTE_PRODUITS_VETERINAIRES_2 = "VENTE PRODUITS VETERINAIRES";
    public const string VENTE_ARTICLES_RELIGIEUX = "VENTE ARTICLES RELIGIEUX";
    public const string VIDEO_ET_AUDIO = "VIDEO ET AUDIO";
    public const string AGENCE_IMMOBILIERE = "AGENCE IMMOBILIERE";
    public const string TRAVAILLEUR_METALLURGIQUE = "TRAVAILLEUR METALLURGIQUE";
    public const string ENTRETIEN_ESPACES_VERTS = "ENTRETIEN ESPACES VERTS";
    public const string LOCATION_PETIT_MATERIEL_CONSTR = "LOCATION PETIT MATERIEL CONSTR";
    public const string RESIDENCE_MEUBLEE = "RESIDENCE MEUBLEE";
    public const string LOCATION_ESPACE_EVENEMENTIEL = "LOCATION ESPACE EVENEMENTIEL";
    public const string SERVICE_BROYAGE_PRODUITS_ALIME = "SERVICE BROYAGE PRODUITS ALIME";
    public const string CLINIQUE = "CLINIQUE";
    public const string LABORATOIRE_ANALYSES_MEDICALES = "LABORATOIRE ANALYSES MEDICALES";
    public const string CABINETS_MEDECINE_SPECIALISTE = "CABINETS MEDECINE SPECIALISTE";
    public const string AGENCE_WEB = "AGENCE WEB";
    public const string COURTIERS_ASSURANCE = "COURTIERS/ASSURANCE";
    public const string TONTINIER = "TONTINIER";
    public const string COLLEGES = "COLLEGES";
    public const string LYCEES = "LYCEES";
    public const string GRANDES_ECOLES = "GRANDES ECOLES";
    public const string SOUTIEN_SCOLAIRE = "SOUTIEN SCOLAIRE";
    public const string LATRINES_PUBLIQUES = "LATRINES PUBLIQUES";
    public const string AGENT_MOBILE_MONEY = "AGENT MOBILE MONEY";
    public const string VENTE_BOIS_CHARBON_DOMESTIQUE = "VENTE BOIS CHARBON DOMESTIQUE";
    public const string PETIT_POIS = "PETIT POIS";
    public const string AUTRES_LEGUMES_2 = "AUTRES LÉGUMES";
    public const string SEMENCE = "SEMENCE";
    public const string PROD_LAITIERS_YC_BEURRE_GLACE = "PROD LAITIERS Y.C BEURRE/GLACE";
    public const string BOISSONS_NON_ALCOOLISEES = "BOISSONS NON-ALCOOLISEES";
    public const string PRODUITS_DIVERS_2 = "PRODUITS DIVERS";
    public const string TISSAGES = "TISSAGES";
    public const string ARACHIDE = "ARACHIDE";
    public const string HARICOT_ROUGE = "HARICOT ROUGE";
    public const string VENTE_MOTOS_TRICYCLES = "VENTE MOTOS/TRICYCLES";
    public const string TRAVAIL_DU_CUIR = "TRAVAIL DU CUIR";
    public const string PLATRE = "PLATRE";
    public const string VENTE_MATERIAUX_CONSTRUCTION = "VENTE MATÉRIAUX CONSTRUCTION";
    public const string BROCANTE = "BROCANTE";
    public const string VOLLAILLER_OEUF = "VOLLAILLER/ŒUFS";
    public const string POISSON_SECHE = "POISSON SECHÉ";
    public const string CEREALE_EPICE_CONDIMENT_HUILE = "CÉRÉALE-ÉPICE-CONDIMENT-HUILE";
    public const string TISSUS_MERCERIE = "TISSUS/MERCERIE";
    public const string SALLE_DE_JEUX_BILLARDS_ETC = "SALLE DE JEUX";
    public const string MENUISIER_EBENISTE_TAPISSIER = "MENUISIER/EBENISTE/TAPISSIER";
    public const string BAGAGES = "BAGAGES";
    public const string AUTO_ECOLE = "AUTO ÉCOLE";
    public const string TOLERIE = "TOLERIE";
    public const string FABRICATION_CERCUEILS_ET_ACCES = "FABRICATION CERCUEILS ET ACCES";
    public const string VENTE_CERCUEILS_ET_ACCESSOIRES = "VENTE CERCUEILS ET ACCESSOIRES";


    [RegularExpression("^(BOEUFS|VACHES|BOVIN MIXTE|MOUTONS BELIERS BREBIS|CHEVRE|PORC/COCHON|POULET CHAIR|POULES PONDEUSES|AVICOLE MIXTE|POISSONS|CRUSTACÉS|ELEVAGE AUTRE|CACAO|ANACARDE|PALMIER HUILE|HEVEA|BOIS EXPORT|BLÉ|ORGE|MAIS|RIZ|MANIOC|IGNAME|POMME DE TERRE|HARICOT|MARAICHAGE DIVERSIFIÉ|TOMATE|OIGNON|SALADE|AUBERGINE|ANANAS|ORANGE|PAPAYE|DIVERISIFIÉ|ARBRES|FLEURS|POISSON|VIANDE|FRUIT LÉGUME|PRODUITS LAITIERS Y.C BEURRE|HUILERIES|MINOTERIE/ CÉRÉALES|GRAINES/ SEMENCES|FIBRES VÉGÉTALES TEXTILE|CAOUTCHOUC|VENTE CHARBON DE BOIS|VENTE OUTILL ÉQUIPEMENT AGRI|VENTE INTRANTS AGRICOLES|CACAO|ANACARDE|ANANAS|FABR.TISSUS|FABR SOIE|FABR.CHAUSSURE|FABR. MAROQUINERIE|FABR. INSTRUMENTS MUSIQUE|FABRICATION MEUBLES|POTERIE|BIJOUTERIE|PRODUCTION EN VERRE|POTERIE|FABRICATION OBJET DÉCO|RECYCLAGE PAPIER/CARTON|RECYCLAGE METAL|RECYCLAGE VERRE|BATEAUX|AUTRES|SAVON|AUTRE COSMÉTIQUE|MEUBLES|SCIÈRIE|BRIQUE|FAIENCE|CIMENT|BETON|GAZ|PÉTROLE|ELECTRICITÉ|PRODUCTION MINIÈRE|EQUIPEMENT PROFESSIONNEL|INTRANTS ET MATÉRIAUX BRUTS|QUINCAILLERIES|AUTOMOBILES/MOTOS|PD AUTO|ELECTROMÉNAGER|MEUBLES ARTISANAT OBJETS DECO|OBJETS MÉNAGERS|JOUETS OU PUERICULTURE|PRODUITS HYGIÈNE BÉBÉ|PRODT ALIMENT NON PÉRISSABLES|BOISSON|PRODT ALIMENTAIRES PÉRISSABLES|PARFUMERIE/COSMÉTIQUE|MÈCHES/PRODUITS CAPILLAIRES|PRODUITS ENTRETIEN|MÉDICAUX|OPTIQUE|EQUIPEMENT LIBRAIRIE|EQUIPEMENT PAPETERIE|TELEPHONE|EQUIPEMENT INFORMATIQUE|VETEMENT NEUF|FRIPE VETEMENT|TISSUS/PAGNES|CHAUSSURES NEUF|FRIPE CHAUSSURE ACCESSOIRES|MAROQUINERIE ACCESSOIRE NEUF|MONTRE/BIJOUX|ARTICLES DE SPORT|VTE ÉQUIPEMENT PROF HORS AGRI|QUINCAILLERIES|VENTE CIMENT|VENTE SABLE/GRAVIERS|VENTE SOLS/CARRELAGE/CÉRAMIQUE|STAFFEUR/ELEMENTS PLAFONDS|VENTE AUTOMOBILES|VENTE CYCLES|PD AUTO|CASSE AUTO|STATION SERVICE|VENTE ÉLECTROMÉNAGER|VENTE ARTISANAT|VENTE OBJETS DÉCORATION|VENTE OBJET PLASTIQU/DROGUERIE|VENTE VAISSELLE/TROUSSEAU|VENTE MEUBLES|VENTE TAPIS|VENTE JOUETS|VENTE ARTICLES DE BEBE|PRODUITS HYGIÈNE BÉBÉ|BOUCHER|POISSONNIER|VENTE FRUITS/LÉGUME|FLEURISTE|BOULANGERIE|PATISSERIE|SUPERMARCHÉ/SUPÉRETTE|MAGASIN ALIMENTATION/KIOSQUE|VENTE BOISSONS|PARFUMERIE/COSMÉTIQUE|MÈCHES/PRODUITS CAPILLAIRES|PRODUITS ENTRETIEN|PRODUITS HYGIÈNE|EQUIPEMENT/CONSOMMABLE MÉDICAU|PHARMACIE|OPTIQUE|LIBRAIRIE|PAPETERIE/JOURNAUX|TELEPHONE|CRÉDIT TELEPHONIQUE|EQUIPEMENT INFORMATIQUE|VETEMENT NEUF|FRIPE VETEMENT|TISSUS/PAGNES|CHAUSSURES NEUF|FRIPE CHAUSSURE ACCESSOIRES|MAROQUINERIE ACCESSOIRE NEUF|MONTRE/BIJOUX|ARTICLES SPORT|MOTO-TAXI/ TRICYCLES|TAXI/ TAXI COMMUNAL/ VTC|MINIBUS URBAIN|CAR INTERURBAIN|CAR INTERNATIONAL|LOCATION DE VOITURE|LOCATION DE MOTO/CYCLES|PRODUITS PÉTROLIERS|PRODUITS ALIMENTAIRES|AUTRES PRODUITS|COURSIERS|ARCHITECTE,|MAITRE OEUVRE,|PROMOTEUR|TOUS CORPS|PEINTRE BÂTIMENT|ELECTRICIEN|PLOMBIER/CHAUFFAGIST/CLIMATIST|MAÇON|LOCATION ENGINS CHANTIER|LOCATION ÉCHAFFAUDAGES|LOCATION MATÉRIEL TRAVAUX BAT|HOTEL|RESTAURANT|MAQUIS / KIOSQUE|FAST-FOOD|SALON THE THÉ|CAFÉ|BAR|BOITE DE NUIT|AGENCES VOYAGE|SALLES DE SPORT, TERRAIN FOOT|EGLISES|ASSOCIATIONS|MÉDECIN|VÉTÉRINAIRE|POMPES FUNEBRES|EVENEMENTIEL|PHOTOGRAPHIE|PUBLICITÉ|TV/RADIO|CONSULTING MANAGEMENT|AVOCATS/HUISSIERS|INTERIM|GARDERIES ENFANT|ECOLES|CENTRES DE FORMATION|GARAGES|LAVAGE VÉHICULE|VULCANISATEUR|RÉPARATION CYCLES|RÉPARATION ELECTROMÉNAGER|SOUDEUR/FORGERON|RÉPARATION MONTRES/BIJOUX|COUTURIER|CORDONNIER|PRESSING…|IMPRIMERIE|PHOTOCOPIE|IMPRESSION PHOTOS|DISTRIBUTION EAU VTE EAU BTLE|GESTION DES DÉCHETS|DUPLICATION MULTIMEDIA|CYBER CAFES|SALLE JEU VIDEO|RÉPARATION INFORMATIQUE|SALON DE COIFFURE|INSTITUT DE BEAUTÉ|LOCATION ROBES|LOCATION MATÉRIEL RÉCEPTION|NOIX DE KARITÉ|NOIX DE COCO|MARCHÉ LOCAL DU BOIS|MILLET|IGNAME|AUTRES|PLANTAIN|BANANE|MANGUE|PASTÈQUE|GOYAVE|COROSSOL|VENTE DE CHARBON DE BOIS|CULTURES VIVRIÈRES|RECYCLAGE DU CAOUTCHOUC|RECYCLAGE DU PLASTIQUE|FRAISEUSE|BROUETTE|VÉHICULE À MOTEUR|CARRIÈRES|ACCESSOIRES DE VÉHICULE|JOURNAUX/MAGAZINES|BIJOUX ET ACCESSOIRES|LES PRODUITS LAITIERS|TROUPE CULTURELLE|PHARMACIEN|TECHNICIENS DE LABORATOIRE|MÉDECIN ASSISTANT|INFIRMIER|SERVICE MÉDIA SOCIAUX/EN LIGNE|MÉCANIQUE|SERVICES DE BLANCHISSERIE|RÉPARATIONS TV/AUDIO|ÉQUIPEMENTS DE BUREAU|AUTRES|STATION GAZ|VENTE CYLINDRES GAZ|BAIN DE MORT|CAFE|COTON|AUTRES|BOISSONS ALCOOLISEES|ALIMENTATION ANIMAUX ET BETAIL|VENTE PRODUITS PHYTOSANITAIRES|HUILES VEGETALES|BOIS|COLA|MAIS|RIZ|MANIOC|IGNAME|MARAICHAGE DIVERSIFIÉ|TOMATE|OIGNON|AUTRES LÉGUMES|BANANE PLANTAIN|AUTRES FRUITS|VEHICULES|TUILE|LITERIE AMEUBLEMENT|POISSONS CONGELES|PRODUITS CONGELES DIVERS|PRODUITS LAITIERS|VENTE PRODUITS VETERINAIRES|VENTE ARTICLES RELIGIEUX|VIDEO ET AUDIO|AGENCE IMMOBILIERE|TRAVAILLEUR METALLURGIQUE|ENTRETIEN ESPACES VERTS|LOCATION PETIT MATERIEL CONSTR|RESIDENCE MEUBLEE|LOCATION ESPACE EVENEMENTIEL|SERVICE BROYAGE PRODUITS ALIME|CLINIQUE|LABORATOIRE ANALYSES MEDICALES|CABINETS MEDECINE SPECIALISTE|AGENCE WEB|COURTIERS/ASSURANCE|TONTINIER|COLLEGES|LYCEES|GRANDES ECOLES|SOUTIEN SCOLAIRE|LATRINES PUBLIQUES|AGENT MOBILE MONEY|VENTE BOIS CHARBON DOMESTIQUE|PETIT POIS|AUTRES LÉGUMES|SEMENCE|PROD LAITIERS Y.C BEURRE/GLACE|BOISSONS NON-ALCOOLISEES|PRODUITS DIVERS|TISSAGES|ARACHIDE|HARICOT ROUGE|VENTE MOTOS/TRICYCLES|TRAVAIL DU CUIR|PLATRE|VENTE MATÉRIAUX CONSTRUCTION|BROCANTE|VOLLAILLER/ŒUFS|POISSON SECHÉ|CÉRÉALE-ÉPICE-CONDIMENT-HUILE|TISSUS/MERCERIE|SALLE DE JEUX|MENUISIER/EBENISTE/TAPISSIER|BAGAGES|AUTO ÉCOLE|TOLERIE|FABRICATION CERCUEILS ET ACCES|VENTE CERCUEILS ET ACCESSOIRES)$")]
    public string Sous_Activite { get; set; }

    //segment

    public const string ENTREPRENEUR_MICRO = "ENTREPRENEUR MICRO";
    public const string ENTREPRENEUR_TPE = "ENTREPRENEUR TPE";
    public const string ENTREPRENEUR_PME = "ENTREPRENEUR PME";
    public const string GROUPEMENT_VILLAGEOIS = "GROUPEMENT VILLAGEOIS";
    public const string SALARIE_FORMEL = "SALARIÉ FORMEL";
    public const string SALARIE_CADRE = "SALARIÉ CADRE";
    public const string ETUDIANT = "ETUDIANT";
    public const string DEPENDANT = "DÉPENDANT";
    public const string SALARIE_INFORMEL = "SALARIÉ INFORMEL";
    public const string ORGANISATION_PUBLIQUE = "ORGANISATION PUBLIQUE";
    public const string ASSOCIATION_2 = "ASSOCIATION";
    public const string ORGANISATION_RELIGIEUSE = "ORGANISATION RELIGIEUSE";
    public const string ASSOCIATION_SEMI_FORMELLE = "ASSOCIATION SEMI FORMELLE";
    public const string AGRICULTEUR_MICRO = "AGRICULTEUR MICRO";
    public const string AGRICULTEUR_TPE = "AGRICULTEUR TPE";
    public const string AGRICUTLEUR_PME = "AGRICUTLEUR PME";
    public const string PERSONNALITE_A_HAUT_REVENU = "PERSONNALITÉ À HAUT REVENU";
    public const string COOPERATIVE = "COOPÉRATIVE";
    public const string GRANDE_ENTREPRISE = "GRANDE ENTREPRISE";
    public const string STAFF_ADVANS = "STAFF ADVANS";
    public const string ENFANT_STAFF_ADVANS = "ENFANT STAFF ADVANS";
    public const string ANCIEN_STAFF_ADVANS = "ANCIEN STAFF ADVANS";
    public const string MINEUR = "MINEUR";
    public const string GROUPEMENT_VILLAGEOIS_AGRICOLE = "GROUPEMENT VILLAGEOIS AGRICOLE";
    public const string NON_DEFINI = "NON DÉFINI";

    [RegularExpression("^(ENTREPRENEUR MICRO|ENTREPRENEUR TPE|ENTREPRENEUR PME|GROUPEMENT VILLAGEOIS|SALARIE FORMEL|SALARIE CADRE|ETUDIANT|DEPENDANT|SALARIE INFORMEL|ORGANISATION PUBLIQUE|ASSOCIATION|ORGANISATION RELIGIEUSE|ASSOCIATION SEMI FORMELLE|AGRICULTEUR MICRO|AGRICULTEUR TPE|AGRICUTLEUR PME|PERSONNALITÉ À HAUT REVENU|COOPÉRATIVE|GRANDE ENTREPRISE|STAFF ADVANS|ENFANT STAFF ADVANS|ANCIEN STAFF ADVANS|MINEUR|GROUPEMENT VILLAGEOIS AGRICOLE|NON DÉFINI)$")]
    public string Segment { get; set; }

}

