// Time complexity: O(n)
// Space complexity: O(n)

class Tree {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function getValuesByLevel(root) {
  let output = [];
  let queue = [[root, 0]];
  let i = 0;
  while (i < queue.length) {
    let node = queue[i][0];
    let level = queue[i][1];
    i++;
    if (node === null) {
      continue;
    } else {
      if (output.length <= level) output.push([]);
      output[level].push(node.data);
      queue.push([node.left, level + 1]);
      queue.push([node.right, level + 1]);
    }
  }
  return output;
}


