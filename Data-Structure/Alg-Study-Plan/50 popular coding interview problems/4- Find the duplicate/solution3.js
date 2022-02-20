// By using a dictionary:

// Time complexity: O(n)
// Space complexity: O(n)

function findDuplicate(arr) {
  let visited = {};
  for (let element of arr) {
    if (visited[element]) return element;
    else visited[element] = true;
  }
}


