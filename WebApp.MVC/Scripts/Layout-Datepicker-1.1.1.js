/// <reference path="jquery-1.10.2.intellisense.js" />
$(function () {
    var a = $(".datepicker").attr("readonly", "readonly").datepicker({
        dateFormat: 'yy-mm-dd',
        showAnim: "blind",
        duration: 100
    });

    $(".datepickerEducation").attr("readonly", "readonly").datepicker({
        dateFormat: 'yy-mm-dd',
        showAnim: "blind",
        duration: 100,
        changeMonth: true,
        changeYear: true
    });

    
});