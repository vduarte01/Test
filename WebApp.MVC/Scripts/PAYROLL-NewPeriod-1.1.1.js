$(function () {



    //close the modals
    $(document).keyup(function (e) {
        if (e.keyCode == 27) {
            $("#pageContent").css({ opacity: 1 });
            $(".new").hide(500);

            $("#hdIdNew").val("");
            $("#EditVal").val("");
            $("#EditDescription").val("");
            $("#DateVal").val("");

            $(".btnEdit").prop("disabled", false);
            $(".spnConcept").addClass('hide');
            $(".spnValue").addClass('hide');
            $(".spnDesc").addClass('hide');

        }
    });

    //close the modals
    $(".btnCloseModal").on("click", function () {
        $("#pageContent").css({ opacity: 1 });
        $(".new").hide(500);

        $("#hdIdNew").val("");
        $("#EditVal").val("");
        $("#EditDescription").val("");
        $("#DateVal").val("");

        $(".btnEdit").prop("disabled", false);
        $(".spnConcept").addClass('hide');
        $(".spnValue").addClass('hide');
        $(".spnDesc").addClass('hide');
    });

    //close the modals
    $(".close").on("click", function () {

        $("#pageContent").css({ opacity: 1 });

        $(".new").hide(500);

        $("#hdIdNew").val("");
        $("#EditVal").val("");
        $("#EditDescription").val("");
        $("#DateVal").val("");

        $(".btnEdit").prop("disabled", false);
        $(".spnConcept").addClass('hide');
        $(".spnValue").addClass('hide');
        $(".spnDesc").addClass('hide');
    });

});


function ModalNew(id) {

    var Initial = $("[data-id='" + id + "']").find('.intialdate').text();

    var Final = $("[data-id='" + id + "']").find('.finalDate').text();

    Initial = Initial.trim();
    Final = Final.trim();

    $("#lbVal").text('Valor/Value:');
    $("#hdIdNew").val(id);
    $("#hdInitial").val(Initial);
    $("#hdFinal").val(Final);
    $("#EditVal").attr('type', 'text');
    $("#EditVal").addClass('form-control');
    $(".btnEdit").prop("disabled", true);
    $("#ddlconcept").val(0);
    $("#DateVal").val(Initial);
    $(".spnDate").addClass('hide');
    $("#pageContent").attr('style', 'opacity:0.5; z-index:1000;');
    $(".new").show(200);
}


$(".btnEdit").on("click", function () {

    var id = $("#hdIdNew").val();
    var concept = $("#ddlconcept :selected").val();
    var res = concept.split("-");
    var value = $("#EditVal").val();
    var description = $("#EditDescription").val();
    var date = $('#DateVal').val();

    if (value == "on") {
        if ($("#EditVal").is(':checked')) {
            value = 1;
        } else {
            value = 0;
        }
    }


    if (!isNullOrWhitespace(description) && concept != 0) {

        EditNew(id, res[0], value, description, date);

    }
});


function validateDate(date) {


    var Initial = $("#hdInitial").val().substr(0, 10);
    var Final = $("#hdFinal").val().substr(0,10);

   if (date >= Initial && date <= Final ) {
        $(".btnEdit").prop("disabled", false);
        $(".spnDate").addClass('hide');
        return 'OK';

    }
    else {
        $(".btnEdit").prop("disabled", true);
        $(".spnDate").removeClass('hide');
        return 'NOK';

    }

}


function EditNew(id, concept, value, description, date) {
    $.ajax({
        cache: false,
        method: "POST",
        data: { id: id, concept: concept, value: value, desc: description, date: date.substr(0,10) },
        url: GetURL() + "Paycheck/EditNew"
    }).done(function (data) {
        if (data == "Ok") {
            location.reload();
        }
        else {
            alert(data);
        }

    }).fail(function (XMLHttpRequest, textStatus, errorThrown) {
        alert(textStatus + " : " + errorThrown);
    });
}


function Convertnum(value) {

    var formatted = currency(value, "", 0);//the method is called for convert it to the desired format
    salary.val(formatted);//set the new value to text

}

//change pop up when the concept is diferent about ddlconcept changed
function ModalforType(type) {

    switch (type) {

        case ("1"): //Day
            $("#EditVal").attr('type', 'text');
            $("#lbVal").text('Total Dias/Days:');
            $("#lbVal").val("1");
            $("#EditVal").addClass('form-control');
            break;
        case ("2")://Money
            $("#EditVal").attr('type', 'text');
            $("#lbVal").text('$/Money:');
            $("#lbVal").val("2");
            $("#EditVal").addClass('form-control');
            break;
        case ("3")://Hour
            $("#EditVal").attr('type', 'text');
            $("#lbVal").text('Total Horas/Hours:');
            $("#lbVal").val("3");
            $("#EditVal").addClass('form-control');
            break;
        case ("4")://Date
            $("#EditVal").attr('type', 'text');
            $("#lbVal").text('Fecha/Date:');
            $("#lbVal").val("4");
            $("#EditVal").addClass('form-control');
            break;
        case ("5")://Percentage
            $("#EditVal").attr('type', 'text');
            $("#lbVal").text('%/Percentage:');
            $("#lbVal").val("5");
            $("#EditVal").addClass('form-control');
            break;
        case ("6")://Unid
            $("#EditVal").attr('type', 'text');
            $("#lbVal").text('Unid:');
            $("#lbVal").val("6");
            $("#EditVal").addClass('form-control');
            break;
        case ("8")://Check
            var state = $("#EditVal").val();
            $("#lbVal").text('Enabled:');
            $("#lbVal").val("8");
            $("#EditVal").attr('type', 'checkbox');
            $("#EditVal").removeClass('form-control');
            if (state == 1) {
                $("#EditVal").prop("checked", true);
            }
            break;
        case ("0")://
            $("#EditVal").attr('type', 'text');
            $("#lbVal").text('Valor/Value:');
            $("#lbVal").val("0");
            $("#EditVal").addClass('form-control');
    }

}




function formatJSONDate(jsonDate) {
    /***si viene una fecha JSON de formato /Date(1224043200000)/*****/
    //var newDate = dateFormat(jsonDate, "mm/dd/yyyy");     
    var newDate = new Date(parseInt(jsonDate.substr(6)));
    var month = newDate.getMonth() + 1;
            if (month < 10) {
                month = "0" + month;
            }
    var day = newDate.getDate();
            if (day < 10) {
                day = "0" + day;
            }
    var year = newDate.getFullYear();
    var newDate = month + "/" + day + "/" + year;
    return newDate;
}



/**
 * Shows the Edit modal 
 * @param {string} num - nummber.
 */
function isNullOrWhitespace(input) {

    if (typeof input === 'undefined' || input == null) return true;

    return input.replace(/\s/g, '').length < 1;
}

///
$("#ddlconcept").on("change", function () {

    var value = $("#ddlconcept :selected").val();
    var split = value.split("-");
    var concept = split[0];
    var type = split[1];
    var id = $("#hdIdNew").val();
    var initial = $("#hdInitial").val();
    var lbtype = $("#lbVal").val();

    if (concept != 0) {

        $(".btnEdit").prop("disabled", false);

        $.ajax({
            cache: false,
            method: "GET",
            data: { id: id, concept: concept, type: type },
            url: GetURL() + "Paycheck/GetNew"
        }).done(function (data) {
            if (data != null) {
                $("#EditVal").val(data.value);
                $("#EditDescription").val(data.description);
                var date = formatJSONDate(data.date);
                if (date == "1/1/1" || "01/01/1") {
                    date = initial;
                }
                $("#DateVal").val(date);
            }
            else {
                $("#EditVal").val("");
                $("#EditDescription").val("");
            }

            ModalforType(data.type);
            Formated();

        }).fail(function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + " : " + errorThrown);
        });
    }
    else {
        $(".btnEdit").prop("disabled", true);
        ModalforType("0");
        Formated();
    }


});


$("#DateVal").on("change", function () {


    var date = $('#DateVal').val();
    if (date != "") {
        var resul = validateDate(date);
    }


});


$("#EditVal").on("blur", function () {

    Formated();

});



function Formated() {

    var salary = $("#EditVal");//gets tag id   
    var lbtype = $("#lbVal").val();
    var num = parseFloat(salary.val());//sets value    
    //Validates if the value is zero

    switch (lbtype) {



        case ("2"):
            if (num > 0) {
                //$("#Validatesalary").hide();
                var test = $("#salary").val(num);
                var formatted = currency(num, "$", 0);//the method is called for convert it to the desired format
                salary.val(formatted);//set the new value to text
            }
            break;
        case ("5"):
            if (num > 0) {
                //$("#Validatesalary").hide();
                var test = $("#salary").val(num);
                var formatted = currency(num, "%", 0);//the method is called for convert it to the desired format
                salary.val(formatted);//set the new value to text
            }
            break;
        default:
            if (num > 0) {
                //$("#Validatesalary").hide();
                var test = $("#salary").val(num);
                //var formatted = currency(num, "", 0);//the method is called for convert it to the desired format
                salary.val(num);//set the new value to text
            }
            break;


    }
}