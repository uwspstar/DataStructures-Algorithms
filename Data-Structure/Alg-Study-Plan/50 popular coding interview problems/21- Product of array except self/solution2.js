// By using cumulative product:

// Time complexity: O(n)
// Space complexity: O(n)

function productExceptSelf(arr) {
  let n = arr.length;
  let cumulativeFromLeft = [...Array(n)].map(x => 0);
  cumulativeFromLeft[0] = 1;
  for (let i = 1; i < n; i++)
    cumulativeFromLeft[i] = cumulativeFromLeft[i - 1] * arr[i - 1];

  let cumulativeFromRight = [...Array(n)].map(x => 0);
  cumulativeFromRight[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--)
    cumulativeFromRight[i] = cumulativeFromRight[i + 1] * arr[i + 1];

  let output = [...Array(n)].map(x => 0);
  for (let i = 0; i < n; i++)
    output[i] = cumulativeFromLeft[i] * cumulativeFromRight[i];

  return output;
}


