using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Configuration;
using System.Data.Entity.Core.Objects;
using System.Linq;
using WebApplication.Entities;
using WebApplication.Repository.Contracts;
using WebApplication.Repository.Context;

namespace WebApplication.Repository.Repositories
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private IEnumerable<object> result;

        public List<Employee> GetListEmployee(Employee oEmployee)
        {
            try
            {
                List<Employee> listemp = new List<Employee>();
                List<String> listem_ = new List<String>();
                List<Bonus> listBonus = new List<Bonus>();

                string fechaReco = "0001/01/01 00:00";
                DateTime fechaR = new DateTime();
                fechaR = DateTime.Parse(fechaReco);


                using (TESTEntities ctx = new TESTEntities())
                {

                    listemp = (from e in ctx.EMPLOYEEs
                               join w in ctx.TYPE_CONTRACT on e.TypCon_Id equals w.TypCon_Id
                               //where e.Emp_JAMIS_Employee_Id != null// && e.Emp_Status == true
                               select new Employee()
                           {
                               Id = e.Emp_Id,
                               Id_Jamis = 1,
                               Id_Cospoint = "",
                               Last_Name = e.Emp_LastName,
                               Firts_Name = e.Emp_FirstName,
                               Employee_Name = "",
                               Email = "",
                               Payroll_Code = "",
                               Earning_Group = "",
                               Cutoff_Date = DateTime.Now,
                               Status = true,
                               Hire_Date = "",
                               Hiring_Longevity_Days = 1,
                               Last_Bonus_Date = "",
                               Total_Labor_Hours = (int)e.Emp_Salary,
                               TypeContract = new TypeContract
                               {
                                   Description = w.TypCon_Description
                               }
                           }).ToList();

                }

                return listemp;
            }
            catch (Exception)
            {
                throw;
            }
        }


    }
}
