function union(a, b) {
    let arr = [];
    for (let elem of a) {
        if (!arr.includes(elem)) {
            arr.push(elem)
        }
    }
    for (let elem of b) {
        if (!arr.includes(elem)) {
            arr.push(elem)
        }
    }
    return arr;
}
    

function intersection (a, b) {
    let arr = [];
    for (elem of a) {
        if (b.includes(elem)) {
            arr.push(elem)
        }
    }
    return arr;
}

function difference (a, b) {
    let arr = [];
    for (elem of a) {
        if (!b.includes(elem)) {
            arr.push(elem)
        }
    }
    let result = [];
    for (elem of arr)
    if (!result.includes(elem)) {
        result.push(elem)
    }
    return result;
}

console.log(union([4,5,7,2,1,5],[1,2,3,7,9])); // [4, 5, 7, 2, 1, 3, 9]
console.log(intersection([1,2,3], [4,3,2])); // [2, 3]
console.log(difference([1,2,3,7,9],[4,5,7,2,1,5])); // [3, 9]
console.log(difference([4,5,7,2,1,5], [1,2,3,7,9])); // [4, 5]
