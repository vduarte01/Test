using WebApplication.Entities;
using WebApplication.Service.ServiceEmployee;
using System;
using System.Configuration;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication.Infraestructure.Employee
{
    public class DTOInfraestructure
    {



        public List<Entities.Employee> GetEmployees()
        {
            try
            {
                ServiceEmployeesClient ServiceEmployees = new ServiceEmployeesClient("BasicHttpBinding_IServiceEmployees");
                List<Service.ServiceEmployee.Employee> lstEntityEmployee = new List<Service.ServiceEmployee.Employee>();


                lstEntityEmployee = ServiceEmployees.GetEmployees().ToList();


                List<Entities.Employee> lstEmployee = new List<Entities.Employee>();

                Entities.TypeContract typeContract = new Entities.TypeContract();


                    foreach (var item in lstEntityEmployee)
                    {
                        lstEmployee.Add(new Entities.Employee
                        {
                            Last_Name = item.Last_Name,
                            Id = item.Id,
                            Firts_Name = item.Firts_Name,
                            Employee_Name = item.Employee_Name,
                            Total_Labor_Hours = item.Total_Labor,
                            TypeContract = new Entities.TypeContract
                            {
                                Description = item.TypeContract.Description
                            }
                            //rol = new Cape.Entities.Rol() { idRol = item.rol.idRol, Name = item.rol.Name }
                        });
                    }


                    return lstEmployee;
            }
            catch (Exception)
            {
                throw;
            }

        }




    }
}
