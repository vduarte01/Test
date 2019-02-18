$(function () {



    var sumEnjoy = 0;
    var sumCollective = 0;
    var sumPaid = 0;
    var totalSum = 0;



    $(".datepicker").attr("readonly", "readonly").datepicker({
        dateFormat: 'dd-mm-yyyy',
        showAnim: "blind",
        changeMonth: true,
        changeYear: true,
        orientation: "bottom auto",
        autoclose: true,
        duration: 100
    }).val();


    $.each($("#tblEnjoy").find(".enjoyDay"), function () {

        sumEnjoy += parseInt($(this).text());
    });


    $.each($("#tblCollective").find(".collectiveDay"), function () {

        sumCollective += parseInt($(this).text());
    });

    $.each($("#tblPaid").find(".paidDay"), function () {

        sumPaid += parseInt($(this).text());
    });

    totalSum += sumEnjoy + sumCollective + sumPaid;

    $(".enjoySum").text((sumEnjoy == 0) ? "Enjoyed" : "Enjoyed (" + sumEnjoy + ")");
    $(".collectiveSum").text((sumCollective == 0) ? "Collective" : "Collective (" + sumCollective + ")");
    $(".paidSum").text((sumPaid == 0) ? "Paid" : "Paid (" + sumPaid + ")");
    $(".totalSum").text((totalSum == 0) ? "" : "(" + totalSum + ")");

    ///ENJOY
    $("#initialEnjoy").on("change", function () {

        var initialEnjoy = $(this).val();
        var finalEnjoy = $("#finalEnjoy").val();

        if (finalEnjoy != "") {
            var days = daysBetween(initialEnjoy, finalEnjoy,'dayEnjoy');
            $("#dayEnjoy").val(days);
        }
    });

    $("#finalEnjoy").on("change", function () {

        var initialEnjoy = $("#initialEnjoy").val();
        var finalEnjoy = $(this).val();

        if (initialEnjoy != "") {
            var days = daysBetween(initialEnjoy, finalEnjoy,'dayEnjoy');
            $("#dayEnjoy").val(days);
        }
    });


    $("#initialEnjoyEdit").on("change", function () {

        var initialEnjoy = $(this).val();
        var finalEnjoy = $("#finalEnjoyEdit").val();

        if (finalEnjoy != "") {
            var days = daysBetween(initialEnjoy, finalEnjoy ,'dayEnjoy');
            $("#dayEnjoyEdit").val(days);
        }
    });

    $("#finalEnjoyEdit").on("change", function () {

        var initialEnjoy = $("#initialEnjoyEdit").val();
        var finalEnjoy = $(this).val();

        if (initialEnjoy != "") {
            var days = daysBetween(initialEnjoy, finalEnjoy ,'dayEnjoy');
            $("#dayEnjoyEdit").val(days);
        }
    });


    ///PAID
    $("#initialPaid").on("change", function () {

        var initialPaid = $(this).val();
        var finalPaid = $("#finalPaid").val();

        if (finalPaid != "") {

            var days = daysBetween(initialPaid, finalPaid, 'dayPaid');
            $("#dayPaid").val(days);
        }

    });

    $("#finalPaid").on("change", function () {

        var initialPaid = $("#initialPaid").val();
        var finalPaid = $(this).val();


        if (initialPaid != "") {
            var days = daysBetween(initialPaid, finalPaid, 'dayPaid');
            $("#dayPaid").val(days);
        }

    });

    $("#initialPaidEdit").on("change", function () {

        var initialPaid = $(this).val();
        var finalPaid = $("#finalPaidEdit").val();

        if (finalPaid != "") {

            var days = daysBetween(initialPaid, finalPaid, 'dayPaid');
            $("#dayPaidEdit").val(days);
        }


    });

    $("#finalPaidEdit").on("change", function () {

        var initialPaid = $("#initialPaidEdit").val();
        var finalPaid = $(this).val();


        if (initialPaid != "") {
            var days = daysBetween(initialPaid, finalPaid, 'dayPaid');
            $("#dayPaidEdit").val(days);
        }


    });



    ///COLLECTIVE
    $("#initialCollective").on("change", function () {

        var initialCollective = $(this).val();
        var finalCollective = $("#finalCollective").val();

        if (finalCollective != "") {
            var days = daysBetween(initialCollective, finalCollective, 'dayCollective');
            $("#dayCollective").val(days);
        }


    });

    $("#finalCollective").on("change", function () {

        var initialCollective = $("#initialCollective").val();
        var finalCollective = $(this).val();

        if (initialCollective != "") {
            var days = daysBetween(initialCollective, finalCollective, 'dayCollective');
            $("#dayCollective").val(days);
        }
    });

    $("#initialCollectiveEdit").on("change", function () {

        var initialCollective = $(this).val();
        var finalCollective = $("#finalCollectiveEdit").val();

        if (finalCollective != "") {
            var days = daysBetween(initialCollective, finalCollective, 'dayCollective');
            $("#dayCollectiveEdit").val(days);
        }


    });

    $("#finalCollectiveEdit").on("change", function () {

        var initialCollective = $("#initialCollectiveEdit").val();
        var finalCollective = $(this).val();

        if (initialCollective != "") {
            var days = daysBetween(initialCollective, finalCollective, 'dayCollective');
            $("#dayCollectiveEdit").val(days);
        }
    });




    $(".btnAddEnjoy").on("click", function () {

        var initialEnjoy = $("#initialEnjoy").val();
        var dayEnjoy = $("#dayEnjoy").val();
        var finalEnjoy = $("#finalEnjoy").val();

        $.ajax({
            cache: false,
            method: "POST",
            data: { initial: initialEnjoy, day: dayEnjoy, final: finalEnjoy },
            url: GetURL() + "Vacation/CreatePeriodEnjoy"
        }).done(function (data) {
            if (data != "")
                alert(data);
            else
                location.reload();
        }).fail(function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + " : " + errorThrown);
        });


    });


    $(".btnAddPaid").on("click", function () {

        var initialPaid = $("#initialPaid").val();
        var dayPaid = $("#dayPaid").val();
        var finalPaid = $("#finalPaid").val();

        $.ajax({
            cache: false,
            method: "POST",
            data: { initial: initialPaid, day: dayPaid, final: finalPaid },
            url: GetURL() + "Vacation/CreatePeriodPaid"
        }).done(function (data) {

            if (data != "")
                alert(data);
            else
                location.reload();

        }).fail(function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + " : " + errorThrown);
        });

    });

    $(".btnAddCollective").on("click", function () {

        var initialCollective = $("#initialCollective").val();
        var dayCollective = $("#dayCollective").val();
        var finalCollective = $("#finalCollective").val();

        $.ajax({
            cache: false,
            method: "POST",
            data: { initial: initialCollective, day: dayCollective, final: finalCollective },
            url: GetURL() + "Vacation/CreatePeriodCollective"
        }).done(function (data) {

            if (data != "")
                alert(data);
            else
                location.reload();

        }).fail(function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + " : " + errorThrown);
        });

    });

    ///edit

    $(".btnEditEnjoy").on("click", function () {

        var initialEnjoy = $("#initialEnjoyEdit").val();
        var dayEnjoy = $("#dayEnjoyEdit").val();
        var finalEnjoy = $("#finalEnjoyEdit").val();
        var enjoyId = $("#hdEnjoyId").val();

        $.ajax({
            cache: false,
            method: "POST",
            data: { enjoyId: enjoyId, initial: initialEnjoy, day: dayEnjoy, final: finalEnjoy },
            url: GetURL() + "Vacation/EditPeriodEnjoy"
        }).done(function (data) {
            if (data != "")
                alert(data);
            else
                location.reload();
        }).fail(function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + " : " + errorThrown);
        });
    });


    $(".btnEditPaid").on("click", function () {

        var initialPaid = $("#initialPaidEdit").val();
        var dayPaid = $("#dayPaidEdit").val();
        var finalPaid = $("#finalPaidEdit").val();
        var paidId = $("#hdPaidId").val();

        $.ajax({
            cache: false,
            method: "POST",
            data: { paidId: paidId, initial: initialPaid, day: dayPaid, final: finalPaid },
            url: GetURL() + "Vacation/EditPeriodPaid"
        }).done(function (data) {

            if (data != "")
                alert(data);
            else
                location.reload();

        }).fail(function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + " : " + errorThrown);
        });

    });

    $(".btnEditCollective").on("click", function () {

        var initialCollective = $("#initialCollectiveEdit").val();
        var dayCollective = $("#dayCollectiveEdit").val();
        var finalCollective = $("#finalCollectiveEdit").val();
        var collectiveId = $("#hdCollectiveId").val();

        $.ajax({
            cache: false,
            method: "POST",
            data: { collectiveId: collectiveId, initial: initialCollective, day: dayCollective, final: finalCollective },
            url: GetURL() + "Vacation/EditPeriodCollective"
        }).done(function (data) {
            if (data != "")
                alert(data);
            else
                location.reload();
        }).fail(function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + " : " + errorThrown);
        });

    });



    ///Delete
    $(".btnDeleteEnjoy").on("click", function () {

        var enjoyId = $("#hdEnjoyId").val();
        $.ajax({
            cache: false,
            method: "POST",
            data: { enjoyId: enjoyId },
            url: GetURL() + "Vacation/DeletePeriodEnjoy"
        }).done(function (data) {
            if (data == "Ok")
                location.reload();
            else
                alert(data);

        }).fail(function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + " : " + errorThrown);
        });

    });

    $(".btnDeleteCollective").on("click", function () {

        var collectiveId = $("#hdCollectiveId").val();

        $.ajax({
            cache: false,
            method: "POST",
            data: { collectiveId: collectiveId },
            url: GetURL() + "Vacation/DeletePeriodCollective"
        }).done(function (data) {
            if (data == "Ok")
                location.reload();
            else
                alert(data);

        }).fail(function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + " : " + errorThrown);
        });

    });


    $(".btnDeletePaid").on("click", function () {


        var paidId = $("#hdPaidId").val();

        $.ajax({
            cache: false,
            method: "POST",
            data: { paidId: paidId },
            url: GetURL() + "Vacation/DeletePeriodPaid"
        }).done(function (data) {
            if (data == "Ok")
                location.reload();
            else
                alert(data);

        }).fail(function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + " : " + errorThrown);
        });

    });
});


//Edit section

function editEnjoy(enjoyId) {

    var initial = $("[data-id='" + enjoyId + "']").find('.enjoyInitial').text();
    var day = $("[data-id='" + enjoyId + "']").find('.enjoyDay').text();
    var final = $("[data-id='" + enjoyId + "']").find('.enjoyFinal').text();


    $("#initialEnjoyEdit").val(initial);
    $("#dayEnjoyEdit").val(day);
    $("#finalEnjoyEdit").val(final);
    $("#hdEnjoyId").val(enjoyId);
    $('#ModalEnjoyEdit').modal('show');

}


function editPaid(paidId) {

    var initial = $("[data-id='" + paidId + "']").find('.paidInitial').text();
    var day = $("[data-id='" + paidId + "']").find('.paidDay').text();
    var final = $("[data-id='" + paidId + "']").find('.paidFinal').text();

    $("#initialPaidEdit").val(initial);
    $("#dayPaidEdit").val(day);
    $("#finalPaidEdit").val(final);
    $("#hdPaidId").val(paidId);
    $('#ModalPaidEdit').modal('show');

}


function editCollective(collectiveId) {


    var initial = $("[data-id='" + collectiveId + "']").find('.collectiveInitial').text();
    var day = $("[data-id='" + collectiveId + "']").find('.collectiveDay').text();
    var final = $("[data-id='" + collectiveId + "']").find('.collectiveFinal').text();

    $("#initialCollectiveEdit").val(initial);
    $("#dayCollectiveEdit").val(day);
    $("#finalCollectiveEdit").val(final);
    $("#hdCollectiveId").val(collectiveId);
    $('#ModalCollectiveEdit').modal('show');

}



//Delete section


function deleteEnjoy(enjoyId) {


    $("#hdEnjoyId").val(enjoyId);
    $('#ModalEnjoyDelete').modal('show');

}


function deletePaid(paidId) {

    $("#hdPaidId").val(paidId);
    $('#ModalPaidDelete').modal('show');

}


function deleteCollective(collectiveId) {

    $("#hdCollectiveId").val(collectiveId);
    $('#ModalCollectiveDelete').modal('show');

}


function daysBetween(date1, date2, type) {



    var inicio = new Date(date1);
    var final = new Date(date2);


    if (final >= inicio) {


        dayHoliday(type, date1, date2);

        if (date1.indexOf("-") != -1) {
            date1 = date1.split("-");
        } else if (date1.indexOf("/") != -1) {
            date1 = date1.split("/");
        } else {
            return 0;
        }
        if (date2.indexOf("-") != -1) {
            date2 = date2.split("-");
        } else if (date2.indexOf("/") != -1) {
            date2 = date2.split("/");
        } else {
            return 0;
        }
        if (parseInt(date1[0], 10) >= 1000) {
            var sDate = new Date(date1[0] + "/" + date1[1] + "/" + date1[2]);
        } else if (parseInt(date1[2], 10) >= 1000) {
            var sDate = new Date(date1[2] + "/" + date1[0] + "/" + date1[1]);
        } else {
            return 0;
        }
        if (parseInt(date2[0], 10) >= 1000) {
            var eDate = new Date(date2[0] + "/" + date2[1] + "/" + date2[2]);
        } else if (parseInt(date2[2], 10) >= 1000) {
            var eDate = new Date(date2[2] + "/" + date2[0] + "/" + date2[1]);
        } else {
            return 0;
        }
        var one_day = 1000 * 60 * 60 * 24;
        var daysApart = Math.abs(Math.ceil((sDate.getTime() - eDate.getTime()) / one_day));

        var total = daysApart + 1;

        return total;
    }
    else {
        alert("The end date must be greater than start date");
        $(".endDate").val("");
    }
}




function dayHoliday(type, date1, date2)
{

    $("#hiddenField").val(0);
    $.ajax({
        cache: false,
        method: "GET",
        data: { date1: date1, date2 : date2},
        url: GetURL() + "Vacation/GetHoliday"
    }).success(function (data) {
        if (data != null){
            var days = $("#" + type).val();
            $("#" + type).val(days - data);
        }
        else
            alert(data);

    }).fail(function (XMLHttpRequest, textStatus, errorThrown) {
        alert(textStatus + " : " + errorThrown);
    });

}

