using advans_backend.Data;
using advans_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace advans_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProduitController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        public ProduitController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllProduits()
        {
            var Produits = await _appDbContext.RefProduit.ToListAsync();
            return Ok(Produits);
        }

        [HttpPost]

        public async Task<IActionResult> AjoutProduit([FromBody] Produit ProduitRequest)
        {
            

            // Ajouter l'Analyse au contexte et l'enregistrer dans la base de données
            await _appDbContext.RefProduit.AddAsync(ProduitRequest);
            await _appDbContext.SaveChangesAsync();

            return Ok(ProduitRequest);

        }

        [HttpGet("{idProduit}")]
        public async Task<ActionResult<string>> GetNomProduitById(int idProduit)
        {
            var Produit = await _appDbContext.RefProduit
                .FirstOrDefaultAsync(p => p.IdProduit == idProduit);

            if (Produit == null)
            {
                return NotFound(); // Secteur d'activité non trouvé
            }

            return Ok(new { Produit = Produit.NomProduit });
        }


        [HttpPut]
        [Route("{idProduit}")]
        public async Task<IActionResult> UpdateProduit([FromRoute] int idProduit, Produit updateProduitRequest)
        {
            var Produit =
                await _appDbContext.RefProduit.FindAsync(idProduit);


            Produit.NomProduit = updateProduitRequest.NomProduit;



            await _appDbContext.SaveChangesAsync();

            return Ok(Produit);


        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteProduit([FromRoute] int id)
        {
            var Produit =
                await _appDbContext.RefProduit.FindAsync(id);

            _appDbContext.RefProduit.Remove(Produit);
            await _appDbContext.SaveChangesAsync();
            return Ok();
        }
    }
}
