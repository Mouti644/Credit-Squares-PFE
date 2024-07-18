using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace advans_backend.Migrations
{
    /// <inheritdoc />
    public partial class Identiteid : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "NomAgence",
                table: "Demande_credit",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "NomClient",
                table: "Demande_credit",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "NomAgence",
                table: "Demande_credit");

            migrationBuilder.DropColumn(
                name: "NomClient",
                table: "Demande_credit");
        }
    }
}
