using advans_backend.Data;
using advans_backend.Migrations;
using advans_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace advans_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReferentFamiliauxController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        public ReferentFamiliauxController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }


        [HttpGet("{IdClientParticulier}")]
        public async Task<IActionResult> GetAllRF(int IdClientParticulier)
        {

            var ReferentFamiliaux = await _appDbContext.ReferentsFamiliaux.Where(R => R.IdClientParticulier == IdClientParticulier).ToListAsync();
            return Ok(ReferentFamiliaux);
        }

        [HttpPost]
        public async Task<IActionResult> AjoutRF([FromBody] ReferentFamiliaux ReferentFamiliauxRequest)
        {
            var ClientPExists = await _appDbContext.ClientsParticulier.AnyAsync(C => C.IdClientParticulier == ReferentFamiliauxRequest.IdClientParticulier);

            if (!ClientPExists)
            {
                return BadRequest("Le Client spécifié n'existe pas.");
            }

            // Ajouter l'Analyse au contexte et l'enregistrer dans la base de données
            await _appDbContext.ReferentsFamiliaux.AddAsync(ReferentFamiliauxRequest);
            await _appDbContext.SaveChangesAsync();

            return Ok(ReferentFamiliauxRequest);

        }

        [HttpPut]
        [Route("{idReferent}")]
        public async Task<IActionResult> UpdateRF([FromRoute] int idReferent, ReferentFamiliaux updateRFRequest)
        {
            var RF =
                await _appDbContext.ReferentsFamiliaux.FindAsync(idReferent);


            RF.Nom = updateRFRequest.Nom;
            RF.Prenom = updateRFRequest.Prenom;
            RF.Telephone = updateRFRequest.Telephone;
            RF.Relation = updateRFRequest.Relation;
           


            await _appDbContext.SaveChangesAsync();

            return Ok(RF);


        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteRF([FromRoute] int id)
        {
            var RF =
                await _appDbContext.ReferentsFamiliaux.FindAsync(id);

            _appDbContext.ReferentsFamiliaux.Remove(RF);
            await _appDbContext.SaveChangesAsync();
            return Ok();
        }

    }
}
