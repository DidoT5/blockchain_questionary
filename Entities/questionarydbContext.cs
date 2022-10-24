using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace blockchain_questionary.Entities
{
    public partial class questionarydbContext : DbContext
    {
        public questionarydbContext()
        {
        }

        public questionarydbContext(DbContextOptions<questionarydbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Answer> Answers { get; set; } = null!;
        public virtual DbSet<Question> Questions { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseMySql("server=localhost;port=3306;user=root;password=Betis1986-;database=questionarydb", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.30-mysql"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseCollation("utf8mb4_0900_ai_ci")
                .HasCharSet("utf8mb4");

            modelBuilder.Entity<Answer>(entity =>
            {
                entity.ToTable("answer");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Ans)
                    .HasMaxLength(64)
                    .HasColumnName("ans");

                entity.Property(e => e.Email)
                    .HasMaxLength(125)
                    .HasColumnName("email");

                entity.Property(e => e.Fecha).HasColumnName("fecha");

                entity.Property(e => e.Questid).HasColumnName("questid");
            });

            modelBuilder.Entity<Question>(entity =>
            {
                entity.ToTable("question");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Quest)
                    .HasMaxLength(512)
                    .HasColumnName("quest");

                entity.Property(e => e.Tipo).HasColumnName("tipo");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.Email)
                    .HasName("PRIMARY");

                entity.ToTable("users");

                entity.HasIndex(e => e.Email, "email_UNIQUE")
                    .IsUnique();

                entity.Property(e => e.Email)
                    .HasMaxLength(125)
                    .HasColumnName("email");

                entity.Property(e => e.Apellido)
                    .HasMaxLength(125)
                    .HasColumnName("apellido");

                entity.Property(e => e.Contra)
                    .HasMaxLength(125)
                    .HasColumnName("contra");

                entity.Property(e => e.Nombre)
                    .HasMaxLength(125)
                    .HasColumnName("nombre");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
