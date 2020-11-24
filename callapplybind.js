function myCall(func, context, ...args) {
    function a() {
        func.apply(context, args)
    }
    a();
}
function myApply(func, context, ...args) {
    function b() {
        func.call(context, ...args)
    } 
    b();
}

function myBindByApply(func, context, ...args) {
    function c() {
     func.apply(context, args)
 }
    c();
}

function myBindByCall(func, context, ...args) {
    function d() {
     func.call(context, ...args)
 }
    d();
}

const wood = {
    firstPiece: 'Mahogany',
    secondPiece: 'Maple',
    thirdPiece: 'Ash',
    fourthPiece: 'Alder'
};

function glueWoodPieces(insert, secinsert) {
    const range = Math.random();
    if (range > 0.5) {
    console.log(`High quality: ${this.firstPiece}, ${insert}, ${this.secondPiece}`)}
    else {
        console.log(`Low quality: ${this.thirdPiece}, ${this.fourthPiece}`)
    }
}
myCall(glueWoodPieces, wood, 'walnut');
myApply(glueWoodPieces, wood, 'walnut');
myBindByApply(glueWoodPieces, wood, 'walnut');
myBindByCall(glueWoodPieces, wood, 'walnut');




