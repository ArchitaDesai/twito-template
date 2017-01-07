$(function(){
    var windowH = $(window).height();
    var body = $('body').height();
    if(windowH > body) {
        $('body').css({'height':($(window).height())+'px'});
    }
    $(window).resize(function(){
        var windowH = $(window).height();
        var body = $('#wrapper').height();
        var differenceH = windowH - body;
        var newH = body + differenceH;
        var truecontentH = $('#truecontent').height();
        if(windowH > truecontentH) {
            $('#wrapper').css('height', (newH)+'px');
        }
    })
});