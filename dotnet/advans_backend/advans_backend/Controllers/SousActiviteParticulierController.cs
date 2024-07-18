using advans_backend.Data;
using advans_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace advans_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SousActiviteParticulierController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        public SousActiviteParticulierController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllSsAP()
        {
            var SsAP = await _appDbContext.RefSousActiviteParticulier.ToListAsync();
            return Ok(SsAP);
        }

        [HttpPost]

        public async Task<IActionResult> AjoutSsAP([FromBody] SousActiviteParticulier SousActiviteParticulierRequest)
        {


            // Ajouter l'Analyse au contexte et l'enregistrer dans la base de données
            await _appDbContext.RefSousActiviteParticulier.AddAsync(SousActiviteParticulierRequest);
            await _appDbContext.SaveChangesAsync();

            return Ok(SousActiviteParticulierRequest);

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
