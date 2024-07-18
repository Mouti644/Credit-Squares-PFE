using advans_backend.Data;
using advans_backend.Migrations;
using advans_backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Net.Sockets;
using System.Reflection.Metadata;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace advans_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CreditsController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        
        public CreditsController(AppDbContext appDbContext) {
            _appDbContext = appDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllDemandes()
        {
            
            var demandesAvecAgence = await _appDbContext.Demande_credit
                .Include(d => d.ClientParticulier)
                .Include(d => d.ClientEntreprise)// Inclure l'entité client
                .Select(d => new
                {
                    IdDemande = d.IdDemande,
                    IdClientParticulier=d.IdClientParticulier,
                    IdClientEntreprise=d.IdClientEntreprise,
                    Montant =d.Montant,
                    Statut=d.Statut,
                    TypeClient=d.TypeClient,
                    DateDemande =d.DateDemande,
                    DureeDemandee=d.DureeDemandee,
                    NomProduit=d.NomProduit,
                    DateFinalisation=d.DateFinalisation,
                    Commentaires=d.Commentaires,
                    NomAgence=d.NomAgence,
                    IdentiteClient=d.IdentiteClient,
                    NomClient=d.NomClient
                })
                .ToListAsync();

            return Ok(demandesAvecAgence);
           
        }

        [HttpPost]
        public async Task<IActionResult> AjoutDemande([FromBody] DemandeCredit creditrequest)
        {
          

            await _appDbContext.Demande_credit.AddAsync(creditrequest);

            await _appDbContext.SaveChangesAsync();
            return Ok(creditrequest);
        }

        [HttpGet("identiteClient")]
        public IActionResult RechercherClient(string identiteClient)
        {

            // Vérifier la longueur de l'attribut IdentiteClient
            if (identiteClient.Length != 8)
            {
                return BadRequest("La longueur de l'attribut IdentiteClient doit être de 8 caractères.");
            }

            // Recherche dans la table ClientParticulier
            var clientParticulier = _appDbContext.ClientsParticulier.FirstOrDefault(c => c.IdentiteClient == identiteClient);

            // Recherche dans la table ClientEntreprise
            var clientEntreprise = _appDbContext.ClientsEntreprise.FirstOrDefault(c => c.IdentiteClient == identiteClient);

            if (clientParticulier != null)
            {
                return Ok(new
                {
                    idClient = clientParticulier.IdClientParticulier,
                    nom = clientParticulier.Nom,
                    typeClient = "Particulier",
                    telephone = clientParticulier.Telephone,
                    identite = identiteClient,
                    nomAgence = clientParticulier.NomAgence
                });
            }
            else if (clientEntreprise != null)
            {
                return Ok(new
                {
                    idClient = clientEntreprise.IdClientEntreprise,
                    sigle = clientEntreprise.Sigle,
                    typeClient = "Entreprise",
                    telephone = clientEntreprise.Telephone,
                    identite = identiteClient,
                    nomAgence = clientEntreprise.NomAgence
                });
            }
            else
            {
                return NotFound("Aucun client trouvé pour l'identité saisie.");
            }
        }
        [HttpGet("nombreCreditsParTypeClient")]
        public async Task<IActionResult> GetNombreCreditsParTypeClient()
        {
            // Compter le nombre de crédits par type de client
            var nombreCreditsParTypeClient = await _appDbContext.Demande_credit
                .GroupBy(d => d.TypeClient)
                .Select(g => new
                {
                    TypeClient = g.Key,
                    NombreCredits = g.Count()
                })
                .ToListAsync();

            return Ok(nombreCreditsParTypeClient);
        }
        [HttpGet("nombreDemandesParNomAgence")]
        public async Task<IActionResult> GetNombreDemandesParNomAgence()
        {
            // Compter le nombre de demandes par nom d'agence
            var nombreDemandesParNomAgence = await _appDbContext.Demande_credit
                .GroupBy(d => d.NomAgence)
                .Select(g => new
                {
                    NomAgence = g.Key,
                    NombreDemandes = g.Count()
                })
                .ToListAsync();

            return Ok(nombreDemandesParNomAgence);
        }

        [HttpGet("nombreDemandesParNomProduit")]
        public async Task<IActionResult> GetNombreDemandesParNomProduit()
        {
            // Compter le nombre de demandes par nom d'agence
            var nombreDemandesParNomProduit = await _appDbContext.Demande_credit
                .GroupBy(d => d.NomProduit)
                .Select(g => new
                {
                    NomProduit = g.Key,
                    NombreDemandes = g.Count()
                })
                .ToListAsync();

            return Ok(nombreDemandesParNomProduit);
        }
        [HttpGet("nombreDemandesParStatut")]
        public async Task<IActionResult> GetNombreDemandesParStatut()
        {
            // Compter le nombre de demandes par nom d'agence
            var nombreDemandesParStatut = await _appDbContext.Demande_credit
                .GroupBy(d => d.Statut)
                .Select(g => new
                {
                    Statut = g.Key,
                    NombreDemandes = g.Count()
                })
                .ToListAsync();

            return Ok(nombreDemandesParStatut);
        }

        [HttpGet("nombreDemandesParDate")]
        public async Task<IActionResult> GetNombreDemandesParDate()
        {
            var demandesEntre1Et10 = await _appDbContext.Demande_credit
                .Where(d => d.DateDemande.HasValue && d.DateDemande.Value.Day >= 1 && d.DateDemande.Value.Day <= 10)
                .CountAsync();

            var demandesEntre10Et20 = await _appDbContext.Demande_credit
                .Where(d => d.DateDemande.HasValue && d.DateDemande.Value.Day > 10 && d.DateDemande.Value.Day <= 20)
                .CountAsync();

            var demandesEntre20Et31 = await _appDbContext.Demande_credit
                .Where(d => d.DateDemande.HasValue && d.DateDemande.Value.Day > 20 && d.DateDemande.Value.Day <= 31)
                .CountAsync();

            return Ok(new
            {
                DemandesEntre1Et10 = demandesEntre1Et10,
                DemandesEntre10Et20 = demandesEntre10Et20,
                DemandesEntre20Et31 = demandesEntre20Et31
            });
        }

        [HttpGet("nombreDemandesParMontant")]
        public async Task<IActionResult> GetDemandesParMontant()
        {
            var demandesMoinsDe10000 = await _appDbContext.Demande_credit
                .Where(d => d.Montant < 10000)
                .CountAsync();

            var demandesEntre10000Et50000 = await _appDbContext.Demande_credit
                .Where(d => d.Montant >= 10000 && d.Montant <= 50000)
                .CountAsync();

            var demandesPlusDe50000 = await _appDbContext.Demande_credit
                .Where(d => d.Montant > 50000)
                .CountAsync();

            return Ok(new
            {
                Moinsde10000 = demandesMoinsDe10000,
                Entre10000Et50000 = demandesEntre10000Et50000,
                PlusDe50000 = demandesPlusDe50000
            });
        }

        [HttpGet("{idDemande}")]
        public async Task<IActionResult> GetDemandeById(int idDemande)
        {
            var demande = await _appDbContext.Demande_credit
                .Include(d => d.ClientParticulier)
                .Include(d => d.ClientEntreprise)
                .Where(d => d.IdDemande == idDemande)
                .Select(d => new
                {
                    
                    NomClient = d.TypeClient == "Client Particulier" ? d.ClientParticulier.Prenom : d.ClientEntreprise.Sigle,
                    TypeClient = d.TypeClient,
                    IdDemande = d.IdDemande ,
                    IdentiteClient = d.IdentiteClient,
                    NomAgence = d.NomAgence,
                    Statut = d.Statut,
                    NomProduit = d.NomProduit,
                    Montant = d.Montant,
                    DureeDemandee = d.DureeDemandee,
                    Commentaires = d.Commentaires,
                    Disponibilite = d.Disponibilite,
                    IdClientParticulier = d.IdClientParticulier,
                    IdClientEntreprise = d.IdClientEntreprise,
                    SalaireNetMensuel = d.ClientParticulier.SalaireNetMensuel,
                    ChiffreAffaireMensuel = d.ClientEntreprise.ChiffreAffaireMensuel

                })
                .FirstOrDefaultAsync();

            if (demande == null)
            {
                return NotFound("Aucune demande trouvée pour l'ID spécifié.");
            }

            return Ok(demande);
        }


        //Notifications

        private async Task<int> GetUserIdByUsername(string username)
        {
            var user = await _appDbContext.Users.FirstOrDefaultAsync(u => u.UserName == username);
            if (user != null)
            {
                return user.UserId;
            }
            throw new Exception($"Utilisateur avec le nom {username} non trouvé.");
        }



        [HttpPut("updateStatut/{idDemande}")]
        public async Task<IActionResult> UpdateStatutDemande([FromRoute] int idDemande, [FromBody] string nouveauStatut)
        {
            try
            {
                var demandeCredit = await _appDbContext.Demande_credit.FirstOrDefaultAsync(d => d.IdDemande == idDemande);
                if (demandeCredit == null)
                {
                    return NotFound("La demande de crédit spécifiée n'existe pas.");
                }

                demandeCredit.Statut = nouveauStatut;
                await _appDbContext.SaveChangesAsync();

                // Créer des notifications en fonction du nouveau statut
                switch (nouveauStatut)
                {
                    case DemandeCredit.ANALYSE:
                        await CreateNotification(idDemande , "Responsable des relations client", $"La demande {idDemande} est maintenant avec le statut analyse.");
                        break;
                    case DemandeCredit.VERIFICATIONS_AVANT_COMITE:
                        await CreateNotification(idDemande, "Responsable des relations client", $"La demande {idDemande} est maintenant avec le statut checklist.");
                        break;
                    case DemandeCredit.ATTENTE_ACCORD_CLIENT:
                        await CreateNotification(idDemande, "Responsable des relations client", $"La demande {idDemande} est maintenant avec le statut visite management.");
                        break;
                    case DemandeCredit.ANALYSE_RISQUE:
                        await CreateNotification(idDemande, "Analyste risque crédit", $"La demande {idDemande} est maintenant avec le statut analyse de risque.");
                        break;
                    case DemandeCredit.COMITE:
                        await CreateNotification(idDemande, "Chef d'agence", $"La demande {idDemande} est maintenant avec le statut comité.");
                        break;
                        // Ajoute d'autres cas si nécessaire
                }

                return Ok("Statut de la demande de crédit mis à jour avec succès.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Une erreur s'est produite lors de la mise à jour du statut de la demande : {ex.Message}");
            }
        }


        private async Task CreateNotification(int idDemande ,string userName, string message)
        {
            var userId = await GetUserIdByUsername(userName);
          
            var notification = new Notification
            {
                UserId = userId,
                UserName = userName,
                IdDemande = idDemande,
                Message = message,
                IsRead = false,
                DateCreated = DateTime.Now
            };

            await _appDbContext.Notifications.AddAsync(notification);
            await _appDbContext.SaveChangesAsync();
        }


        [HttpGet("notifications/{userId}")]
        public async Task<IActionResult> GetNotificationsByUser(int userId)
        {
            var notifications = await _appDbContext.Notifications
                .Where(n => n.UserId == userId)
                .OrderByDescending(n => n.DateCreated)
                .ToListAsync();

            return Ok(notifications);
        }

        [HttpPut("notifications/{id}/read")]
        public async Task<IActionResult> MarkAsRead(int id)
        {
            var notification = await _appDbContext.Notifications.FindAsync(id);

            if (notification == null)
            {
                return NotFound("Notification non trouvée.");
            }

            notification.IsRead = true;

            _appDbContext.Notifications.Update(notification);
            await _appDbContext.SaveChangesAsync();

            return Ok();
        }

        //

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> UpdateDemande([FromRoute] int id, DemandeCredit updateDemandeCreditRequest)
        {

           

            var DemandeCredit =
                await _appDbContext.Demande_credit.FindAsync(id);

            if (DemandeCredit == null)
            {
                return BadRequest("La demande spécifié n'existe pas.");
            }

            DemandeCredit.TypeClient = updateDemandeCreditRequest.TypeClient;
            DemandeCredit.Montant = updateDemandeCreditRequest.Montant;
            DemandeCredit.DureeDemandee = updateDemandeCreditRequest.DureeDemandee;
            DemandeCredit.Commentaires = updateDemandeCreditRequest.Commentaires;
            DemandeCredit.Disponibilite = updateDemandeCreditRequest.Disponibilite;
            DemandeCredit.NomAgence = updateDemandeCreditRequest.NomAgence;
            DemandeCredit.NomClient = updateDemandeCreditRequest.NomClient;
            DemandeCredit.IdentiteClient = updateDemandeCreditRequest.IdentiteClient;
            DemandeCredit.NomProduit = updateDemandeCreditRequest.NomProduit;

            var ancienStatut = DemandeCredit.Statut;
            DemandeCredit.Statut = updateDemandeCreditRequest.Statut;

            await _appDbContext.SaveChangesAsync();


            // Créer des notifications si le statut a changé
            if (ancienStatut != updateDemandeCreditRequest.Statut)
            {
                switch (updateDemandeCreditRequest.Statut)
                {
                    case DemandeCredit.ANALYSE:
                        await CreateNotification(id, "Responsable des relations client", $"La demande {id} est maintenant avec le statut analyse.");
                        break;
                    case DemandeCredit.VERIFICATIONS_AVANT_COMITE:
                        await CreateNotification(id, "Responsable des relations client", $"La demande {id} est maintenant avec le statut checklist.");
                        break;
                    case DemandeCredit.ATTENTE_ACCORD_CLIENT:
                        await CreateNotification(id, "Responsable des relations client", $"La demande {id} est maintenant avec le statut visite management.");
                        break;
                    case DemandeCredit.ANALYSE_RISQUE:
                        await CreateNotification(id, "Analyste risque crédit", $"La demande {id} estmaintenant avec le statut analyse de risque.");
                        break;
                    case DemandeCredit.COMITE:
                        await CreateNotification(id, "Chef d'agence", $"La demande {id} est maintenant avec le statut en comité.");
                        break;
                        // Ajoutez d'autres cas si nécessaire
                }
            }


            return Ok(DemandeCredit);


        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteDemande([FromRoute] int id)
        {
            var Demande =
                await _appDbContext.Demande_credit.FindAsync(id);

            if (Demande == null)
            {
                return BadRequest("La demande spécifié n'existe pas.");
            }

            _appDbContext.Demande_credit.Remove(Demande);
            await _appDbContext.SaveChangesAsync();
            return Ok();
        }

        
        [HttpGet]
        [Route("DureeOperation/{idDemande}")]
        public async Task<IActionResult> GetDetailsByIdDemande(int idDemande)
        {
            var demandeCredit = await _appDbContext.Demande_credit
                .Include(d => d.Analyse)
                .Include(d => d.CheckList)
                .Include(d => d.RisqueAnalyse)
                .Include(d => d.Comite)
                .Include(d => d.VisiteManagement)
                .FirstOrDefaultAsync(d => d.IdDemande == idDemande);

            if (demandeCredit == null)
            {
                return NotFound();
            }

            var result = new
            {
                Analyse = demandeCredit.Analyse?.DureeAnalyse,
                CheckList = demandeCredit.CheckList?.DureeCheckList,
                RisqueAnalyse = demandeCredit.RisqueAnalyse?.DureeRA,
                Comite = demandeCredit.Comite?.DureeComite,
                VisiteManagement = demandeCredit.VisiteManagement?.DureeVM
            };

            return Ok(result);
        }
        [HttpGet("sumDurations")]
        public async Task<IActionResult> GetSumOfDurations()
        {
            var totalDureeAnalyse = await _appDbContext.Analyses.SumAsync(a => (int?)a.DureeAnalyse) ?? 0;
            var totalDureeCheckList = await _appDbContext.CheckLists.SumAsync(c => (int?)c.DureeCheckList) ?? 0;
            var totalDureeRisqueAnalyse = await _appDbContext.RisqueAnalyses.SumAsync(r => (int?)r.DureeRA) ?? 0;
            var totalDureeComite = await _appDbContext.Comites.SumAsync(c => (int?)c.DureeComite) ?? 0;
            var totalDureeVisiteManagement = await _appDbContext.VisiteManagements.SumAsync(v => (int?)v.DureeVM) ?? 0;

            var result = new
            {
                Analyse = totalDureeAnalyse,
                CheckList = totalDureeCheckList,
                RisqueAnalyse = totalDureeRisqueAnalyse,
                Comite = totalDureeComite,
                VisiteManagement = totalDureeVisiteManagement,
                //TotalGeneral = totalDureeAnalyse + totalDureeCheckList + totalDureeRisqueAnalyse + totalDureeComite + totalDureeVisiteManagement
            };

            return Ok(result);
        }
  


    }
}
