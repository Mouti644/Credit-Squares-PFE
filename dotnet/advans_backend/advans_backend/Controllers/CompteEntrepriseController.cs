using advans_backend.Data;
using advans_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace advans_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompteEntrepriseController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        public CompteEntrepriseController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpGet("{IdClientEntreprise}")]
        public async Task<IActionResult> GetAllCP(int IdClientEntreprise)
        {

            var CompteEntreprise = await _appDbContext.CompteEntre.Where(CP => CP.IdClientEntreprise == IdClientEntreprise).ToListAsync();
            return Ok(CompteEntreprise);
        }

        [HttpPost]
        public async Task<IActionResult> AjoutCE([FromBody] CompteEntreprise CompteEntrepriseRequest)
        {
            var ClientPExists = await _appDbContext.ClientsEntreprise.AnyAsync(C => C.IdClientEntreprise == CompteEntrepriseRequest.IdClientEntreprise);

            if (!ClientPExists)
            {
                return BadRequest("Le Client spécifié n'existe pas.");
            }


            // Vérifier si un compte particulier existe déjà pour le client particulier spécifié
            var existingCP = await _appDbContext.CompteEntre.FirstOrDefaultAsync(cE => cE.IdClientEntreprise == CompteEntrepriseRequest.IdClientEntreprise);

            if (existingCP != null)
            {
                // Un compte particulier existe déjà pour ce client particulier, renvoyer une réponse BadRequest
                return BadRequest("Ce client Entreprise a déjà un compte associé.");
            }

            // Ajouter l'Analyse au contexte et l'enregistrer dans la base de données
            await _appDbContext.CompteEntre.AddAsync(CompteEntrepriseRequest);
            await _appDbContext.SaveChangesAsync();

            return Ok(CompteEntrepriseRequest);

        }

        [HttpPut]
        [Route("{idCompteEntreprise}")]
        public async Task<IActionResult> UpdateCP([FromRoute] int idCompteEntreprise, CompteParticulier updateCERequest)
        {
            var CE =
                await _appDbContext.CompteEntre.FindAsync(idCompteEntreprise);


            CE.DateOuvertureCompte = updateCERequest.DateOuvertureCompte;
            CE.DeviseCompte = updateCERequest.DeviseCompte;



            await _appDbContext.SaveChangesAsync();

            return Ok(CE);


        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteCP([FromRoute] int id)
        {
            var CE =
                await _appDbContext.CompteEntre.FindAsync(id);

            _appDbContext.CompteEntre.Remove(CE);
            await _appDbContext.SaveChangesAsync();
            return Ok();
        }

    }
}
