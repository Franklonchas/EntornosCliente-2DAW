// ejer 5

// Solo el primero elemento de la primera lsita
$(document).ready(function () {
    $("#b1").click(function () {
        $("ul li:first").hide();
    });
});


// todos los elementos
$(document).ready(function () {
    $("#b2").click(function () {
        $("ul li:first-child").hide();
    });
});

//ejer 8

$(document).ready(function () {
    $("#fuente").click(function () {
        $("p").css({'color': 'red', 'font-size': '1.3em'});
    });
});

$(document).ready(function () {
    $("p").click(function () {
        $(this).siblings("p").hide(1000);
    });
});

$(document).ready(function(){
    $(".contenido").mouseover(function(){
        $(this).css("background-color", "yellow");
    });
    $(".contenido").mouseout(function(){
        $(this).css("background-color", "white");
    });
});


