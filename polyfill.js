Object.create = function(O, object) {
    function F() {}
    F.prototype = O;
    let obj = new F();
        for (let key in object) {
            if (object.hasOwnProperty(key)) {
               obj[key] = object[key].value;
            }
        }
    return obj;
};