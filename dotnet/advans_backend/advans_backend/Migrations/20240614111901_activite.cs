using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace advans_backend.Migrations
{
    /// <inheritdoc />
    public partial class activite : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "IdActivite",
                table: "RefSousActiviteParticulier",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "IdSecteurActivite",
                table: "RefSousActiviteParticulier",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "IdActivite",
                table: "RefSousActiviteEntreprise",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "IdSecteurActivite",
                table: "RefSousActiviteEntreprise",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "IdSecteurActivite",
                table: "RefActiviteParticulier",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "IdSecteurActivite",
                table: "RefActiviteEntreprise",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IdActivite",
                table: "RefSousActiviteParticulier");

            migrationBuilder.DropColumn(
                name: "IdSecteurActivite",
                table: "RefSousActiviteParticulier");

            migrationBuilder.DropColumn(
                name: "IdActivite",
                table: "RefSousActiviteEntreprise");

            migrationBuilder.DropColumn(
                name: "IdSecteurActivite",
                table: "RefSousActiviteEntreprise");

            migrationBuilder.DropColumn(
                name: "IdSecteurActivite",
                table: "RefActiviteParticulier");

            migrationBuilder.DropColumn(
                name: "IdSecteurActivite",
                table: "RefActiviteEntreprise");
        }
    }
}
