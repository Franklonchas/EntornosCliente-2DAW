$(document).ready(function () {
    $("#tabla tr:gt(2)").css("background-color", "blue");
    $("#tabla tr:lt(3)").css("background-color", "red");
});

$(document).ready(function () {
    $("#casillas th:empty")
        .css("background", "yellow");
});

$(document).ready(function () {
    $("#detener").click(function(){
        $("#animate").stop();
    });
    $("#animar").click(function () {
        var div = $("#animate");
        div.animate({height: '300px', opacity: '0.4'}, "slow").animate({
            width: '300px',
            opacity: '0.8'
        }, "slow").animate({height: '100px', opacity: '0.4'},
            "slow").animate({width: '100px', opacity: '0.8'}, "slow");
    });
});

