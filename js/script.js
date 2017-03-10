var curr_step, max_step = 4, wrapper = $('#wrapper');
$(function () {
    $('a[data-type]').click(function () {
        var type = $(this).data('type');
        var step = $(this).parents('.card-container').data('step');
        $(this).parents('.card-container').removeClass('animated').addClass('animated fadeInLeft');
        if (step == curr_step) {
            $('div[data-step="' + (curr_step + 1) + '"]').addClass('hidden');
            $('.form').trigger('reset').find('label').removeClass('active');
        }
        if (step < curr_step) {
            for (var i = step; i < max_step; i++) {
                $('div[data-step="' + (i + 1) + '"]').addClass('hidden');
            }
            $('.form').trigger('reset').find('label').removeClass('active');
        }
        if (step >= 2) {
            $(".col-centered").find('.col-md-6').removeClass('col-md-6').addClass('col-md-12');
        } else {
            $(".col-centered").find('.col-md-12').removeClass('col-md-12').addClass('col-md-6');
        }
        $("div[data-parent='" + type + "']").removeClass('hidden animated').addClass('animated fadeInLeft');
        resize();
        curr_step = step;
    });
    resize();
    $(window).resize(function(){
        resize();
    });
});
function resize(){
    var windowH = $(window).height();
    var wrapperH = wrapper.height();
    if (windowH > wrapperH) {
        wrapper.css({'height': ($(window).height()) + 'px'});
    }
}
