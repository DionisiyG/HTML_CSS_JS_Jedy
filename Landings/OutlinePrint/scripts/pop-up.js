$(document).ready(function(){
    //Скрыть PopUp при загрузке страницы
    PopUpHide();
});
function PopUpHide(){
    $("#show-popup").hide();
}
function PopUpShow(){
    $("#show-popup").show(300);
}
$('html').mouseup(function(e) {
    var container =  $("#show-popup");
    if (e.target != container[0] && !container.has(e.target).length){
        var scrollPos = $(window).scrollTop();
        $("#show-popup").hide(300);
        $('html').scrollTop(scrollPos);
    }
});