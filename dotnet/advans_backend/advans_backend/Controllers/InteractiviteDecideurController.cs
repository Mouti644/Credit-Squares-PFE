using advans_backend.Data;
using advans_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace advans_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InteractiviteDecideurController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        public InteractiviteDecideurController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }


        [HttpGet]
        public async Task<IActionResult> GetAllInterDecideur()
        {

            var Interactivites = await _appDbContext.InteractivitesDecideur.ToListAsync();
            return Ok(Interactivites);
        }

        [HttpPost]
        public async Task<IActionResult> AjoutInterDecideur([FromBody] InteractiviteDecideur InteractiviteDecideurrequest)
        {

            // Vérifier si un enregistrement avec le même nom existe déjà dans la demande spécifiée
            var existingInterdecideur = await _appDbContext.InteractivitesDecideur
                .FirstOrDefaultAsync(i => i.IdDemande == InteractiviteDecideurrequest.IdDemande
                                          && i.Decideur == InteractiviteDecideurrequest.Decideur);

            if (existingInterdecideur != null)
            {
                // Un enregistrement avec le même nom existe déjà dans cette demande
                return BadRequest("Un enregistrement avec le même nom existe déjà dans cette demande.");
            }
            await _appDbContext.InteractivitesDecideur.AddAsync(InteractiviteDecideurrequest);
            await _appDbContext.SaveChangesAsync();
            return Ok(InteractiviteDecideurrequest);
        }

        [HttpGet]
        [Route("{idDemande}")]
        public async Task<IActionResult> GetInterDecideur([FromRoute] int idDemande)
        {
            var InterDecideur =
                await _appDbContext.InteractivitesDecideur.FirstOrDefaultAsync(x => x.IdDemande == idDemande);

            if (InterDecideur == null)
            {
                return BadRequest("InterDecideur n'existe pas.");
            }

            return Ok(InterDecideur);
        }

       


        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> UpdateInterDecideur([FromRoute] int id, InteractiviteDecideur updateInterDecideurRequest)
        {


            var InterDecideur =
                await _appDbContext.InteractivitesDecideur.FindAsync(id);

            if (InterDecideur == null)
            {
                return BadRequest("InterDecideur n'existe pas.");
            }



            InterDecideur.Decideur = updateInterDecideurRequest.Decideur;
            InterDecideur.Remarque = updateInterDecideurRequest.Remarque;
            InterDecideur.Reponse = updateInterDecideurRequest.Reponse;

            await _appDbContext.SaveChangesAsync();

            return Ok(InterDecideur);


        }

        [HttpPost]
        [Route("update-comite-ids")]
        public async Task<IActionResult> UpdateComiteIds()
        {
            // Récupérer tous les InteractiviteDecideur
            var interactivites = await _appDbContext.InteractivitesDecideur.ToListAsync();

            // Récupérer tous les Comites
            var comites = await _appDbContext.Comites.ToListAsync();

            // Parcourir chaque InteractiviteDecideur et vérifier s'il y a une correspondance dans Comites
            foreach (var interactivite in interactivites)
            {
                var comite = comites.FirstOrDefault(c => c.IdDemande == interactivite.IdDemande);
                if (comite != null)
                {
                    interactivite.IdComite = comite.IdComite;
                }
            }

            // Sauvegarder les modifications
            await _appDbContext.SaveChangesAsync();

            return Ok("Les IdComite ont été mis à jour avec succès pour les enregistrements correspondants.");
        }

        [HttpGet("check-interactivite-exists/{idDemande}/{decideur}")]
        public async Task<IActionResult> CheckComiteExists(int idDemande, string decideur)
        {
            var interactivite = await _appDbContext.InteractivitesDecideur
                .FirstOrDefaultAsync(x => x.IdDemande == idDemande && x.Decideur == decideur);

            if (interactivite == null)
            {
                return Ok(false); // ou BadRequest("Comite n'existe pas.") si vous préférez envoyer une erreur
            }

            return Ok(interactivite);
        }


        

    }
}
