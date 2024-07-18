using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace advans_backend.Migrations
{
    /// <inheritdoc />
    public partial class Agencecoll : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "IdAgence",
                table: "ClientsParticulier",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "IdAgence",
                table: "ClientsEntreprise",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_ClientsParticulier_IdAgence",
                table: "ClientsParticulier",
                column: "IdAgence");

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

            migrationBuilder.AddForeignKey(
                name: "FK_ClientsParticulier_RefAgences_IdAgence",
                table: "ClientsParticulier",
                column: "IdAgence",
                principalTable: "RefAgences",
                principalColumn: "IdAgence");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ClientsEntreprise_RefAgences_IdAgence",
                table: "ClientsEntreprise");

            migrationBuilder.DropForeignKey(
                name: "FK_ClientsParticulier_RefAgences_IdAgence",
                table: "ClientsParticulier");

            migrationBuilder.DropIndex(
                name: "IX_ClientsParticulier_IdAgence",
                table: "ClientsParticulier");

            migrationBuilder.DropIndex(
                name: "IX_ClientsEntreprise_IdAgence",
                table: "ClientsEntreprise");

            migrationBuilder.DropColumn(
                name: "IdAgence",
                table: "ClientsParticulier");

            migrationBuilder.DropColumn(
                name: "IdAgence",
                table: "ClientsEntreprise");
        }
    }
}
