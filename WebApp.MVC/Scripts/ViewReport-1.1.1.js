
$(function () {

    $('.viewReportBonus').on("click", function (e) {
        ViewRepotBonusForDate();
    });

});





function ViewRepotBonusForDate() {

    var prt_Bonus_Date;
    prt_Bonus_Date = $("#yearConsolidated").val();
    url = GetURL() + "ReportsSSRS/rptBonus.aspx?prt_Bonus_Date=2018/09/16";
    window.open(url, "blank", "toolbar=no,menubar=no, scrollbars=yes, resizable=yes, top=10, left=600, width=1000, height=800");
}





