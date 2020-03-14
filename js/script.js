$(document).ready(function() {
    $('#fullpage').fullpage({
        //options here
        autoScrolling:false,
        fitToSection:false
        // scrollHorizontally: true
    });
    //methods
    // $.fn.fullpage.setAllowScrolling(false);
    $('.faq-box__item').click(function(){
        if($(this).hasClass('is-active') ){
            $('.faq-box__item').removeClass('is-active');
            $('.faq-box__answer').slideUp('fast');
            return false;
        }
        $('.faq-box__item').removeClass('is-active');
        $(this).addClass('is-active');
        $('.faq-box__answer').slideUp('fast');
        $(this).find('.faq-box__answer').slideDown('fast');
    })
    $('.testi-slider').slick({
        arrows:false,
        dots: true
    })
    $('.v-slider').slick({
        // arrows:false
        // prevArrow: $('.prev'),
        // nextArrow: $('.next')
    })
    $('.watch-video').click(function(){
        $(this).toggleClass('is-active');
    })
    $('.fayde__hotspot').click(function(){
        alert('clicked');
    })
});