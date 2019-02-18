using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication.Entities
{
    public class Email
    {
        public string body { get; set; }
        public string cc { get; set; }
        public int idTemplate { get; set; }
        public string subject { get; set; }

        public string template { get; set; }

        public string to { get; set; }
    }
}
