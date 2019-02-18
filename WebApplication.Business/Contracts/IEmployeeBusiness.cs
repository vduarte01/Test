using System.Collections.Generic;
using WebApplication.Entities;

namespace WebApplication.Business.Contracts
{
    public interface IEmployeeBusiness
    {

        List<Employee> GetListEmployee(Employee oEmployee);


        //List<Bonus> GetListEmployeeBonus(Employee oEmployee);

    }
}
