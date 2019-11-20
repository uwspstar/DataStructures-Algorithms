/*

Check Permutation: 
Given two strings, 
write a method to decide if one is a permutation of the other.

*/

const permutation = function (str1, str2) { 
  if (str1.length !== str2.length) return false;  
  return (str1.split('').sort().join('') === str2.split('').sort().join(''));
}

console.log(permutation("aba","bab")); // false
console.log(permutation("dog%","%god")); // true
console.log(permutation("dog1"," god")); // false
