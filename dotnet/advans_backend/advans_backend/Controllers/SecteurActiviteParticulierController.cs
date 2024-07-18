using advans_backend.Data;
using advans_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace advans_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SecteurActiviteParticulierController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        public SecteurActiviteParticulierController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllSAP()
        {
            var SAP = await _appDbContext.RefSecteurActiviteParticulier.ToListAsync();
            return Ok(SAP);
        }
        [HttpPost]

        public async Task<IActionResult> AjoutSAP([FromBody] SecteurActiviteParticulier SecteurActiviteParticulierRequest)
        {
            

            // Ajouter l'Analyse au contexte et l'enregistrer dans la base de données
            await _appDbContext.RefSecteurActiviteParticulier.AddAsync(SecteurActiviteParticulierRequest);
            await _appDbContext.SaveChangesAsync();

            return Ok(SecteurActiviteParticulierRequest);

        }

        [HttpGet("{idSecteur}")]
        public async Task<ActionResult<string>> GetNomSecteurActiviteById(int idSecteur)
        {
            var secteurActivite = await _appDbContext.RefSecteurActiviteParticulier
                .FirstOrDefaultAsync(s => s.IdSecteurActivite == idSecteur);

            if (secteurActivite == null)
            {
                return NotFound(); // Secteur d'activité non trouvé
            }

            return Ok(new { secteurActivite = secteurActivite.NomSecteur });
        }


    }
}
