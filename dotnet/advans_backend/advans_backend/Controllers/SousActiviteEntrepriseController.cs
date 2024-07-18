using advans_backend.Data;
using advans_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace advans_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SousActiviteEntrepriseController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        public SousActiviteEntrepriseController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllSsAE()
        {
            var SsAE = await _appDbContext.RefSousActiviteEntreprise.ToListAsync();
            return Ok(SsAE);
        }

        [HttpPost]

        public async Task<IActionResult> AjoutSsAE([FromBody] SousActiviteEntreprise SousActiviteEntrepriseRequest)
        {


            // Ajouter l'Analyse au contexte et l'enregistrer dans la base de données
            await _appDbContext.RefSousActiviteEntreprise.AddAsync(SousActiviteEntrepriseRequest);
            await _appDbContext.SaveChangesAsync();

            return Ok(SousActiviteEntrepriseRequest);

        }

        [HttpGet("{idSousActivite}")]
        public async Task<ActionResult<string>> GetNomActiviteById(int idSousActivite)
        {
            var SousActivite = await _appDbContext.RefSousActiviteParticulier
                .FirstOrDefaultAsync(s => s.IdSousActivite == idSousActivite);

            if (SousActivite == null)
            {
                return NotFound(); // Secteur d'activité non trouvé
            }

            return Ok(new { SousActivite = SousActivite.NomSousActivite });
        }
    }
}
