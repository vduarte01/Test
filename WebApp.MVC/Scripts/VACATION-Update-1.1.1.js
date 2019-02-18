$(function () {

    $('.VACATIONUpdate').on("click", function (e) {
        VacationUpdate();
    });


});


function VacationUpdate() {
    $.ajax({
        cache: false,
        method: "POST",
        url: GetURL() + "Vacation/UpdateDetail"
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



