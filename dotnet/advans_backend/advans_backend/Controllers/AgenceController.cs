using advans_backend.Data;
using advans_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace advans_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AgenceController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        public AgenceController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAgences()
        {
            var Agences = await _appDbContext.RefAgences.ToListAsync();
            return Ok(Agences);
        }

        [HttpPost]
        public async Task<IActionResult> AjoutAgence([FromBody] RefAgence AgenceRequest)
        {


            // Ajouter l'Analyse au contexte et l'enregistrer dans la base de données
            await _appDbContext.RefAgences.AddAsync(AgenceRequest);
            await _appDbContext.SaveChangesAsync();

            return Ok(AgenceRequest);

        }


        [HttpGet("{idAgence}")]
        public async Task<ActionResult<string>> GetNomAgenceById(int idAgence)
        {
            var Agence = await _appDbContext.RefAgences
                .FirstOrDefaultAsync(A => A.IdAgence == idAgence);

            if (Agence == null)
            {
                //return NotFound(); // Secteur d'activité non trouvé
                return BadRequest("L'id de l'agence spécifié n'existe pas.");
            }

            return Ok(new { Agence = Agence.NomAgence });
        }

        [HttpPut]
        [Route("{idAgence}")]
        public async Task<IActionResult> UpdateAgence([FromRoute] int idAgence, RefAgence updateAgenceRequest)
        {
            var Agence =
                await _appDbContext.RefAgences.FindAsync(idAgence);


            Agence.NomAgence = updateAgenceRequest.NomAgence;
            Agence.Region = updateAgenceRequest.Region;
            Agence.Telephone = updateAgenceRequest.Telephone;
            Agence.Adresse = updateAgenceRequest.Adresse;

            await _appDbContext.SaveChangesAsync();

            return Ok(Agence);


        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteProduit([FromRoute] int id)
        {
            var Agence =
                await _appDbContext.RefAgences.FindAsync(id);

            _appDbContext.RefAgences.Remove(Agence);
            await _appDbContext.SaveChangesAsync();
            return Ok();
        }


    }
}
