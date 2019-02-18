using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using WebApp.MVC.ReportsSSRS;
using System.Web.Configuration;
using Microsoft.Reporting.WebForms;


namespace WebApp.MVC.ReportsSSRS
{
    public partial class rptBonus : System.Web.UI.Page
    {

        private string prt_Bonus_Date = null;
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                try
                {
                    #region Properties

                    string UserName = WebConfigurationManager.AppSettings["Username"];
                    string PassWord = WebConfigurationManager.AppSettings["Password"];
                    string DomainName = WebConfigurationManager.AppSettings["Domain"];

                    #endregion Properties


                    #region Report Settings

                    rptForBonus.ProcessingMode = ProcessingMode.Remote;
                    IReportServerCredentials irsc = new CustomReportCredential(UserName, PassWord, DomainName);
                    rptForBonus.ServerReport.ReportServerCredentials = irsc;
                    rptForBonus.ServerReport.ReportServerUrl = new Uri(WebConfigurationManager.AppSettings["SSRS"]);
                    rptForBonus.ServerReport.ReportPath = "/CRAFT_LONG_BONUS/CLB_Employee_Bonus_Report";
                    List<ReportParameter> listParameters = new List<ReportParameter>();

                    listParameters.Add(new ReportParameter("prt_Bonus_Date", prt_Bonus_Date, false));

                    rptForBonus.ServerReport.SetParameters(listParameters);
                    rptForBonus.ServerReport.Refresh();

                    #endregion
                }
                catch (Exception)
                {
                    throw;
                }
            }
        }
    }
}