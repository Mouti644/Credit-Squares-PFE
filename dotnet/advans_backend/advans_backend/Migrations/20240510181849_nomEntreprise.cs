using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace advans_backend.Migrations
{
    /// <inheritdoc />
    public partial class nomEntreprise : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "NomActivite",
                table: "ClientsEntreprise",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "NomSecteurActivite",
                table: "ClientsEntreprise",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "NomSousActivite",
                table: "ClientsEntreprise",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "NomActivite",
                table: "ClientsEntreprise");

            migrationBuilder.DropColumn(
                name: "NomSecteurActivite",
                table: "ClientsEntreprise");

            migrationBuilder.DropColumn(
                name: "NomSousActivite",
                table: "ClientsEntreprise");
        }
    }
}
