// typic question for using Stack
// pair : means key - value , so we can use two pointers from left and right
// but isBalance cannot use is, good example isBalance("[]{}()"), NOT for two pointers

const isBalance1 = function (str) {
  let stack = [];
  let map = {
    "(": ")",
    "{": "}",
    "[": "]"
  }

  let arr = [...str];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(" || arr[i] === "{" || arr[i] === "[") {
      stack.push(arr[i]);
    } else {
      let last = stack.pop();
      if (map[last] !== arr[i]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
const isBalance = (arr) => {
  
}
const isBalanceMap = function (str) {

  if (str.length % 2 !== 0) return false
  let map = { "(": ")", "{": "}", "[": "]" }
  let stack = []
  for (let i = 0; i < str.length; i++) {
    if (map[str[i]]) {
      stack.push(str[i])
    } else {
      let lastKey = stack.pop()
      if (map[lastKey] !== str[i]) return false
    }
  }
  return stack.length === 0
}

console.log(isBalance("[]{}()"))
console.log(isBalance("[}()"))
console.log(isBalance("[{()}]"))
console.log(isBalance(")[{()}]("))

/*
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]

*/

// pair : means key - value , so we can use two pointers from left and right


const isBalanceWithMap = function (str) {
  if (str.length % 2 !== 0) return false;

  let map = new Map();
  map.set("(", ")");
  map.set("{", "}");
  map.set("[", "]");

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let key = str[i];
    if (map.get(key)) { // because ")", "}", and "]" is not key
      stack.push(key);
    } else {
      let lastKey = stack.pop();
      if (map.get(lastKey) !== key) return false;
    }
  }

  return stack.length === 0;
}

console.log(isBalanceWithMap("[]{}()"));
console.log(isBalanceWithMap("[}()"));
console.log(isBalanceWithMap("[{()}]"));
console.log(isBalanceWithMap(")[{()}]("));