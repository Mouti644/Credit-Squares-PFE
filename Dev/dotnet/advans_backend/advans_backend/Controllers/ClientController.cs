using advans_backend.Data;
using advans_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace advans_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientController: ControllerBase
    {
        private readonly AppDbContext _appDbContext;

        public ClientController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpGet]

        public async Task<IActionResult> GetAllClients()
        {
            var client = await _appDbContext.Clients.ToListAsync();
            return Ok(client);
        }

        [HttpPost]
        public async Task<IActionResult> AjoutClient([FromBody] Client clientrequest)
        {

            await _appDbContext.Clients.AddAsync(clientrequest);
            await _appDbContext.SaveChangesAsync();
            return Ok(clientrequest);

        }
    }
}
