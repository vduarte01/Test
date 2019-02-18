$(function () {


    $("#fileExcel").on("change", function () {
        validateExcel(this);
    });


    $("#user").on("change", function () {
        var RegId = $("#user").val();

        $.ajax({
            cache: false,
            method: "POST",
            url: GetURL() + "Employee/getObjUser",
            data: { UserId: RegId }
        }).done(function (data) {
            var res = data.name.split(" ")
            var i;
            if (res.length > 2)
            {
                i = (res.length - 2);
            }
            else {
                i = (res.length - 1);
            }


            if (!data.Message)
                $("#lblemployee").val(data.userAconting),
                $("#lblemail").val(data.email),
                $("#lblfirstName").val(res[0]),
                $("#lbllastName").val(res[i])
                ;

            else
                alert(data.Message);
        }).fail(function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + " : " + errorThrown);
        });
    });






});

///This method validates the excel file
function validateExcel(selector) {
    var valSize = 0;
    var regex = /\.(xlsx|xls|xlsm)$/i;

    $(".Documento").each(function () {
        if (this.files[0]) {
            valSize = valSize + (((this.files[0].size) / 1024) / 1024);

            if (regex.exec(this.files[0].name) != null) {
                if (!$(".spnError").hasClass("hide")) {
                    $(".spnError").addClass('hide');
                }
            }
            else {
                $(selector).replaceWith($(selector).val('').clone(true));
                $(".spnError").removeClass('hide').text("Invalid type. Only the following types (xlsx, xls and xlsm) are supported.");
            }
        }
    });
    if ((valSize > 2.5)) {
        $(".spnError").removeClass('hide').text("You can not upload images over 2.5 MB");
    }
    else {
        $("#btnCreate").removeAttr("disabled");
    }
}






$("#EmployeeSalary").on("blur", function () {

    var salary = $("#EmployeeSalary");//gets tag id       
    var num = parseInt(salary.val());//sets value      

    //Validates if the value is zero
    if (num >= 0) {
        $("#Validatesalary").hide();
        var test = $("#salary").val(num);
        var formatted = currency(num, "$", 0);//the method is called for convert it to the desired format
        salary.val(formatted);//set the new value to text
    }
    else {

        String.prototype.contains = function (word) {
            return this.indexOf(word) > -1;
        }

        if (salary.val().contains("-")) {
            salary.val("");
            $("#salary").val("");
            return false
        }
        if (salary.val().contains("$")) {
            $("#Validatesalary").hide();
            var numEdit = salary.val().replace("$", "").replace(",", "");
            var formattedAgain = currency(numEdit, "$", 0);
            salary.val(formattedAgain);//set the new value to text

        }
        else {
            $("#Validatesalary").show();
            salary.val("");
            $("#salary").val("");
        }

    }
});




$("#EmployeeHousingInterest").on("blur", function () {

    var salary = $("#EmployeeHousingInterest");//gets tag id       
    var num = parseInt(salary.val());//sets value      

    //Validates if the value is zero
    if (num >= 0) {
        $("#ValidatehousingInterest").hide();
        var test = $("#housingInterest").val(num);
        var formatted = currency(num, "$", 0);//the method is called for convert it to the desired format
        salary.val(formatted);//set the new value to text
    }
    else {

        String.prototype.contains = function (word) {
            return this.indexOf(word) > -1;
        }

        if (salary.val().contains("-")) {
            salary.val("");
            $("#housingInterest").val("");
            return false
        }
        if (salary.val().contains("$")) {
            $("#ValidatehousingInterest").hide();
            var numEdit = salary.val().replace("$", "").replace(",", "");
            var formattedAgain = currency(numEdit, "$", 0);
            salary.val(formattedAgain);//set the new value to text

        }
        else {
            $("#ValidatehousingInterest").show();
            salary.val("");
            $("#housingInterest").val("");
        }

    }
});



$("#EmployeeDeduction").on("blur", function () {

    var salary = $("#EmployeeDeduction");//gets tag id       
    var num = parseInt(salary.val());//sets value      

    //Validates if the value is zero
    if (num >= 0) {
        $("#Validatededuction").hide();
        var test = $("#deduction").val(num);
        var formatted = currency(num, "$", 0);//the method is called for convert it to the desired format
        salary.val(formatted);//set the new value to text
    }
    else {

        String.prototype.contains = function (word) {
            return this.indexOf(word) > -1;
        }

        if (salary.val().contains("-")) {
            salary.val("");
            $("#deduction").val("");
            return false
        }
        if (salary.val().contains("$")) {
            $("#Validatededuction").hide();
            var numEdit = salary.val().replace("$", "").replace(",", "");
            var formattedAgain = currency(numEdit, "$", 0);
            salary.val(formattedAgain);//set the new value to text

        }
        else {
            $("#Validatesalary").show();
            salary.val("");
            $("#deduction").val("");
        }

    }
});


$("#EmployeePrepaid").on("blur", function () {

    var salary = $("#EmployeePrepaid");//gets tag id       
    var num = parseInt(salary.val());//sets value      

    //Validates if the value is zero
    if (num >= 0) {
        $("#Validateprepaid").hide();
        var test = $("#prepaid").val(num);
        var formatted = currency(num, "$", 0);//the method is called for convert it to the desired format
        salary.val(formatted);//set the new value to text
    }
    else {

        String.prototype.contains = function (word) {
            return this.indexOf(word) > -1;
        }

        if (salary.val().contains("-")) {
            salary.val("");
            $("#prepaid").val("");
            return false
        }
        if (salary.val().contains("$")) {
            $("#Validateprepaid").hide();
            var numEdit = salary.val().replace("$", "").replace(",", "");
            var formattedAgain = currency(numEdit, "$", 0);
            salary.val(formattedAgain);//set the new value to text

        }
        else {
            $("#Validateprepaid").show();
            salary.val("");
            $("#prepaid").val("");
        }

    }
});


$("#EmployeeAFC").on("blur", function () {

    var salary = $("#EmployeeAFC");//gets tag id       
    var num = parseInt(salary.val());//sets value      

    //Validates if the value is zero
    if (num >= 0) {
        $("#Validateafc").hide();
        var test = $("#afc").val(num);
        var formatted = currency(num, "$", 0);//the method is called for convert it to the desired format
        salary.val(formatted);//set the new value to text
    }
    else {

        String.prototype.contains = function (word) {
            return this.indexOf(word) > -1;
        }

        if (salary.val().contains("-")) {
            salary.val("");
            $("#afc").val("");
            return false
        }
        if (salary.val().contains("$")) {
            $("#Validateafc").hide();
            var numEdit = salary.val().replace("$", "").replace(",", "");
            var formattedAgain = currency(numEdit, "$", 0);
            salary.val(formattedAgain);//set the new value to text

        }
        else {
            $("#Validateafc").show();
            salary.val("");
            $("#afc").val("");
        }

    }
});


$("#EmployeePension").on("blur", function () {

    var salary = $("#EmployeePension");//gets tag id       
    var num = parseInt(salary.val());//sets value      

    //Validates if the value is zero
    if (num >= 0) {
        $("#Validatepension").hide();
        var test = $("#pension").val(num);
        var formatted = currency(num, "$", 0);//the method is called for convert it to the desired format
        salary.val(formatted);//set the new value to text
    }
    else {

        String.prototype.contains = function (word) {
            return this.indexOf(word) > -1;
        }

        if (salary.val().contains("-")) {
            salary.val("");
            $("#pension").val("");
            return false
        }
        if (salary.val().contains("$")) {
            $("#Validatepension").hide();
            var numEdit = salary.val().replace("$", "").replace(",", "");
            var formattedAgain = currency(numEdit, "$", 0);
            salary.val(formattedAgain);//set the new value to text

        }
        else {
            $("#Validatepension").show();
            salary.val("");
            $("#pension").val("");
        }

    }
});




function Hability(id) {


    if (document.getElementById('state_' + id).checked) {
        $("#txtvalue_" + id).prop("disabled", false);
    }
    else {
        $("#txtvalue_" + id).prop("disabled", true);
        $("#txtvalue_" + id).val(0);
    }

}




