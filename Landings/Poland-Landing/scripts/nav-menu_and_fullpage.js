$(document).ready(function(){
    var $menu = $("#nav-menu");
    $('#fullpage').fullpage({
        anchors: ['top', 'services', 'vacancy', 'execution', 'feedback', 'about-us', 'contacts'],
        menu: '#nav-menu',
        scrollingSpeed: 300,
        responsiveWidth:1281,
        css3: true,
        onLeave: function (index, nextIndex, direction) {
            if(direction==='down'){
                $menu.removeClass("go-bot").addClass("go-top")
            }
            else if(nextIndex === 1){
                $menu.removeClass("go-top").addClass("go-bot")
            }
        },
    });
});
