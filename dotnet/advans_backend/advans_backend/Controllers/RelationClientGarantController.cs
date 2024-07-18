using advans_backend.Data;
using advans_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace advans_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RelationClientGarantController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        public RelationClientGarantController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllRCG()
        {
            var RCG = await _appDbContext.RefRelationClientGarant.ToListAsync();
            return Ok(RCG);
        }

        [HttpPost]
        public async Task<IActionResult> AjoutRCG([FromBody] RelationClientGarant RelationClientGarantRequest)
        {


            // Ajouter l'Analyse au contexte et l'enregistrer dans la base de données
            await _appDbContext.RefRelationClientGarant.AddAsync(RelationClientGarantRequest);
            await _appDbContext.SaveChangesAsync();

            return Ok(RelationClientGarantRequest);

        }

        [HttpGet("{idRelationClientGarant}")]
        public async Task<ActionResult<string>> GetRelationClientById(int idRelationClientGarant)
        {
            var RelationClient = await _appDbContext.RefRelationClientGarant
                .FirstOrDefaultAsync(s => s.IdRelationClientGarant == idRelationClientGarant);

            if (RelationClient == null)
            {
                return NotFound(); // Secteur d'activité non trouvé
            }

            return Ok(new { relationClient = RelationClient.Relation });
        }
    }
}
