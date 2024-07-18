using advans_backend.Data;
using advans_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace advans_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TypePointVenteController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        public TypePointVenteController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllTypesPV()
        {
            var TypesPV = await _appDbContext.RefTypePointVente.ToListAsync();
            return Ok(TypesPV);
        }

        [HttpPost]

        public async Task<IActionResult> AjoutTypePV([FromBody] TypePointVente TypePointVenteRequest)
        {

            // Ajouter l'Analyse au contexte et l'enregistrer dans la base de données
            await _appDbContext.RefTypePointVente.AddAsync(TypePointVenteRequest);
            await _appDbContext.SaveChangesAsync();

            return Ok(TypePointVenteRequest);

        }

        [HttpGet("{idTypepointvente}")]
        public async Task<ActionResult<string>> GetTypepointventeId(int idTypepointvente)
        {
            var Typepointvente = await _appDbContext.RefTypePointVente
                .FirstOrDefaultAsync(s => s.IdTypePointVente == idTypepointvente);

            if (Typepointvente == null)
            {
                return NotFound(); // Secteur d'activité non trouvé
            }

            return Ok(new { typepointvente = Typepointvente.Type });
        }
    }
}
