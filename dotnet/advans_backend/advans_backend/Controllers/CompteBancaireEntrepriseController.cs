using advans_backend.Data;
using advans_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace advans_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompteBancaireEntrepriseController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        public CompteBancaireEntrepriseController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }
        [HttpGet("{IdClientEntreprise}")]
        public async Task<IActionResult> GetAllCBE(int IdClientEntreprise)
        {

            var CompteBancaireEntreprise = await _appDbContext.ComptesBancaireEntreprise.Where(D => D.IdClientEntreprise == IdClientEntreprise).ToListAsync();
            return Ok(CompteBancaireEntreprise);
        }

        [HttpPost]
        public async Task<IActionResult> AjoutCBE([FromBody] CompteBancaireEntreprise CompteBancaireEntrepriseRequest)
        {
            var ClientPExists = await _appDbContext.ClientsEntreprise.AnyAsync(C => C.IdClientEntreprise == CompteBancaireEntrepriseRequest.IdClientEntreprise);

            if (!ClientPExists)
            {
                return BadRequest("Le Client spécifié n'existe pas.");
            }

            // Ajouter l'Analyse au contexte et l'enregistrer dans la base de données
            await _appDbContext.ComptesBancaireEntreprise.AddAsync(CompteBancaireEntrepriseRequest);
            await _appDbContext.SaveChangesAsync();

            return Ok(CompteBancaireEntrepriseRequest);

        }


        [HttpPut]
        [Route("{idCompteBan}")]
        public async Task<IActionResult> UpdateCBE([FromRoute] int idCompteBan, CompteBancaireEntreprise updateCBErequest)
        {
            var CBE =
                await _appDbContext.ComptesBancaireEntreprise.FindAsync(idCompteBan);


            CBE.Banque = updateCBErequest.Banque;
            CBE.TypeCompte = updateCBErequest.TypeCompte;
            CBE.Solde = updateCBErequest.Solde;




            await _appDbContext.SaveChangesAsync();

            return Ok(CBE);


        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteCBP([FromRoute] int id)
        {
            var CBE =
                await _appDbContext.ComptesBancaireEntreprise.FindAsync(id);

            _appDbContext.ComptesBancaireEntreprise.Remove(CBE);
            await _appDbContext.SaveChangesAsync();
            return Ok();
        }

    }
}
