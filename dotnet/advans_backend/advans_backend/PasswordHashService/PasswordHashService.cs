using BCrypt.Net;
namespace advans_backend.PasswordHashService
{
    public interface IPasswordHashService
    {
        string HashPassword(string password);
    }
    public class PasswordHashService : IPasswordHashService 
    {
        public string HashPassword(string password)
        {
            return BCrypt.Net.BCrypt.HashPassword(password);
        }
    }
}
