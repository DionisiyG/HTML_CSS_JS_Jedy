$(function(){
    $('.phone-list ul').hide();
    $('.phone-list').click(
        function(){
            $(this).find('ul').toggle();
        });
});