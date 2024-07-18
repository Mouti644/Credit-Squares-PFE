using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace advans_backend.Migrations
{
    /// <inheritdoc />
    public partial class nom : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "NomActivite",
                table: "ClientsParticulier",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "NomSecteurActivite",
                table: "ClientsParticulier",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "NomSousActivite",
                table: "ClientsParticulier",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "NomActivite",
                table: "ClientsParticulier");

            migrationBuilder.DropColumn(
                name: "NomSecteurActivite",
                table: "ClientsParticulier");

            migrationBuilder.DropColumn(
                name: "NomSousActivite",
                table: "ClientsParticulier");
        }
    }
}
