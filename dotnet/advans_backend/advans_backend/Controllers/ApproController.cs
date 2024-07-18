using advans_backend.Data;
using advans_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace advans_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApproController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        public ApproController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpGet("{IdClientEntreprise}")]
        public async Task<IActionResult> GetAllAppro(int IdClientEntreprise)
        {

            var Appro = await _appDbContext.Approvisionnements.Where(A => A.IdClientEntreprise == IdClientEntreprise).ToListAsync();
            return Ok(Appro);
        }

        [HttpPost]
        public async Task<IActionResult> AjoutAppro([FromBody] Appro ApproRequest)
        {
            var ClientPExists = await _appDbContext.ClientsEntreprise.AnyAsync(C => C.IdClientEntreprise == ApproRequest.IdClientEntreprise);

            if (!ClientPExists)
            {
                return BadRequest("Le Client spécifié n'existe pas.");
            }

            // Ajouter l'Analyse au contexte et l'enregistrer dans la base de données
            await _appDbContext.Approvisionnements.AddAsync(ApproRequest);
            await _appDbContext.SaveChangesAsync();

            return Ok(ApproRequest);

        }

        [HttpPut]
        [Route("{idAppro}")]
        public async Task<IActionResult> UpdateAppro([FromRoute] int idAppro, Appro updateApprorequest)
        {
            var Appro =
                await _appDbContext.Approvisionnements.FindAsync(idAppro);


            Appro.Frequence = updateApprorequest.Frequence;
            Appro.MontantMoyen = updateApprorequest.MontantMoyen;
           

            await _appDbContext.SaveChangesAsync();

            return Ok(Appro);


        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteAppro([FromRoute] int id)
        {
            var Appro =
                await _appDbContext.Approvisionnements.FindAsync(id);

            _appDbContext.Approvisionnements.Remove(Appro);
            await _appDbContext.SaveChangesAsync();
            return Ok();
        }
    }
}
