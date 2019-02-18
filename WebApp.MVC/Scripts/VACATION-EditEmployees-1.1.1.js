$(function () {


    $("#fileExcel").on("change", function () {
        validateExcel(this);
    });




    if ($('#autorize').prop('checked')) {
        $('#DivEntryDate').show();
        $('#divDateEnd').hide();
    }
    else
    {
        $('#DivEntryDate').hide();
        $('#divDateEnd').show();
    }

    //Initial Salary
    var salary = $("#salary").val();//gets tag id       
    var num = parseInt(salary);//sets value      

    ////Validates if the value is zero
    if (num > 0) {
        $("#Validatesalary").hide();
        var formatted = currency(num, "$", 0);//the method is called for convert it to the desired format
        var test = $("#EmployeeSalary").val(formatted);
        
    }



    //Initial Interest Housing
    var value = $("#housingInterest").val();//gets tag id       
    var num = parseInt(value);//sets value      

    ////Validates if the value is zero
    if (num >= 0) {
        $("#ValidatehousingInterest").hide();
        var formatted = currency(num, "$", 0);//the method is called for convert it to the desired format
        var test = $("#EmployeeHousingInterest").val(formatted);

    }

    //Initial Deduction
    var value = $("#deduction").val();//gets tag id       
    var num = parseInt(value);//sets value      

    ////Validates if the value is zero
    if (num >= 0) {
        $("#Validatededuction").hide();
        var formatted = currency(num, "$", 0);//the method is called for convert it to the desired format
        var test = $("#EmployeeDeduction").val(formatted);

    }


    //Initial Prepaid
    var value = $("#prepaid").val();//gets tag id       
    var num = parseInt(value);//sets value      

    ////Validates if the value is zero
    if (num >= 0) {
        $("#Validateprepaid").hide();
        var formatted = currency(num, "$", 0);//the method is called for convert it to the desired format
        var test = $("#EmployeePrepaid").val(formatted);

    }

    //Initial AFC
    var value = $("#afc").val();//gets tag id       
    var num = parseInt(value);//sets value      

    ////Validates if the value is zero
    if (num >= 0) {
        $("#Validateafc").hide();
        var formatted = currency(num, "$", 0);//the method is called for convert it to the desired format
        var test = $("#EmployeeAFC").val(formatted);

    }

    //Initial Pension
    var value = $("#pension").val();//gets tag id       
    var num = parseInt(value);//sets value      

    ////Validates if the value is zero
    if (num >= 0) {
        $("#Validatepension").hide();
        var formatted = currency(num, "$", 0);//the method is called for convert it to the desired format
        var test = $("#EmployeePension").val(formatted);

    }


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


$("#autorize").on("change", function () {

    if ($('#autorize').prop('checked')) {
        $('#DivEntryDate').show();
        $('#divDateEnd').hide();
    }
    else {
        $('#DivEntryDate').hide();
        $('#divDateEnd').show();
    }

});



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