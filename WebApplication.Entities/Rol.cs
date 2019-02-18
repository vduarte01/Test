using System.ComponentModel.DataAnnotations;

namespace WebApplication.Entities
{
    public class Rol
    {
        public int idRol { get; set; }

        public bool isAdmin { get; set; }

        [Display(Name = "Rol")]
        public string Name { get; set; }
    }
}