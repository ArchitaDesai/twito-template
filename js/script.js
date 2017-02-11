var curr_step,max_step=4;
$(function(){
    $('a[data-type]').click(function () {
        var type = $(this).data('type');
        var step = $(this).parents('.card-container').data('step');
        $(this).parents('.card-container').removeClass('animated').addClass('animated fadeInLeft');
        if(step==curr_step){
            $('div[data-step="'+(curr_step+1)+'"]').addClass('hidden');
            $('.form').trigger('reset').find('label').removeClass('active');
        }
        if(step<curr_step){
            for(var i=step;i<max_step;i++){
                $('div[data-step="'+(i+1)+'"]').addClass('hidden');
            }
            $('.form').trigger('reset').find('label').removeClass('active');
        }
        $("div[data-parent='"+type+"']").removeClass('hidden animated').addClass('animated fadeInLeft');
        curr_step=step;
    });
});
