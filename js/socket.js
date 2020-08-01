var stompClient = null;
var token = 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIzIiwiaWF0IjoxNTgyNjYwMDc2LCJpc3MiOiJpby5hc2NlbmRpbmciLCJleHAiOjE1ODI3NDY0NzYsImFsbG93ZWRSZWFkUmVzb3VyY2VzIjoiLyIsImFsbG93ZWRDcmVhdGVSZXNvdXJjZXMiOiIvIiwiYWxsb3dlZFVwZGF0ZVJlc291cmNlcyI6Ii8iLCJhbGxvd2VkRGVsZXRlUmVzb3VyY2VzIjoiLyJ9.HpRFsRtFjl-IkKyJrzzDjZ-aDBhkOFpPlymAuNQOn1g';

function setConnected(connected) {
    $("#connect").prop("disabled", connected);
    $("#disconnect").prop("disabled", !connected);
    if (connected) {
        $("#conversation").show();
    }
    else {
        $("#conversation").hide();
    }
    $("#greetings").html("");
}

function connect() {
    var socket = new SockJS("http://localhost:8080/myWebSocket?token="+token);
    stompClient = Stomp.over(socket);
        stompClient.connect({}, function (frame) {
        setConnected(true);
        console.log('Connected: ' + frame);
        stompClient.subscribe("/topic/greetings", function (greeting) {
            showGreeting(JSON.parse(greeting.body).content);
        });
    });
}

function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
}

function sendName() {
    stompClient.send("/app/sayHello",{}, JSON.stringify({'name': $("#name").val()}));
}

function showGreeting(message) {
    $("#greetings").append("<tr><td>" + message + "</td></tr>");
}

$(function () {
    $("form").on('submit', function (e) {
        e.preventDefault();
    });
    $( "#connect" ).click(function() { connect(); });
    $( "#disconnect" ).click(function() { disconnect(); });
    $( "#send" ).click(function() { sendName(); });




    //todo
});