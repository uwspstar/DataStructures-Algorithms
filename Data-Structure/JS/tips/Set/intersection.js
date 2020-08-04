let a = new Set([1, 2, 3, 4]);
let b = new Set([3, 4, 5])
let intersection = [...a].filter(x => b.has(x))
console.log(a, b, intersection);