
$(document).ready(function(){

    var $fixed = $("#nav-fixed");
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 30){
            $fixed.css("display", "block");
        } else if($(this).scrollTop()) {
            $fixed.css("display", "none");
        }
    });


});
