
var idProjectManager = "0";
var idProject = "0";
var idOrganization = "0";
var idTask = "0";

$(function () {

    idProjectManager = (!isNullOrWhitespace($("#DdlPm").val())) ? $("#DdlPm").val() : "0";
    idProject = (!isNullOrWhitespace($("#ProjectDdl").val())) ? $("#ProjectDdl").val() : "0";
    idOrganization = (!isNullOrWhitespace($("#organizationDdl").val())) ? $("#organizationDdl").val() : "0";
    idTask = (!isNullOrWhitespace($("#taskDdl").val())) ? $("#taskDdl").val() : "0";

    if (idProjectManager || idProject || idOrganization || idTask) {

        $("#ddlProjectManager").val(idProjectManager);
        if (idProjectManager != "0") {

            $(".projectinfo").removeClass("hide");
        }
        LoadProjects(idProject);
    }

    //Disparadores onchange en funcionamiento normal
    $("#ddlProjectManager").on("change", function () {
        idProjectManager = "0";
        idProject = "0";
        idOrganization = "0";

        LoadProjects(idProject);
    });

    $("#ddlProjects").on("change", function () {
        idProjectManager = "0";
        idProject = "0";
        idOrganization = "0";
        idTask = "0";

        LoadOrganization(idOrganization);
    });

    $("#ddlOrganization").on("change", function () {

        var orgnizationSelected = $(this).val();
        var idProject = $("#ddlProjects :selected").val();

        if (orgnizationSelected == "All")
            fillDddlLevel3(idProject);
        else {
            $(".ddlLv3").addClass('hide');
            $(".projectinfo").addClass("hide");
            $("#ddlProjectsLv3").empty();
            idTask = "0";
        }

    });


    $("#btnSearch").on("click", function (e) {

        var projectManagerSelected = $("#ddlProjectManager :selected").val();
        var projectId = $("#ddlProjects :selected").val();
        var orgnizationSelected = $("#ddlOrganization").val();
        var taskId = $("#ddlProjectsLv3 :selected").val();


        idProjectManager = $("#ddlProjectManager :selected").val();
        idProject = projectId;
        idOrganization = orgnizationSelected;
        if (projectManagerSelected != 0 && projectId != 0) {

            if (orgnizationSelected == "All" && taskId != 0) {

                idTask = taskId;

                $("#idProjectManager").val(projectManagerSelected);
                $("#projetId").val(projectId);
                $("#organization").val(orgnizationSelected);
                $("#task").val(taskId);
                $('form').submit();

                //var url = GetURL() + "Project/Index?idProjectManager=" + projectManagerSelected + "&projetId=" + projectId + "&organization=" + orgnizationSelected + "&task=" + taskId + "";
                //window.location.href = url;
                //loadTableLv3(taskSelected);
            }
            else if (orgnizationSelected != "All") {


                $("#idProjectManager").val(projectManagerSelected);
                $("#projetId").val(projectId);
                $("#organization").val(orgnizationSelected);
                $('form').submit();
                //var url = GetURL() + "Project/Index?idProjectManager=" + projectManagerSelected + "&projetId=" + projectId + "&organization=" + orgnizationSelected + "";
                //window.location.href = url;

                // loadTable(projectSelected, orgnizationSelected);
            } else if (orgnizationSelected == "All" && taskId == 0) {


                $("#idProjectManager").val(projectManagerSelected);
                $("#projetId").val(projectId);
                $("#organization").val(orgnizationSelected);

                $('form').submit();
                //var url = GetURL() + "Project/Index?idProjectManager=" + projectManagerSelected + "&projetId=" + projectId + "&organization=" + orgnizationSelected + "";
                //window.location.href = url;
            }



        }
    });
});

///This method fill the projects
function LoadProjects(idProyecto) {
    $('#ddlOrganization option[value!="0"]').remove();

    var idProjectManager = $("[id$='ddlProjectManager']").val();

    $.ajax({
        cache: false,
        method: "GET",
        data: { pm: idProjectManager },
        url: GetURL() + "Project/ListProjectsNo"
    }).done(function (data) {
        $("[id$='ddlProjects']").empty();
        $("[id$='ddlProjects']").append(new Option('Select Projects..', '0', true, true));
        $.each(data, function (key, dato) {
            $(document.createElement('option'))
             .attr('value', dato.ProjectId)
             .text(dato.projectNro)
             .appendTo($("[id$='ddlProjects']"));
        });
        if (idProyecto != "0") {
            $("[id$='ddlProjects']").val(idProyecto);
            LoadOrganization(idOrganization);
        }
        else {
            $("[id$='ddlOrganization']").append(new Option('All Organization..', 'All', false, false));
        }
    }).fail(function (XMLHttpRequest, textStatus, errorThrown) {
        alert(textStatus + " : " + errorThrown);
    });
}
///This method load the table
function loadTable(project, org) {
    $.ajax({
        cache: false,
        method: "GET",
        data: { idProject: project, org: org },
        url: GetURL() + "Project/ProjectInfo"
    }).done(function (data) {
        if ($.isPlainObject(data)) {

            $("#tblProject tbody tr").empty();
            $(".projectinfo").removeClass("hide");
            $(".projectCashFlow").removeClass("hide");
            $(".projectMargin").removeClass("hide");


            var date = parseJSONDate(data.dataDate);
            var modDate = parseJSONDate(data.etcModDate);
            var startDate = parseJSONDate(data.popStartDt);
            var endDate = parseJSONDate(data.popEndDT);
            var actualMonth = parseJSONDate(data.monthActual);

            $("#Pro_Id").val(data.ProjectId);
            $("#ProjectName").text(data.name);
            $("#ProjectNumber").text(data.projectNro);
            $("#ProjectLocation").text(data.location);
            $("#ProjectdataDate").text(date);
            $("#ProjectetcModDate").text(modDate);
            $("#Manager").text(data.projectManager.name);
            $("#Projectgmo").text(data.gmo);
            $("#ProjectpopStartDt").text(startDate);
            $("#Projectcustomer").text(data.customer);
            $("#ProjectpopEndDT").text(endDate);
            $("#ProjectContractNo").text(data.contractNo);
            $("#ProjectDoNo").text(data.doNo);
            $("#ProjectType").text(data.type);
            $("#ProjectOrg").text(data.organization.code);
            $("#ProjectcontractValue").text(currency(data.contractValue, "$", 0));

            var trRevenue = '<tr><td><strong class="text-left">Revenue</strong></td><td class="text-right">' + currency(data.revenue.grossMargin.currentPeriod, "$", 0) + '</td><td class="text-right">' + currency(data.revenue.grossMargin.yearToDate, "$", 0) + '</td><td class="text-right">' + currency(data.revenue.grossMargin.jobToDate, "$", 0) + '</td></tr>';

            var trRegularLabor = '<tr><td><strong class="text-left">Regular Labor</strong></td><td class="text-right">' + currency(data.regularLabor.grossMargin.currentPeriod, "$", 0) + '</td><td class="text-right">' + currency(data.regularLabor.grossMargin.yearToDate, "$", 0) + '</td><td class="text-right">' + currency(data.regularLabor.grossMargin.jobToDate, "$", 0) + '</td></tr>';

            var trOldFringe = '<tr><td><strong class="text-left">Old Frange</strong></td><td class="text-right">' + currency(data.craftFringe.grossMargin.currentPeriod, "$", 0) + '</td><td class="text-right">' + currency(data.craftFringe.grossMargin.yearToDate, "$", 0) + '</td><td class="text-right">' + currency(data.craftFringe.grossMargin.jobToDate, "$", 0) + '</td></tr>';

            var trLabelBurden = '<tr><td><strong class="text-left">Label Burden</strong></td><td class="text-right">' + currency(data.regularFringe.grossMargin.currentPeriod, "$", 0) + '</td><td class="text-right">' + currency(data.regularFringe.grossMargin.yearToDate, "$", 0) + '</td><td class="text-right">' + currency(data.regularFringe.grossMargin.jobToDate, "$", 0) + '</td></tr>';

            var trTotalDirectLabor = '<tr><td><strong class="text-left">Total Direct Labor</strong></td><td class="text-right">' + currency(data.totalDirectLabor.grossMargin.currentPeriod, "$", 0) + '</td><td class="text-right">' + currency(data.totalDirectLabor.grossMargin.yearToDate, "$", 0) + '</td><td class="text-right">' + currency(data.totalDirectLabor.grossMargin.jobToDate, "$", 0) + '</td></tr>';

            var trSubcontracts = '<tr><td><strong class="text-left">Subcontracts</strong></td><td class="text-right">' + currency(data.subContracts.grossMargin.currentPeriod, "$", 0) + '</td><td class="text-right">' + currency(data.subContracts.grossMargin.yearToDate, "$", 0) + '</td><td class="text-right">' + currency(data.subContracts.grossMargin.jobToDate, "$", 0) + '</td></tr>';

            var trODC = '<tr><td><strong class="text-left">ODC</strong></td><td class="text-right">' + currency(data.odc.grossMargin.currentPeriod, "$", 0) + '</td><td class="text-right">' + currency(data.odc.grossMargin.yearToDate, "$", 0) + '</td><td class="text-right">' + currency(data.odc.grossMargin.jobToDate, "$", 0) + '</td></tr>';

            var trTotalNonLabor = '<tr><td><strong class="text-left">Total Non-Labor</strong></td><td class="text-right">' + currency(data.totalNonLabor.grossMargin.currentPeriod, "$", 0) + '</td><td class="text-right">' + currency(data.totalNonLabor.grossMargin.yearToDate, "$", 0) + '</td><td class="text-right">' + currency(data.totalNonLabor.grossMargin.jobToDate, "$", 0) + '</td></tr>';

            var trTotalDirectCosts = '<tr><td><strong class="text-left">Total Direct Costs</strong></td><td class="text-right">' + currency(data.totalDirectCosts.grossMargin.currentPeriod, "$", 0) + '</td><td class="text-right">' + currency(data.totalDirectCosts.grossMargin.yearToDate, "$", 0) + '</td><td class="text-right">' + currency(data.totalDirectCosts.grossMargin.jobToDate, "$", 0) + '</td></tr>';


            var trGm_Value = '<tr><td><strong class="text-left">GM $</strong></td><td class="text-right">' + currency(data.GmValue.grossMargin.currentPeriod, "$", 0) + '</td><td class="text-right">' + currency(data.GmValue.grossMargin.yearToDate, "$", 0) + '</td><td class="text-right">' + currency(data.GmValue.grossMargin.jobToDate, "$", 0) + '</td></tr>';

            var trGm_Percent = '<tr><td><strong class="text-left">GM %</strong></td><td class="text-right">' + currency(data.GmPercent.grossMargin.currentPeriod, "", 0) + '%</td><td class="text-right">' + currency(data.GmPercent.grossMargin.yearToDate, "", 0) + '%</td><td class="text-right">' + currency(data.GmPercent.grossMargin.jobToDate, "", 0) + '%</td></tr>';

            $("#tblProject tbody tr:last").after(trRevenue);
            $("#tblProject tbody tr:last").after(trRegularLabor);
            $("#tblProject tbody tr:last").after(trOldFringe);
            $("#tblProject tbody tr:last").after(trLabelBurden);
            $("#tblProject tbody tr:last").after(trTotalDirectLabor);
            $("#tblProject tbody tr:last").after(trSubcontracts);
            $("#tblProject tbody tr:last").after(trODC);
            $("#tblProject tbody tr:last").after(trTotalNonLabor);
            $("#tblProject tbody tr:last").after(trTotalDirectCosts);
            $("#tblProject tbody tr:last").after(trGm_Value);
            $("#tblProject tbody tr:last").after(trGm_Percent);

        }
        else {
            $(".alertVBE").removeClass("hide");
            $(".alertVBE").addClass("alert alert-danger");
            $(".alertVBE p").text(data);
        }
    }).fail(function (XMLHttpRequest, textStatus, errorThrown) {
        alert(textStatus + " : " + errorThrown);
    });
}
///This method fill the dropdownlist with Lv3 project
function fillDddlLevel3(project) {

    $(".ddlLv3").removeClass('hide');

    $.ajax({
        cache: false,
        method: "GET",
        data: { idProject: project },
        url: GetURL() + "Project/ListProjectsLv3"
    }).done(function (data) {
        $("[id$='ddlProjectsLv3']").empty();
        $("[id$='ddlProjectsLv3']").append(new Option('Select...', '0', true, true));
        $.each(data, function (key, dato) {
            $(document.createElement('option'))
             .attr('value', dato.ProjectId)
             .text(dato.projectNro)
             .appendTo($("[id$='ddlProjectsLv3']"));
        });
        if (idTask != 0)
            $("[id$='ddlProjectsLv3']").val(idTask);

    }).fail(function (XMLHttpRequest, textStatus, errorThrown) {
        alert(textStatus + " : " + errorThrown);
    });

}

///This method fill the organization
function LoadOrganization(idOrganization) {
    var id_Project = $("#ddlProjects").val();

    $.ajax({
        cache: false,
        method: "GET",
        data: { idProject: id_Project },
        url: GetURL() + "Project/ListProjectsOrg"
    }).done(function (data) {
        $("[id$='ddlOrganization']").empty();
        $("[id$='ddlOrganization']").append(new Option('All Organization..', 'All', false, false));
        $.each(data, function (key, dato) {
            $(document.createElement('option'))
             .attr('value', dato.idOrg)
             .text(dato.code)
             .appendTo($("[id$='ddlOrganization']"));
        });

        if (idOrganization != "0") {
            $("[id$='ddlOrganization']").val(idOrganization);
            if (idOrganization == "All") {
                fillDddlLevel3(id_Project, idOrganization);
            }
            //FillTable_2();
        }


        else if ($("#ddlOrganization").val() == "All") {
            fillDddlLevel3(id_Project, idOrganization);
        }

    }).fail(function (XMLHttpRequest, textStatus, errorThrown) {
        alert(textStatus + " : " + errorThrown);
    });
}
///This method load the table
function FillTable_2() {
    var projectSelected = $("#ddlProjects :selected").text();
    var orgnizationSelected = $("#ddlOrganization").val();

    idProjectManager = $("#ddlProjectManager").val();
    idProject = $("#ddlProjects").val();
    idOrganization = $("#ddlOrganization").val();

    loadTable(projectSelected, orgnizationSelected);
}
///This method load the table Lv3
function loadTableLv3(project) {

    $.ajax({
        cache: false,
        method: "GET",
        data: { idProjectLv3: project },
        url: GetURL() + "Project/ProjectLv3Info"
    }).done(function (data) {
        if ($.isPlainObject(data)) {

            $("#tblProject tbody tr").empty();
            $(".projectinfo").removeClass("hide");
            $(".projectCashFlow").removeClass("hide");
            $(".projectMargin").removeClass("hide");


            var date = parseJSONDate(data.dataDate);
            var modDate = parseJSONDate(data.etcModDate);
            var startDate = parseJSONDate(data.popStartDt);
            var endDate = parseJSONDate(data.popEndDT);
            var actualMonth = parseJSONDate(data.monthActual);

            $("#Pro_Id").val(data.ProjectId);
            $("#ProjectName").text(data.name);
            $("#ProjectNumber").text(data.projectNro);
            $("#ProjectLocation").text(data.location);
            $("#ProjectdataDate").text(date);
            $("#ProjectetcModDate").text(modDate);
            $("#Manager").text(data.projectManager.name);
            $("#Projectgmo").text(data.gmo);
            $("#ProjectpopStartDt").text(startDate);
            $("#Projectcustomer").text(data.customer);
            $("#ProjectpopEndDT").text(endDate);
            $("#ProjectContractNo").text(data.contractNo);
            $("#ProjectDoNo").text(data.doNo);
            $("#ProjectType").text(data.type);
            $("#ProjectOrg").text(data.organization.code);
            $("#ProjectcontractValue").text(currency(data.contractValue, "$", 0));

            var trRevenue = '<tr><td><strong class="text-left">Revenue</strong></td><td class="text-right">' + currency(data.revenue.grossMargin.currentPeriod, "$", 0) + '</td><td class="text-right">' + currency(data.revenue.grossMargin.yearToDate, "$", 0) + '</td><td class="text-right">' + currency(data.revenue.grossMargin.jobToDate, "$", 0) + '</td></tr>';

            var trRegularLabor = '<tr><td><strong class="text-left">Regular Labor</strong></td><td class="text-right">' + currency(data.regularLabor.grossMargin.currentPeriod, "$", 0) + '</td><td class="text-right">' + currency(data.regularLabor.grossMargin.yearToDate, "$", 0) + '</td><td class="text-right">' + currency(data.regularLabor.grossMargin.jobToDate, "$", 0) + '</td></tr>';

            var trOldFringe = '<tr><td><strong class="text-left">Old Frange</strong></td><td class="text-right">' + currency(data.craftFringe.grossMargin.currentPeriod, "$", 0) + '</td><td class="text-right">' + currency(data.craftFringe.grossMargin.yearToDate, "$", 0) + '</td><td class="text-right">' + currency(data.craftFringe.grossMargin.jobToDate, "$", 0) + '</td></tr>';

            var trLabelBurden = '<tr><td><strong class="text-left">Label Burden</strong></td><td class="text-right">' + currency(data.regularFringe.grossMargin.currentPeriod, "$", 0) + '</td><td class="text-right">' + currency(data.regularFringe.grossMargin.yearToDate, "$", 0) + '</td><td class="text-right">' + currency(data.regularFringe.grossMargin.jobToDate, "$", 0) + '</td></tr>';

            var trTotalDirectLabor = '<tr><td><strong class="text-left">Total Direct Labor</strong></td><td class="text-right">' + currency(data.totalDirectLabor.grossMargin.currentPeriod, "$", 0) + '</td><td class="text-right">' + currency(data.totalDirectLabor.grossMargin.yearToDate, "$", 0) + '</td><td class="text-right">' + currency(data.totalDirectLabor.grossMargin.jobToDate, "$", 0) + '</td></tr>';

            var trSubcontracts = '<tr><td><strong class="text-left">Subcontracts</strong></td><td class="text-right">' + currency(data.subContracts.grossMargin.currentPeriod, "$", 0) + '</td><td class="text-right">' + currency(data.subContracts.grossMargin.yearToDate, "$", 0) + '</td><td class="text-right">' + currency(data.subContracts.grossMargin.jobToDate, "$", 0) + '</td></tr>';

            var trODC = '<tr><td><strong class="text-left">ODC</strong></td><td class="text-right">' + currency(data.odc.grossMargin.currentPeriod, "$", 0) + '</td><td class="text-right">' + currency(data.odc.grossMargin.yearToDate, "$", 0) + '</td><td class="text-right">' + currency(data.odc.grossMargin.jobToDate, "$", 0) + '</td></tr>';

            var trTotalNonLabor = '<tr><td><strong class="text-left">Total Non-Labor</strong></td><td class="text-right">' + currency(data.totalNonLabor.grossMargin.currentPeriod, "$", 0) + '</td><td class="text-right">' + currency(data.totalNonLabor.grossMargin.yearToDate, "$", 0) + '</td><td class="text-right">' + currency(data.totalNonLabor.grossMargin.jobToDate, "$", 0) + '</td></tr>';

            var trTotalDirectCosts = '<tr><td><strong class="text-left">Total Direct Costs</strong></td><td class="text-right">' + currency(data.totalDirectCosts.grossMargin.currentPeriod, "$", 0) + '</td><td class="text-right">' + currency(data.totalDirectCosts.grossMargin.yearToDate, "$", 0) + '</td><td class="text-right">' + currency(data.totalDirectCosts.grossMargin.jobToDate, "$", 0) + '</td></tr>';


            var trGm_Value = '<tr><td><strong class="text-left">GM $</strong></td><td class="text-right">' + currency(data.GmValue.grossMargin.currentPeriod, "$", 0) + '</td><td class="text-right">' + currency(data.GmValue.grossMargin.yearToDate, "$", 0) + '</td><td class="text-right">' + currency(data.GmValue.grossMargin.jobToDate, "$", 0) + '</td></tr>';

            var trGm_Percent = '<tr><td><strong class="text-left">GM %</strong></td><td class="text-right">' + currency(data.GmPercent.grossMargin.currentPeriod, "", 0) + '%</td><td class="text-right">' + currency(data.GmPercent.grossMargin.yearToDate, "", 0) + '%</td><td class="text-right">' + currency(data.GmPercent.grossMargin.jobToDate, "", 0) + '%</td></tr>';

            $("#tblProject tbody tr:last").after(trRevenue);
            $("#tblProject tbody tr:last").after(trRegularLabor);
            $("#tblProject tbody tr:last").after(trOldFringe);
            $("#tblProject tbody tr:last").after(trLabelBurden);
            $("#tblProject tbody tr:last").after(trTotalDirectLabor);
            $("#tblProject tbody tr:last").after(trSubcontracts);
            $("#tblProject tbody tr:last").after(trODC);
            $("#tblProject tbody tr:last").after(trTotalNonLabor);
            $("#tblProject tbody tr:last").after(trTotalDirectCosts);
            $("#tblProject tbody tr:last").after(trGm_Value);
            $("#tblProject tbody tr:last").after(trGm_Percent);

        }
        else {
            $(".alertVBE").removeClass("hide");
            $(".alertVBE").addClass("alert alert-danger");
            $(".alertVBE p").text(data);
        }
    }).fail(function (XMLHttpRequest, textStatus, errorThrown) {
        alert(textStatus + " : " + errorThrown);
    });
}

function isNullOrWhitespace(input) {

    if (typeof input === 'undefined' || input == null) return true;

    return input.replace(/\s/g, '').length < 1;
}