using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace advans_backend.Migrations
{
    /// <inheritdoc />
    public partial class Agence : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            //migrationBuilder.CreateTable(
            //    name: "RefActiviteEntreprise",
            //    columns: table => new
            //    {
            //        IdActivite = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        NomActivite = table.Column<string>(type: "nvarchar(max)", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_RefActiviteEntreprise", x => x.IdActivite);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "RefActiviteParticulier",
            //    columns: table => new
            //    {
            //        IdActivite = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        NomActivite = table.Column<string>(type: "nvarchar(max)", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_RefActiviteParticulier", x => x.IdActivite);
            //    });

            migrationBuilder.CreateTable(
                name: "RefAgences",
                columns: table => new
                {
                    IdAgence = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NomAgence = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Region = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Telephone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Adresse = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RefAgences", x => x.IdAgence);
                });

            //migrationBuilder.CreateTable(
            //    name: "RefProduit",
            //    columns: table => new
            //    {
            //        IdProduit = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        NomProduit = table.Column<string>(type: "nvarchar(max)", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_RefProduit", x => x.IdProduit);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "RefRelationClientGarant",
            //    columns: table => new
            //    {
            //        IdRelationClientGarant = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        Relation = table.Column<string>(type: "nvarchar(max)", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_RefRelationClientGarant", x => x.IdRelationClientGarant);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "RefSecteurActiviteEntreprise",
            //    columns: table => new
            //    {
            //        IdSecteurActivite = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        NomSecteur = table.Column<string>(type: "nvarchar(max)", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_RefSecteurActiviteEntreprise", x => x.IdSecteurActivite);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "RefSecteurActiviteParticulier",
            //    columns: table => new
            //    {
            //        IdSecteurActivite = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        NomSecteur = table.Column<string>(type: "nvarchar(max)", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_RefSecteurActiviteParticulier", x => x.IdSecteurActivite);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "RefSituationFamilialeParticulier",
            //    columns: table => new
            //    {
            //        IdSituationFamilialeParticulier = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        Situation = table.Column<string>(type: "nvarchar(max)", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_RefSituationFamilialeParticulier", x => x.IdSituationFamilialeParticulier);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "RefSituationImmobilierEntreprise",
            //    columns: table => new
            //    {
            //        IdSituationImmobilierEntreprise = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        Situation = table.Column<string>(type: "nvarchar(max)", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_RefSituationImmobilierEntreprise", x => x.IdSituationImmobilierEntreprise);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "RefSituationImmobilierParticulier",
            //    columns: table => new
            //    {
            //        IdSituationImmobilierParticulier = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        Situation = table.Column<string>(type: "nvarchar(max)", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_RefSituationImmobilierParticulier", x => x.IdSituationImmobilierParticulier);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "RefSousActiviteEntreprise",
            //    columns: table => new
            //    {
            //        IdSousActivite = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        NomSousActivite = table.Column<string>(type: "nvarchar(max)", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_RefSousActiviteEntreprise", x => x.IdSousActivite);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "RefSousActiviteParticulier",
            //    columns: table => new
            //    {
            //        IdSousActivite = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        NomSousActivite = table.Column<string>(type: "nvarchar(max)", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_RefSousActiviteParticulier", x => x.IdSousActivite);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "RefTypeGarantieGarant",
            //    columns: table => new
            //    {
            //        IdTypeGarantie = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        Type = table.Column<string>(type: "nvarchar(max)", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_RefTypeGarantieGarant", x => x.IdTypeGarantie);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "RefTypePointVente",
            //    columns: table => new
            //    {
            //        IdTypePointVente = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        Type = table.Column<string>(type: "nvarchar(max)", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_RefTypePointVente", x => x.IdTypePointVente);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Users",
            //    columns: table => new
            //    {
            //        UserId = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        UserName = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        Password = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        RefreshToken = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        RefreshTokenExpiryTime = table.Column<DateTime>(type: "datetime2", nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Users", x => x.UserId);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "ClientsEntreprise",
            //    columns: table => new
            //    {
            //        IdClientEntreprise = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        NomAgence = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        Segment = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        Gestionnaire = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        Telephone = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        IdSecteurActivite = table.Column<int>(type: "int", nullable: true),
            //        IdActivite = table.Column<int>(type: "int", nullable: true),
            //        IdSousActivite = table.Column<int>(type: "int", nullable: true),
            //        IdSituationImmobilierEntreprise = table.Column<int>(type: "int", nullable: true),
            //        RaisonSociale = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        NombreEmployes = table.Column<int>(type: "int", nullable: true),
            //        ChiffreAffaireMensuel = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        Cycle = table.Column<int>(type: "int", nullable: true),
            //        DateDerniereVisite = table.Column<DateTime>(type: "datetime2", nullable: false),
            //        DateCreationEntreprise = table.Column<DateTime>(type: "datetime2", nullable: false),
            //        DateCreation = table.Column<DateTime>(type: "datetime2", nullable: false),
            //        InterlocuteurPrincipal = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        Sigle = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        Ville = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        NbrCreditBeneficies = table.Column<int>(type: "int", nullable: true),
            //        NbrPointsVente = table.Column<int>(type: "int", nullable: true),
            //        SousActiviteEntrepriseIdSousActivite = table.Column<int>(type: "int", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_ClientsEntreprise", x => x.IdClientEntreprise);
            //        table.ForeignKey(
            //            name: "FK_ClientsEntreprise_RefActiviteEntreprise_IdActivite",
            //            column: x => x.IdActivite,
            //            principalTable: "RefActiviteEntreprise",
            //            principalColumn: "IdActivite");
            //        table.ForeignKey(
            //            name: "FK_ClientsEntreprise_RefSecteurActiviteEntreprise_IdSecteurActivite",
            //            column: x => x.IdSecteurActivite,
            //            principalTable: "RefSecteurActiviteEntreprise",
            //            principalColumn: "IdSecteurActivite");
            //        table.ForeignKey(
            //            name: "FK_ClientsEntreprise_RefSituationImmobilierEntreprise_IdSituationImmobilierEntreprise",
            //            column: x => x.IdSituationImmobilierEntreprise,
            //            principalTable: "RefSituationImmobilierEntreprise",
            //            principalColumn: "IdSituationImmobilierEntreprise");
            //        table.ForeignKey(
            //            name: "FK_ClientsEntreprise_RefSousActiviteEntreprise_SousActiviteEntrepriseIdSousActivite",
            //            column: x => x.SousActiviteEntrepriseIdSousActivite,
            //            principalTable: "RefSousActiviteEntreprise",
            //            principalColumn: "IdSousActivite");
            //    });

            //migrationBuilder.CreateTable(
            //    name: "ClientsParticulier",
            //    columns: table => new
            //    {
            //        IdClientParticulier = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        NomAgence = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        Segment = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        Gestionnaire = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        Nom = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        Prenom = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        Telephone = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        Age = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        IdSecteurActivite = table.Column<int>(type: "int", nullable: true),
            //        IdActivite = table.Column<int>(type: "int", nullable: true),
            //        IdSousActivite = table.Column<int>(type: "int", nullable: true),
            //        IdSituationImmobilierParticulier = table.Column<int>(type: "int", nullable: true),
            //        IdSituationFamilialeParticulier = table.Column<int>(type: "int", nullable: true),
            //        Sex = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        FonctionProfessionnelle = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        SalaireNetMensuel = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        AutresRevenusMensuel = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        Cycle = table.Column<int>(type: "int", nullable: true),
            //        DateDerniereVisite = table.Column<DateTime>(type: "datetime2", nullable: false),
            //        DateCreation = table.Column<DateTime>(type: "datetime2", nullable: false),
            //        Ville = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        NbrCreditBeneficies = table.Column<int>(type: "int", nullable: true),
            //        IdentiteClient = table.Column<string>(type: "nvarchar(max)", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_ClientsParticulier", x => x.IdClientParticulier);
            //        table.ForeignKey(
            //            name: "FK_ClientsParticulier_RefActiviteParticulier_IdActivite",
            //            column: x => x.IdActivite,
            //            principalTable: "RefActiviteParticulier",
            //            principalColumn: "IdActivite");
            //        table.ForeignKey(
            //            name: "FK_ClientsParticulier_RefSecteurActiviteParticulier_IdSecteurActivite",
            //            column: x => x.IdSecteurActivite,
            //            principalTable: "RefSecteurActiviteParticulier",
            //            principalColumn: "IdSecteurActivite");
            //        table.ForeignKey(
            //            name: "FK_ClientsParticulier_RefSituationFamilialeParticulier_IdSituationFamilialeParticulier",
            //            column: x => x.IdSituationFamilialeParticulier,
            //            principalTable: "RefSituationFamilialeParticulier",
            //            principalColumn: "IdSituationFamilialeParticulier");
            //        table.ForeignKey(
            //            name: "FK_ClientsParticulier_RefSituationImmobilierParticulier_IdSituationImmobilierParticulier",
            //            column: x => x.IdSituationImmobilierParticulier,
            //            principalTable: "RefSituationImmobilierParticulier",
            //            principalColumn: "IdSituationImmobilierParticulier");
            //        table.ForeignKey(
            //            name: "FK_ClientsParticulier_RefSousActiviteParticulier_IdSousActivite",
            //            column: x => x.IdSousActivite,
            //            principalTable: "RefSousActiviteParticulier",
            //            principalColumn: "IdSousActivite");
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Approvisionnements",
            //    columns: table => new
            //    {
            //        IdAppro = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        IdClientEntreprise = table.Column<int>(type: "int", nullable: true),
            //        Frequence = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        MontantMoyen = table.Column<long>(type: "bigint", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Approvisionnements", x => x.IdAppro);
            //        table.ForeignKey(
            //            name: "FK_Approvisionnements_ClientsEntreprise_IdClientEntreprise",
            //            column: x => x.IdClientEntreprise,
            //            principalTable: "ClientsEntreprise",
            //            principalColumn: "IdClientEntreprise");
            //    });

            //migrationBuilder.CreateTable(
            //    name: "CompteEntre",
            //    columns: table => new
            //    {
            //        IdCompteEntreprise = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        DateOuvertureCompte = table.Column<DateTime>(type: "datetime2", nullable: true),
            //        DeviseCompte = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        IdClientEntreprise = table.Column<int>(type: "int", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_CompteEntre", x => x.IdCompteEntreprise);
            //        table.ForeignKey(
            //            name: "FK_CompteEntre_ClientsEntreprise_IdClientEntreprise",
            //            column: x => x.IdClientEntreprise,
            //            principalTable: "ClientsEntreprise",
            //            principalColumn: "IdClientEntreprise");
            //    });

            //migrationBuilder.CreateTable(
            //    name: "ComptesBancaireEntreprise",
            //    columns: table => new
            //    {
            //        idCompteBanq = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        IdClientEntreprise = table.Column<int>(type: "int", nullable: true),
            //        Banque = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        TypeCompte = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        Solde = table.Column<string>(type: "nvarchar(max)", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_ComptesBancaireEntreprise", x => x.idCompteBanq);
            //        table.ForeignKey(
            //            name: "FK_ComptesBancaireEntreprise_ClientsEntreprise_IdClientEntreprise",
            //            column: x => x.IdClientEntreprise,
            //            principalTable: "ClientsEntreprise",
            //            principalColumn: "IdClientEntreprise");
            //    });

            //migrationBuilder.CreateTable(
            //    name: "CreditRecentsEntreprise",
            //    columns: table => new
            //    {
            //        idCRecent = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        IdClientEntreprise = table.Column<int>(type: "int", nullable: true),
            //        Objet = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        Duree = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        MontantInitial = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        EnCoursRestant = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        MontantEchMens = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        NbrEchRestant = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        NbrEchEnRetard = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        NbrMaxJoursEnRetard = table.Column<string>(type: "nvarchar(max)", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_CreditRecentsEntreprise", x => x.idCRecent);
            //        table.ForeignKey(
            //            name: "FK_CreditRecentsEntreprise_ClientsEntreprise_IdClientEntreprise",
            //            column: x => x.IdClientEntreprise,
            //            principalTable: "ClientsEntreprise",
            //            principalColumn: "IdClientEntreprise");
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Depenses",
            //    columns: table => new
            //    {
            //        idDepense = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        IdClientEntreprise = table.Column<int>(type: "int", nullable: true),
            //        Depenses = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        CoutTotal = table.Column<string>(type: "nvarchar(max)", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Depenses", x => x.idDepense);
            //        table.ForeignKey(
            //            name: "FK_Depenses_ClientsEntreprise_IdClientEntreprise",
            //            column: x => x.IdClientEntreprise,
            //            principalTable: "ClientsEntreprise",
            //            principalColumn: "IdClientEntreprise");
            //    });

            //migrationBuilder.CreateTable(
            //    name: "PointsVente",
            //    columns: table => new
            //    {
            //        idPV = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        IdClientEntreprise = table.Column<int>(type: "int", nullable: true),
            //        IdTypePointVente = table.Column<int>(type: "int", nullable: true),
            //        Propriete = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        NbrJoursOuverture = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        Surface = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        Emplacement = table.Column<string>(type: "nvarchar(max)", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_PointsVente", x => x.idPV);
            //        table.ForeignKey(
            //            name: "FK_PointsVente_ClientsEntreprise_IdClientEntreprise",
            //            column: x => x.IdClientEntreprise,
            //            principalTable: "ClientsEntreprise",
            //            principalColumn: "IdClientEntreprise");
            //        table.ForeignKey(
            //            name: "FK_PointsVente_RefTypePointVente_IdTypePointVente",
            //            column: x => x.IdTypePointVente,
            //            principalTable: "RefTypePointVente",
            //            principalColumn: "IdTypePointVente");
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Ventes",
            //    columns: table => new
            //    {
            //        idvente = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        IdClientEntreprise = table.Column<int>(type: "int", nullable: true),
            //        Frequence = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        ValeurHaute = table.Column<long>(type: "bigint", nullable: true),
            //        ValeurMoyenne = table.Column<long>(type: "bigint", nullable: true),
            //        ValeurBasse = table.Column<long>(type: "bigint", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Ventes", x => x.idvente);
            //        table.ForeignKey(
            //            name: "FK_Ventes_ClientsEntreprise_IdClientEntreprise",
            //            column: x => x.IdClientEntreprise,
            //            principalTable: "ClientsEntreprise",
            //            principalColumn: "IdClientEntreprise");
            //    });

            //migrationBuilder.CreateTable(
            //    name: "ComptePar",
            //    columns: table => new
            //    {
            //        IdCompteParticulier = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        DateOuvertureCompte = table.Column<DateTime>(type: "datetime2", nullable: true),
            //        DeviseCompte = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        IdClientParticulier = table.Column<int>(type: "int", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_ComptePar", x => x.IdCompteParticulier);
            //        table.ForeignKey(
            //            name: "FK_ComptePar_ClientsParticulier_IdClientParticulier",
            //            column: x => x.IdClientParticulier,
            //            principalTable: "ClientsParticulier",
            //            principalColumn: "IdClientParticulier");
            //    });

            //migrationBuilder.CreateTable(
            //    name: "ComptesBancaireParticulier",
            //    columns: table => new
            //    {
            //        idCompte = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        IdClientParticulier = table.Column<int>(type: "int", nullable: true),
            //        Banque = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        TypeCompte = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        Solde = table.Column<string>(type: "nvarchar(max)", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_ComptesBancaireParticulier", x => x.idCompte);
            //        table.ForeignKey(
            //            name: "FK_ComptesBancaireParticulier_ClientsParticulier_IdClientParticulier",
            //            column: x => x.IdClientParticulier,
            //            principalTable: "ClientsParticulier",
            //            principalColumn: "IdClientParticulier");
            //    });

            //migrationBuilder.CreateTable(
            //    name: "CreditRecentsParticulier",
            //    columns: table => new
            //    {
            //        idCRecent = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        IdClientParticulier = table.Column<int>(type: "int", nullable: true),
            //        Objet = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        Duree = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        MontantInitial = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        EnCoursRestant = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        MontantEchMens = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        NbrEchRestant = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        NbrEchEnRetard = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        NbrMaxJoursEnRetard = table.Column<string>(type: "nvarchar(max)", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_CreditRecentsParticulier", x => x.idCRecent);
            //        table.ForeignKey(
            //            name: "FK_CreditRecentsParticulier_ClientsParticulier_IdClientParticulier",
            //            column: x => x.IdClientParticulier,
            //            principalTable: "ClientsParticulier",
            //            principalColumn: "IdClientParticulier");
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Demande_credit",
            //    columns: table => new
            //    {
            //        IdDemande = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        TypeClient = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        Montant = table.Column<int>(type: "int", nullable: true),
            //        DureeDemandee = table.Column<int>(type: "int", nullable: true),
            //        Commentaires = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        Disponibilite = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        DateDemande = table.Column<DateTime>(type: "datetime2", nullable: true),
            //        DateFinalisation = table.Column<DateTime>(type: "datetime2", nullable: true),
            //        IdClientEntreprise = table.Column<int>(type: "int", nullable: true),
            //        IdClientParticulier = table.Column<int>(type: "int", nullable: true),
            //        IdProduit = table.Column<int>(type: "int", nullable: true),
            //        Statut = table.Column<string>(type: "nvarchar(max)", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Demande_credit", x => x.IdDemande);
            //        table.ForeignKey(
            //            name: "FK_Demande_credit_ClientsEntreprise_IdClientEntreprise",
            //            column: x => x.IdClientEntreprise,
            //            principalTable: "ClientsEntreprise",
            //            principalColumn: "IdClientEntreprise");
            //        table.ForeignKey(
            //            name: "FK_Demande_credit_ClientsParticulier_IdClientParticulier",
            //            column: x => x.IdClientParticulier,
            //            principalTable: "ClientsParticulier",
            //            principalColumn: "IdClientParticulier");
            //        table.ForeignKey(
            //            name: "FK_Demande_credit_RefProduit_IdProduit",
            //            column: x => x.IdProduit,
            //            principalTable: "RefProduit",
            //            principalColumn: "IdProduit");
            //    });

            //migrationBuilder.CreateTable(
            //    name: "ReferentsFamiliaux",
            //    columns: table => new
            //    {
            //        idRefFam = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        IdClientParticulier = table.Column<int>(type: "int", nullable: true),
            //        Nom = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        Prenom = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        Telephone = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        Relation = table.Column<string>(type: "nvarchar(max)", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_ReferentsFamiliaux", x => x.idRefFam);
            //        table.ForeignKey(
            //            name: "FK_ReferentsFamiliaux_ClientsParticulier_IdClientParticulier",
            //            column: x => x.IdClientParticulier,
            //            principalTable: "ClientsParticulier",
            //            principalColumn: "IdClientParticulier");
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Analyses",
            //    columns: table => new
            //    {
            //        IdAnalyse = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        NumVersion = table.Column<int>(type: "int", nullable: true),
            //        PertinenceProjet = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        HistoriqueCreditClient = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        UtilisationComptes = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        AnalyseRisqueCommercial = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        MontantProposé = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        TautInteret = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        Hypothese = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        ExplicationChoix = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        AvisStabiliteClient = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        DateDebutAnalyse = table.Column<DateTime>(type: "datetime2", nullable: false),
            //        DureeAnalyse = table.Column<int>(type: "int", nullable: true),
            //        IdDemande = table.Column<int>(type: "int", nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Analyses", x => x.IdAnalyse);
            //        table.ForeignKey(
            //            name: "FK_Analyses_Demande_credit_IdDemande",
            //            column: x => x.IdDemande,
            //            principalTable: "Demande_credit",
            //            principalColumn: "IdDemande",
            //            onDelete: ReferentialAction.Cascade);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "CheckLists",
            //    columns: table => new
            //    {
            //        IdCheckList = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        VerifPhotoClient = table.Column<string>(type: "nvarchar(max)", nullable: false),
            //        VerifIDClient = table.Column<string>(type: "nvarchar(max)", nullable: false),
            //        VerifLocalClient = table.Column<string>(type: "nvarchar(max)", nullable: false),
            //        VerifClientPolitique = table.Column<string>(type: "nvarchar(max)", nullable: false),
            //        VerifAutorisationActivite = table.Column<string>(type: "nvarchar(max)", nullable: false),
            //        VerifPhotoGarant = table.Column<string>(type: "nvarchar(max)", nullable: false),
            //        VerifIDGarant = table.Column<string>(type: "nvarchar(max)", nullable: false),
            //        VerifFormDemandeSigne = table.Column<string>(type: "nvarchar(max)", nullable: false),
            //        VerifContratCreditSigne = table.Column<string>(type: "nvarchar(max)", nullable: false),
            //        VerifContratGarantieSigne = table.Column<string>(type: "nvarchar(max)", nullable: false),
            //        VerifFicheGarantSigne = table.Column<string>(type: "nvarchar(max)", nullable: false),
            //        VerifFicheClientSigne = table.Column<string>(type: "nvarchar(max)", nullable: false),
            //        VerifConditionsGenSigne = table.Column<string>(type: "nvarchar(max)", nullable: false),
            //        DateDebutCheckList = table.Column<DateTime>(type: "datetime2", nullable: false),
            //        DureeCheckList = table.Column<int>(type: "int", nullable: true),
            //        IdDemande = table.Column<int>(type: "int", nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_CheckLists", x => x.IdCheckList);
            //        table.ForeignKey(
            //            name: "FK_CheckLists_Demande_credit_IdDemande",
            //            column: x => x.IdDemande,
            //            principalTable: "Demande_credit",
            //            principalColumn: "IdDemande",
            //            onDelete: ReferentialAction.Cascade);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Comites",
            //    columns: table => new
            //    {
            //        IdComite = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        Raison = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        Montant = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        Commentaires = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        DateDebutComite = table.Column<DateTime>(type: "datetime2", nullable: false),
            //        DureeComite = table.Column<int>(type: "int", nullable: true),
            //        Decision = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        IdDemande = table.Column<int>(type: "int", nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Comites", x => x.IdComite);
            //        table.ForeignKey(
            //            name: "FK_Comites_Demande_credit_IdDemande",
            //            column: x => x.IdDemande,
            //            principalTable: "Demande_credit",
            //            principalColumn: "IdDemande",
            //            onDelete: ReferentialAction.Cascade);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Garanties",
            //    columns: table => new
            //    {
            //        idGarantie = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        IdDemande = table.Column<int>(type: "int", nullable: true),
            //        Proprietaire = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        IdTypeGarantie = table.Column<int>(type: "int", nullable: true),
            //        Valeur_estime = table.Column<long>(type: "bigint", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Garanties", x => x.idGarantie);
            //        table.ForeignKey(
            //            name: "FK_Garanties_Demande_credit_IdDemande",
            //            column: x => x.IdDemande,
            //            principalTable: "Demande_credit",
            //            principalColumn: "IdDemande");
            //        table.ForeignKey(
            //            name: "FK_Garanties_RefTypeGarantieGarant_IdTypeGarantie",
            //            column: x => x.IdTypeGarantie,
            //            principalTable: "RefTypeGarantieGarant",
            //            principalColumn: "IdTypeGarantie");
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Garants",
            //    columns: table => new
            //    {
            //        idGarant = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        IdDemande = table.Column<int>(type: "int", nullable: true),
            //        NomGarant = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        IdentiteGarant = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        IdRelationClientGarant = table.Column<int>(type: "int", nullable: true),
            //        ValeurMoyenne = table.Column<long>(type: "bigint", nullable: true),
            //        ValeurBasse = table.Column<long>(type: "bigint", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Garants", x => x.idGarant);
            //        table.ForeignKey(
            //            name: "FK_Garants_Demande_credit_IdDemande",
            //            column: x => x.IdDemande,
            //            principalTable: "Demande_credit",
            //            principalColumn: "IdDemande");
            //        table.ForeignKey(
            //            name: "FK_Garants_RefRelationClientGarant_IdRelationClientGarant",
            //            column: x => x.IdRelationClientGarant,
            //            principalTable: "RefRelationClientGarant",
            //            principalColumn: "IdRelationClientGarant");
            //    });

            //migrationBuilder.CreateTable(
            //    name: "RisqueAnalyses",
            //    columns: table => new
            //    {
            //        IdRA = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        EvalProjet = table.Column<string>(type: "nvarchar(max)", nullable: false),
            //        EvalRisqueClient = table.Column<string>(type: "nvarchar(max)", nullable: false),
            //        EvalRisqueCommercial = table.Column<string>(type: "nvarchar(max)", nullable: false),
            //        EvalGaranties = table.Column<string>(type: "nvarchar(max)", nullable: false),
            //        RecommandationAnalyste = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        Commentaires = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        DateDebutRA = table.Column<DateTime>(type: "datetime2", nullable: false),
            //        DureeRA = table.Column<int>(type: "int", nullable: true),
            //        IdDemande = table.Column<int>(type: "int", nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_RisqueAnalyses", x => x.IdRA);
            //        table.ForeignKey(
            //            name: "FK_RisqueAnalyses_Demande_credit_IdDemande",
            //            column: x => x.IdDemande,
            //            principalTable: "Demande_credit",
            //            principalColumn: "IdDemande",
            //            onDelete: ReferentialAction.Cascade);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "VisiteManagements",
            //    columns: table => new
            //    {
            //        IdVM = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        ElementAverifier = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        ElementRecueillis = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        AvisDecideur = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        DateDebutVM = table.Column<DateTime>(type: "datetime2", nullable: false),
            //        DureeVM = table.Column<int>(type: "int", nullable: true),
            //        IdDemande = table.Column<int>(type: "int", nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_VisiteManagements", x => x.IdVM);
            //        table.ForeignKey(
            //            name: "FK_VisiteManagements_Demande_credit_IdDemande",
            //            column: x => x.IdDemande,
            //            principalTable: "Demande_credit",
            //            principalColumn: "IdDemande",
            //            onDelete: ReferentialAction.Cascade);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "InteractiviteDecideur",
            //    columns: table => new
            //    {
            //        IdInterDecideur = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        Decideur = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        Remarque = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        Reponse = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        ComiteIdComite = table.Column<int>(type: "int", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_InteractiviteDecideur", x => x.IdInterDecideur);
            //        table.ForeignKey(
            //            name: "FK_InteractiviteDecideur_Comites_ComiteIdComite",
            //            column: x => x.ComiteIdComite,
            //            principalTable: "Comites",
            //            principalColumn: "IdComite");
            //    });

        //    migrationBuilder.CreateIndex(
        //        name: "IX_Analyses_IdDemande",
        //        table: "Analyses",
        //        column: "IdDemande",
        //        unique: true);

        //    migrationBuilder.CreateIndex(
        //        name: "IX_Approvisionnements_IdClientEntreprise",
        //        table: "Approvisionnements",
        //        column: "IdClientEntreprise");

        //    migrationBuilder.CreateIndex(
        //        name: "IX_CheckLists_IdDemande",
        //        table: "CheckLists",
        //        column: "IdDemande",
        //        unique: true);

        //    migrationBuilder.CreateIndex(
        //        name: "IX_ClientsEntreprise_IdActivite",
        //        table: "ClientsEntreprise",
        //        column: "IdActivite");

        //    migrationBuilder.CreateIndex(
        //        name: "IX_ClientsEntreprise_IdSecteurActivite",
        //        table: "ClientsEntreprise",
        //        column: "IdSecteurActivite");

        //    migrationBuilder.CreateIndex(
        //        name: "IX_ClientsEntreprise_IdSituationImmobilierEntreprise",
        //        table: "ClientsEntreprise",
        //        column: "IdSituationImmobilierEntreprise");

        //    migrationBuilder.CreateIndex(
        //        name: "IX_ClientsEntreprise_SousActiviteEntrepriseIdSousActivite",
        //        table: "ClientsEntreprise",
        //        column: "SousActiviteEntrepriseIdSousActivite");

        //    migrationBuilder.CreateIndex(
        //        name: "IX_ClientsParticulier_IdActivite",
        //        table: "ClientsParticulier",
        //        column: "IdActivite");

        //    migrationBuilder.CreateIndex(
        //        name: "IX_ClientsParticulier_IdSecteurActivite",
        //        table: "ClientsParticulier",
        //        column: "IdSecteurActivite");

        //    migrationBuilder.CreateIndex(
        //        name: "IX_ClientsParticulier_IdSituationFamilialeParticulier",
        //        table: "ClientsParticulier",
        //        column: "IdSituationFamilialeParticulier");

        //    migrationBuilder.CreateIndex(
        //        name: "IX_ClientsParticulier_IdSituationImmobilierParticulier",
        //        table: "ClientsParticulier",
        //        column: "IdSituationImmobilierParticulier");

        //    migrationBuilder.CreateIndex(
        //        name: "IX_ClientsParticulier_IdSousActivite",
        //        table: "ClientsParticulier",
        //        column: "IdSousActivite");

        //    migrationBuilder.CreateIndex(
        //        name: "IX_Comites_IdDemande",
        //        table: "Comites",
        //        column: "IdDemande",
        //        unique: true);

        //    migrationBuilder.CreateIndex(
        //        name: "IX_CompteEntre_IdClientEntreprise",
        //        table: "CompteEntre",
        //        column: "IdClientEntreprise",
        //        unique: true,
        //        filter: "[IdClientEntreprise] IS NOT NULL");

        //    migrationBuilder.CreateIndex(
        //        name: "IX_ComptePar_IdClientParticulier",
        //        table: "ComptePar",
        //        column: "IdClientParticulier",
        //        unique: true,
        //        filter: "[IdClientParticulier] IS NOT NULL");

        //    migrationBuilder.CreateIndex(
        //        name: "IX_ComptesBancaireEntreprise_IdClientEntreprise",
        //        table: "ComptesBancaireEntreprise",
        //        column: "IdClientEntreprise");

        //    migrationBuilder.CreateIndex(
        //        name: "IX_ComptesBancaireParticulier_IdClientParticulier",
        //        table: "ComptesBancaireParticulier",
        //        column: "IdClientParticulier");

        //    migrationBuilder.CreateIndex(
        //        name: "IX_CreditRecentsEntreprise_IdClientEntreprise",
        //        table: "CreditRecentsEntreprise",
        //        column: "IdClientEntreprise");

        //    migrationBuilder.CreateIndex(
        //        name: "IX_CreditRecentsParticulier_IdClientParticulier",
        //        table: "CreditRecentsParticulier",
        //        column: "IdClientParticulier");

        //    migrationBuilder.CreateIndex(
        //        name: "IX_Demande_credit_IdClientEntreprise",
        //        table: "Demande_credit",
        //        column: "IdClientEntreprise");

        //    migrationBuilder.CreateIndex(
        //        name: "IX_Demande_credit_IdClientParticulier",
        //        table: "Demande_credit",
        //        column: "IdClientParticulier");

        //    migrationBuilder.CreateIndex(
        //        name: "IX_Demande_credit_IdProduit",
        //        table: "Demande_credit",
        //        column: "IdProduit");

        //    migrationBuilder.CreateIndex(
        //        name: "IX_Depenses_IdClientEntreprise",
        //        table: "Depenses",
        //        column: "IdClientEntreprise");

        //    migrationBuilder.CreateIndex(
        //        name: "IX_Garanties_IdDemande",
        //        table: "Garanties",
        //        column: "IdDemande");

        //    migrationBuilder.CreateIndex(
        //        name: "IX_Garanties_IdTypeGarantie",
        //        table: "Garanties",
        //        column: "IdTypeGarantie");

        //    migrationBuilder.CreateIndex(
        //        name: "IX_Garants_IdDemande",
        //        table: "Garants",
        //        column: "IdDemande");

        //    migrationBuilder.CreateIndex(
        //        name: "IX_Garants_IdRelationClientGarant",
        //        table: "Garants",
        //        column: "IdRelationClientGarant");

        //    migrationBuilder.CreateIndex(
        //        name: "IX_InteractiviteDecideur_ComiteIdComite",
        //        table: "InteractiviteDecideur",
        //        column: "ComiteIdComite");

        //    migrationBuilder.CreateIndex(
        //        name: "IX_PointsVente_IdClientEntreprise",
        //        table: "PointsVente",
        //        column: "IdClientEntreprise");

        //    migrationBuilder.CreateIndex(
        //        name: "IX_PointsVente_IdTypePointVente",
        //        table: "PointsVente",
        //        column: "IdTypePointVente");

        //    migrationBuilder.CreateIndex(
        //        name: "IX_ReferentsFamiliaux_IdClientParticulier",
        //        table: "ReferentsFamiliaux",
        //        column: "IdClientParticulier");

        //    migrationBuilder.CreateIndex(
        //        name: "IX_RisqueAnalyses_IdDemande",
        //        table: "RisqueAnalyses",
        //        column: "IdDemande",
        //        unique: true);

        //    migrationBuilder.CreateIndex(
        //        name: "IX_Ventes_IdClientEntreprise",
        //        table: "Ventes",
        //        column: "IdClientEntreprise");

        //    migrationBuilder.CreateIndex(
        //        name: "IX_VisiteManagements_IdDemande",
        //        table: "VisiteManagements",
        //        column: "IdDemande",
        //        unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            //migrationBuilder.DropTable(
            //    name: "Analyses");

            //migrationBuilder.DropTable(
            //    name: "Approvisionnements");

            //migrationBuilder.DropTable(
            //    name: "CheckLists");

            //migrationBuilder.DropTable(
            //    name: "CompteEntre");

            //migrationBuilder.DropTable(
            //    name: "ComptePar");

            //migrationBuilder.DropTable(
            //    name: "ComptesBancaireEntreprise");

            //migrationBuilder.DropTable(
            //    name: "ComptesBancaireParticulier");

            //migrationBuilder.DropTable(
            //    name: "CreditRecentsEntreprise");

            //migrationBuilder.DropTable(
            //    name: "CreditRecentsParticulier");

            //migrationBuilder.DropTable(
            //    name: "Depenses");

            //migrationBuilder.DropTable(
            //    name: "Garanties");

            //migrationBuilder.DropTable(
            //    name: "Garants");

            //migrationBuilder.DropTable(
            //    name: "InteractiviteDecideur");

            //migrationBuilder.DropTable(
            //    name: "PointsVente");

            migrationBuilder.DropTable(
                name: "RefAgences");

            //migrationBuilder.DropTable(
            //    name: "ReferentsFamiliaux");

            //migrationBuilder.DropTable(
            //    name: "RisqueAnalyses");

            //migrationBuilder.DropTable(
            //    name: "Users");

            //migrationBuilder.DropTable(
            //    name: "Ventes");

            //migrationBuilder.DropTable(
            //    name: "VisiteManagements");

            //migrationBuilder.DropTable(
            //    name: "RefTypeGarantieGarant");

            //migrationBuilder.DropTable(
            //    name: "RefRelationClientGarant");

            //migrationBuilder.DropTable(
            //    name: "Comites");

            //migrationBuilder.DropTable(
            //    name: "RefTypePointVente");

            //migrationBuilder.DropTable(
            //    name: "Demande_credit");

            //migrationBuilder.DropTable(
            //    name: "ClientsEntreprise");

            //migrationBuilder.DropTable(
            //    name: "ClientsParticulier");

            //migrationBuilder.DropTable(
            //    name: "RefProduit");

            //migrationBuilder.DropTable(
            //    name: "RefActiviteEntreprise");

            //migrationBuilder.DropTable(
            //    name: "RefSecteurActiviteEntreprise");

            //migrationBuilder.DropTable(
            //    name: "RefSituationImmobilierEntreprise");

            //migrationBuilder.DropTable(
            //    name: "RefSousActiviteEntreprise");

            //migrationBuilder.DropTable(
            //    name: "RefActiviteParticulier");

            //migrationBuilder.DropTable(
            //    name: "RefSecteurActiviteParticulier");

            //migrationBuilder.DropTable(
            //    name: "RefSituationFamilialeParticulier");

            //migrationBuilder.DropTable(
            //    name: "RefSituationImmobilierParticulier");

            //migrationBuilder.DropTable(
            //    name: "RefSousActiviteParticulier");
        }
    }
}
