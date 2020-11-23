function myCall(func, context) {
    return function(args) {
        func.apply(context, [args])
    }
}
function myApply(func, context) {
    return function(...args) {
        func.call(context, ...args)
    } 
}

function myBindByApply(func, context, ...rest) {
    return function(...args) {
     return func.apply(context, rest.concat(args))
 }
}

function myBindByCall(func, context, ...rest) {
    return function(...args) {
     return func.call(context, ...rest.concat(args))
 }
}

const wood = {
    firstPiece: 'Mahagony',
    secondPiece: 'Maple',
    thirdPiece: 'Ash',
    fourthPiece: 'Alder'
};

function glueWoodPieces(insert) {
    const range = Math.random();
    if (range > 0.5) {
    console.log(`High quality: ${this.firstPiece}, ${insert}, ${this.secondPiece}`)}
    else {
        console.log(`Low quality: ${this.thirdPiece}, ${this.fourthPiece}`)
    }
}

myBindByApply(glueWoodPieces, wood, )('walnut');
myBindByCall(glueWoodPieces, wood, 'walnut')();

myCall(glueWoodPieces, wood)('walnut');
myApply(glueWoodPieces, wood)('walnut');

