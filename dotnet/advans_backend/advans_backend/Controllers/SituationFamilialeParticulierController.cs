using advans_backend.Data;
using advans_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace advans_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SituationFamilialeParticulierController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        public SituationFamilialeParticulierController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllSFP()
        {
            var SFP = await _appDbContext.RefSituationFamilialeParticulier.ToListAsync();
            return Ok(SFP);
        }

        [HttpPost]

        public async Task<IActionResult> AjoutSFP([FromBody] SituationFamilialeParticulier SituationFamilialeParticulierRequest)
        {


            // Ajouter l'Analyse au contexte et l'enregistrer dans la base de données
            await _appDbContext.RefSituationFamilialeParticulier.AddAsync(SituationFamilialeParticulierRequest);
            await _appDbContext.SaveChangesAsync();

            return Ok(SituationFamilialeParticulierRequest);

        }

        [HttpGet("{idSituationFamiliale}")]
        public async Task<ActionResult<string>> GetNomSituationImmobilierEntrepriseById(int idSituationFamiliale)
        {
            var SituationFamiliale = await _appDbContext.RefSituationFamilialeParticulier
                .FirstOrDefaultAsync(s => s.IdSituationFamilialeParticulier == idSituationFamiliale);

            if (SituationFamiliale == null)
            {
                return NotFound(); // situation immobilier non trouvé
            }

            return Ok(new { SituationFamiliale = SituationFamiliale.Situation });
        }
    }
}
