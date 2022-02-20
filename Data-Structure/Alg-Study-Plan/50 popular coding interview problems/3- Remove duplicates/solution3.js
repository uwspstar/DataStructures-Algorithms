// By using a dictionary:

// Time complexity: O(n)
// Space complexity: O(n)

function removeDuplicates(arr) {
  let visited = {};
  for (element of arr) {
    visited[element] = true;
  }

  return Object.keys(visited).map(x => parseInt(x));
}


