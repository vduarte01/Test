using System.ComponentModel.DataAnnotations;
using System;

namespace WebApplication.Entities
{
    public class Bonus
    {

        [Display(Name = "Id")]
        public int Id { get; set; }

        public DateTime Bonus_Date { get; set; }

        public int Bonus_Value { get; set; }

        public int Longevity_Years { get; set; }

        public decimal Hours_From_Last { get; set; }

        public decimal Hours_From_Hire_Date { get; set; }
    }
}
