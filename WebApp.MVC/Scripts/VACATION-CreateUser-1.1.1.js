
$(function () {
    $("#fileExcel").on("change", function () {
        validateExcel(this);
    });


    $(".datepicker").attr("readonly", "readonly").datepicker({
        dateFormat: 'mm-dd-yy',
        showAnim: "blind",
        duration: 100,
        changeMonth: true,
        changeYear: true
    });




    $(".fir")




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