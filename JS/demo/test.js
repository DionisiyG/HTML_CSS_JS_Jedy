function getMiddle(s)
{
   var arr = s.split('');
   var arrLength = arr.length;
   var midNum = (arrLength / 2) - 1;
   var nextNum = midNum + 1;
    if(arrLength % 2 == 0){
        return (arr[midNum] + arr[nextNum]);
    }
    else{
        return arr[(arrLength - 1)/2];
    }
}

getMiddle("testing")