$(document).ready(function () {
    //scroll to contact form after pressing Contact us button in info block
    $('.contact-us').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: $('#feedback').offset().top}, 'slow')
    });

    //animated scrolling when clicking on nav
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        history.pushState(null, null, dest);
        var dest = $(this).attr('href');
        $('html,body').animate({scrollTop: $(dest).offset().top}, 'slow');
    });

    //show more block after clicking 'Load more work' in Work Sample section
    $('.more').on('click', function () {
        $('.hidden-row').fadeToggle('slow', function () {
            if ($('.more').text() == 'HIDE') {
                $('.more').text('LOAD MORE WORK');
            }
            else {
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

    //Youtube play video via custom play button
    $('.start-video').on('click', function (ev) {
        $(".video")[0].src += "&autoplay=1";
        ev.preventDefault();
        $('.start-video').fadeOut('slow');
    });

    //animate progress bar filling
    $(function () {
        function loadDaBars() {
            $(".fill").each(function() {
                $(this).data("origWidth", $(this).data().percentage)
                    .width(0)
                    .animate({width: ($(this).data("origWidth"))}, 2200);
            });
        }
        $(document).bind('scroll', function(ev) {
            var scrollOffset = $(document).scrollTop();
            var containerOffset = $('#bar-animate').offset().top - window.innerHeight;
            if (scrollOffset > containerOffset) {
                loadDaBars();
                // unbind event not to load scrolsl again
                $(document).unbind('scroll');
            }
        });
    });
});
