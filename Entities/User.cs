using System;
using System.Collections.Generic;

namespace blockchain_questionary.Entities
{
    public partial class User
    {
        public string Email { get; set; } = null!;
        public string Nombre { get; set; } = null!;
        public string Apellido { get; set; } = null!;
        public string Contra { get; set; } = null!;
    }
}
