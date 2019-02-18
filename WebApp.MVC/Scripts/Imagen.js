

$(function () {

    var file = $('#imgPreview').attr('src');

    if (file == "#")
    {
        $("#imgPreview").addClass("hide");
        $(".removeImage").addClass("hide");
        $fileupload = $('#fileLogo');
        $fileupload.replaceWith($fileupload.clone(true));
        $(".spnError").addClass('hide');
    }
    else
    {
        $(".removeImage").removeClass("hide");
    }


    $("#fileLogo").on("change", function () {
        $("#imgPreview").addClass("hide");
        $(".removeImage").removeClass("hide");
        validateImage(this);
        previewImageFile(this);
    });

    //hide the image
    $(".removeImage").on("click", function () {
        $("#imgPreview").addClass("hide");
        $(".removeImage").addClass("hide");
        //$("#fileLogo").replaceWith(("#fileLogo").val("").clone(true));
        $fileupload = $('#fileLogo');
        $fileupload.replaceWith($fileupload.clone(true));
        $(".spnError").addClass('hide');
    });

    //$("#btnCreate").on("click", function (event) {

    //    if ($("#fileLogo").val() == "") {
    //        event.preventDefault();
    //        $(".spnError").removeClass('hide').text("You must select an image file.");
    //    }

    //});

});

///Shows a preview image
function previewImageFile(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {

            $('#imgPreview').attr('src', e.target.result);
            $("#imgPreview").removeClass("hide");
            //$("#imgPreview").removeClass("hide");
        }

        reader.readAsDataURL(input.files[0]);
    }
}



///This method validates the imgae
function validateImage(selector) {

    var valSize = 0;
    var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.png|.bmp)$/;

    $(".Documento").each(function () {
        if (this.files[0]) {
            valSize = valSize + (((this.files[0].size) / 1024) / 1024);

            if (regex.exec(this.files[0].name) != null) {
                if (!$(".spnError").hasClass("hide")) {
                    $(".spnError").addClass('hide');
                    $("#btnCreate").removeAttr("disabled");
                }
            }
            else {
                $("#btnCreate").attr("disabled", "disabled");
                $(selector).replaceWith($(selector).val('').clone(true));
                $(".spnError").removeClass('hide').text("Invalid type. Only the following types (png, jpeg, bmp and jpg) are supported.");
                $("#imgPreview").addClass("hide");
                $(".removeImage").addClass("hide");
            }
        }

    });
    if ((valSize > 2.5)) {
        $(".spnError").removeClass('hide').text("You can not upload images over 2.5 MB");
        $("#btnCreate").attr("disabled", "disabled");
        $("#imgPreview").addClass("hide");
    }
    else {
        $("#btnCreate").removeAttr("disabled");
    }
}
