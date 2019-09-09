// 1) make sure that Swap has to be inside [], such as [ [a] , [b] ]
// 2) arr midpoint =  Math.floor(arr.length / 2)

const reverse = function (arr) {
  let len = arr.length; 
  
  for (let i = 0; i < Math.floor(len / 2); i++) {
    // let temp = arr[i];
    // arr[i] = arr[len - 1 - i];
    // arr[len - 1 - i] = temp;

    // Swap has to be inside [], such as [ [a] , [b] ]
    [arr[i], arr[len - 1 - i]] = [arr[len - 1 - i], arr[i]];
  } 
  return arr;
}

console.dir(reverse(['a', 'b', 'c']));
