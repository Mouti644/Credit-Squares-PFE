using advans_backend.Data;
using advans_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace advans_backend.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class SituationImmobilierParticulierController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        public SituationImmobilierParticulierController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllSIP()
        {
            var SIP = await _appDbContext.RefSituationImmobilierParticulier.ToListAsync();
            return Ok(SIP);
        }

        [HttpPost]

        public async Task<IActionResult> AjoutSIP([FromBody] SituationImmobilierParticulier SituationImmobilierParticulierRequest)
        {


            // Ajouter l'Analyse au contexte et l'enregistrer dans la base de données
            await _appDbContext.RefSituationImmobilierParticulier.AddAsync(SituationImmobilierParticulierRequest);
            await _appDbContext.SaveChangesAsync();

            return Ok(SituationImmobilierParticulierRequest);

        }
        [HttpGet("{idSituationImmobilierParticulier}")]
        public async Task<ActionResult<string>> GetNomSituationImmobilierParticulierById(int idSituationImmobilierParticulier)
        {
            var SituationImmobilierParticulier = await _appDbContext.RefSituationImmobilierParticulier
                .FirstOrDefaultAsync(s => s.IdSituationImmobilierParticulier == idSituationImmobilierParticulier);

            if (SituationImmobilierParticulier == null)
            {
                return NotFound(); // situation immobilier non trouvé
            }

            return Ok(new { SituationImmobilierParticulier = SituationImmobilierParticulier.Situation });
        }
    }
}
