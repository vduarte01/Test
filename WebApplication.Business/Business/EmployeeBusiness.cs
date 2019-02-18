using System;
using System.Collections.Generic;
using System.Configuration;
using WebApplication.Business.Contracts;
using WebApplication.Entities;
using WebApplication.Infraestructure.Employee;

namespace WebApplication.Business.Business
{
    public class EmployeeBusiness : IEmployeeBusiness
    {

        public List<Employee> GetListEmployee(Employee oEmployee)
        {
            try
            {
                List<Employee> lstEmployee = new List<Employee>();

                DTOInfraestructure oEmployeeInfraestructure = new DTOInfraestructure();
                lstEmployee = oEmployeeInfraestructure.GetEmployees();

                return lstEmployee;
            }
            catch (Exception)
            {
                throw;
            }
        }





    }
}
