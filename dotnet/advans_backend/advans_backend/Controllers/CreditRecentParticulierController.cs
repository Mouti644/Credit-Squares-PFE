using advans_backend.Data;
using advans_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace advans_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CreditRecentParticulierController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        public CreditRecentParticulierController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpGet("{IdClientParticulier}")]
        public async Task<IActionResult> GetAllCRP(int IdClientParticulier)
        {

            var CreditRecentParticulier = await _appDbContext.CreditRecentsParticulier.Where(CR => CR.IdClientParticulier == IdClientParticulier).ToListAsync();
            return Ok(CreditRecentParticulier);
        }

        [HttpPost]
        public async Task<IActionResult> AjoutCRP([FromBody] CreditRecentParticulier CreditRecentParticulierRequest)
        {
            var ClientPExists = await _appDbContext.ClientsParticulier.AnyAsync(C => C.IdClientParticulier == CreditRecentParticulierRequest.IdClientParticulier);

            if (!ClientPExists)
            {
                return BadRequest("Le Client spécifié n'existe pas.");
            }

            // Ajouter l'Analyse au contexte et l'enregistrer dans la base de données
            await _appDbContext.CreditRecentsParticulier.AddAsync(CreditRecentParticulierRequest);
            await _appDbContext.SaveChangesAsync();

            return Ok(CreditRecentParticulierRequest);

        }


        [HttpPut]
        [Route("{idCreditRecPar}")]
        public async Task<IActionResult> UpdateRF([FromRoute] int idCreditRecPar, CreditRecentParticulier updateCRPequest)
        {
            var CRP =
                await _appDbContext.CreditRecentsParticulier.FindAsync(idCreditRecPar);


            CRP.Objet = updateCRPequest.Objet;
            CRP.Duree = updateCRPequest.Duree;
            CRP.MontantInitial = updateCRPequest.MontantInitial;
            CRP.EnCoursRestant = updateCRPequest.EnCoursRestant;
            CRP.MontantEchMens = updateCRPequest.MontantEchMens;
            CRP.NbrEchRestant = updateCRPequest.NbrEchRestant;
            CRP.NbrEchEnRetard = updateCRPequest.NbrEchEnRetard;
            CRP.NbrMaxJoursEnRetard = updateCRPequest.NbrMaxJoursEnRetard;


            await _appDbContext.SaveChangesAsync();

            return Ok(CRP);


        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteRF([FromRoute] int id)
        {
            var CRP =
                await _appDbContext.CreditRecentsParticulier.FindAsync(id);

            _appDbContext.CreditRecentsParticulier.Remove(CRP);
            await _appDbContext.SaveChangesAsync();
            return Ok();
        }

    }
}
