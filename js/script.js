$(document).ready(function() {
    $('#fullpage').fullpage({
        //options here
        // autoScrolling:false,
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
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    })
    $('.header__watch-video a').click(function(){
        
        if( $(this).hasClass('is-active') ){
            // alert('redirect to video');
            $.fn.fullpage.moveTo(4);
            $(this).toggleClass('is-active');
            return false;
        }
        $(this).toggleClass('is-active');
    })
    $('.fayde__hotspot').click(function(){
        $('.overlay').show();
        var id = $(this).attr('id');
        $('[data-popup='+ $(this).attr('id')+']').slideDown('fast');
    })
    $('.faydepop__close-svg').click(function(){
        $('.overlay').hide();
        $('.faydepop').slideUp('fast');
    })
    $(document).keyup(function(e) {
        if (e.keyCode === 27){
            $('.faydepop__close-svg').click();   // esc
        }
    });
});