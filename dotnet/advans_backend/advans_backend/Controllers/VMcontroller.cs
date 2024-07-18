using advans_backend.Data;
using advans_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace advans_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VMController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;

        public VMController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllVisiteManagements()
        {
            var visiteManagements = await _appDbContext.VisiteManagements.ToListAsync();
            return Ok(visiteManagements);
        }


        [HttpGet("{idDemande}")]
        public async Task<IActionResult> CheckVM(int idDemande)
        {
            var vm = await _appDbContext.VisiteManagements.FirstOrDefaultAsync(x => x.IdDemande == idDemande);

            if (vm == null)
            {
                return Ok(false); // ou BadRequest("VM n'existe pas.") si vous préférez envoyer une erreur
            }

            return Ok(vm);
        }

        [HttpPost]
        public async Task<IActionResult> AjoutVisiteManagement([FromBody] VisiteManagement visiteManagementRequest)
        {
            // Vérifier si la demande de crédit existe
            var demande = await _appDbContext.Demande_credit
                                             .FirstOrDefaultAsync(d => d.IdDemande == visiteManagementRequest.IdDemande);

            if (demande == null)
            {
                return BadRequest("La demande de crédit spécifiée n'existe pas.");
            }

            // Vérifier si le statut de la demande est "Demande brouillon"
            if (demande.Statut != "Attente accord client")
            {
                return BadRequest("La demande de crédit n'est pas dans le statut 'Attente accord client'.");
            }

            var visiteManagementExists = await _appDbContext.VisiteManagements.AnyAsync(c => c.IdDemande == visiteManagementRequest.IdDemande);

            if (visiteManagementExists)
            {
                return BadRequest("Une Visite Managements existe déjà pour cette demande de crédit.");
            }

            // Ajouter le VisiteManagement au contexte et l'enregistrer dans la base de données
            await _appDbContext.VisiteManagements.AddAsync(visiteManagementRequest);
            await _appDbContext.SaveChangesAsync();

            return Ok(visiteManagementRequest);
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> UpdateVM([FromRoute] int id, VisiteManagement updateVMRequest)
        {


            var VM =
                await _appDbContext.VisiteManagements.FindAsync(id);

            if (VM == null)
            {
                return BadRequest("CheckList n'existe pas.");
            }



            VM.ElementAverifier = updateVMRequest.ElementAverifier;
            VM.ElementRecueillis = updateVMRequest.ElementRecueillis;
            VM.AvisDecideur = updateVMRequest.AvisDecideur;

            VM.DateDebutVM = updateVMRequest.DateDebutVM;
           

            await _appDbContext.SaveChangesAsync();

            return Ok(VM);


        }

        // Nouveau endpoint pour mettre à jour DateFin et Duree
        [HttpPut]
        [Route("updateDateVM/{id}")]
        public async Task<IActionResult> UpdateDate([FromRoute] int id)
        {
            var VM = await _appDbContext.VisiteManagements.FindAsync(id);

            if (VM == null)
            {
                return BadRequest("VM n'existe pas.");
            }

            VM.DateFinVM = DateTime.Now;

            if (VM.DateDebutVM.HasValue)
            {
                VM.DureeVM = (int)(VM.DateFinVM.Value - VM.DateDebutVM.Value).TotalDays;
            }
            else
            {
                VM.DureeVM = null;
            }

            await _appDbContext.SaveChangesAsync();
            return Ok(VM);
        }
    }
}
