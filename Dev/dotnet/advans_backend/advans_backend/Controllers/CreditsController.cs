using advans_backend.Data;
using advans_backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
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
                .Include(d => d.Client) // Inclure l'entité client
                .Select(d => new
                {
                    Id = d.Id_Demande,
                    NomGestionnaire =d.NomGestionnaire,
                    Id_Client=d.Id_Client,
                    Montant=d.Montant,
                    Statut=d.Statut,
                    Date=d.Date,
                    num_version=d.num_version,

                    // Mapper d'autres champs de la demande de crédit
                    Agence = d.Client.Agence, // Récupérer l'information sur l'agence à partir du client associé
                    Nom = d.Client.Nom
                })
                .ToListAsync();

            return Ok(demandesAvecAgence);
        }

        [HttpPost]
        public async Task<IActionResult> AjoutDemande([FromBody] Demande_credit creditrequest)
        {
            // Vérifier si l'ID client existe dans la table client
            var clientExists = await _appDbContext.Clients.AnyAsync(c => c.Id_Client == creditrequest.Id_Client);

            if (!clientExists)
            {
                return BadRequest("Le client spécifié n'existe pas.");
            }

            await _appDbContext.Demande_credit.AddAsync(creditrequest);
            
            await _appDbContext.SaveChangesAsync();
            return Ok(creditrequest);

        }

    }
}
