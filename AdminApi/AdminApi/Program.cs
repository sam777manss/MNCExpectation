using AdminApi.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<RegisterDBContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultString")));

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//enable cors start
builder.Services.AddCors(options =>
{
    options.AddPolicy("MyAllowPolicy",
        build =>
        {
            build.WithOrigins("http://127.0.0.1:5500", "http://localhost:3001").AllowAnyMethod()
                   .AllowAnyHeader();
        });
});
//enable cors end

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseCors("MyAllowPolicy");

app.UseAuthorization();

app.MapControllers();

app.Run();
