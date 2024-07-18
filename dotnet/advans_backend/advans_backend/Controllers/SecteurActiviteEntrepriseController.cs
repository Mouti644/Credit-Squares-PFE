using advans_backend.Data;
using advans_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace advans_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SecteurActiviteEntrepriseController :  ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        public SecteurActiviteEntrepriseController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllSAE()
        {
            var SAE = await _appDbContext.RefSecteurActiviteEntreprise.ToListAsync();
            return Ok(SAE);
        }
        [HttpPost]

        public async Task<IActionResult> AjoutSAE([FromBody] SecteurActiviteEntreprise SecteurActiviteEntrepriseRequest)
        {


            // Ajouter l'Analyse au contexte et l'enregistrer dans la base de données
            await _appDbContext.RefSecteurActiviteEntreprise.AddAsync(SecteurActiviteEntrepriseRequest);
            await _appDbContext.SaveChangesAsync();

            return Ok(SecteurActiviteEntrepriseRequest);

        }

        [HttpGet("{idSecteur}")]
        public async Task<ActionResult<string>> GetNomSecteurActiviteById(int idSecteur)
        {
            var secteurActivite = await _appDbContext.RefSecteurActiviteEntreprise
                .FirstOrDefaultAsync(s => s.IdSecteurActivite == idSecteur);

            if (secteurActivite == null)
            {
                return NotFound(); // Secteur d'activité non trouvé
            }

            return Ok(new { secteurActivite = secteurActivite.NomSecteur });
        }
    }
}
