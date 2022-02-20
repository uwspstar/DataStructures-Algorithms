// By sorting the array:

// Time complexity: O(nlogn)
// Space complexity: O(n)

function removeDuplicates(arr) {
  if (arr.length == 0) return [];
  arr = arr.sort((a, b) => a - b);
  let noDuplicatesArr = [arr[0]];
  arr.forEach((element, i) => {
    if (i > 0 && arr[i] !== arr[i - 1])
      noDuplicatesArr.push(element);
  }, arr)
  return noDuplicatesArr;
}


