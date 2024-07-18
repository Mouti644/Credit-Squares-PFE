using advans_backend.Data;
using advans_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace advans_backend.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class GarantieController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        public GarantieController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpGet("{idDemande}")]
        public async Task<IActionResult> GetAllGarantie(int idDemande)
        {

            var Garanties = await _appDbContext.Garanties.Where(g => g.IdDemande == idDemande).ToListAsync();
            return Ok(Garanties);
        }

        [HttpPost]
        public async Task<IActionResult> AjoutGarantie([FromBody] Garantie GarantiesRequest)
        {
            var demandeExists = await _appDbContext.Demande_credit.AnyAsync(d => d.IdDemande == GarantiesRequest.IdDemande);

            if (!demandeExists)
            {
                return BadRequest("La demande de crédit spécifiée n'existe pas.");
            }

            // Ajouter l'Analyse au contexte et l'enregistrer dans la base de données
            await _appDbContext.Garanties.AddAsync(GarantiesRequest);
            await _appDbContext.SaveChangesAsync();

            return Ok(GarantiesRequest);

        }

        [HttpPut]
        [Route("{idGarantie}")]
        public async Task<IActionResult> UpdateGarantie([FromRoute] int idGarantie, Garantie updateGarantieRequest)
        {
            var Garantie =
                await _appDbContext.Garanties.FindAsync(idGarantie);


            Garantie.Proprietaire = updateGarantieRequest.Proprietaire;
            Garantie.Valeur_estime = updateGarantieRequest.Valeur_estime;
            Garantie.Type = updateGarantieRequest.Type;
            Garantie.IdTypeGarantie = updateGarantieRequest.IdTypeGarantie;
            


            await _appDbContext.SaveChangesAsync();

            return Ok(Garantie);


        }


        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteGarantie([FromRoute] int id)
        {
            var Garantie =
                await _appDbContext.Garanties.FindAsync(id);

            _appDbContext.Garanties.Remove(Garantie);
            await _appDbContext.SaveChangesAsync();
            return Ok();
        }
    }
}
