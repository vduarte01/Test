$(function () {


    $.widget("ui.dialog", $.extend({}, $.ui.dialog.prototype, {
        _title: function (title) {
            var $title = this.options.title || '&nbsp;'
            if (("title_html" in this.options) && this.options.title_html == true)
                title.html($title);
            else title.text($title);
        }
    }));

    $('a.media').media({ width: 999, height: 400 });


    $('#btnPdfShow').on('click', function () {        
        $("#ModalPdf").dialog("open");
    });

    $("#ModalPdf").dialog({
        autoOpen: false,
        show: { duration: 1000 },
        hide: { duration: 1000 },        
        title: "<div class='widget-header widget-header-small'><h4 class='smaller'><i class='icon-ok'></i>Cover Letter | Resume</h4></div>",
        title_html: true,
        height: "auto",
        width: "auto",
        modal: true,
        responsive:true,
        buttons: [{
            text: "Cancel",
            "class": "btn btn-xs",
            click: function () {
                $(this).dialog("close");
            }
        }]
    });
    
});

