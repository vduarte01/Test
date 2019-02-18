/// <reference path="jquery-1.10.2.intellisense.js" />
$(function () {



    //Informacion de fecha y usuario
    var fecha = '';
    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1;
    var curr_year = d.getFullYear();
    fecha = curr_date + "-" + curr_month + "-" + curr_year

    $(".NameUser").text($.cookie('name'));
    $("#lblFecha").text(fecha);



        

    //Error messages
    var AlertVBE = $(".alertVBE p").first().text();
    var AlertVB = $(".alertVB p").first().text();

    if (AlertVBE != "") {
        $(".alertVBE").removeClass("hide");
        $(".alertVBE").addClass("alert alert-danger");
    }
    if (AlertVB != "") {
        $(".alertVB").removeClass("hide");
        $(".alertVB").addClass("alert alert-success");
    }
    $(".alertVBEList").addClass("alert alert-warning");

    var NUMBER_FORMATS = {
        "CURRENCY_SYM": "$",
        "DECIMAL_SEP": ".",
        "GROUP_SEP": ",",
        "PATTERNS": [{
            "gSize": 3,
            "lgSize": 3,
            "maxFrac": 3,
            "minFrac": 0,
            "minInt": 1,
            "negPre": "-",
            "negSuf": "",
            "posPre": "",
            "posSuf": ""
        }, {
            "gSize": 3,
            "lgSize": 3,
            "maxFrac": 2,
            "minFrac": 2,
            "minInt": 1,
            "negPre": "-\u00a4",
            "negSuf": "",
            "posPre": "\u00a4",
            "posSuf": ""
        }]
    }

    var formats = NUMBER_FORMATS;

    var DECIMAL_SEP = '.';

    function isObjectEmpty(obj) {
        if (obj) {
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    return false;
                }
            }
        }
        return true;
    }

    function isUndefined(value) {
        return typeof value === 'undefined';
    }

    function isObject(value) {
        // http://jsperf.com/isobject4
        return value !== null && typeof value === 'object';
    }

    function formatNumber(number, pattern, groupSep, decimalSep, fractionSize) {
        if (isObject(number)) return '';

        var isNegative = number < 0;
        number = Math.abs(number);

        var isInfinity = number === Infinity;
        if (!isInfinity && !isFinite(number)) return '';

        var numStr = number + '',
            formatedText = '',
            hasExponent = false,
            parts = [];

        if (isInfinity) formatedText = '\u221e';

        if (!isInfinity && numStr.indexOf('e') !== -1) {
            var match = numStr.match(/([\d\.]+)e(-?)(\d+)/);
            if (match && match[2] == '-' && match[3] > fractionSize + 1) {
                number = 0;
            } else {
                formatedText = numStr;
                hasExponent = true;
            }
        }

        if (!isInfinity && !hasExponent) {
            var fractionLen = (numStr.split(DECIMAL_SEP)[1] || '').length;

            // determine fractionSize if it is not specified
            if (isUndefined(fractionSize)) {
                fractionSize = Math.min(Math.max(pattern.minFrac, fractionLen), pattern.maxFrac);
            }

            // safely round numbers in JS without hitting imprecisions of floating-point arithmetics
            // inspired by:
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
            number = +(Math.round(+(number.toString() + 'e' + fractionSize)).toString() + 'e' + -fractionSize);

            var fraction = ('' + number).split(DECIMAL_SEP);
            var whole = fraction[0];
            fraction = fraction[1] || '';

            var i, pos = 0,
                lgroup = pattern.lgSize,
                group = pattern.gSize;

            if (whole.length >= (lgroup + group)) {
                pos = whole.length - lgroup;
                for (i = 0; i < pos; i++) {
                    if ((pos - i) % group === 0 && i !== 0) {
                        formatedText += groupSep;
                    }
                    formatedText += whole.charAt(i);
                }
            }

            for (i = pos; i < whole.length; i++) {
                if ((whole.length - i) % lgroup === 0 && i !== 0) {
                    formatedText += groupSep;
                }
                formatedText += whole.charAt(i);
            }

            // format fraction part.
            while (fraction.length < fractionSize) {
                fraction += '0';
            }

            if (fractionSize && fractionSize !== "0") formatedText += decimalSep + fraction.substr(0, fractionSize);
        } else {
            if (fractionSize > 0 && number < 1) {
                formatedText = number.toFixed(fractionSize);
                number = parseFloat(formatedText);
                formatedText = formatedText.replace(DECIMAL_SEP, decimalSep);
            }
        }

        if (number === 0) {
            isNegative = false;
        }

        parts.push(isNegative ? pattern.negPre : pattern.posPre,
            formatedText,
            isNegative ? pattern.negSuf : pattern.posSuf);
        return parts.join('');
    }
    ///This method converts a number in currency format
    window.currency = function (amount, currencySymbol, fractionSize) {
        if (isUndefined(currencySymbol)) {
            currencySymbol = formats.CURRENCY_SYM;
        }

        if (isUndefined(fractionSize)) {
            fractionSize = formats.PATTERNS[1].maxFrac;
        }

        // if null or undefined pass it through
        return (amount == null) ? amount : formatNumber(amount, formats.PATTERNS[1], formats.GROUP_SEP, formats.DECIMAL_SEP, fractionSize).
        replace(/\u00A4/g, currencySymbol);
    };
});

///This method gets the date in JSON format and convert format Date
function parseJSONDate(string) {
    ///The dates in JSON comes in a String format very different ... here are convert to Date
    var fullDate = new Date(parseInt(string.substr(6)));
    var month = (fullDate.getMonth() + 1) + "";

    if (month.length == 1)
        month = "0" + month;

    var day = fullDate.getDate() + "";
    if (day.length == 1)
        day = "0" + day;

    var currentDate = month + "/" + day + "/" + fullDate.getFullYear();

    return currentDate;
}
///This method gets and validates the url (localhost or colsql)
function GetURL() {
    var nameProject = '';
    var url;

    url = window.location.host + "/";
    if (url.split(":")[0] != "localhost") {
        nameProject = "CraftLongBonus/";
    }
    url = window.location.protocol + "//" + url + nameProject;
    return url;
}

///This method gets the url parameters
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};