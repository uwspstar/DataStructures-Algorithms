
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