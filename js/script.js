$(function(){
    $('#card-1 .task-type-container a').click(function () {
        var type = $(this).data('type');
        $('#card-1').removeClass('animated').addClass('animated fadeInRight');
        $('#card-2').removeClass('hidden animated').addClass('animated fadeInLeft');
    });

    $('#card-2 a').click(function () {
        var type = $(this).data('type');
        $('#card-1 .task-type-container > div').removeClass('col-md-6');
        $('#card-1').removeClass('animated').addClass('animated fadeInRight');
        $('#card-2').removeClass('animated').addClass('animated fadeInRight');
        $('#card-3').removeClass('hidden animated').addClass('animated fadeInLeft');
    });

    $('#card-3 a').click(function () {
        var type = $(this).data('type');
        $('#card-1').removeClass('animated').addClass('animated fadeInRight');
        $('#card-2').removeClass('animated').addClass('animated fadeInRight');
        $('#card-3').removeClass('animated').addClass('animated fadeInRight');
        $('#card-4').removeClass('hidden animated').addClass('animated fadeInLeft');
    });
});