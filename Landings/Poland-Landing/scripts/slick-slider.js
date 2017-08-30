
$(document).ready(function(){
    $('.slicker').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        nextArrow:$('.arrow-right'),
        prevArrow:$('.arrow-left')
    });
});