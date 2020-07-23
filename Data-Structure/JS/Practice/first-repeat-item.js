
// [2,1,3,2,5,4,1,3] return 2
// from google

// solution 1
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
console.dir(firstRepeat([2,1,3,5,4]));

// solution 2
//[2,1,3,2,5,4,1,3] return 2
const firstRepeat = function (arr) {
  let map = {};
  for(let i = 0; i < arr.length; i++) {
    if(map[arr[i]]!= undefined) { 
      // first map.2 not exist, 
      // so map.2 = undefined
      // if(0) is false
      return arr[i];
    } else {
      map[arr[i]] = i;
    }
  }
  return undefined;
}
console.dir(firstRepeat([2,1,3,5,4]));
console.dir(firstRepeat([2,1,3,2,5,4,1,3]));


