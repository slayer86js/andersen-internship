function myCall(func, context) {
    return function(...args) {
        func.apply(context, args)
    }
}
function myApply(func, context) {
    return function(...args) {
        func.call(context, ...args)
    } 
}

function myBindByApply(func, context) {
    return function(...args) {
     func.apply(context, args)
 }
}

function myBindByCall(func, context) {
    return function(...args) {
     func.call(context, ...args)
 }
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
        console.log(`Low quality: ${this.thirdPiece}, ${secinsert}, ${this.fourthPiece}`)
    }
}
myCall(glueWoodPieces, wood)('walnut', 'rosewood');
myApply(glueWoodPieces, wood)('walnut', 'rosewood');
myBindByApply(glueWoodPieces, wood, )('walnut', 'rosewood');
myBindByCall(glueWoodPieces, wood, )('walnut', 'rosewood');




