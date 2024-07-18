using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace advans_backend.Migrations
{
    /// <inheritdoc />
    public partial class RemoveAgenceEntreprise : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ClientsEntreprise_RefAgences_IdAgence",
                table: "ClientsEntreprise");

            migrationBuilder.DropIndex(
                name: "IX_ClientsEntreprise_IdAgence",
                table: "ClientsEntreprise");

            migrationBuilder.DropColumn(
                name: "IdAgence",
                table: "ClientsEntreprise");

            migrationBuilder.DropColumn(
                name: "NomAgence",
                table: "ClientsEntreprise");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "IdAgence",
                table: "ClientsEntreprise",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "NomAgence",
                table: "ClientsEntreprise",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_ClientsEntreprise_IdAgence",
                table: "ClientsEntreprise",
                column: "IdAgence");

            migrationBuilder.AddForeignKey(
                name: "FK_ClientsEntreprise_RefAgences_IdAgence",
                table: "ClientsEntreprise",
                column: "IdAgence",
                principalTable: "RefAgences",
                principalColumn: "IdAgence");
        }
    }
}
