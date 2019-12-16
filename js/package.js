$(document).ready(function () {

    $.getJSON("http://localhost:8080/api/users/user/1", function (data) {
        var items = [];
        $.each(data.packages, function (i, pack) {
            items.push(
                "<tr>"+
                "<td>" + pack.status + "</td>" +
                "<td>" + pack.shipNumber + "</td>" +
                "<td>" + pack.shipper + "</td>" +
                "<td>" + pack.deliveredDate + "</td>" +
                "<td>" + pack.arrangeDate + "</td>" +
                "<td>" + pack.description + "</td>" +
                "<td>" + pack.notes + "</td>" +
                "</tr>"
            )
        });

        $(items.join("")).appendTo("#myTable");
    });
})
;
