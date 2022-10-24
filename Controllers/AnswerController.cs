using blockchain_questionary.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;
using Answer = blockchain_questionary.Entities.Answer;

namespace blockchain_questionary.Controllers
{
    public class AnswerController:ControllerBase
    {

        private readonly questionarydbContext questionarydbContext;

        public AnswerController(questionarydbContext questionarydbContext)
        {
            this.questionarydbContext = questionarydbContext;
        }

        [HttpPost("PostAnswers")]
        public async Task<HttpStatusCode> InsertAnswers(List<Answer> list)
        {
            for(int i = 0; i < list.Count; i++)
            {
                var answer = list[i];
                questionarydbContext.Answers.Add(answer);
                await questionarydbContext.SaveChangesAsync();
            }

            return HttpStatusCode.Created;
        }

    }
}
