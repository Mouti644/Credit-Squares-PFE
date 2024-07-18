using advans_backend.Data;
using advans_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace advans_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActiviteEntrepriseController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        public ActiviteEntrepriseController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAE()
        {
            var AE = await _appDbContext.RefActiviteEntreprise.ToListAsync();
            return Ok(AE);
        }
        [HttpPost]

        public async Task<IActionResult> AjoutAE([FromBody] ActiviteEntreprise ActiviteEntrepriseRequest)
        {


            // Ajouter l'Analyse au contexte et l'enregistrer dans la base de données
            await _appDbContext.RefActiviteEntreprise.AddAsync(ActiviteEntrepriseRequest);
            await _appDbContext.SaveChangesAsync();

            return Ok(ActiviteEntrepriseRequest);

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
