/// <reference path="jquery-1.10.2.intellisense.js" />

$(function () {

    $("#Codigo").on("change", function () {



        var codigo = $("#Codigo").val();

        var celda = parseFloat($("#txtQuantity" + codigo).val());
        var resultado = celda + 1;

        $("#txtQuantity" + codigo).val(resultado);

        $("#Codigo").val("");

    });

});



function CountProduct() {

    //var to = $("#hd_Codigo").val();
    //var Icodigo = Codigo;
    //var Subject = $("#hd_Subject").val();
    //var Body = $("#hd_Body").val();
    //var name = $("#" + idRow).attr("quantitygood");
    //var hiringmanager = $("#" + idRow).attr("hiringmanager");

    //$("#hd_IDSNR").val(idRow);

    //Body += name + " " + hiringmanager;


    //$("#to").val(to);
    //$("#ICodigo").val(Icodigo);
    //$("#Subject").val(Subject);
    //$("#Body").val(Body);

    //$("#frm").dialog('open');


    $("#frm").removeClass('hide').dialog({
        resizable: false,
        show: { effect: "blind", duration: 1000 },
        hide: { effect: "explode", duration: 1000 },
        modal: true,
        title: "Contador",
        title_html: true,
        buttons: [
            //{
            //    html: "<i class='icon-trash bigger-110'></i>&nbsp; Agregar",
            //    "class": "btn btn-danger btn-xs",
            //    click: function () {
            //        $(this).dialog("close");
            //    }
            //}
            //,
            {
                html: "<i class='icon-remove bigger-110'></i>&nbsp; Cancelar",
                "class": "btn btn-xs",
                click: function () {
                    $(this).dialog("close");
                }
            }
        ]
    });

}




function Accounting() {

    alert("Enter pressed");
}



function Aprobation(idRow, code) {
    var res = confirm("¿Desea realizar esta cotización?");
    if (res) {
        var requisitionNro = $("#txtvalue" + code).val();
        if ($.isNumeric(requisitionNro)) {
            $.ajax({
                cache: false,
                type: "GET",
                data: { ID: idRow, GOOD: requisitionNro },
                url: GetURL() + "Rate/GetRate",
                success: function (snr) {
                    if (!snr.Message) {
                        location.reload();
                        //$("#" + idRow).fadeOut("slow");
                        //$(".SnrRequisition").text("SNR pending for Requisition Number (" + snr.cantidad + ")");
                    } else
                        alert(snr.Message);
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert("Internal error. " + xhr.statusText + "   " + thrownError);
                }
            });
        } else
            alert("Requisition number is invalid!");
    }
}