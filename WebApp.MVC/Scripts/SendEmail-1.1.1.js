$(function () {

    //override dialog's title function to allow for HTML titles
    $.widget("ui.dialog", $.extend({}, $.ui.dialog.prototype, {
        _title: function (title) {
            var $title = this.options.title || '&nbsp;'
            if (("title_html" in this.options) && this.options.title_html == true)
                title.html($title);
            else title.text($title);
        }
    }));



    $(".otherEmail").on("blur", function () {

        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (!regex.test($(this).val())) {
            $(".spnEmail").removeClass('hide').text('The email is required');
            $(".btnSendEmail").prop("disabled", true);
        }
        else {
            $(".spnEmail").addClass('hide');
            $(".btnSendEmail").prop("disabled", false);
        }


    });

    $(".btnSendEmail").on("click", function () {

        var user = $("#hd_user").val();  
        var pass = $("#hd_pass").val();
        var email = $("#hd_email").val();
        var otherEmail = $(".otherEmail").val();

        $("#loader").removeClass('hide');

        $.ajax({
            cache: false,
            method: "POST",
            data: { user: user, pass: pass, email: email, otherEmail: otherEmail },
            url: GetURL() + "User/Email",
        }).done(function (data) {
            console.log(data);
            if (data == "Ok")
                location.reload();

        }).fail(function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + " : " + errorThrown);
        });
    });


    $(".chbxAddEmail").on("click", function () {

        if ($(".chbxAddEmail").is(':checked')) {           
            $(".otherEmail").removeClass('hide');
        }
        else {
            if ($(".spnEmail").has('hide')) {
                $(".spnEmail").addClass('hide');
                $(".btnSendEmail").prop("disabled", false);
            }
            $(".otherEmail").addClass('hide');
            $(".otherEmail").val("");

        }

    });

});



function showNotify(user, pass, email) {

    $("#hd_user").val(user);
    $("#hd_pass").val(pass);
    $("#hd_email").val(email);
    //$("#frmNotify").dialog('open');
    var text = $(".lblModal").text();
    $(".lblModal").text(text + email + '?');

}