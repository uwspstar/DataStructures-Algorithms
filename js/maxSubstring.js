// maxSubstring

const maxSubstring = function (arr) {
  let maxSum = arr[0];
  let maxCurrent = arr[0];
  //[1,2,-3,4,-5,6]
  for (let i = 1; i < arr.length; i++) {
    maxCurrent = Math.max(maxCurrent + arr[i], arr[i]);
    maxSum = Math.max(maxCurrent, maxSum);
  }
  return maxSum;
}

console.log(maxSubstring([1,2,3]));//6
console.log(maxSubstring([1,2,-3,4]));//
console.log(maxSubstring([-1,2,-3]));//2
console.log(maxSubstring([1,2,-3,4,-5,6]));//6
console.log(maxSubstring([1,2,3,-4,5,6])); //13
