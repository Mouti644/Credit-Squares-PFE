using advans_backend.Controllers;
using advans_backend.Data;
using advans_backend.EmailService;
using advans_backend.Models;
using advans_backend.PasswordHashService;
using advans_backend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace advans_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly ITokenService _tokenService;
        private EmailSender _emailSender;
        private readonly IPasswordHashService _passwordHashService;



        public AuthController(AppDbContext context, ITokenService tokenService, IEmailSender emailSender, IPasswordHashService passwordHashService)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
            _tokenService = tokenService ?? throw new ArgumentNullException(nameof(tokenService));
            _emailSender = (EmailSender?)(emailSender ?? throw new ArgumentNullException(nameof(emailSender)));
            _passwordHashService = passwordHashService;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] user loginuser)

        {
            if (loginuser is null)
            {
                return BadRequest("Requête client invalide");
            }


            //Email
            
            
            // Recherche de l'utilisateur dans la base de données
            var userFromDb = _context.Users.FirstOrDefault(u => u.Email == loginuser.Email);
            

            if (userFromDb is null)
                return Unauthorized();

            // Vérification de l'existence de l'utilisateur et de l'authentification

            // Vérification du mot de passe hashé
            if (!VerifyPassword(loginuser.Password, userFromDb.Password))
            {
                return Unauthorized("Adresse e-mail ou mot de passe incorrect.");
            }

            // Création des revendications pour le JWT (vous pouvez inclure plus d'informations ici)
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, userFromDb.UserName)
                //on ajoute role ici
                
            };
            var accessToken = _tokenService.GenerateAccessToken(claims);
            var refreshToken = _tokenService.GenerateRefreshToken();

            userFromDb.RefreshToken = refreshToken;
            userFromDb.RefreshTokenExpiryTime = DateTime.Now.AddDays(7);

            

            _context.SaveChanges();

            return Ok(new AuthenticatedResponse
            {
                Token = accessToken,
                RefreshToken = refreshToken
            });
             bool VerifyPassword(string enteredPassword, string hashedPassword)
            {
                // Vérifie si le mot de passe entré correspond au mot de passe hashé
                return BCrypt.Net.BCrypt.Verify(enteredPassword, hashedPassword);
            }
        }

        [HttpPost("reset-password")]
        public async Task<IActionResult> ResetPassword(ResetPasswordRequest request)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == request.Email);
            if (user == null)
            {
                // L'utilisateur n'existe pas
                return BadRequest("L'utilisateur avec cette adresse e-mail n'existe pas.");
            }

            // Générer un jeton de réinitialisation du mot de passe
            var resetToken = _tokenService.GenerateRefreshToken();

            // Stocker le jeton de réinitialisation dans la base de données pour l'utilisateur
            user.RefreshToken = resetToken;
            user.RefreshTokenExpiryTime = DateTime.Now.AddDays(5);
            await _context.SaveChangesAsync();

            // Envoyer un e-mail à l'utilisateur avec le lien de réinitialisation du mot de passe
            var resetLink = $"http://localhost:4200/reset-password-confirm?token={Uri.EscapeDataString(user.RefreshToken)}";
            var message = new Message(new string[] { user.Email }, "Réinitialisation du mot de passe", $"<html><body style='font-family: Arial, sans-serif; color: #1E1E1E;'><p>Cher utilisateur,<br><br>Pour réinitialiser votre mot de passe, veuillez cliquer sur le lien suivant : <br><a href='{resetLink}' style='color: #007bff;'>{resetLink}</a><br><br>Cordialement</p></body></html>");
            await _emailSender.SendEmailAsync(message);

            return Ok(new { message = "Un e-mail de réinitialisation du mot de passe a été envoyé à votre adresse e-mail." });
        }
        [HttpPost("reset-password-confirm")]
        public async Task<IActionResult> ResetPasswordConfirm(ResetPasswordConfirmRequest request)
        {
            if (request.Token == null)
            {
                return BadRequest("Le jeton de réinitialisation du mot de passe est manquant.");
            }
            if (request.NewPassword != request.ConfirmNewPassword)
            {
                // Les mots de passe ne sont pas identiques
                return BadRequest("Les mots de passe ne sont pas identiques.");
            }

            var user = await _context.Users.FirstOrDefaultAsync(u => u.RefreshToken == request.Token && u.RefreshTokenExpiryTime > DateTime.Now);
            if (user == null)
            {
                // Le jeton de réinitialisation est invalide ou a expiré
                return BadRequest("Le lien de réinitialisation du mot de passe est invalide ou a expiré.");
            }

            // Hasher le nouveau mot de passe
            var hashedPassword = _passwordHashService.HashPassword(request.NewPassword);

            // Mettre à jour le mot de passe de l'utilisateur
            user.Password = hashedPassword;
            user.RefreshToken = _tokenService.GenerateRefreshToken(); // Generate a new refresh token
            user.RefreshTokenExpiryTime = DateTime.Now.AddDays(1);
            await _context.SaveChangesAsync();

            request.Token = user.RefreshToken; // Set the new refresh token to the request object

            
            return Ok(new { message = "Votre mot de passe a été réinitialisé avec succès." });
        }

    }
}


