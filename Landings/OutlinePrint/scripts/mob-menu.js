$(document).ready(function() {
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
        if (detectBrowserSize() < 321 ){
            $('.mob-menu').on('click', function() {
                $('.mob-nav').slideToggle(400);
            });
         }
         else {
            $("#mob-wrapper").css("display", "none");
        }


});
