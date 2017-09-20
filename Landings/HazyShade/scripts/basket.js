$(document).ready(function() {
    function sumArr(arr) {
            var sum = 0;
            for(var i=0;i<arr.length;i++){
                 sum = sum + arr[i];
            }
            return sum;
        };

    $('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div>' +
        '<div class="quantity-button quantity-down">-</div></div>')
        .insertAfter('.prod-qty input');
    $('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
        var spinner = $(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function() {
            var shoppingTable = $(this).closest('.shopping-table');
            var totalSum = shoppingTable.find('.total-sum');
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var parentTd = $(this).closest('td');
                var prodAmount = parentTd.siblings('.prod-amount');
                var amountSpan = prodAmount.find('.amount');
                var startAmount =  parseFloat(amountSpan.text());
                var newAmount = (startAmount/oldValue) + startAmount;
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
            amountSpan.text(newAmount.toFixed(2));
            var sumsOnPage = $('.amount');
            var tempArr = [];
            for(var i = 0; i<sumsOnPage.length; i++){
                var temp = parseFloat(sumsOnPage[i].textContent);
                tempArr.push(temp);
            };
            totalSum.text(sumArr(tempArr).toFixed(2));
        });

        btnDown.click(function() {
            var oldValue = parseFloat(input.val());
            var shoppingTable = $(this).closest('.shopping-table');
            var totalSum = shoppingTable.find('.total-sum');
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var parentTd = $(this).closest('td');
                var prodAmount = parentTd.siblings('.prod-amount');
                var amountSpan = prodAmount.find('.amount');
                var startAmount =  parseFloat(amountSpan.text());
                var newVal = oldValue - 1;
               if(oldValue === 2){
                   var newAmount = (startAmount/oldValue);
               }
               else{
                    newAmount = startAmount - (startAmount/oldValue);
               }
                amountSpan.text(newAmount.toFixed(2));
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
            var sumsOnPage = $('.amount');
            var tempArr = [];
            for(var i = 0; i<sumsOnPage.length; i++){
                var temp = parseFloat(sumsOnPage[i].textContent);
                tempArr.push(temp);
            };
            totalSum.text(sumArr(tempArr).toFixed(2));
        });
    });
    $('.prod-delete').click(function () {
       var parentTr = $(this).closest('tr');
        parentTr.hide();
    });
});

