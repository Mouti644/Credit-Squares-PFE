using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace advans_backend.Migrations
{
    /// <inheritdoc />
    public partial class propose : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "MontantProposé",
                table: "Analyses",
                newName: "MontantPropose");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "MontantPropose",
                table: "Analyses",
                newName: "MontantProposé");
        }
    }
}
