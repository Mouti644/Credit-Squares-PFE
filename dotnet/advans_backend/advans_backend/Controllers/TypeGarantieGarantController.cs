using advans_backend.Data;
using advans_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace advans_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TypeGarantieGarantController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        public TypeGarantieGarantController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllTypesG()
        {
            var TypesG = await _appDbContext.RefTypeGarantieGarant.ToListAsync();
            return Ok(TypesG);
        }


        [HttpPost]

        public async Task<IActionResult> AjoutTypeG([FromBody] TypeGarantie TypeGarantieRequest)
        {

            // Ajouter l'Analyse au contexte et l'enregistrer dans la base de données
            await _appDbContext.RefTypeGarantieGarant.AddAsync(TypeGarantieRequest);
            await _appDbContext.SaveChangesAsync();

            return Ok(TypeGarantieRequest);

        }

        [HttpGet("{idTypeGarantie}")]
        public async Task<ActionResult<string>> GetTypeGarantieById(int idTypeGarantie)
        {
            var typeGarantie = await _appDbContext.RefTypeGarantieGarant
                .FirstOrDefaultAsync(s => s.IdTypeGarantie == idTypeGarantie);

            if (typeGarantie == null)
            {
                return NotFound(); // Secteur d'activité non trouvé
            }

            return Ok(new { typeGarantie = typeGarantie.Type });
        }
    }
}
