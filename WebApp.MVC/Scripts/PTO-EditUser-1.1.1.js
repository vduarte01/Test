﻿$(function () {
    var fullname = $("#name").val().split(/,\s|\s|,/);

    if (fullname.length == 4) {
        $("#firstName").val(fullname[0] + ' ' + fullname[1]);
        $("#lastName").val(fullname[2] + ' ' + fullname[3]);
    }
    else if (fullname.length == 3) {
        $("#firstName").val(fullname[0]);
        $("#lastName").val(fullname[1] + ' ' + fullname[2]);
    }
    else {
        $("#firstName").val(fullname[0]);
        $("#lastName").val(fullname[1]);
    }

    $("#fileExcel").on("change", function () {
        validateExcel(this);
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