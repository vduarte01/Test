$(function () {


    $(".btnDeleteEmployee").on("click", function () {

        var employeeId = $("#hdEmployeeId").val();

        $.ajax({
            cache: false,
            method: "POST",
            data: { employeeId: employeeId },
            url: GetURL() + "Employee/DeleteEmployee"
        }).done(function (data) {
            if (data == "Ok")
                location.reload();
            else
                alert(data);

        }).fail(function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + " : " + errorThrown);
        });
    });

});


function deleteEmployee(employeeId) {


    var name = $("[data-id='" + employeeId + "']").find('.name').text();
    var lastmname = $("[data-id='" + employeeId + "']").find('.lastName').text();

    $(".lblInformation").text("Are you sure to delete this employee? " + name + " " + lastmname);   
    
    $("#hdEmployeeId").val(employeeId);
    $('#ModalDeleteEmployee').modal('show');

}