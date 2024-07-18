using advans_backend.Data;
using advans_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace advans_backend.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class SituationImmobilierEntrepriseController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        public SituationImmobilierEntrepriseController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllSIE()
        {
            var SIE = await _appDbContext.RefSituationImmobilierEntreprise.ToListAsync();
            return Ok(SIE);
        }

        [HttpPost]

        public async Task<IActionResult> AjoutSIE([FromBody] SituationImmobilierEntreprise SituationImmobilierEntrepriseRequest)
        {


            // Ajouter l'Analyse au contexte et l'enregistrer dans la base de données
            await _appDbContext.RefSituationImmobilierEntreprise.AddAsync(SituationImmobilierEntrepriseRequest);
            await _appDbContext.SaveChangesAsync();

            return Ok(SituationImmobilierEntrepriseRequest);

        }
        [HttpGet("{idSituationImmobilierEntreprise}")]
        public async Task<ActionResult<string>> GetNomSituationImmobilierEntrepriseById(int idSituationImmobilierEntreprise)
        {
            var SituationImmobilierEntreprise = await _appDbContext.RefSituationImmobilierEntreprise
                .FirstOrDefaultAsync(s => s.IdSituationImmobilierEntreprise == idSituationImmobilierEntreprise);

            if (SituationImmobilierEntreprise == null)
            {
                return NotFound(); // situation immobilier non trouvé
            }

            return Ok(new { SituationImmobilierEntreprise = SituationImmobilierEntreprise.Situation });
        }
    }
}
