$(document).ready(function(){
    $('a.more').click(function (event) {
        event.preventDefault();
        $('.text-block').fadeIn(400,
            function(){
                $('.more-block')
                    .css('display', 'block')
            });
    })
});