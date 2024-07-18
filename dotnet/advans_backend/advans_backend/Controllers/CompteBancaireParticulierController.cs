using advans_backend.Data;
using advans_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace advans_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompteBancaireParticulierController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        public CompteBancaireParticulierController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpGet("{IdClientParticulier}")]
        public async Task<IActionResult> GetAllCBP(int IdClientParticulier)
        {

            var CompteBancaireParticulier = await _appDbContext.ComptesBancaireParticulier.Where(CB => CB.IdClientParticulier == IdClientParticulier).ToListAsync();
            return Ok(CompteBancaireParticulier);
        }

        [HttpPost]
        public async Task<IActionResult> AjoutCBP([FromBody] CompteBancaireParticulier CompteBancaireParticulierRequest)
        {
            var ClientPExists = await _appDbContext.ClientsParticulier.AnyAsync(C => C.IdClientParticulier == CompteBancaireParticulierRequest.IdClientParticulier);

            if (!ClientPExists)
            {
                return BadRequest("Le Client spécifié n'existe pas.");
            }

            // Ajouter l'Analyse au contexte et l'enregistrer dans la base de données
            await _appDbContext.ComptesBancaireParticulier.AddAsync(CompteBancaireParticulierRequest);
            await _appDbContext.SaveChangesAsync();

            return Ok(CompteBancaireParticulierRequest);

        }



        [HttpPut]
        [Route("{idCompteBan}")]
        public async Task<IActionResult> UpdateRF([FromRoute] int idCompteBan, CompteBancaireParticulier updateCBPrequest)
        {
            var CBP =
                await _appDbContext.ComptesBancaireParticulier.FindAsync(idCompteBan);


            CBP.Banque = updateCBPrequest.Banque;
            CBP.TypeCompte = updateCBPrequest.TypeCompte;
            CBP.Solde = updateCBPrequest.Solde;
            



            await _appDbContext.SaveChangesAsync();

            return Ok(CBP);


        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteCBP([FromRoute] int id)
        {
            var CBP =
                await _appDbContext.ComptesBancaireParticulier.FindAsync(id);

            _appDbContext.ComptesBancaireParticulier.Remove(CBP);
            await _appDbContext.SaveChangesAsync();
            return Ok();
        }

    }
}
