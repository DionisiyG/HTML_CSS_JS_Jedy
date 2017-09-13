$(document).ready(function(){
    $('.feedback-slick-slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        speed: 300,
        nextArrow: $('.next'),
        prevArrow: $('.prev'),
        variableWidth: true,
        slidesToShow: 1,
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
});