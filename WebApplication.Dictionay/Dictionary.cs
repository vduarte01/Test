using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication.Dictionary
{
    public class Dictionary
    {
        public enum Rol
        {
            ADMIN = 1,
            StakeHolderUser = 14,
            StakeHolderViewer = 16,
            StakeHolderAccounting = 19,
            StakeHolderHumanResources = 20
        }


        public enum TemplatesEmail
        {
            PTO = 14
            /* BASIC = 1,
             JOBOPENING_CAPEALL = 2,
             ETMEMBER_APPROVAL = 3,*/
        }
    }
}
