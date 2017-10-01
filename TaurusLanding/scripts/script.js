$(document).ready(function () {
    //remove hover from Youtube play button
    $('button.start-video').on('mouseover', function () {
        $(this).css('opacity', '1');
    }).on('mouseout', function () {
        $(this).css('opacity', '1');
    });
    //add eye on hover
    $('.sample').hover(function () {
       $(this).find('.some-content').addClass('eye-hover');
    }, function () {
        $(this).find('.some-content').removeClass('eye-hover');
    });
    //scroll to contact form after pressing Contact us button
    $('button.contact-us').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: $('#feedback').offset().top }, 'slow')
    });
    //animated scrolling when clicking on nav
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        history.pushState(null, null, dest);
        var dest = $(this).attr('href');
        $('html,body').animate({ scrollTop: $(dest).offset().top }, 'slow'); });
    //show more block after clicking 'Load more work' in Work Sample section
    $('.more').on('click', function () {
        $('.hidden-row').fadeToggle('slow', function () {
            if($('.more').text() == 'HIDE'){
                $('.more').text('LOAD MORE WORK');
            }
            else{
                $('.more').text('HIDE');
            }
        });
    });
    //Slick slider settings
    $('.slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        /*variableWidth: true,*/
        responsive: [
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
        ]
    });
    //animate progress bar in Skills block

});
//change Youtube play button
var tag = document.createElement('script');
tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
onYouTubeIframeAPIReady = function () {
    player = new YT.Player('player', {
        height: '244',
        width: '434',
        videoId: 'N4k5pyt06VY',
        playerVars: {
            'autoplay': 0,
            'rel': 0,
            'showinfo': 0
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}
onPlayerStateChange = function (event) {
    if (event.data == YT.PlayerState.ENDED) {
        $('.start-video').fadeIn('normal');
    }
}
$(document).on('click', '.start-video', function () {
    $(this).fadeOut('normal');
    player.playVideo();
});


