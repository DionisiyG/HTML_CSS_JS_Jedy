$(document).ready(function() {
    $('a.feedback-btn').click( function(event){
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function(){
                $('#show-popup')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '13%'}, 200);
            });
    });
    $('.close, #overlay').click( function(){
        $('#show-popup')
            .animate({opacity: 0, top: '13%'}, 200,
                function(){
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
    });
    $('.button').click(function () {
        $('.form').css('display', 'none');
        $('.title').css('display', 'none');
        $('.approved').css('display', 'block');
    })
});