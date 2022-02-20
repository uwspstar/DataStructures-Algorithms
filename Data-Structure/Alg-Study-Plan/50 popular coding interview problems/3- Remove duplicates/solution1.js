// Brute force solution:

// Time complexity: O(n�)
// Space complexity: O(n)

function removeDuplicates(arr) {
  let noDuplicatesArr = [];
  for (element of arr)
    if (!noDuplicatesArr.includes(element))
      noDuplicatesArr.push(element);
  return noDuplicatesArr;
}


