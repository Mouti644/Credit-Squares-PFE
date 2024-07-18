using advans_backend.Data;
using advans_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace advans_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientEntrepriseController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;

        public ClientEntrepriseController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpGet]

        public async Task<IActionResult> GetAllClientsEntreprise()
        {
            var clientEntreprise = await _appDbContext.ClientsEntreprise.ToListAsync();
            return Ok(clientEntreprise);
        }


        [HttpPost]
        public async Task<IActionResult> AjoutClientEntreprise([FromBody] ClientEntreprise clientEntrepriserequest)
        {
            // Vérifier la longueur de l'attribut IdentiteClient
            if (clientEntrepriserequest.IdentiteClient.Length != 8)
            {
                return BadRequest("La longueur de l'attribut IdentiteClient doit être de 8 caractères.");
            }

            // Vérifier si l'IdentiteClient existe déjà dans la base de données
            var clientExistant = await _appDbContext.ClientsEntreprise
                .FirstOrDefaultAsync(c => c.IdentiteClient == clientEntrepriserequest.IdentiteClient);

            if (clientExistant != null)
            {
                return BadRequest("Un client avec cette IdentiteClient existe déjà.");
            }

            await _appDbContext.ClientsEntreprise.AddAsync(clientEntrepriserequest);
            await _appDbContext.SaveChangesAsync();
            return Ok(clientEntrepriserequest);

        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetClientClientEntreprise([FromRoute] int id)
        {
            var ClientEntreprise =
                await _appDbContext.ClientsEntreprise.FirstOrDefaultAsync(x => x.IdClientEntreprise == id);

            if (ClientEntreprise == null)
            {
                return BadRequest("Le client spécifié n'existe pas.");
            }

            return Ok(ClientEntreprise);
        }
        [HttpGet("nombreClientsEntrepriseParNomAgence")]
        public async Task<IActionResult> GetNombreClientsParNomAgence()
        {
            // Compter le nombre de demandes par nom d'agence
            var nombreClientsParNomAgence = await _appDbContext.ClientsEntreprise
                .GroupBy(d => d.NomAgence)
                .Select(g => new
                {
                    NomAgence = g.Key,
                    NombreClients = g.Count()
                })
                .ToListAsync();

            return Ok(nombreClientsParNomAgence);
        }

        [HttpGet("nombreClientsEntrepriseParDate")]
        public async Task<IActionResult> GetNombreClientsParDate()
        {
            var demandesEntre1Et10 = await _appDbContext.ClientsEntreprise
                .Where(d => d.DateCreation.HasValue && d.DateCreation.Value.Day >= 1 && d.DateCreation.Value.Day <= 10)
                .CountAsync();

            var demandesEntre10Et20 = await _appDbContext.ClientsEntreprise
                .Where(d => d.DateCreation.HasValue && d.DateCreation.Value.Day > 10 && d.DateCreation.Value.Day <= 20)
                .CountAsync();

            var demandesEntre20Et31 = await _appDbContext.ClientsEntreprise
                .Where(d => d.DateCreation.HasValue && d.DateCreation.Value.Day > 20 && d.DateCreation.Value.Day <= 31)
                .CountAsync();

            return Ok(new
            {
                ClientsEntre1Et10 = demandesEntre1Et10,
                ClientsEntre10Et20 = demandesEntre10Et20,
                ClientsEntre20Et31 = demandesEntre20Et31
            });
        }

        [HttpGet("nombreClientsEntrepriseParNomSecteur")]
        public async Task<IActionResult> GetNombreClientsParNomSecteur()
        {
            // Compter le nombre de demandes par nom d'agence
            var nombreClientsParNomSecteur = await _appDbContext.ClientsEntreprise
                .GroupBy(d => d.NomSecteurActivite)
                .Select(g => new
                {
                    NomSecteurActivite = g.Key,
                    NombreClients = g.Count()
                })
                .ToListAsync();

            return Ok(nombreClientsParNomSecteur);
        }

        [HttpGet("nombreClientsEntrepriseParSitImm")]
        public async Task<IActionResult> GetNombreClientsParSitImm()
        {
            // Compter le nombre de demandes par nom d'agence
            var nombreClientsParSitImm = await _appDbContext.ClientsEntreprise
                .GroupBy(d => d.SituationImmobilier)
                .Select(g => new
                {
                    SituationImmobilier = g.Key,
                    NombreClients = g.Count()
                })
                .ToListAsync();

            return Ok(nombreClientsParSitImm);
        }

        [HttpGet("nombreClientsParNbrEmployes")]
        public async Task<IActionResult> GetClientsParNbrEmployes()
        {
            var employesMoinsDe10 = await _appDbContext.ClientsEntreprise
                .Where(d => d.NombreEmployes < 10)
                .CountAsync();

            var employesEntre10Et50 = await _appDbContext.ClientsEntreprise
                .Where(d => d.NombreEmployes >= 10 && d.NombreEmployes <= 50)
                .CountAsync();

            var employesPlusDe50 = await _appDbContext.ClientsEntreprise
                .Where(d => d.NombreEmployes > 50)
                .CountAsync();

            return Ok(new
            {
                EntrepriseMoinsDe10 = employesMoinsDe10,
                EntrepriseEntre10Et50 = employesEntre10Et50,
                EntreprisePlusDe50 = employesPlusDe50
            });
        }

        [HttpGet("nombreClientsParChiffreAffaire")]
        public async Task<IActionResult> GetClientsParChiffreAffaire()
        {
            var clients = await _appDbContext.ClientsEntreprise.ToListAsync();

            var chiffAffairesMoinsDe5000 = clients
                .Count(d => decimal.TryParse(d.ChiffreAffaireMensuel, out decimal chiffreAffaire) && chiffreAffaire < 5000);

            var chiffAffairesEntre5000Et50000 = clients
                .Count(d => decimal.TryParse(d.ChiffreAffaireMensuel, out decimal chiffreAffaire) && chiffreAffaire >= 5000 && chiffreAffaire <= 50000);

            var chiffAffairesPlusDe50000 = clients
                .Count(d => decimal.TryParse(d.ChiffreAffaireMensuel, out decimal chiffreAffaire) && chiffreAffaire > 50000);

            return Ok(new
            {
                ChiffAffairesMoinsDe5000 = chiffAffairesMoinsDe5000,
                ChiffAffairesEntre5000Et50000 = chiffAffairesEntre5000Et50000,
                ChiffAffairesPlusDe50000 = chiffAffairesPlusDe50000
            });
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> UpdateClientEntreprise([FromRoute] int id, ClientEntreprise updateClientEntrepriseRequest)
        {

            // Vérifier la longueur de l'attribut IdentiteClient
            if (updateClientEntrepriseRequest.IdentiteClient.Length != 8)
            {
                return BadRequest("La longueur de l'attribut IdentiteClient doit être de 8 caractères.");
            }

            var ClientEntreprise =
                await _appDbContext.ClientsEntreprise.FindAsync(id);

            if (ClientEntreprise == null)
            {
                return BadRequest("Le client spécifié n'existe pas.");
            }

            ClientEntreprise.Sigle = updateClientEntrepriseRequest.Sigle;
            ClientEntreprise.InterlocuteurPrincipal = updateClientEntrepriseRequest.InterlocuteurPrincipal;
            ClientEntreprise.Telephone = updateClientEntrepriseRequest.Telephone;
            ClientEntreprise.RaisonSociale = updateClientEntrepriseRequest.RaisonSociale;
            ClientEntreprise.ChiffreAffaireMensuel = updateClientEntrepriseRequest.ChiffreAffaireMensuel;
            ClientEntreprise.Ville = updateClientEntrepriseRequest.Ville;
            ClientEntreprise.NomAgence = updateClientEntrepriseRequest.NomAgence;
            ClientEntreprise.Gestionnaire = updateClientEntrepriseRequest.Gestionnaire;
           
            ClientEntreprise.DateCreationEntreprise = updateClientEntrepriseRequest.DateCreationEntreprise;
            ClientEntreprise.NombreEmployes = updateClientEntrepriseRequest.NombreEmployes;
            ClientEntreprise.NbrCreditBeneficies = updateClientEntrepriseRequest.NbrCreditBeneficies;
            ClientEntreprise.NbrPointsVente = updateClientEntrepriseRequest.NbrPointsVente;
            
            ClientEntreprise.Activite = updateClientEntrepriseRequest.Activite;
            ClientEntreprise.SousActivite = updateClientEntrepriseRequest.SousActivite;


            await _appDbContext.SaveChangesAsync();

            return Ok(ClientEntreprise);


        }


        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteClientEntreprise([FromRoute] int id)
        {
            var ClientEntreprise =
                await _appDbContext.ClientsEntreprise.FindAsync(id);

            if (ClientEntreprise == null)
            {
                return BadRequest("Le client spécifié n'existe pas.");
            }

            _appDbContext.ClientsEntreprise.Remove(ClientEntreprise);
            await _appDbContext.SaveChangesAsync();
            return Ok();
        }

    }
}
