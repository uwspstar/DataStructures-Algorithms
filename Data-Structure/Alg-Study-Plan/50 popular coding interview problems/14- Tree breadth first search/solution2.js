// By using a queue (recursively):

// Time complexity: O(n)
// Space complexity: O(n)

class Tree{
  constructor(data, left = null, right = null){
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function bfs(root, i = 0, queue = [root]){
  if(i >= queue.length) return;
  else {
    let poppedNode = queue[i];
    if(poppedNode !== null){
      console.log(poppedNode.data);
      queue.push(poppedNode.left);
      queue.push(poppedNode.right);
    }
    bfs(root, i+1, queue);
  }
}


