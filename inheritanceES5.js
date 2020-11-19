//ES-5 inheritance
function Person(name) {
    this.name = name;
}
Person.prototype.getName = function() {console.log(this.name)};

let person = new Person('Persona');
person.getName();

function Man(name) {
    Person.call(this, name);
    this.class_= Object.getPrototypeOf(this);
    this.SuperClass= Object.getPrototypeOf(this.class_)
}
Man.prototype = Object.create(Person.prototype);
Man.prototype.constructor = Man;
Man.prototype.getName = function() {this.SuperClass.getName.call(this)};
Man.prototype.facialHair = function() {console.log('Man has facial hair')};
let man = new Man('Man');
man.getName();
man.facialHair();

