$(document).ready(function () {
    $('.scrollToTop').on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});