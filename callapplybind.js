Function.prototype.myCall = function(context, ...args) {
    this.apply(context, args)
}
Function.prototype.myApply = function(context, ...args) {
    this.call(context, ...args)
}
Function.prototype.myBindByApply = function(context, ...args) {
    this.apply(context, args)
}
Function.prototype.myBindByCall = function(context, ...args) {
    this.call(context, ...args)
}

const wood = {
    firstPiece: 'Mahogany',
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
glueWoodPieces.myCall(wood, 'walnut');
glueWoodPieces.myApply(wood, 'walnut');
glueWoodPieces.myBindByApply(wood, 'walnut');
glueWoodPieces.myBindByCall(wood, 'walnut');

