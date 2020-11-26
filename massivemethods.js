function union(a, b) {
    return [...new Set(a.concat(b))]
}
    
function intersection (a, b) {
    return [...new Set(a.filter(item => b.includes(item)))]
}

function difference (a, b) {
    return [...new Set(a.filter(item => !b.includes(item)))]
}

console.log(union([4,5,7,2,1,5],[1,2,3,7,9])); // [4, 5, 7, 2, 1, 3, 9]
console.log(intersection([1,2,3], [4,3,2])); // [2, 3]
console.log(difference([1,2,3,7,9],[4,5,7,2,1,5])); // [3, 9]
console.log(difference([4,5,7,2,1,5], [1,2,3,7,9])); // [4, 5]
