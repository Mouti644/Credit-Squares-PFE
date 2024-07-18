using advans_backend.Data;
using advans_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace advans_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RAController : ControllerBase
    {
       private readonly AppDbContext _appDbContext;
        public RAController (AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllRA()
        {
            var RisqueAnalyses = await _appDbContext.RisqueAnalyses.ToListAsync();
            return Ok(RisqueAnalyses);
        }


        [HttpGet("{idDemande}")]
        public async Task<IActionResult> CheckRA(int idDemande)
        {
            var risqueAnalyse = await _appDbContext.RisqueAnalyses.FirstOrDefaultAsync(x => x.IdDemande == idDemande);

            if (risqueAnalyse == null)
            {
                return Ok(false); // ou BadRequest("RisqueAnalyse n'existe pas.") si vous préférez envoyer une erreur
            }

            return Ok(risqueAnalyse);
        }

        [HttpPost]
        public async Task<IActionResult> AjoutRA([FromBody] RisqueAnalyse RisqueAnalyseRequest)
        {
            // Vérifier si la demande de crédit existe
            var demande = await _appDbContext.Demande_credit
                                             .FirstOrDefaultAsync(d => d.IdDemande == RisqueAnalyseRequest.IdDemande);

            if (demande == null)
            {
                return BadRequest("La demande de crédit spécifiée n'existe pas.");
            }

            // Vérifier si le statut de la demande est "Demande brouillon"
            if (demande.Statut != "Analyse risque")
            {
                return BadRequest("La demande de crédit n'est pas dans le statut 'Analyse risque'.");
            }
            var risqueAnalyseExists = await _appDbContext.RisqueAnalyses.AnyAsync(c => c.IdDemande == RisqueAnalyseRequest.IdDemande);

            if (risqueAnalyseExists)
            {
                return BadRequest("Une RisqueAnalyses existe déjà pour cette demande de crédit.");
            }

            // Ajouter l'Analyse au contexte et l'enregistrer dans la base de données
            await _appDbContext.RisqueAnalyses.AddAsync(RisqueAnalyseRequest);
            await _appDbContext.SaveChangesAsync();

            return Ok(RisqueAnalyseRequest);

        }


        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> UpdateCheckList([FromRoute] int id, RisqueAnalyse updateRisqueAnalyseRequest)
        {


            var RA =
                await _appDbContext.RisqueAnalyses.FindAsync(id);

            if (RA == null)
            {
                return BadRequest("RA n'existe pas.");
            }



            RA.EvalProjet = updateRisqueAnalyseRequest.EvalProjet;
            RA.EvalRisqueClient = updateRisqueAnalyseRequest.EvalRisqueClient;
            RA.EvalRisqueCommercial = updateRisqueAnalyseRequest.EvalRisqueCommercial;

            RA.EvalGaranties = updateRisqueAnalyseRequest.EvalGaranties;
            RA.RecommandationAnalyste = updateRisqueAnalyseRequest.RecommandationAnalyste;
            RA.Commentaires = updateRisqueAnalyseRequest.Commentaires;

            RA.DateDebutRA = updateRisqueAnalyseRequest.DateDebutRA;
           

            await _appDbContext.SaveChangesAsync();

            return Ok(RA);


        }

        // Nouveau endpoint pour mettre à jour DateFin et Duree
        [HttpPut]
        [Route("updateDateRA/{id}")]
        public async Task<IActionResult> UpdateDate([FromRoute] int id)
        {
            var RA = await _appDbContext.RisqueAnalyses.FindAsync(id);

            if (RA == null)
            {
                return BadRequest("RA n'existe pas.");
            }

            RA.DateFinRA = DateTime.Now;

            if (RA.DateDebutRA.HasValue)
            {
                RA.DureeRA = (int)(RA.DateFinRA.Value - RA.DateDebutRA.Value).TotalDays;
            }
            else
            {
                RA.DureeRA = null;
            }

            await _appDbContext.SaveChangesAsync();
            return Ok(RA);
        }
    }
}
