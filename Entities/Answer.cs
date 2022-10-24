using System;
using System.Collections.Generic;

namespace blockchain_questionary.Entities
{
    public partial class Answer
    {
        public int Id { get; set; }
        public int Questid { get; set; }
        public string Email { get; set; } = null!;
        public string Ans { get; set; } = null!;
        public DateOnly Fecha { get; set; }
    }
}
