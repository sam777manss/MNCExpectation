using Microsoft.EntityFrameworkCore;

namespace AdminApi.Models
{
    public class RegisterDBContext: DbContext
    {
        public RegisterDBContext(DbContextOptions<RegisterDBContext> options): base(options)
        {

        }

        public DbSet<RegisterData> registerDatas { get; set; } = null!;
    }
}
