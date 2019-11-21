/*
Check Permutation: 
Given two strings, 
write a method to decide if one is a permutation of the other.
*/
const permutation = function (str1, str2) { 
  if (str1.length !== str2.length) return false;  
  return (str1.split('').sort().join('') !== str2.split('').sort().join(''))
}

console.log(permutation("aba","bab")); // false
console.log(permutation("dog%","%god")); // true
console.log(permutation("dog1"," god")); // false


/*
Check Permutation: 
Given two strings, 
write a method to decide if one is a permutation of the other.
Check if the two strings have identical character counts.
*/
const permutation = function (str1, str2) { 
  if (str1.length !== str2.length) return false; 
  let map = {} ;
  for (let i = 0; i < str1.length; i++) {
    if (map[str1[i]]!== undefined) {
      map[str1[i]]++;
    } else {
      map[str1[i]] = 1;
    }
  }
  
  for (let j = 0; j < str2.length; j++) {
    if (map[str2[j]]) {
      map[str2[j]]--; 
    } else {
      return false;
    } 
  }
  return true;
}

console.log(permutation("aba","bab")); // false
console.log(permutation("dog%","%god")); // true
console.log(permutation("dog1"," god")); // false
