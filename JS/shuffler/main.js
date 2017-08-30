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
    $('#shuffler').on('click', function() {
       var inputVal = $('#textbox').val();
       arr = inputVal.split(' ');
        var res = shuffle(arr, function(a) {
           /* document.write(a.join(' ') + "<br />");*/
            var div = document.createElement('div');
            document.body.appendChild(div);
            div.innerHTML = a.join(' ');
           /* document.appendChild(resultDiv);*/
            /*resultDiv.appendChild(div);
            var resultDiv = document.createElement('div');
            resultDiv.className = "result1";*/
            /*var resultDiv = document.createElement('div');
            resultDiv.className = "result";
            resultDiv.appendChild(div);*/

        });
    });
});
