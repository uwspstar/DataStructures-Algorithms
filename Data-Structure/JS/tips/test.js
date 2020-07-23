
const reverseStrRecursive = function (str) {
  if (str.length < 2) return str;
  return reverseStrRecursive(str.slice(1)) + str[0];
}
console.log(reverseStrRecursive('awesome'));

/*
let str = "The rain in SPAIN stays mainly in the plain";
let wd = "ain";
var res = new RegExp(wd, 'g')
console.table(str.match(res)); // expected output: Array ["T", "I"]


let str = "lorie loled";
let word = "lo";
let len = str.length;
var re = new RegExp(word, 'g')
str.match(re);
str.search(word);
str.replace(word, '').length;


let arr = Array.from('foo mind'); // [ "f", "o", "o", " ", "m", "i", "n", "d" ]
console.table(arr);

const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);// expected output: 42
console.log(obj.result);
console.table(obj);


const arr = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// find odd
console.log(arr.filter(num => num & 1))
// find even
console.log(arr.filter(num => !(num & 1)))
console.log(arr.filter(num => (num % 2 === 0)))


function getKeyByValue(map, searchValue) {
    for (let [key, value] of map.entries()) {
      if (value === searchValue) // first match
        return key;
    }
  }

  const getKeyListByValue  = function getKeyListByValue(map, searchValue) {
    let result = []
    for (let [key, value] of map.entries()) {
      if (value === searchValue) {
        result.push(key) // find all match should be different keys, value can be same
      }
    }
    return result
  }

let people = new Map();
people.set('1', 'john');
people.set('2', 'jasmine');
people.set('3', 'abode');
people.set('4', 'abode');
people.set('5', 'abode');

console.log(getKeyByValue(people, 'john'));
console.log(getKeyByValue(people, 'abode'));
console.log(getKeyListByValue(people, 'abode'));

console.log("aaa".padStart(2, '0'));
console.log("a".padStart(2, '0'));


const removeDuplication = function (arr) {
    if (arr.length < 2) return arr
    let mySet = new Set()
    for (let i = 0; i < arr.length; i++) {
        if (!mySet.has(arr[i])) mySet.add(arr[i])
    }
    return [...mySet]
}
console.log([...new Set([ 'a', 'b', 'c', 'a', 'e', 'c' ])])
console.log(removeDuplication([ 'a', 'b', 'c', 'a', 'e', 'c' ]))


console.log('abcdef'.split('').reverse().join(''))

function reverseStr2(str) {
    if (str.length < 2) return str
    let mid = parseInt(str.length / 2)
    let arr = str.split('')
    for (let i = 0; i < mid; i++) {
        let j = arr.length - 1 - i;
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr.join('')
}

const reverseStr = function (str) {
    function swap(arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    let mid = str.length >> 1
    let arr = str.split('')
    for (let i = 0; i < mid; i++) {
        swap(arr, i, arr.length - 1 - i)  // with index, not using  swap(arr, arr[i], arr[arr.length - 1 - i])
    }
    return arr.join('')
}

console.log(reverseStr("abcdef"))


console.log([4, 2, 5, 1, 3].sort((a,b)=> a - b))


// (A >> B) => Math.floor(A / (2 ** B)) => Math.floor(A / Math.pow(2, B))

// (170 >> 3) => Math.floor(170 / (2 ** 3)) => Math.floor(170 / 8) => 21
// (-170 >> 3) => Math.floor(-170 / (2 ** 3)) => Math.floor(-170 / 8) => -22

console.log(12 >> 1) // 6
console.log(5 >> 1) // 2
console.log(3 >> 1) // 1
console.log(2 >> 1) // 1
*/