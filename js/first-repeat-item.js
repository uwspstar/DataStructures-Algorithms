
// [2,1,3,2,5,4,1,3] return 2
// from google

const firstRepeat = function (arr) {
  let map = {};
  for(let i = 0; i < arr.length; i++) {
    if(!map[arr[i]]) {
      map[arr[i]] = 1;
    } else {
      map[arr[i]] += 1;

      if (map[arr[i]] > 1) {
        return arr[i]
      }
    }
  }
  return undefined;
}

console.dir(firstRepeat([2,1,3,2,5,4,1,3]));
