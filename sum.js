function sum(a) {
    const f = b => {
     if (b == undefined) {
        return f;
        } else {
        a += b;
        return f;}
    }
    f.toString = () => {
        return a;
  };
    return f;
}
        
console.log(sum(1)(2)(3)()); //6
console.log(sum(1)(2)(3)(4) + 1); //11
console.log(sum(1)(2)(3)(4)(5) + 1); //16