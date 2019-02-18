/// <reference path="jquery.validate-vsdoc.js" />
$(function () {


    $('.dataTable').DataTable({
        "language": {
            "decimal": "",
            "emptyTable": "No hay datos disponibles en la tabla",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
            "infoEmpty": "Mostrando 0 a 0 de 0 entradas",
            "infoFiltered": "(filtrado de _MAX_ total de entradas)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "Mostrar _MENU_ entradas",
            "loadingRecords": "Cargando...",
            "processing": "Procesando...",
            "search": "Buscar:",
            "zeroRecords": "No se encontraron registros coincidentes",
            "paginate": {
                "first": "Primero",
                "last": "Ultimo",
                "next": "Siguiente",
                "previous": "Anterior"
            },
            "aria": {
                "sortAscending": ": Activar para ordenar la columna ascendente",
                "sortDescending": ": Activar para ordenar la columna descendente"
            }
        }
    });


    $("#tblUsers").DataTable();
    $("#tblEnjoy").DataTable();
    $("#tblPaid").DataTable();
    $("#tblCollective").DataTable();

});

