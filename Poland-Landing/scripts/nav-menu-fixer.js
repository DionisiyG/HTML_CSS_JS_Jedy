$(document).ready(function(){

    var $menu = $("#nav-menu");

    $(window).scroll(function(){
        if ( $(this).scrollTop() > 20 && $menu.hasClass("default") ){
            $menu.removeClass("default").addClass("fixed");
        } else if($(this).scrollTop() <= 20 && $menu.hasClass("fixed")) {
            $menu.removeClass("fixed").addClass("default");
        }
    });//scroll
});