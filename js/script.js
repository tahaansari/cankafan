$(document).ready(function() {
    $('#fullpage').fullpage({
        //options here
        autoScrolling:false,
        // scrollHorizontally: true
    });
    //methods
    // $.fn.fullpage.setAllowScrolling(false);
    $('.faq-box__item').click(function(){
        if($(this).hasClass('is-active') ){
            $('.faq-box__item').removeClass('is-active');
            $('.faq-box__answer').slideUp();
            return false;
        }
        $('.faq-box__item').removeClass('is-active');
        $(this).addClass('is-active');
        $('.faq-box__answer').slideUp();
        $(this).find('.faq-box__answer').slideDown();
    })
    $('.testi-slider').slick({
        arrows:false,
        dots: true
    })
    $('.v-slider').slick({
        arrows:false
    })
});