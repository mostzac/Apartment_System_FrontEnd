$(document).ready(function () {

    $.getJSON("http://localhost:8080/api/users", function (data) {
        var items = [];
        $.each(data, function (i, user) {
            items.push("<div class='card-deck mb-3 text-center'>" +
                "<div class='card mb-4 lg-4 box-shadow'>" +
                "<div class='card-header'>" +
                "<h4 class='my-0 font-weight-normal'>" + user.name + "</h4>" +
                "</div>" +
                "<div class='card-body'>" +
                "<h1 class='card-title pricing-card-title'>" + user.room + "</h1>" +
                "<button onclick='redirectPack()' class='btn btn-lg btn-block btn-outline-primary'>see packages</button>" +
                "</div>" +
                "</div>" +
                "</div>")
        });

        $(items.join("")).appendTo("#user-container");
    });

});