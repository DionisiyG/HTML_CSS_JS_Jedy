var isMobile = false;
$(document).ready(function() {
   if($(window).width() < 500){
       isMobile = true;
   }
   if(!isMobile){
       $('.loupe').click(function () {
           $('.search-box').toggle(300);
       });
   }
});
