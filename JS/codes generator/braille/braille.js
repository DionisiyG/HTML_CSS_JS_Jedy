var lib = {
    "0": ["&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;"],
    "1": ["a", "а", "1", "&#x2801;"],
    "12": ["b", "б", "2", "&#x2803;"],
    "14": ["c", "ц", "3", "&#x2809;"],
    "145": ["d", "д", "4", "&#x2819;"],
    "15": ["e", "е", "5", "&#x2811;"],
    "124": ["f", "ф", "6", "&#x280B;"],
    "1245": ["g", "г", "7", "&#x281B;"],
    "125": ["h", "х", "8", "&#x2813;"],
    "24": ["i", "и", "9", "&#x280A;"],
    "245": ["j", "ж", "0", "&#x281A;"],
    "13": ["k", "к", "&nbsp;", "&#x2805;"],
    "123": ["l", "л", "&nbsp;", "&#x2807;"],
    "134": ["m", "м", "&nbsp;", "&#x280D;"],
    "1345": ["n", "н", "&nbsp;", "&#x281D;"],
    "135": ["o", "о", "&nbsp;", "&#x2815;"],
    "1234": ["p", "п", "&nbsp;", "&#x280F;"],
    "12345": ["q", "ч", "&nbsp;", "&#x281F;"],
    "1235": ["r", "р", "&nbsp;", "&#x2817;"],
    "234": ["s", "с", "&nbsp;", "&#x280E;"],
    "2345": ["t", "т", "&nbsp;", "&#x281E;"],
    "136": ["u", "у", "&nbsp;", "&#x2825;"],
    "1236": ["v", "&nbsp;", "&nbsp;", "&#x2827;"],
    "2456": ["w", "в", "&nbsp;", "&#x283A;"],
    "1346": ["x", "щ", "&nbsp;", "&#x282D;"],
    "13456": ["y", "&nbsp;", "&nbsp;", "&#x283D;"],
    "1356": ["z", "з", "&nbsp;", "&#x2835;"],
    "16": ["&nbsp;", "ё", "&nbsp;", "&#x2821;"],
    "12346": ["&nbsp;", "й", "&nbsp;", "&#x282F;"],
    "156": ["&nbsp;", "ш", "&nbsp;", "&#x2831;"],
    "12356": ["&nbsp;", "ъ", "&nbsp;", "&#x2837;"],
    "2346": ["&nbsp;", "ы", "&nbsp;", "&#x282E;"],
    "23456": ["&nbsp;", "ь", "&nbsp;", "&#x283E;"],
    "246": ["&nbsp;", "э", "&nbsp;", "&#x282A;"],
    "1256": ["&nbsp;", "ю", "&nbsp;", "&#x2833;"],
    "1246": ["&nbsp;", "я", "&nbsp;", "&#x282B;"],
    "236": ["«", "«", "&nbsp;", "&#x2826;"],
    "356": ["»", "»", "&nbsp;", "&#x2834;"],
    "36": ["&mdash;", "&mdash;", "&nbsp;", "&#x2824;"],
    "256": [".", ".", ".", "&#x2832;"],
    "2": [",", ",", ",", "&#x2802;"],
    "26": ["?", "?", "&nbsp;", "&#x2822;"],
    "23": [";", ";", "&nbsp;", "&nbsp;"],
    "235": ["!", "!", "&nbsp;", "&#x2816;"],
    "3456": ["&darr;", "&darr;", "&rarr;", "&#x283C;"],
    "6": ["&uarr;", "&uarr;", "&nbsp;", "&nbsp;"]
};
var chars = {};

$(document).ready(function(){
    // анимашка даёт понять, куда тут тыкать, а-то не понимают тут...
    if(location.hash == "") {
        $(".char a")
            .css({"opacity":"0"})
            .addClass("check");

        for(var i = 0; i<=6; i++){
            $(".char a[title="+i+"]")
                .delay(100*i)
                .animate({"opacity": 0.3}, 500)
                .animate({"opacity": 0}, 500,
                    function() {
                        $(this).removeClass("check")
                            .css("opacity", "1");
                    }
                );
        }
    }

    $("body").delegate(".char a", "click", function(){

        current = $(this).parent().attr("title");

        // если добавляются символы в крайний квадрат, то добавляем ещё один
        if(current == $(".char").length) {
            var flag = true;

            $.each($(this).parent().children(), function(){
                if($(this).hasClass("check")) {
                    flag = false;
                }
            })

            if(flag) {
                add = $(".char").last().clone();
                add.css({"opacity": 0, marginLeft: "-5px"}).attr("title", $(".char").length + 1);
                add.insertAfter($(".char").last()).animate({opacity: 1, marginLeft: "+=5"}, 200);
            }
        }

        // собственно отмечаем выделенный символ
        $(this).toggleClass("check");

        // заполняем объект значением символа
        var str = "";
        var str1 = "";
        var str2 = "";
        $.each($(this).parent().children(), function(){
            var dot = $(this).attr("title");
            if($(this).hasClass("check")){
                if(dot <= 3){
                    str1 += dot;
                } else {
                    str2 += dot;
                }
                str = str1 + str2;
            }
        });

        if(str == ""){
            str = "0";
        }

        chars[current] = str;

        // пропускаем полученное через библиотеку и выводим на экран
        $(".return").html("");
        for(var char in chars){

            // вывод на экран значений брайля
            if(lib[chars[char]] != undefined){
                $(".return.norm.en").append(lib[chars[char]][0]);
                $(".return.norm.ru").append(lib[chars[char]][1]);
                $(".return.norm.int").append(lib[chars[char]][2]);
                $(".return.braille").append(lib[chars[char]][3]);
            } else {
                $(".return.norm").append('<b style="color: red">&times;</b>');
                $(".return.braille").append('&nbsp;');
            }

            // вывод на экран значений наоборот (где точка там пусто, где пусто там точка)
            var all = "123456";
            for(var i = 0; i<chars[char].length; i++) {
                all = all.replace(chars[char][i], "");
                if(all == "") {
                    all = "0"
                }
            }

            if(lib[all] != undefined){
                $(".return.inv.en").append(lib[all][0]);
                $(".return.inv.ru").append(lib[all][1]);
                $(".return.inv.int").append(lib[all][2]);
            } else {
                $(".return.inv").append('<b style="color: red">&times;</b>');
            }

            $.each($(".return"), function(){
                var start = $(this).html().search("&#8593;");
                if(start != -1 && start != $(this).html().length-1) {
                    $(this).html(
                        $(this).html().substr(0, start) +
                        $(this).html().substr(start+1,1).toUpperCase() +
                        $(this).html().substr(start+2)
                    );
                }
            });

            // запись поиска в хэш
            var hash = "";
            $.each(chars, function(){
                hash += this + ",";
            });
            hash = hash.substring(hash.length-1,0);
            location.hash = hash;

        }

    });

    // очистка всего
    $("body").delegate(".clear", "click", function(){
        chars = {};
        $(".return").html("");
        location.hash = "";
        $(".char").nextAll().animate({opacity: 0}, 200, function(){
            $(this).remove();
            $(".char a").animate({opacity: 0}, 200, function(){
                $(".check").removeClass("check");
                $(this).css("opacity", 1);
            });
        });
    });

    // загрузка из хэша
    if(location.hash != "") {
        load = location.hash.substr(1).split(",");

        for(var i = 0; i<load.length; i++){
            chars[i+1] = load[i];

            var clone = $(".char").first().clone();
            clone.attr("title", i+1);
            clone.insertAfter($(".char").last());

            $.each($("a", clone), function(){
                for(var j = 0; j<load[i].length; j++) {
                    if($(this).attr("title") == load[i][j]) {
                        $(this).addClass("check");
                    }
                }
            });
        }
        $(".char").first().insertAfter($(".char").last()).attr("title", $(".char").length);
        $(".check").last().trigger("click").trigger("click");
    }
});