using advans_backend.Data;
using advans_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace advans_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActiviteParticulierController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        public ActiviteParticulierController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }


        [HttpGet]
        public async Task<IActionResult> GetAllAP()
        {
            var AP = await _appDbContext.RefActiviteParticulier.ToListAsync();
            return Ok(AP);
        }
        [HttpPost]

        public async Task<IActionResult> AjoutAP([FromBody] ActiviteParticulier ActiviteParticulierRequest)
        {


            // Ajouter l'Analyse au contexte et l'enregistrer dans la base de données
            await _appDbContext.RefActiviteParticulier.AddAsync(ActiviteParticulierRequest);
            await _appDbContext.SaveChangesAsync();

            return Ok(ActiviteParticulierRequest);

        }


        [HttpGet("{idActivite}")]
        public async Task<ActionResult<string>> GetNomActiviteById(int idActivite)
        {
            var Activite = await _appDbContext.RefActiviteParticulier
                .FirstOrDefaultAsync(s => s.IdActivite == idActivite);

            if (Activite == null)
            {
                return NotFound(); // Secteur d'activité non trouvé
            }

            return Ok(new { Activite = Activite.NomActivite });
        }

    }
}
