/*
1. Phone number (+X(XXX)XXXXXXX)
2. Email (sometext@text.text)
3. Coordinates (XX.XXXX XX.XXXX)
*/

function coordsPat(coors) {
    let reg = /\d{1,3}\.\d{4}/;
    let result = reg.test(coors);
    console.log(result);
};
function emailPat(email) {
    let reg = /(\w+@[a-zA-Z]+\.\w{2,4})/;
    let result = reg.test(email);
    console.log(result);
}
function phonePat(phone) {
    let reg = /\+\d{1}\(\d{3}\)\d{7}/;
    let result = reg.test(phone);
    console.log(result);
}
phonePat("+3(097)1251251");