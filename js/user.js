$(document).ready(function () {

    $.getJSON("http://localhost:8080/api/users", function (data) {
        var items = [];
        $.each(data, function (i, user) {
            items.push("<div class='card-deck mb-3 text-center'>" +
                "<div class='card mb-4 lg-4 box-shadow'>" +
                "<div class='card-header'>" +
                "<h4 class='my-0 font-weight-normal'>Id:" + user.id + "</h4>" +
                "</div>" +
                "<div class='card-body'>" +
                "<h6 class='card-subtitle mb-2 text-muted'>Room : " + user.room + "</h6>" +
                "<h1 class='card-title pricing-card-title'>" + user.name + "</h1>" +
                "<a href='/html/package.html?uid="+user.id +"&uname="+user.name +"&uaccount="+user.account+"' class='btn btn-primary'>see packages</a>" +
                "</div>" +
                "</div>" +
                "</div>")
        });

        $(items.join("")).appendTo("#user-container");
    });

});