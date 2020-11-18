class Universe {
    number = 300;
 constructor() {
   if (typeof Universe.instance === 'object') {
     return Universe.instance
   }
   Universe.instance = this
   return Universe.instance
 } 

 getSize() {
   return this.number;
 }
 setSize(value) {
   this.number = value;
 }
}

let a = new Universe();
let b = new Universe();

console.log(a === b); //true
console.log(a.getSize(), b.getSize()); //300, 300
a.setSize(200);
console.log(a.getSize(), b.getSize()); //200, 200