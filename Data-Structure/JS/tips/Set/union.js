let a = new Set([1, 2, 3, 4]);
let b = new Set([3, 4, 5])
let union = new Set([...a].concat([...b]))
console.log(a, b, union);