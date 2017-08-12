
$(document).ready(function(){
    function detectBrowserSize() {
        var myWidth = 0;
        if (typeof (window.innerWidth) == 'number') {
            //Non-IE
            myWidth = window.innerWidth;
        } else if (document.documentElement && document.documentElement.clientWidth) {
            //IE 6+ in 'standards compliant mode'
            myWidth = document.documentElement.clientWidth;
        } else if (document.body && document.body.clientWidth) {
            //IE 4 compatible
            myWidth = document.body.clientWidth;
        }
        return myWidth;
    }
    var $fixed = $("#nav-fixed");
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 30){
            $fixed.css("display", "block");
        } else if($(this).scrollTop()) {
            $fixed.css("display", "none");
        }
    });
   /* if (detectBrowserSize() > 1024 ){

    }*/


});
