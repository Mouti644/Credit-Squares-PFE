using advans_backend.Data;
using advans_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace advans_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ComiteController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        public ComiteController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }


        [HttpGet]
        public async Task<IActionResult> GetAllComite()
        {
            var Comites = await _appDbContext.Comites.ToListAsync();
            return Ok(Comites);
        }

        [HttpGet("{idDemande}")]
        public async Task<IActionResult> CheckComiteExists(int idDemande)
        {
            var comite = await _appDbContext.Comites.FirstOrDefaultAsync(x => x.IdDemande == idDemande);

            if (comite == null)
            {
                return Ok(false); // ou BadRequest("Comite n'existe pas.") si vous préférez envoyer une erreur
            }

            return Ok(comite);
        }

        [HttpPost]
        public async Task<IActionResult> AjoutComite([FromBody] Comite ComiteRequest)
        {
            // Vérifier si la demande de crédit existe
            var demande = await _appDbContext.Demande_credit
                                             .FirstOrDefaultAsync(d => d.IdDemande == ComiteRequest.IdDemande);

            if (demande == null)
            {
                return BadRequest("La demande de crédit spécifiée n'existe pas.");
            }

            // Vérifier si le statut de la demande est "Demande brouillon"
            if (demande.Statut != "Comité")
            {
                return BadRequest("La demande de crédit n'est pas dans le statut 'Comité'.");
            }

            var comiteExists = await _appDbContext.Comites.AnyAsync(c => c.IdDemande == ComiteRequest.IdDemande);

            if (comiteExists)
            {
                return BadRequest("Une Comite existe déjà pour cette demande de crédit.");
            }

            // Ajouter l'Analyse au contexte et l'enregistrer dans la base de données
            await _appDbContext.Comites.AddAsync(ComiteRequest);
            await _appDbContext.SaveChangesAsync();

            return Ok(ComiteRequest);

        }


        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> UpdateCheckList([FromRoute] int id, Comite updatecomiteRequest)
        {


            var Comite =
                await _appDbContext.Comites.FindAsync(id);

            if (Comite == null)
            {
                return BadRequest("Comite n'existe pas.");
            }



            Comite.Raison = updatecomiteRequest.Raison;
            Comite.Montant = updatecomiteRequest.Montant;
            Comite.Commentaires = updatecomiteRequest.Commentaires;
            Comite.DateDebutComite = updatecomiteRequest.DateDebutComite;
            Comite.Decision = updatecomiteRequest.Decision;

            await _appDbContext.SaveChangesAsync();

            return Ok(Comite);


        }

        // Nouveau endpoint pour mettre à jour DateFin et Duree
        [HttpPut]
        [Route("updateDateComite/{id}")]
        public async Task<IActionResult> UpdateDate([FromRoute] int id)
        {
            var comite = await _appDbContext.Comites.FindAsync(id);

            if (comite == null)
            {
                return BadRequest("comite n'existe pas.");
            }

            comite.DateFinComite = DateTime.Now;

            if (comite.DateDebutComite.HasValue)
            {
                comite.DureeComite = (int)(comite.DateFinComite.Value - comite.DateDebutComite.Value).TotalDays;
            }
            else
            {
                comite.DureeComite = null;
            }

            await _appDbContext.SaveChangesAsync();
            return Ok(comite);
        }

    }
}
