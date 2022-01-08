
$(document).ready(function(){
    $("#loginButton").click(function(){
$("#loginmodal").modal();
});
    $("#ReserveButton").click(function(){
$("#reserveform").modal();
});
    $('[data-toggle="option1"]').toggle();
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carousel-pause").click(function(){
        $("#mycarousel").carousel('pause');
    });
    $("#carousel-play").click(function(){
        $("#mycarousel").carousel('cycle');
    });
});