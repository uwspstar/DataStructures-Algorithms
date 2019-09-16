
const reverse = function (str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result = str[i] + result;
  }
  return result;
}

console.dir(reverse("abc"));


// console.log vs console.dir
// log only prints out a toString representation, whereas dir prints out a navigable tree.

const reverse = function (str) {
  if (str.length === 1 ) return str; 
  return str.substring(1) + str[0];
}

console.dir(reverse("abc"));
