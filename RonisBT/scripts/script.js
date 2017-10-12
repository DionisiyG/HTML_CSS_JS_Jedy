$(document).ready(function () {
    //slider settings for Range block
    $('.range-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        /*responsive: [
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
        ]*/
    });

    //slider settings for Intro block
    $('.intro-slider').slick({
        dots: true,
        vertical: true,
        arrows: false,
        draggable:true,
        verticalSwiping:true,
        infinite: true,
        autoplay:true,
        autoplaySpeed:1500,
        speed: 800,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 1058,
                settings: {
                    draggable:false,
                    verticalSwiping:false,
                }
            },
        ]
    });

    //Validation
    $.validator.addMethod(
        "regex",
        function(value, element, regexp)  {
            if (regexp.constructor != RegExp) regexp = new RegExp(regexp);
            else if (regexp.global) regexp.lastIndex = 0;
            return this.optional(element) || regexp.test(value);
        }
    );
    $('form').each(function () {
        $(this).validate({
            rules:{
                email: {
                    required: true,
                    email: true,
                    regex: /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,4}\b/i
                }
            },
            messages: {
                email: "Your email address must be in the format of name@domain.com"
            },
            submitHandler: function(form) {
                //show modal window on submit form
                $('#overlay').fadeIn(400, function(){
                        $('#modal_form')
                            .css('display', 'block')
                            .animate({opacity: 1, top: '50%'}, 200);
                    });
                $('.submit').click(function () {
                    form.submit();
                });
            }
        });
    });

    //close modal window
    $('#modal_close, #overlay').click( function(){
        $('#modal_form')
            .animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                    $("form").trigger("reset");
                }
            );
    });
});

