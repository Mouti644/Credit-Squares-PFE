using advans_backend.Data;
using advans_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace advans_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GarantController : ControllerBase
    {

        private readonly AppDbContext _appDbContext;
        public GarantController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpGet("{idDemande}")]
        public async Task<IActionResult> GetAllGarant(int idDemande)
        {
            
            var Garants = await _appDbContext.Garants.Where(g => g.IdDemande == idDemande).ToListAsync();
            return Ok(Garants);
        }

        [HttpPost]
        public async Task<IActionResult> AjoutGarant([FromBody] Garant GarantRequest)
        {

            // Vérifier la longueur de l'attribut IdentiteClient
            if (GarantRequest.IdentiteGarant.Length != 8)
            {
                return BadRequest("La longueur de l'attribut IdentiteGarant doit être de 8 caractères.");
            }

            var demandeExists = await _appDbContext.Demande_credit.AnyAsync(d => d.IdDemande == GarantRequest.IdDemande);

            if (!demandeExists)
            {
                return BadRequest("La demande de crédit spécifiée n'existe pas.");
            }

            // Ajouter l'Analyse au contexte et l'enregistrer dans la base de données
            await _appDbContext.Garants.AddAsync(GarantRequest);
            await _appDbContext.SaveChangesAsync();

            return Ok(GarantRequest);

        }

        [HttpPut]
        [Route("{idGarant}")]
        public async Task<IActionResult> UpdateGarant([FromRoute] int idGarant, Garant updateGarantRequest)
        {
            var Garant =
                await _appDbContext.Garants.FindAsync(idGarant);


            Garant.NomGarant = updateGarantRequest.NomGarant;
            Garant.IdentiteGarant = updateGarantRequest.IdentiteGarant;
            Garant.RelationClientGarant = updateGarantRequest.RelationClientGarant;
            Garant.IdRelationClientGarant = updateGarantRequest.IdRelationClientGarant;
            Garant.ValeurMoyenne = updateGarantRequest.ValeurMoyenne;
            Garant.ValeurBasse = updateGarantRequest.ValeurBasse;
            Garant.Telephone = updateGarantRequest.Telephone;



            await _appDbContext.SaveChangesAsync();

            return Ok(Garant);


        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteGarant([FromRoute] int id)
        {
            var Garant =
                await _appDbContext.Garants.FindAsync(id);

            _appDbContext.Garants.Remove(Garant);
            await _appDbContext.SaveChangesAsync();
            return Ok();
        }


    }
}
