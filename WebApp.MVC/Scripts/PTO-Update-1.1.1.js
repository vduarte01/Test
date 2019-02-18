$(function () {

    $('.PTOUpdate').on("click", function (e) {
        PtoUpdate();
    });


});


function PtoUpdate() {
    $.ajax({
        cache: false,
        method: "POST",
        url: GetURL() + "PTO/UpdateDetail"
    }).done(function (data) {

        if (data == "Ok")
            location.reload();
        else {
            alert(data.Message);
        }

    }).fail(function (XMLHttpRequest, textStatus, errorThrown) {
        alert(textStatus + " : " + errorThrown);
    });
}



