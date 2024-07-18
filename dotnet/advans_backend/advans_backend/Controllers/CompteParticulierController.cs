using advans_backend.Data;
using advans_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace advans_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompteParticulierController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        public CompteParticulierController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpGet("{IdClientParticulier}")]
        public async Task<IActionResult> GetAllCP(int IdClientParticulier)
        {

            var CompteParticulier = await _appDbContext.ComptePar.Where(CP => CP.IdClientParticulier == IdClientParticulier).ToListAsync();
            return Ok(CompteParticulier);
        }

        [HttpPost]
        public async Task<IActionResult> AjoutCP([FromBody] CompteParticulier CompteParticulierRequest)
        {
            var ClientPExists = await _appDbContext.ClientsParticulier.AnyAsync(C => C.IdClientParticulier == CompteParticulierRequest.IdClientParticulier);

            if (!ClientPExists)
            {
                return BadRequest("Le Client spécifié n'existe pas.");
            }


            // Vérifier si un compte particulier existe déjà pour le client particulier spécifié
            var existingCP = await _appDbContext.ComptePar.FirstOrDefaultAsync(cp => cp.IdClientParticulier == CompteParticulierRequest.IdClientParticulier);

            if (existingCP != null)
            {
                // Un compte particulier existe déjà pour ce client particulier, renvoyer une réponse BadRequest
                return BadRequest("Ce client particulier a déjà un compte associé.");
            }

            // Ajouter l'Analyse au contexte et l'enregistrer dans la base de données
            await _appDbContext.ComptePar.AddAsync(CompteParticulierRequest);
            await _appDbContext.SaveChangesAsync();

            return Ok(CompteParticulierRequest);

        }


        [HttpPut]
        [Route("{idCompteParticulier}")]
        public async Task<IActionResult> UpdateCP([FromRoute] int idCompteParticulier, CompteParticulier updateCPRequest)
        {
            var CP =
                await _appDbContext.ComptePar.FindAsync(idCompteParticulier);


            CP.DateOuvertureCompte = updateCPRequest.DateOuvertureCompte;
            CP.DeviseCompte = updateCPRequest.DeviseCompte;
            


            await _appDbContext.SaveChangesAsync();

            return Ok(CP);


        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteCP([FromRoute] int id)
        {
            var CP =
                await _appDbContext.ComptePar.FindAsync(id);

            _appDbContext.ComptePar.Remove(CP);
            await _appDbContext.SaveChangesAsync();
            return Ok();
        }

    }
}
