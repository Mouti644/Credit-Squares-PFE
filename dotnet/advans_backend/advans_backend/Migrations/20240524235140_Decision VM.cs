using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace advans_backend.Migrations
{
    /// <inheritdoc />
    public partial class DecisionVM : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Decision",
                table: "VisiteManagements",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Decision",
                table: "VisiteManagements");
        }
    }
}
