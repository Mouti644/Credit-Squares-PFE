using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace advans_backend.Migrations
{
    /// <inheritdoc />
    public partial class comite : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_InteractiviteDecideur_Comites_ComiteIdComite",
                table: "InteractiviteDecideur");

            migrationBuilder.DropPrimaryKey(
                name: "PK_InteractiviteDecideur",
                table: "InteractiviteDecideur");

            migrationBuilder.RenameTable(
                name: "InteractiviteDecideur",
                newName: "InteractivitesDecideur");

            migrationBuilder.RenameColumn(
                name: "ComiteIdComite",
                table: "InteractivitesDecideur",
                newName: "IdComite");

            migrationBuilder.RenameIndex(
                name: "IX_InteractiviteDecideur_ComiteIdComite",
                table: "InteractivitesDecideur",
                newName: "IX_InteractivitesDecideur_IdComite");

            migrationBuilder.AddPrimaryKey(
                name: "PK_InteractivitesDecideur",
                table: "InteractivitesDecideur",
                column: "IdInterDecideur");

            migrationBuilder.AddForeignKey(
                name: "FK_InteractivitesDecideur_Comites_IdComite",
                table: "InteractivitesDecideur",
                column: "IdComite",
                principalTable: "Comites",
                principalColumn: "IdComite");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_InteractivitesDecideur_Comites_IdComite",
                table: "InteractivitesDecideur");

            migrationBuilder.DropPrimaryKey(
                name: "PK_InteractivitesDecideur",
                table: "InteractivitesDecideur");

            migrationBuilder.RenameTable(
                name: "InteractivitesDecideur",
                newName: "InteractiviteDecideur");

            migrationBuilder.RenameColumn(
                name: "IdComite",
                table: "InteractiviteDecideur",
                newName: "ComiteIdComite");

            migrationBuilder.RenameIndex(
                name: "IX_InteractivitesDecideur_IdComite",
                table: "InteractiviteDecideur",
                newName: "IX_InteractiviteDecideur_ComiteIdComite");

            migrationBuilder.AddPrimaryKey(
                name: "PK_InteractiviteDecideur",
                table: "InteractiviteDecideur",
                column: "IdInterDecideur");

            migrationBuilder.AddForeignKey(
                name: "FK_InteractiviteDecideur_Comites_ComiteIdComite",
                table: "InteractiviteDecideur",
                column: "ComiteIdComite",
                principalTable: "Comites",
                principalColumn: "IdComite");
        }
    }
}
