using blockchain_questionary.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;
using Question = blockchain_questionary.Entities.Question;

namespace blockchain_questionary.Controllers
{

    [ApiController]
    [EnableCors]
    [Route("/api/question")]
    public class QuestionController : ControllerBase
    {

        private readonly questionarydbContext questionarydbContext;


        public QuestionController(questionarydbContext questionarydbContext)
        {
            this.questionarydbContext = questionarydbContext;
        }


        [HttpGet("GetQuestions")]
        public async Task<ActionResult<List<Question>>> Get()
        {
            var List = await questionarydbContext.Questions.Select(
                s => new Question
                {
                    Id = s.Id,
                    Quest = s.Quest,
                    Tipo = s.Tipo
                }
            ).ToListAsync();

            return List.Count < 0 ? NotFound() : List;
        }

    }
}
