$(document).ready(function () {
    $(".block-in-div").click(function () {
        if($(this).hasClass('tofull') &&  !$(this).hasClass('active')){
            $(this).addClass("active");
        }
        else if($(this).hasClass('active')){
            $(this).removeClass("active tofull");
            $(this).css("background", "none");
        }
        else{
            cancelBg();
            let clr = "#"+((1<<24) * Math.random()|0).toString(16);
            $(this).css("background", clr);
            $(this).addClass("noColor tofull");
        }
    });
});
/*$(document).ready(function () {
    $(".block-in-div").click(function () {
        return function () {
            cancelBg();
            if(!$(this).hasClass('not-resized')) {
                $(this).css("background", getRandomColor());
                $(this).addClass('not-resized');
            }
            else if ($(this).hasClass('not-resized')) {
                $(this).addClass("active");
                $(this).removeClass('not-resized');
            }
        };
    }());
});*/
/*$(document).ready(function () {
    $(".block-in-div").click(function () {
        var state = 1;
        return function () {
            cancelBg();
            if(state===1){
                $(this).css("background", getRandomColor());
                state = 2;
            }
            else if(state===2){
                /!*$(this).addClass("active");*!/
                state=1;
            }
        }();
    });
});*/
/* $.each(selectedBlocks,function(key,value){
            selectedBlocks[key].style.background = "none";
        });
        $(this).css("background", getRandomColor());*/
/*$(".block-in-div").clickToggle(
    function() {
        $(this).css("background", getRandomColor())
    },
    function(){
        $(this).css("background", "none")
    }
);*/
/*$(".block-in-div").click(function() {
    var el = this;
    cancelBg();
    if(this.tog = !this.tog){
        return toColor(el);
    }
    else {
        return  toColorNone(el);
    }
});*/
/*$(document).ready(function () {
 $(".block-in-div").click(function() {
 /!*this.clicked = this.clicked === undefined ? false : !this.clicked;*!/
 cancelBg();
 $(this).css("background", getRandomColor());


 /!*else if(this.clicked === true){
 $(this).addClass("active");
 }*!/
 /!* cancelBg();
 if(this.style.background === ""){
 $(this).css("background", getRandomColor());
 }
 else {
 $(this).addClass("active");
 }*!/
 });
 });*/
/*$(document).ready(function () {
 $(".block-in-div").click(function () {
 cancelBg();
 //  uncomment this one if you want other to reset
 $('.block-in-div.active').css("background", "none");
 $('.block-in-div.active').removeClass("active");

 if(!$(this).hasClass('tofull') || $(this).hasClass('active')){
 var clr = "#"+((1<<24) * Math.random()|0).toString(16);
 $(this).css("background", clr);
 $(this).addClass("tofull");
 }else{
 $(this).addClass("active");
 $('.block-in-div.active').removeClass("tofull");
 }
 });
 });*/
function toColor(el){
    $(el).css("background", getRandomColor())
}
function toColorNone(el){
    $(el).css("background", "none");
}
function getRandomColor() {
        var r=Math.floor(Math.random() * (256));
        var g=Math.floor(Math.random() * (256));
        var b=Math.floor(Math.random() * (256));
        var color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
        return color;
};
function cancelBg() {
    let selectedBlocks = $("div.block-in-div");
    $.each(selectedBlocks,function(key,value){
        selectedBlocks[key].style.background = "none";
    });

};
jQuery.fn.clickToggle = function(a,b) {
    function cb(){
        cancelBg();
        [b,a][this._tog^=1].call(this);
    }
    return this.on("click", cb);
};
/*$(document).ready(function () {
    $(".block-in-div").click(function () {
        cancelBg();
        $(this).css("background", getRandomColor());
    });
});*/
