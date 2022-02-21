// Brute force solution:

// Time complexity: O(n^2)
// Space complexity: O(n)

function productExceptSelf(arr) {
  let n = arr.length;
  let output = [];
  for (let i = 0; i < n; i++) {
    let product = 1;
    for (let j = 0; j < n; j++) {
      if (i == j) continue;
      else product *= arr[j];
    }
    output.push(product);
  }
  return output;
}


