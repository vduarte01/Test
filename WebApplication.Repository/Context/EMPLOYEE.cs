//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebApplication.Repository.Context
{
    using System;
    using System.Collections.Generic;
    
    public partial class EMPLOYEE
    {
        public int Emp_Id { get; set; }
        public string Emp_FirstName { get; set; }
        public string Emp_LastName { get; set; }
        public Nullable<decimal> Emp_Salary { get; set; }
        public Nullable<int> TypCon_Id { get; set; }
    
        public virtual TYPE_CONTRACT TYPE_CONTRACT { get; set; }
    }
}
