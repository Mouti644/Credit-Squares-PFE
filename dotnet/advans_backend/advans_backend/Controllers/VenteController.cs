using advans_backend.Data;
using advans_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace advans_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VenteController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        public VenteController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpGet("{IdClientEntreprise}")]
        public async Task<IActionResult> GetAllVente(int IdClientEntreprise)
        {

            var Vente = await _appDbContext.Ventes.Where(D => D.IdClientEntreprise == IdClientEntreprise).ToListAsync();
            return Ok(Vente);
        }

        [HttpPost]
        public async Task<IActionResult> AjoutVente([FromBody] Vente VenteRequest)
        {
            var ClientPExists = await _appDbContext.ClientsEntreprise.AnyAsync(C => C.IdClientEntreprise == VenteRequest.IdClientEntreprise);

            if (!ClientPExists)
            {
                return BadRequest("Le Client spécifié n'existe pas.");
            }

            // Ajouter l'Analyse au contexte et l'enregistrer dans la base de données
            await _appDbContext.Ventes.AddAsync(VenteRequest);
            await _appDbContext.SaveChangesAsync();

            return Ok(VenteRequest);

        }

        [HttpPut]
        [Route("{idVente}")]
        public async Task<IActionResult> UpdateVente([FromRoute] int idVente, Vente updateVenterequest)
        {
            var Vente =
                await _appDbContext.Ventes.FindAsync(idVente);


            Vente.Frequence = updateVenterequest.Frequence;
            Vente.ValeurHaute = updateVenterequest.ValeurHaute;
            Vente.ValeurMoyenne = updateVenterequest.ValeurMoyenne;
            Vente.ValeurBasse = updateVenterequest.ValeurBasse;


            await _appDbContext.SaveChangesAsync();

            return Ok(Vente);


        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteVente([FromRoute] int id)
        {
            var Vente =
                await _appDbContext.Ventes.FindAsync(id);

            _appDbContext.Ventes.Remove(Vente);
            await _appDbContext.SaveChangesAsync();
            return Ok();
        }
    }
}
