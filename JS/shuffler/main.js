function shuffle(array, callback) {
    function p(array, index, callback) {
        function swap(a, index1, index2) {
            var t = a[index1];
            a[index1] = a[index2];
            a[index2] = t;
        }
        if (index === array.length - 1) {
            callback(array);
            return 1;
        } else {
            var count = p(array, index + 1, callback);
            for (var i = index + 1; i < array.length; i++) {
                swap(array, i, index);
                count += p(array, index + 1, callback);
                swap(array, i, index);
            }
            return count;
        }
    }
    if (!array || array.length === 0) {
        return 0;
    }
        return p(array, 0, callback);

};
var arr = [];

$(document).ready(function(){
    $('.cbalink').css('display', 'none');
    $('#shuffler').on('click', function() {
       var inputVal = $('#textbox').val();
       arr = inputVal.split(' ');
       if(arr.length >= 8){
           alert("Max 7 'words' allowed");
       }
        else{
           var res = shuffle(arr, function(a) {
               /* document.write(a.join(' ') + "<br />");*/
               /* var div = document.createElement('div');
                document.body.appendChild(div);
                div.innerHTML = a.join(' ');*/
               /*______*/
               var result = document.createElement('div');
               var div = document.createElement('div');
               var copyBtn =  document.createElement('input');

               result.className = 'result';

               div.className = 'text';
               div.innerHTML = a.join(' ');

               copyBtn.type = 'button';
               copyBtn.value = 'Copy';
               copyBtn.className = 'copy-btn';

               result.appendChild(copyBtn);
               result.appendChild(div);
               document.body.appendChild(result);
           });
       }
    });
    $('#disabler').on('click', function () {
        if($("#disabler").is(':checked')){
            $('.copy-btn').css('display', 'none');
            $('.text').css('float', 'none');
        }
        else{
            $('.copy-btn').css('display', 'inline-block');
            $('.text').css('float', 'left');
        }
    });
    var clipboard = new Clipboard('.copy-btn', {
        target: function(trigger) {
            return trigger.nextElementSibling;
        }
    });
    clipboard.on('success', function (event) {
        event.trigger.value = 'Copied';
        $('.copied').css('display', 'block');
        $('.buffer').css('display', 'block');
        $('.bufferContent').text(event.text);
    });
    clipboard.on('error', function (event) {
        event.trigger.value = 'Not Copied';
    })
});


