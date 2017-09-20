new Clipboard('.btn');
var EN_ALPHABET = "abcdefghijklmnopqrstuvwxyz";
var RU_ALPHABET = "цукенгшзхъэждлорпавыфячсмитьбю";
var combineIndex = 0;

var generateEN = (function() {
	var i;
	var history = [];
	var field = document.getElementById('txtField');
	var index = document.getElementById('codeIndex');

	return function() {
		var codeLength = parseInt(document.getElementById('length').value);
		var result;
		var infinitiveLoop = 1;
		if (isNaN(codeLength)) {
			field.innerHTML = 'Wrong length value';
			return null;
		}
		do {
			result = '';
			for (i = 0; i < codeLength; i++) {
				result += EN_ALPHABET.charAt(Math.floor(Math.random() * EN_ALPHABET.length));
			}
			if(index.value) {
				result += index.value;
			}
			if (infinitiveLoop++ > 1000) {
				result = "No more combinations";
				break;
			}
		} while (history.indexOf(result) !== -1);

		field.innerHTML = result;
		history.push(result);
	}
}());

var generateRU = (function() {
	var i;
	var history = [];
	var field = document.getElementById('txtField');
	var index = document.getElementById('codeIndex');

	return function() {
		var codeLength = parseInt(document.getElementById('length').value);
		var result;
		var infinitiveLoop = 1;
		if (isNaN(codeLength)) {
			field.innerHTML = 'Wrong length value';
			return null;
		}
		do {
			result = '';
			for (i = 0; i < codeLength; i++) {
				result += RU_ALPHABET.charAt(Math.floor(Math.random() * RU_ALPHABET.length));
			}
			if(index.value) {
				result += index.value;
			}
			if (infinitiveLoop++ > 1000) {
				result = "No more combinations";
				break;
			}
		} while (history.indexOf(result) !== -1);

		field.innerHTML = result;
		history.push(result);
	}
}());

function sortCodes() {
	var codes = document.getElementById('codes').value.split(' ').sort();
	var field = document.getElementById('txtField2');
	var noSpaces = document.getElementById('noSpace').checked;
	if (noSpaces) {
		field.innerHTML = codes.join('');
	} else {
		field.innerHTML = codes.join(' ');
	}
}

function combineCodes() {
    var codesArr = document.getElementById('codesComb').value.split(' ');
    var numberOfCodes = parseInt(document.getElementById('codesLength').value) || 0;
    var srcCopy = codesArr.slice();
    var resultArr = [];
    var pushToResultArray = function(arr){
        if(arr.length === numberOfCodes){
            resultArr.push(arr);
        }
    };
    var picker = function (arr, holder, collect) {
        if (holder.length) {
            collect.push(holder);
        }
        var len = arr.length;
        for (var i=0; i<arr.length; i++) {
            var innerArrCopy = arr.slice();
            var elem = innerArrCopy.splice(i, 1);
            var result = holder.concat(elem);
            pushToResultArray(result);
            if (len) {
                picker(innerArrCopy, result, collect);
            } else {
                collect.push(result);
            }
        }
    };
    picker(srcCopy, [], []);
    var finalArr = [];
    for(var i = 0; resultArr.length > i; i++){
        finalArr[i] = resultArr[i].join(' ');
    }
    return finalArr;
}
function combineClick() {
    var field = document.getElementById('txtField3');
    field.innerHTML = nextItem();
    if(field.innerHTML === "undefined"){
        field.innerHTML = "No more combinations";
    }
    combineIndex += 1;
}
function nextItem() {
	var res = combineCodes();
    return res[combineIndex];
}
function showAll() {
    var resultArea = document.createElement('textarea');
    document.body.appendChild(resultArea);
    var arr = combineCodes();
    for(var i = 0; arr.length > i; i++){
        resultArea.value  += arr[i] + '\r\n'
    }
}