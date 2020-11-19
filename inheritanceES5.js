//ES-5 inheritance
function Person(name) {
    this.name = name;
}
Person.prototype.getName = function() {console.log(this.name)};

let person = new Person('Persona');
person.getName();

function Man(name) {
    Person.call(this, name);
}
Man.prototype = Object.create(Person.prototype);
Man.prototype.constructor = Man;
Man.prototype.getName = function() {Person.prototype.getName.apply(this);};
Man.prototype.facialHair = function() {console.log('Man has facial hair')};
let man = new Man('Man');
man.getName();
man.facialHair();

