using advans_backend.Data;
using advans_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace advans_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CreditRecentEntrepriseController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        public CreditRecentEntrepriseController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpGet("{IdClientEntreprise}")]
        public async Task<IActionResult> GetAllCRE(int IdClientEntreprise)
        {

            var CRE = await _appDbContext.CreditRecentsEntreprise.Where(D => D.IdClientEntreprise == IdClientEntreprise).ToListAsync();
            return Ok(CRE);
        }

        [HttpPost]
        public async Task<IActionResult> AjoutCRE([FromBody] CreditRecentEntreprise CreditRecentEntrepriseRequest)
        {
            var ClientPExists = await _appDbContext.ClientsEntreprise.AnyAsync(C => C.IdClientEntreprise == CreditRecentEntrepriseRequest.IdClientEntreprise);

            if (!ClientPExists)
            {
                return BadRequest("Le Client spécifié n'existe pas.");
            }

            // Ajouter l'Analyse au contexte et l'enregistrer dans la base de données
            await _appDbContext.CreditRecentsEntreprise.AddAsync(CreditRecentEntrepriseRequest);
            await _appDbContext.SaveChangesAsync();

            return Ok(CreditRecentEntrepriseRequest);

        }

        [HttpPut]
        [Route("{idCRE}")]
        public async Task<IActionResult> UpdateCRE([FromRoute] int idCRE, CreditRecentEntreprise updateCRErequest)
        {
            var CRE =
                await _appDbContext.CreditRecentsEntreprise.FindAsync(idCRE);


            CRE.Objet = updateCRErequest.Objet;
            CRE.Duree = updateCRErequest.Duree;
            CRE.MontantInitial = updateCRErequest.MontantInitial;
            CRE.EnCoursRestant = updateCRErequest.EnCoursRestant;
            CRE.MontantEchMens = updateCRErequest.MontantEchMens;
            CRE.NbrEchRestant = updateCRErequest.NbrEchRestant;
            CRE.NbrEchEnRetard = updateCRErequest.NbrEchEnRetard;
            CRE.NbrMaxJoursEnRetard = updateCRErequest.NbrMaxJoursEnRetard;



            await _appDbContext.SaveChangesAsync();

            return Ok(CRE);


        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteCRE([FromRoute] int id)
        {
            var CRE =
                await _appDbContext.CreditRecentsEntreprise.FindAsync(id);

            _appDbContext.CreditRecentsEntreprise.Remove(CRE);
            await _appDbContext.SaveChangesAsync();
            return Ok();
        }
    }
}
