// By using a dictionary:

// Time complexity: O(n)
// Space complexity: O(n)

function findPair(arr, k) {
  let visited = {};
  for (element of arr) {
    if (visited[k - element]) return true;
    else visited[element] = true;
  }
  return false;
}


