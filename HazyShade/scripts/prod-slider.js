$(document).ready(function(){
    $('.pr-slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        autoplay:true,
        autoplaySpeed:1500,
        speed: 600,
        nextArrow: $('.next'),
        prevArrow: $('.prev'),
        variableWidth: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    arrows:false,
                    infinite: true,
                    dots: false
                }
            },
        ]
    });
});