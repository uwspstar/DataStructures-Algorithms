
// put string ot arr
let arr = Array.from('foo mind'); // [ "f", "o", "o", " ", "m", "i", "n", "d" ]
// JS sort only do for arr

console.table('table', arr);

console.log('from', Array.from([1, 2, 3], x => x + x)); // Array [2, 4, 6]
console.log('from', Array.from("abc", x => x + x)); // Array [ 'aa', 'bb', 'cc' ]