using advans_backend.Data;
using advans_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace advans_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepenseController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        public DepenseController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpGet("{IdClientEntreprise}")]
        public async Task<IActionResult> GetAllDepenses(int IdClientEntreprise)
        {

            var Depenses = await _appDbContext.Depenses.Where(D => D.IdClientEntreprise == IdClientEntreprise).ToListAsync();
            return Ok(Depenses);
        }

        [HttpPost]
        public async Task<IActionResult> AjoutDepense([FromBody] Depense DepenseRequest)
        {
            var ClientPExists = await _appDbContext.ClientsEntreprise.AnyAsync(C => C.IdClientEntreprise == DepenseRequest.IdClientEntreprise);

            if (!ClientPExists)
            {
                return BadRequest("Le Client spécifié n'existe pas.");
            }

            // Ajouter l'Analyse au contexte et l'enregistrer dans la base de données
            await _appDbContext.Depenses.AddAsync(DepenseRequest);
            await _appDbContext.SaveChangesAsync();

            return Ok(DepenseRequest);

        }

        [HttpPut]
        [Route("{idDepense}")]
        public async Task<IActionResult> UpdateDepense([FromRoute] int idDepense, Depense updateDepenserequest)
        {
            var Depense =
                await _appDbContext.Depenses.FindAsync(idDepense);


            Depense.Depenses = updateDepenserequest.Depenses;
            Depense.CoutTotal = updateDepenserequest.CoutTotal;
            


            await _appDbContext.SaveChangesAsync();

            return Ok(Depense);


        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteDepense([FromRoute] int id)
        {
            var Depense =
                await _appDbContext.Depenses.FindAsync(id);

            _appDbContext.Depenses.Remove(Depense);
            await _appDbContext.SaveChangesAsync();
            return Ok();
        }
    }
}
