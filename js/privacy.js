$(function() {
    var settings = {
        "async": true,
        "crossDomain": true,

        "url": "https://celerationcharts.herokuapp.com/api/document-open/",
        "method": "GET",
        "dataType": "json",
        "headers": {
            "document_type": "privacy",
            "cache-control": "no-cache",
            "postman-token": "7e4ec1e0-d381-7798-943c-3989e256d08a"
        },
        "data": {
            "document_type": "Privacy",
        }
    }

    $.ajax(settings).done(function (response) {
        $("#TOC").html(response.doc.html_code);
    });
});