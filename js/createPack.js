// // $( "#createForm" ).submit(function( event ) {
// //
// //     // Stop form from submitting normally
// //     event.preventDefault();
// //
// //     // collect the form data
// //
// //
// //     $.ajax({
// //         type: "POST",
// //         url: "http://localhost:8080/api/packs/pack?userAccount="+getUrlVars()["uaccount"],
// //         data: JSON.stringify(formData),
// //         contentType: "application/json",
// //         crossDomain: true,
// //         dataType: "json",
// //         success: function (response) {
// //             alert(response);
// //         },
// //
// //         error: function (response) {
// //             // error handler
// //             console.log(response);
// //             alert('fail' + status.code);
// //         }
// //     });
// // });
// $("#createForm").click(function () {
//
//     var url = "http://localhost:8080/api/packs/pack?userAccount=" + getUrlVars()["uaccount"];
//     var xhr = new XMLHttpRequest();
//     var formData = new FormData(this);
//
//     xhr.open("POST",url,true);
//     xhr.setRequestHeader("Content-Tyoe","application/json");
//     // Create a state change callback
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//
//             // Print received data from server
//             result.innerHTML = this.responseText;
//
//         }
//     };
//     // Converting JSON data to string
//     var data = JSON.stringify(formData);
//
//     // Sending data with the request
//     xhr.send(data);
//
//
//
//     // // Stop form from submitting normally
//     // event.preventDefault();
//     //
//     // // collect the form data
//     // // var formData = new FormData(this)
//     // // $(this).attr("action","http://localhost:8080/api/packs/pack?userAccount=" + getUrlVars()["uaccount"]);
//     // // var url = "http://localhost:8080/api/packs/pack?userAccount=" + getUrlVars()["uaccount"];
//     //
//     // $.ajax({
//     //     type: "POST",
//     //     url:  "http://localhost:8080/api/packs/pack?userAccount=" + getUrlVars()["uaccount"],
//     //     data: JSON.stringify(formData),
//     //     contentType: "application/json",
//     //     crossDomain: true,
//     //     dataType: JSON,
//     //     success: function (response) {
//     //         alert(response);
//     //     },
//     //
//     //     error: function (response) {
//     //         // error handler
//     //         console.log(response);
//     //         alert('fail' + status.code);
//     //     }
//     // });
// });