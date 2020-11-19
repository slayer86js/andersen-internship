//ES-6 inheritance
class Person {
    constructor(name) {
        this.name = name;
    } 
    getName() {
        console.log(this.name);
    }
}

class Man extends Person {
    constructor(name) {
        super(name);
    }
    facialHair() {
        console.log('Man has facial hair')
    }
    getName() {
        super.getName();
    }
}
let person = new Person('Persona');
person.getName();
let man = new Man('Man');
man.getName();
man.facialHair();

