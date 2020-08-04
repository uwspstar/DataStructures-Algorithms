let a = new Set([1, 2, 3, 4]);
let b = new Set([3, 4, 5])
let union = new Set([...a].concat([...b]))
let union2 = new Set([...a, ...b])
console.log(a, b, union, union2);