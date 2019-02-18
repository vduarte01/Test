using System.Collections.Generic;
using WebApplication.Entities;

namespace WebApplication.Repository.Contracts
{
    public interface IEmployeeRepository
    {

        List<Employee> GetListEmployee(Employee oEmployee);



    }
}
