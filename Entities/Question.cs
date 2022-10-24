using System;
using System.Collections.Generic;

namespace blockchain_questionary.Entities
{
    public partial class Question
    {
        public int Id { get; set; }
        public string Quest { get; set; } = null!;
        public int Tipo { get; set; }
    }
}
