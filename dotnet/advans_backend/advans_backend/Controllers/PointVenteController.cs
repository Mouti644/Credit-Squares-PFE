using advans_backend.Data;
using advans_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace advans_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PointVenteController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        public PointVenteController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpGet("{IdClientEntreprise}")]
        public async Task<IActionResult> GetAllPointVente(int IdClientEntreprise)
        {

            var PointVente = await _appDbContext.PointsVente.Where(D => D.IdClientEntreprise == IdClientEntreprise).ToListAsync();
            return Ok(PointVente);
        }

        [HttpPost]
        public async Task<IActionResult> AjoutPointVente([FromBody] PointVente PointVenteRequest)
        {
            var ClientPExists = await _appDbContext.ClientsEntreprise.AnyAsync(C => C.IdClientEntreprise == PointVenteRequest.IdClientEntreprise);

            if (!ClientPExists)
            {
                return BadRequest("Le Client spécifié n'existe pas.");
            }

            // Ajouter l'Analyse au contexte et l'enregistrer dans la base de données
            await _appDbContext.PointsVente.AddAsync(PointVenteRequest);
            await _appDbContext.SaveChangesAsync();

            return Ok(PointVenteRequest);

        }

        [HttpPut]
        [Route("{idPointVente}")]
        public async Task<IActionResult> UpdatePointVente([FromRoute] int idPointVente, PointVente updatePointVenteRequest)
        {
            var PointVente =
                await _appDbContext.PointsVente.FindAsync(idPointVente);


            PointVente.Propriete = updatePointVenteRequest.Propriete;
            PointVente.NbrJoursOuverture = updatePointVenteRequest.NbrJoursOuverture;
            PointVente.Surface = updatePointVenteRequest.Surface;
            PointVente.Emplacement = updatePointVenteRequest.Emplacement;
            PointVente.Type = updatePointVenteRequest.Type;


            await _appDbContext.SaveChangesAsync();

            return Ok(PointVente);


        }


        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeletePointVente([FromRoute] int id)
        {
            var PointVente =
                await _appDbContext.PointsVente.FindAsync(id);

            _appDbContext.PointsVente.Remove(PointVente);
            await _appDbContext.SaveChangesAsync();
            return Ok();
        }
    }
}
