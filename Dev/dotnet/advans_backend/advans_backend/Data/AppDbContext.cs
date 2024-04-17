using advans_backend.Models;
using Microsoft.EntityFrameworkCore;

namespace advans_backend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<user> Users { get; set; }
        public DbSet<Demande_credit> Demande_credit { get; set; }
        public DbSet<Client> Clients { get; set; }


        

    }
}
