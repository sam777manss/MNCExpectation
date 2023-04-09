using AdminApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AdminApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegisterDatasController : ControllerBase
    {
        private readonly RegisterDBContext? registerDBContext;

        public RegisterDatasController(RegisterDBContext? _registerDBContext)
        {
            registerDBContext = _registerDBContext;
        }

        [HttpGet]
        [Route("GetTotalUser")]
        public async Task<ActionResult<IEnumerable<RegisterData>>> GetTotalUser()
        {
            return await registerDBContext.registerDatas.ToListAsync();
        }


        [HttpPost]
        [Route("AddUser")]
        public async Task<ActionResult<RegisterData>> RegisterUser([FromForm] RegisterData user)
        {
            string message;
            try
            {
                if (ModelState.IsValid)
                {
                    Console.WriteLine(true);
                    bool flag = registerDBContext.registerDatas.Any(e => e.Email == user.Email);
                    if (!flag)
                    {
                        registerDBContext.registerDatas.Add(user);
                        await registerDBContext.SaveChangesAsync();
                        message = "User Addded Sucessfully";
                        return Ok(new { message }); // return a 200 OK status code with message
                    }
                    else
                    {
                        message = "User already exists";
                        return Ok(new { message }); // return a 200 OK status code with message
                    }
                }
                else
                {
                    return user;
                }
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet]
        [Route("GetById/{id}")]
        public async Task<ActionResult<RegisterData>> GetregisterId(int id)
        {
            if (registerDBContext.registerDatas == null)
            {
                return NotFound();
            }
            var emp = await registerDBContext.registerDatas.FindAsync(id);
            if (emp == null)
            {
                return NotFound();
            }
            return emp;
        }
    }
}
