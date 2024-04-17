using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace advans_backend.Migrations
{
    /// <inheritdoc />
    public partial class InitialUserDat : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
            name: "RefreshToken",
            table: "Users",
            nullable: true);

            migrationBuilder.AddColumn<DateTime>(
            name: "RefreshTokenExpiryTime",
            table: "Users",
            nullable: true);
        }
    }
}
