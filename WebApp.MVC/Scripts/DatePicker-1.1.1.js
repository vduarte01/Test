$(function () {

    $(".datepicker").attr("readonly", "readonly").datepicker({
        dateFormat: 'mm-dd-yy',
        showAnim: "blind",
        duration: 100,
        autoclose: true,
        changeMonth: true,
        changeYear: true
    });

});
