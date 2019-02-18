using System.ComponentModel.DataAnnotations;

namespace WebApplication.Entities
{
    public class Permission
    {

        [Display(Name = "Description")]
        public string description { get; set; }

        public int Id { get; set; }

        public int idAplication { get; set; }

        [Display(Name = "Page")]
        public string name { get; set; }

        [Display(Name = "Parent")]
        public int parent_ID { get; set; }

        public string permission { get; set; }
        [Display(Name = "Rol ")]
        public Rol rol { get; set; }
    }
}