if (!Object.create) {
    Object.create = function() {
        function F() {}
        let hasOwn = Object.prototype.hasOwnProperty;
        return function(O) {
         F.prototype = O;
         let obj = new F()
         F.prototype = null;
         if (arguments.length > 1) {
            let Properties = Object(arguments[1]);
            for (let prop in Properties) {
                if (hasOwn.call(Properties, prop)) {
                    obj[prop] = Properties[prop];
                }
            }
        }
        return obj;
      }
   };
}




