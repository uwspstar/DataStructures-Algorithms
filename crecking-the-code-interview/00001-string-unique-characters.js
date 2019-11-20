/*
Is Unique: 
Implement an algorithm to determine if a string has all unique characters. 
What if you cannot use additional data structures?
*/

const isUniqueChars = function (str) {
  if (str.length > 128) return false;
  let map = {};
  for(let i = 0; i < str.length; i++){
    if(map[str[i]]) {
      return false;
    } else {
      map[str[i]] = true;
    }
  }
  return true;
}

console.log(isUniqueChars("aba"));
console.log(isUniqueChars("abc"));
console.log(isUniqueChars("0120"));
