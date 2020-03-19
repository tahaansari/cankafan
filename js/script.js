// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
         
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

// function onYouTubeIframeAPIReady() {
   
// }

// 4. The API will call this function when the video player is ready.
// function onPlayerReady(event) {
//   event.target.playVideo();
// }

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.

$(document).ready(function() {
    $('#fullpage').fullpage({
        //options here
        // autoScrolling:false,
        // fitToSection:false,
        fitToSection: true,
        paddingTop: '100px',
        paddingBottom: '20px',
        responsiveHeight: '600',
        scrollOverflow:true,
        fixedElements:'.header',
        slidesNavPosition: 'top',
        onLeave: function(origin, destination, direction){
            $('.overlay').click();
            console.log(origin)
            // var leavingSection = this;
            // //after leaving section 2
            if(origin == 8){
                $('.scroll-to__svg').addClass('up');
            }else{
                $('.scroll-to__svg').removeClass('up');
            }
        }
        // verticalCentered:false
        // scrollHorizontally: true,
    });
    

    //methods
    $.fn.fullpage.setAllowScrolling(false);


    $('.faq-box__item').click(function(){

        if($(this).hasClass('is-active') ){
            // $('.faq-box__item').removeClass('is-active');
            // $('.faq-box__answer').slideUp('fast');
            return false;
        }

        $('.faq-box__item').removeClass('is-active');
        $(this).addClass('is-active');

        $('.faq-box__answer').slideUp('fast');
        $(this).find('.faq-box__answer').slideDown('fast');

    })

    $('.testi-slider').slick({
        draggable:false,
        arrows:false,
        dots: true,
        autoplay:true,
        autoplaySpeed: 2000
    })
    $('.v-slider').slick({
        draggable:false,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
    })
    $('.header__watch-video').hover(function(){
        $(this).addClass('is-active');
        // console.log('fired')
        // if( $(this).hasClass('is-active') ){
        //     // alert('redirect to video');
        //     // $.fn.fullpage.moveTo(4);
        //     $(this).toggleClass('is-active');
        //     return false;
        // }
        // $(this).toggleClass('is-active');
    },function(){
        $(this).removeClass('is-active');
    })
    $('.header__watch-video').click(function(){
        $(this).removeClass('is-active');
        $.fn.fullpage.moveTo(4);
    })
    $('.fayde__hotspot').click(function(){
        $(this).find('use').attr('xlink:href','#icon-hotspot-active')
        $('.fayde__can').addClass('is-active');
        $('.overlay').show();
        var id = $(this).attr('id');
        $('[data-popup='+ $(this).attr('id')+']').slideDown('fast');
    })
    $('.overlay').click(function(){
        $('.fayde__svg use').attr('xlink:href','#icon-hotspot')
        $('.fayde__can').removeClass('is-active');
        $('.faydepop').slideUp('fast');
        if(player){
            if(player.l != null){ 
                stopVideo(); 
            }
        }
        $('.v-player').hide();
        $('.overlay').hide();
    })
    $(document).keyup(function(e) {
        if (e.keyCode === 27){
            $('.overlay').click();   // esc
        }
    });
    $('.faydepop__close-svg').click(function(){
        $('.overlay').click();
    })
    var x = document.getElementById("myAudio"); 
    $('.home__btn').click(function(){
        $('.header').css('opacity','1');
        $('.home__animate-wrap').addClass('inner');
        $('.splash-screen').hide();
        $('.home-screen').show();
        $('.scroll-to').fadeIn();
        $.fn.fullpage.setAllowScrolling(true);
        x.play(); 
        setTimeout(function(){
            $('.home__can').toggle();
            $('.home__katak-tishhh').addClass('is-active');
        },800)
    })

    var player;
    function onPlayerReady(event) {
        event.target.playVideo();
    }
    // var done = false;
    // function onPlayerStateChange(event) {
        // console.log(event.data)
        // if (event.data == YT.PlayerState.PLAYING && !done) {
        // setTimeout(stopVideo, 6000);
        // done = true;
        // }
        // if(event.data == 2){
        //     stopVideo();
        // }
    // }
    function stopVideo() {
         player.destroy();
    }
    $('.v-slider__bg').click(function(){
        $('.overlay').show();
        var url = $(this).attr('data-url');
        player = new YT.Player('player', {
            // playerVars: { 'controls': 0 },
            videoId: url,
            events: {
               'onReady': onPlayerReady,
            //    'onStateChange': onPlayerStateChange
            }
        });
        $('.v-player').show();
    })

});

$(window).on('load', function() { 
    $('.preloader').slideUp();
});