/*the easiest closure*/
/*function counter() {
    var counterNumber = 0;
    return function() {
        return counterNumber++;
    }
}
var counter1 = counter();
console.log(counter1());
console.log(counter1());
console.log(counter1());
var counter2 = counter();
console.log(counter2());
console.log(counter2());
console.log(counter2());*/

/*self-invoked func*/

/*(function showName() {
    var greetings = "Hello";
    var myName = prompt("Enter yor name", "Duuude!");
    return function inner() {
         alert(greetings + " " + myName);
    }
})();*/
/*______________*/
/*var counter = (function() {
    var counterNum = 0;
    function changeNum(value) {
        counterNum += value;
    }
    return {
        addOne: function () {
            changeNum(1);
        },
        minusOne: function () {
            changeNum(-1);
        },
        resetNum: function () {
            counterNum = 0;
        },
        getNum: function () {
            return counterNum;
        }
    }
})();

counter.addOne();
counter.addOne();
counter.addOne();
console.log(counter.getNum());
counter.minusOne();
console.log(counter.getNum());
counter.resetNum();
console.log(counter.getNum());*/
/*
function makeFunc() {
    var name = "rararar";
    function displayName() {
        alert(name);
    }
    return displayName;
};

var myFunc = makeFunc();
myFunc();*/

function Person(name, surname, age, position, sex){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.position = position;
    this.sex = sex;
};
Person.prototype.sayHello = function () {
    console.log("Hello, my name is " + this.name);
};
Person.prototype.canEnter = function () {
    if(this.age > 20 && this.position === "admin"){
        console.log("Welcome " + this.name);
    }
    else{
        console.log("Go away!");
        }
};
Person.prototype.wantDrink = function () {
       console.log(this.name + " wants coffee");
};

function Admin(){
    Person.apply(this, arguments);
}
Admin.prototype = Object.create(Person.prototype);
/*Admin.prototype.constructor = Admin;*/
Admin.prototype.canSmoke = function() {
    console.log(this.name + " smoking");
};
Admin.prototype.wantDrink = function () {
    console.log(this.name + " wants tea");
}
Admin.prototype.smokeAndDrink = function () {
    Person.prototype.wantDrink.apply(this, arguments);
    this.canSmoke();
}

var admin = new Admin("ivan", "ivanov", "25", "admin", 'male');
admin.sayHello();
admin.canEnter();
admin.canSmoke();
admin.wantDrink();
admin.smokeAndDrink();

var badAdmin = new Admin("vasia", "vasiliev", "18", admin, "male");
badAdmin.sayHello();
badAdmin.canEnter();