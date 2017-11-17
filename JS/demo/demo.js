class Animal {
    constructor(name, type, numberOfLegs){
        this.name = name;
        this.type = type;
        this.numberOfLegs = numberOfLegs;
    }
    run(){
        console.log(`Animal can run fast! from-Animal`)
    }
    get animalInfo(){
        console.log(`I am ${this.name}, Type - ${this.type}, I have ${this.numberOfLegs} legs`);
    }
    set changeName(value){
        this.name = value;
    }
}
class Wolf extends Animal{
    eat(){
        console.log("I am gonna eat, om-nom-nom");
    }
    run(){
        console.log(`${this.name}! I can run! from-Wolf`);
    }
    superRun(){
        super.run();
    }
}
class Rabbit extends Animal{
    constructor(name, type, numberOfLegs, sound)  {
        super(name, type, numberOfLegs);
        this.sound = sound;
    }
    jump(){
        console.log(`${this.name} jump-jump`);
    }
}

let wolf = new Wolf("Wolffy", "Meat eater", "4");
let rabbit = new Rabbit("Rabby", "Afraider", "4", "fr-fr-fr");
wolf.animalInfo;
/*wolf.changeName = "bad wolf";
wolf.animalInfo;*/
wolf.run();
wolf.superRun();
rabbit.jump();


