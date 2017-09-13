$(document).ready(function(){
    $('.product-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
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