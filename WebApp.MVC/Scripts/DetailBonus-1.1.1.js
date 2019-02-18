


function showDetail(Id,Name) {

    $("#Name").val(Name);


    $.ajax({
        cache: false,
        method: "GET",
        data: { id: Id },
        url: GetURL() + "Bonus/Detail"
    }).done(function (data_) {
        console.log(data_);
        if (data_.length > "0")
            //location.reload();

            var a = 0;
        var dataSet;
        var variable;



        while (a < data_.length) {


            if (a > 0) {
                dataSet = [
                    [formatJSONDate(data_[a].Bonus_Date), data_[a].Bonus_Value, data_[a].Hours_From_Hire_Date, data_[a].Hours_From_Last, data_[a].Longevity_Years]
                ];

              variable = variable.concat(dataSet);
            }
            else {
                variable = [
                    [formatJSONDate(data_[a].Bonus_Date), data_[a].Bonus_Value, data_[a].Hours_From_Hire_Date, data_[a].Hours_From_Last, data_[a].Longevity_Years]
                ];
            }
  
            a = a + 1;


        }


            $("#tblDetail").DataTable(
                {
                    data: variable,
                    destroy: true


                });
   

    }).fail(function (XMLHttpRequest, textStatus, errorThrown) {
        alert(textStatus + " : " + errorThrown);
    });


}



function formatJSONDate(jsonDate) {
    /***si viene una fecha JSON de formato /Date(1224043200000)/*****/
    //var newDate = dateFormat(jsonDate, "mm/dd/yyyy");     
    var newDate = new Date(parseInt(jsonDate.substr(6)));
    var month = newDate.getMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }
    var day = newDate.getDate();
    if (day < 10) {
        day = "0" + day;
    }
    var year = newDate.getFullYear();
    var newDate = month + "/" + day + "/" + year;
    return newDate;
}




