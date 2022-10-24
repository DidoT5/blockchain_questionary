using blockchain_questionary.Entities;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.


builder.Services.AddDbContext<questionarydbContext>(
    dbContextOptions => dbContextOptions
        .UseMySql("server=localhost;port=3306;user=root;password=root-;database=questionarydb", ServerVersion.AutoDetect("server=localhost;port=3306;user=root;password=root;database=questionarydb"))
        // The following three options help with debugging, but should
        // be changed or removed for production.
        .LogTo(Console.WriteLine, LogLevel.Information)
        .EnableSensitiveDataLogging()
        .EnableDetailedErrors()
);

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "MyPolicy",
                policy => {
                    policy.WithOrigins("https://localhost:7195", "https://localhost:44446")
                    .WithMethods("POST", "PUT", "DELETE", "GET")
                    .AllowAnyHeader()
                    .AllowAnyOrigin()
                    .AllowAnyMethod();
                });
});


builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseAuthentication();
app.UseRouting();
app.UseCors("MyPolicy");
app.UseAuthorization();
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");;

app.Run();
