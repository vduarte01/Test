using Microsoft.Reporting.WebForms;
using System.Net;
using System.Web;
using System.Web.Configuration;

namespace WebApp.MVC.ReportsSSRS
{
    internal class CustomReportCredential : IReportServerCredentials
    {
        private string _UserName;
        private string _PassWord;
        private string _DomainName;

        public CustomReportCredential(string userName, string passWord, string domainName)
        {
            this._UserName = userName;
            this._PassWord = passWord;
            this._DomainName = domainName;
        }

        public System.Security.Principal.WindowsIdentity ImpersonationUser
        {
            get { return null; }
        }

        public ICredentials NetworkCredentials
        {
            get { return new NetworkCredential(_UserName, _PassWord, _DomainName); }
        }

        public bool GetFormsCredentials(out Cookie authCookie, out string user,
         out string password, out string authority)
        {
            authCookie = null;
            user = password = authority = null;
            return false;
        }
    }
}