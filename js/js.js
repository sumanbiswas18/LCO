$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 700){
            $('.scrollToTop').show();
        }else{
            $('.scrollToTop').hide(); 
        }
    });
});
$(function(){
    $('.scrollToTop').on('click',function(){
        $('html, body').animate({scrollTop:0},100);
    });
});