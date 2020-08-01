$(document).ready(function () {

    $.getJSON("http://localhost:8080/api/apts", function (data) {
        var items = [];
        $.each(data, function (i, apt) {
            items.push("<div class='card-deck mb-3 text-center'>" +
                "<div class='card mb-4 lg-4 box-shadow'>" +
                "<div class='card-body'>" +
                "<h6 class='card-subtitle mb-2 text-muted'>" + apt.address + "</h6>" +
                "<h1 class='card-title pricing-card-title'>" + apt.name + "</h1>" +
                "</div>" +
                "</div>" +
                "</div>")
        });

        $(items.join("")).appendTo("#apt-container");
    });

});