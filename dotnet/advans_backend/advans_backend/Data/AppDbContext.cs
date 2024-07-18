using advans_backend.Models;
using Microsoft.EntityFrameworkCore;
using Org.BouncyCastle.Utilities.Collections;
using static advans_backend.Models.ClientEntreprise;

namespace advans_backend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<user> Users { get; set; }

        public DbSet<Notification> Notifications { get; set; }
        public DbSet<DemandeCredit> Demande_credit { get; set; }
        public DbSet<InteractiviteDecideur> InteractivitesDecideur { get; set; }

        //Entreprise
        public DbSet<ClientEntreprise> ClientsEntreprise { get; set; }
        public DbSet<CompteEntreprise> CompteEntre { get; set; }

        public DbSet<Vente> Ventes { get; set; }
        public DbSet<Appro> Approvisionnements { get; set; }
        public DbSet<CreditRecentEntreprise> CreditRecentsEntreprise { get; set; }
        public DbSet<PointVente> PointsVente { get; set; }
        public DbSet<CompteBancaireEntreprise> ComptesBancaireEntreprise { get; set; }
        public DbSet<Depense> Depenses { get; set; }


        //Particulier
        public DbSet<ClientParticulier> ClientsParticulier { get; set; }
        public DbSet<CompteParticulier> ComptePar { get; set; }
        public DbSet<Garant> Garants { get; set; }
        public DbSet<Garantie> Garanties { get; set; }
        public DbSet<ReferentFamiliaux> ReferentsFamiliaux { get; set; }
        public DbSet<CreditRecentParticulier> CreditRecentsParticulier { get; set; }

        public DbSet<CompteBancaireParticulier> ComptesBancaireParticulier { get; set; }

        public DbSet<SecteurActiviteParticulier> RefSecteurActiviteParticulier { get; set; }
        public DbSet<ActiviteParticulier> RefActiviteParticulier { get; set; }

        public DbSet<SousActiviteParticulier> RefSousActiviteParticulier { get; set; }

        public DbSet<SecteurActiviteEntreprise> RefSecteurActiviteEntreprise { get; set; }
        public DbSet<ActiviteEntreprise> RefActiviteEntreprise { get; set; }

        public DbSet<SousActiviteEntreprise> RefSousActiviteEntreprise { get; set; }


        public DbSet<SituationImmobilierParticulier> RefSituationImmobilierParticulier { get; set; }
        public DbSet<SituationImmobilierEntreprise> RefSituationImmobilierEntreprise { get; set; }

        public DbSet<SituationFamilialeParticulier> RefSituationFamilialeParticulier { get; set; }
        public DbSet<Produit> RefProduit { get; set; }
        public DbSet<RelationClientGarant> RefRelationClientGarant { get; set; }
        public DbSet<TypeGarantie> RefTypeGarantieGarant { get; set; }
        public DbSet<TypePointVente> RefTypePointVente { get; set; }
        //

        //
        public DbSet<RefAgence> RefAgences { get; set; }
        public DbSet<VisiteManagement> VisiteManagements { get; set; }
        public DbSet<RisqueAnalyse> RisqueAnalyses { get; set; }
        public DbSet<Comite> Comites { get; set; }
        public DbSet<CheckList> CheckLists { get; set; }
        public DbSet<Analyse> Analyses { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ClientEntreprise>()
        .Ignore(CE => CE.SousActivite);

            // Configuration de la relation one-to-one entre Demande_credit et VisiteManagement
            modelBuilder.Entity<DemandeCredit>()
                .HasOne(d => d.VisiteManagement)
                .WithOne(vm => vm.Demande)
                .HasForeignKey<VisiteManagement>(vm => vm.IdDemande);

            modelBuilder.Entity<DemandeCredit>()
                .HasOne(d => d.RisqueAnalyse)
                .WithOne(ra => ra.Demande)
                .HasForeignKey<RisqueAnalyse>(ra => ra.IdDemande);

            modelBuilder.Entity<DemandeCredit>()
                .HasOne(d => d.Comite)
                .WithOne(co => co.Demande)
                .HasForeignKey<Comite>(co => co.IdDemande);

            modelBuilder.Entity<DemandeCredit>()
                .HasOne(d => d.CheckList)
                .WithOne(ch => ch.Demande)
                .HasForeignKey<CheckList>(ch => ch.IdDemande);

            modelBuilder.Entity<DemandeCredit>()
               .HasOne(d => d.Analyse)
               .WithOne(A => A.Demande)
               .HasForeignKey<Analyse>(A => A.IdDemande);

            modelBuilder.Entity<ClientParticulier>()
               .HasOne(C => C.Compte)
               .WithOne(CoP => CoP.ClientParticulier)
               .HasForeignKey<CompteParticulier>(CoP => CoP.IdClientParticulier);

            modelBuilder.Entity<ClientEntreprise>()
              .HasOne(C => C.Compte)
              .WithOne(CoE => CoE.ClientEntreprise)
              .HasForeignKey<CompteEntreprise>(CoE => CoE.IdClientEntreprise);

            //modelBuilder.Entity<DemandeCredit>()
            //    .HasOne(d => d.Produit)
            //    .WithOne(P => P.DemandeCredit);

            //modelBuilder.Entity<Garant>()
            //    .HasOne(G => G.RelationClientGarant)
            //    .WithOne(R => R.Garant);

            //modelBuilder.Entity<Garantie>()
            //    .HasOne(G => G.TypeGarantie)
            //    .WithOne(T => T.Garantie);
            //modelBuilder.Entity<PointVente>()
            //    .HasOne(G => G.TypePointVente)
            //    .WithOne(TP => TP.PointVente);


            //REFParticulier

            //modelBuilder.Entity<ClientParticulier>()
            // .HasOne(C => C.SecteurActivite)
            // .WithOne(SA => SA.ClientParticulier)
            // .HasForeignKey<ClientParticulier>(SA => SA.IdClientParticulier);

            //modelBuilder.Entity<ClientParticulier>()
            // .HasOne(C => C.Activite)
            // .WithOne(A => A.ClientParticulier)
            // .HasForeignKey<ClientParticulier>(A => A.IdClientParticulier);
            //modelBuilder.Entity<ClientParticulier>()
            // .HasOne(C => C.SousActivite)
            // .WithOne(SsA => SsA.ClientParticulier)
            // .HasForeignKey<ClientParticulier>(SsA => SsA.IdClientParticulier);

            //modelBuilder.Entity<ClientParticulier>()
            // .HasOne(C => C.SituationImmobilier)
            // .WithOne(SIP => SIP.ClientParticulier);


            //modelBuilder.Entity<ClientParticulier>()
            // .HasOne(C => C.SituationFamiliale)
            // .WithOne(SFP => SFP.ClientParticulier)
            // ;

            ////REFEntreprise

            //modelBuilder.Entity<ClientEntreprise>()
            // .HasOne(CE => CE.SecteurActivite)
            // .WithOne(SAE => SAE.ClientEntreprise)
            // .HasForeignKey<ClientEntreprise>(SAE => SAE.IdClientEntreprise);
            //modelBuilder.Entity<ClientEntreprise>()
            // .HasOne(CE => CE.Activite)
            // .WithOne(AE => AE.ClientEntreprise)
            // .HasForeignKey<ClientEntreprise>(AE => AE.IdClientEntreprise);
            //modelBuilder.Entity<ClientEntreprise>()
            //  .HasOne(C => C.SituationImmobilier)
            //  .WithOne(SIE => SIE.ClientEntreprise)
            //  .HasForeignKey<ClientEntreprise>(SIP => SIP.IdClientEntreprise);




        }

    }



    }
