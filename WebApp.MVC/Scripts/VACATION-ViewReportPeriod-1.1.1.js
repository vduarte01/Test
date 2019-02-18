$(function () {



});


function viewReportPeriod(IdPeriod) {

    url = GetURL() + "ReportsSSRS/rptPeriod.aspx?IdPeriod=" + IdPeriod + "";

    window.open(url, "blank", "toolbar=no,menubar=no, scrollbars=yes, resizable=yes, top=10, left=600, width=750, height=950");
  
}




function viewReportBybiweekly(PerPayId) {

    url = GetURL() + "ReportsSSRS/rptPayrollbiweekly.aspx?PerPayId=" + PerPayId + "";

    window.open(url, "blank", "toolbar=no,menubar=no, scrollbars=yes, resizable=yes, top=10, left=600, width=750, height=950");

}



