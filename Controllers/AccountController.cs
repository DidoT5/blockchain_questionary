using blockchain_questionary.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;
using User = blockchain_questionary.Entities.User;

namespace blockchain_questionary.Controllers;

[ApiController]
[EnableCors]
[Route("/api")]
public class AccountController : ControllerBase
{

    private readonly questionarydbContext questionarydbContext;


    public AccountController(questionarydbContext questionarydbContext)
    {
        this.questionarydbContext = questionarydbContext;
    }


    [HttpGet("GetUsers")]
    public async Task<ActionResult<List<User>>> Get()
    {
        var List = await questionarydbContext.Users.Select(
            s => new User
            {
                Email = s.Email,
                Nombre = s.Nombre,
                Apellido = s.Apellido,
                Contra = s.Contra
            }
        ).ToListAsync();

        return List.Count < 0 ? NotFound() : List;
    }

    [HttpPost("InsertUser")]
    public async Task<HttpStatusCode> InsertUser(User user)
    {
        questionarydbContext.Users.Add(user);
        await questionarydbContext.SaveChangesAsync();
        return HttpStatusCode.Created;
    }

    [HttpPost("LoginUser")]
    public async Task<ActionResult<User>> LoginUser(User user)
    {

        try
        {
            var log = await questionarydbContext.Users.Where(x => x.Email.Equals(user.Email) && x.Contra.Equals(user.Contra)).FirstOrDefaultAsync();

            if (log == null)
            {
                return NotFound();
            }
            else
                return user;

        }
        catch (Exception)
        {
            return StatusCode(StatusCodes.Status500InternalServerError,
                "Error retrieving data from the database");
        }
    }

}
