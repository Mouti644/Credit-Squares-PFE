using advans_backend.Data;
using advans_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace advans_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientParticulierController : ControllerBase
    {

        private readonly AppDbContext _appDbContext;

        public ClientParticulierController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllClientsParticulier()
        {
            var clientParticulier = await _appDbContext.ClientsParticulier.ToListAsync();
            return Ok(clientParticulier);
        }

        [HttpPost]
        public async Task<IActionResult> AjoutClientParticulier([FromBody] ClientParticulier clientParticulierrequest)
        {

            // Vérifier la longueur de l'attribut IdentiteClient
            if (clientParticulierrequest.IdentiteClient.Length != 8)
            {
                return BadRequest("La longueur de l'attribut IdentiteClient doit être de 8 caractères.");
            }

            // Vérifier si l'IdentiteClient existe déjà dans la base de données
            var clientExistant = await _appDbContext.ClientsParticulier
                .FirstOrDefaultAsync(c => c.IdentiteClient == clientParticulierrequest.IdentiteClient);

            if (clientExistant != null)
            {
                return BadRequest("Un client avec cette IdentiteClient existe déjà.");
            }

            await _appDbContext.ClientsParticulier.AddAsync(clientParticulierrequest);
            await _appDbContext.SaveChangesAsync();
            return Ok(clientParticulierrequest);

        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetClientParticulier([FromRoute] int id)
        {
            var ClientParticulier =
                await _appDbContext.ClientsParticulier.FirstOrDefaultAsync(x => x.IdClientParticulier == id);

            if (ClientParticulier == null)
            {
                   return BadRequest("Le client spécifié n'existe pas.");
            }
            
            return Ok(ClientParticulier);
        }

        [HttpGet("nombreClientsParticuliersParNomAgence")]
        public async Task<IActionResult> GetnombreClientsParticuliersParNomAgence()
        {
            // Compter le nombre de demandes par nom d'agence
            var nombreClientsParticuliersParNomAgence = await _appDbContext.ClientsParticulier
                .GroupBy(d => d.NomAgence)
                .Select(g => new
                {
                    NomAgence = g.Key,
                    NombreClients = g.Count()
                })
                .ToListAsync();

            return Ok(nombreClientsParticuliersParNomAgence);
        }

        [HttpGet("nombreClientsParticuParDate")]
        public async Task<IActionResult> GetNombreClientsParDate()
        {
            var demandesEntre1Et10 = await _appDbContext.ClientsParticulier
                .Where(d => d.DateCreation.HasValue && d.DateCreation.Value.Day >= 1 && d.DateCreation.Value.Day <= 10)
                .CountAsync();

            var demandesEntre10Et20 = await _appDbContext.ClientsParticulier
                .Where(d => d.DateCreation.HasValue && d.DateCreation.Value.Day > 10 && d.DateCreation.Value.Day <= 20)
                .CountAsync();

            var demandesEntre20Et31 = await _appDbContext.ClientsParticulier
                .Where(d => d.DateCreation.HasValue && d.DateCreation.Value.Day > 20 && d.DateCreation.Value.Day <= 31)
                .CountAsync();

            return Ok(new
            {
                ClientsEntre1Et10 = demandesEntre1Et10,
                ClientsEntre10Et20 = demandesEntre10Et20,
                ClientsEntre20Et31 = demandesEntre20Et31
            });
        }

        [HttpGet("nombreClientsParticuliersParNomSecteur")]
        public async Task<IActionResult> GetNombreClientsParNomSecteur()
        {
            // Compter le nombre de demandes par nom d'agence
            var nombreClientsParNomSecteur = await _appDbContext.ClientsParticulier
                .GroupBy(d => d.NomSecteurActivite)
                .Select(g => new
                {
                    NomSecteurActivite = g.Key,
                    NombreClients = g.Count()
                })
                .ToListAsync();

            return Ok(nombreClientsParNomSecteur);
        }

        [HttpGet("nombreClientsParSitFam")]
        public async Task<IActionResult> GetNombreClientsParSitFam()
        {
            // Compter le nombre de demandes par nom d'agence
            var nombreClientsParSitFam = await _appDbContext.ClientsParticulier
                .GroupBy(d => d.SituationFamiliale)
                .Select(g => new
                {
                    SituationFamiliale = g.Key,
                    NombreClients = g.Count()
                })
                .ToListAsync();

            return Ok(nombreClientsParSitFam);
        }

        [HttpGet("nombreClientsParticuliersParSitImm")]
        public async Task<IActionResult> GetNombreClientsParSitImm()
        {
            // Compter le nombre de demandes par nom d'agence
            var nombreClientsParSitImm = await _appDbContext.ClientsParticulier
                .GroupBy(d => d.SituationImmobilier)
                .Select(g => new
                {
                    SituationImmobilier = g.Key,
                    NombreClients = g.Count()
                })
                .ToListAsync();

            return Ok(nombreClientsParSitImm);
        }

        [HttpGet("nombreClientsParSex")]
        public async Task<IActionResult> GetNombreClientsParSex()
        {
            // Compter le nombre de demandes par nom d'agence
            var nombreClientsParSex = await _appDbContext.ClientsParticulier
                .GroupBy(d => d.Sex)
                .Select(g => new
                {
                    Sex = g.Key,
                    NombreClients = g.Count()
                })
                .ToListAsync();

            return Ok(nombreClientsParSex);
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> UpdateClientParticulier([FromRoute] int id, ClientParticulier updateClientParticulierRequest)
        {

            // Vérifier la longueur de l'attribut IdentiteClient
            if (updateClientParticulierRequest.IdentiteClient.Length != 8)
            {
                return BadRequest("La longueur de l'attribut IdentiteClient doit être de 8 caractères.");
            }

            var ClientParticulier =
                await _appDbContext.ClientsParticulier.FindAsync(id);

            if (ClientParticulier == null)
            {
                return BadRequest("Le client spécifié n'existe pas.");
            }

            ClientParticulier.Nom=updateClientParticulierRequest.Nom;
            ClientParticulier.Prenom = updateClientParticulierRequest.Prenom;
            ClientParticulier.IdentiteClient = updateClientParticulierRequest.IdentiteClient;
            ClientParticulier.Sex = updateClientParticulierRequest.Sex;
            ClientParticulier.Age = updateClientParticulierRequest.Age;
            ClientParticulier.DateNaissance = updateClientParticulierRequest.DateNaissance;
            ClientParticulier.Telephone = updateClientParticulierRequest.Telephone;
            ClientParticulier.Ville = updateClientParticulierRequest.Ville;
            ClientParticulier.NomAgence = updateClientParticulierRequest.NomAgence;
            ClientParticulier.Gestionnaire = updateClientParticulierRequest.Gestionnaire;
           
            ClientParticulier.FonctionProfessionnelle = updateClientParticulierRequest.FonctionProfessionnelle;
            ClientParticulier.SalaireNetMensuel = updateClientParticulierRequest.SalaireNetMensuel;
            ClientParticulier.AutresRevenusMensuel = updateClientParticulierRequest.AutresRevenusMensuel;
            
            ClientParticulier.Activite = updateClientParticulierRequest.Activite;
            ClientParticulier.SousActivite = updateClientParticulierRequest.SousActivite;
            

            await _appDbContext.SaveChangesAsync();

            return Ok(ClientParticulier);


        }



        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteClientParticulier([FromRoute] int id)
        {
            var ClientParticulier =
                await _appDbContext.ClientsParticulier.FindAsync(id);

            if (ClientParticulier == null)
            {
                return BadRequest("Le client spécifié n'existe pas.");
            }

            _appDbContext.ClientsParticulier.Remove(ClientParticulier);
            await _appDbContext.SaveChangesAsync();
            return Ok();
        }

    }
}
