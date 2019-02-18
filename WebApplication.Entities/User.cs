using System.ComponentModel.DataAnnotations;
using System;

namespace WebApplication.Entities
{
    public class User
    {

        [Display(Name = "Authorize")]
        public bool autorize { get; set; }

        [Display(Name = "Change Password")]
        public bool changePasswordRequiered { get; set; }

        [Required(ErrorMessage = "The Email is required")]
        [Display(Name = "E-mail")]
        public string email { get; set; }

        public int idAplication { get; set; }
        [Required(ErrorMessage = "The Name is required")]
        [Display(Name = "Name")]
        public string name { get; set; }

        [Required(ErrorMessage = "The Password is required")]
        [Display(Name = "Password")]
        public string password { get; set; }

        [Display(Name = "Rol")]
        public Rol rol { get; set; }

        [Display(Name = "Costpoint ID")]
        [Required(ErrorMessage = "The UserAccouting is required")]
        public string userAconting { get; set; }

        public int UserId { get; set; }

        [Display(Name = "User Name")]
        [Required(ErrorMessage = "The UserName is required")]
        public string userName { get; set; }

        [Display(Name = "Last Date")]
        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy}")]
        public DateTime LastDate { get; set; }
    }
}