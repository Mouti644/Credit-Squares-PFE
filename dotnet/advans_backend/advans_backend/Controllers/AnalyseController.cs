using advans_backend.Data;
using advans_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace advans_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnalyseController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;
         public AnalyseController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAnalyse()
        {
            var Analyses = await _appDbContext.Analyses.ToListAsync();
            return Ok(Analyses);
        }

       

        [HttpGet("{idDemande}")]
        public async Task<IActionResult> CheckAnalyseExists(int idDemande)
        {
            var analyse = await _appDbContext.Analyses.FirstOrDefaultAsync(x => x.IdDemande == idDemande);

            if (analyse == null)
            {
                return Ok(false); // ou BadRequest("Analyse n'existe pas."); si vous préférez envoyer une erreur
            }

            return Ok(analyse);


        }


        [HttpPost]
        public async Task<IActionResult> AjoutAnalyse([FromBody] Analyse AnalyseRequest)
        {
            // Vérifier si la demande de crédit existe
            var demande = await _appDbContext.Demande_credit
                                             .FirstOrDefaultAsync(d => d.IdDemande == AnalyseRequest.IdDemande);

            if (demande == null)
            {
                return BadRequest("La demande de crédit spécifiée n'existe pas.");
            }

            // Vérifier si le statut de la demande est "Demande brouillon"
            if (demande.Statut != "Analyse")
            {
                return BadRequest("La demande de crédit n'est pas dans le statut 'Analyse'.");
            }

            // Vérifier si une analyse existe déjà pour cette demande de crédit
            var analyseExists = await _appDbContext.Analyses
                                                   .AnyAsync(c => c.IdDemande == AnalyseRequest.IdDemande);

            if (analyseExists)
            {
                return BadRequest("Une analyse existe déjà pour cette demande de crédit.");
            }

            // Ajouter l'Analyse au contexte
            await _appDbContext.Analyses.AddAsync(AnalyseRequest);

            // Enregistrer les modifications dans la base de données
            await _appDbContext.SaveChangesAsync();

            return Ok(AnalyseRequest);
        }




        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> UpdateAnalyse([FromRoute] int id, Analyse updateAnalyseRequest)
        {


            var Analyse =
                await _appDbContext.Analyses.FindAsync(id);

            if (Analyse == null)
            {
                return BadRequest("Analyse n'existe pas.");
            }


            
            Analyse.PertinenceProjet = updateAnalyseRequest.PertinenceProjet;
            Analyse.HistoriqueCreditClient = updateAnalyseRequest.HistoriqueCreditClient;
            Analyse.AnalyseGaranties = updateAnalyseRequest.AnalyseGaranties;

            Analyse.AnalyseRisqueCommercial = updateAnalyseRequest.AnalyseRisqueCommercial;
            Analyse.MontantPropose = updateAnalyseRequest.MontantPropose;
            Analyse.TautInteret = updateAnalyseRequest.TautInteret;

            Analyse.Hypothese = updateAnalyseRequest.Hypothese;
            Analyse.ExplicationChoix = updateAnalyseRequest.ExplicationChoix;
            Analyse.AvisStabiliteClient = updateAnalyseRequest.AvisStabiliteClient;
            Analyse.DateDebutAnalyse = updateAnalyseRequest.DateDebutAnalyse;
            await _appDbContext.SaveChangesAsync();

            return Ok(Analyse);


        }

        // Nouveau endpoint pour mettre à jour DateFin et Duree
        [HttpPut]
        [Route("updateDateAnalyse/{id}")]
        public async Task<IActionResult> UpdateDate([FromRoute] int id)
        {
            var analyse = await _appDbContext.Analyses.FindAsync(id);

            if (analyse == null)
            {
                return BadRequest("Analyse n'existe pas.");
            }

            analyse.DateFinAnalyse = DateTime.Now;

            if (analyse.DateDebutAnalyse.HasValue)
            {
                analyse.DureeAnalyse = (int)(analyse.DateFinAnalyse.Value - analyse.DateDebutAnalyse.Value).TotalHours;
            }
            else
            {
                analyse.DureeAnalyse = null;
            }

            await _appDbContext.SaveChangesAsync();
            return Ok(analyse);
        }


    }
}
