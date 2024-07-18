using advans_backend.Data;
using advans_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace advans_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CheckListController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        public CheckListController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext ;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllCheckLists()
        {
            var CheckLists = await _appDbContext.CheckLists.ToListAsync();
            return Ok(CheckLists);
        }


        [HttpGet("{idDemande}")]
        public async Task<IActionResult> CheckCheckList(int idDemande)
        {
            var checkList = await _appDbContext.CheckLists.FirstOrDefaultAsync(x => x.IdDemande == idDemande);

            if (checkList == null)
            {
                return Ok(false); // ou BadRequest("CheckList n'existe pas.") si vous préférez envoyer une erreur
            }

            return Ok(checkList);
        }

        [HttpPost]
        public async Task<IActionResult> AjoutCheckList([FromBody] CheckList CheckListRequest)
        {
            // Vérifier si la demande de crédit existe
            var demande = await _appDbContext.Demande_credit
                                             .FirstOrDefaultAsync(d => d.IdDemande == CheckListRequest.IdDemande);

            if (demande == null)
            {
                return BadRequest("La demande de crédit spécifiée n'existe pas.");
            }

            // Vérifier si le statut de la demande est "Demande brouillon"
            if (demande.Statut != "Vérifications avant comité")
            {
                return BadRequest("La demande de crédit n'est pas dans le statut 'Vérifications avant comité'.");
            }

            // Vérifier si une checklist existe déjà pour cette demande
            var checklistExists = await _appDbContext.CheckLists.AnyAsync(c => c.IdDemande == CheckListRequest.IdDemande);

            if (checklistExists)
            {
                return BadRequest("Une checklist existe déjà pour cette demande de crédit.");
            }

            // Ajouter l'Analyse au contexte et l'enregistrer dans la base de données
            await _appDbContext.CheckLists.AddAsync(CheckListRequest);
            await _appDbContext.SaveChangesAsync();

            return Ok(CheckListRequest);

        }


        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> UpdateCheckList([FromRoute] int id, CheckList updateCheckListRequest)
        {


            var CheckList =
                await _appDbContext.CheckLists.FindAsync(id);

            if (CheckList == null)
            {
                return BadRequest("CheckList n'existe pas.");
            }



            CheckList.VerifPhotoClient = updateCheckListRequest.VerifPhotoClient;
            CheckList.VerifIDClient = updateCheckListRequest.VerifIDClient;
            CheckList.VerifLocalClient = updateCheckListRequest.VerifLocalClient;

            CheckList.VerifClientPolitique = updateCheckListRequest.VerifClientPolitique;
            CheckList.VerifAutorisationActivite = updateCheckListRequest.VerifAutorisationActivite;
            CheckList.VerifPhotoGarant = updateCheckListRequest.VerifPhotoGarant;

            CheckList.VerifIDGarant = updateCheckListRequest.VerifIDGarant;
            CheckList.VerifFormDemandeSigne = updateCheckListRequest.VerifFormDemandeSigne;
            CheckList.VerifContratCreditSigne = updateCheckListRequest.VerifContratCreditSigne;
            CheckList.VerifContratGarantieSigne = updateCheckListRequest.VerifContratGarantieSigne;

            CheckList.VerifFicheGarantSigne = updateCheckListRequest.VerifFicheGarantSigne;
            CheckList.VerifFicheClientSigne = updateCheckListRequest.VerifFicheClientSigne;
            CheckList.VerifConditionsGenSigne = updateCheckListRequest.VerifConditionsGenSigne;
            CheckList.DateDebutCheckList = updateCheckListRequest.DateDebutCheckList;

            await _appDbContext.SaveChangesAsync();

            return Ok(CheckList);


        }

        // Nouveau endpoint pour mettre à jour DateFin et Duree
        [HttpPut]
        [Route("updateDateChecklist/{id}")]
        public async Task<IActionResult> UpdateDate([FromRoute] int id)
        {
            var checklist = await _appDbContext.CheckLists.FindAsync(id);

            if (checklist == null)
            {
                return BadRequest("checklist n'existe pas.");
            }

            checklist.DateFinCheckList = DateTime.Now;

            if (checklist.DateDebutCheckList.HasValue)
            {
                checklist.DureeCheckList = (int)(checklist.DateFinCheckList.Value - checklist.DateDebutCheckList.Value).TotalDays;
            }
            else
            {
                checklist.DureeCheckList = null;
            }

            await _appDbContext.SaveChangesAsync();
            return Ok(checklist);
        }
    }
}
