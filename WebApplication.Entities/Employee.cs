using System.ComponentModel.DataAnnotations;
using System;

namespace WebApplication.Entities
{
    public class Employee
    {

        [Display(Name = "Id")]
        public int Id { get; set; }

        [Display(Name = "JAMIS")]
        public int Id_Jamis { get; set; }

        [Display(Name = "COSPOINT")]
        public string Id_Cospoint { get; set; }

        [Display(Name = "Email")]
        public string Email { get; set; }

        [Display(Name = "Payroll")]
        public string Payroll_Code { get; set; }

        [Display(Name = "Earning Group")]
        public string Earning_Group { get; set; }

        [Display(Name = "Name")]
        public string Employee_Name { get; set; }

        [Display(Name = "Last Name")]
        public string Last_Name { get; set; }

        [Display(Name = "Firts Name")]
        public string Firts_Name { get; set; }

        [Display(Name = "Hire Date")]
        public string Hire_Date { get; set; }

        [Display(Name = "Hiring Days")]
        public int Hiring_Longevity_Days { get; set; }

        [Display(Name = "Total Labor H.")]
        public decimal Total_Labor_Hours { get; set; }

        [Display(Name = "Last Bonus")]
        public string Last_Bonus_Date { get; set; }

        [Display(Name = "Labor Hours")]
        public decimal Labor_Hours_From_Last_Bonus { get; set; }

        [Display(Name = "Cut-off Date")]
        public DateTime Cutoff_Date { get; set; }

        [Display(Name = "Status")]
        public bool Status { get; set; }

        public Bonus Bonus { get; set; }


        public TypeContract TypeContract {get;set;}


    }
}
