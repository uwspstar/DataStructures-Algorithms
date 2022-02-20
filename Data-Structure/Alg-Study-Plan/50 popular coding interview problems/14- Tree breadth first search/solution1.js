// By using a queue (iteratively):

// Time complexity: O(n)
// Space complexity: O(n)


class Tree{
  constructor(data, left = null, right = null){
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function bfs(root){
  let queue = [root];
  let i = 0;
  while(i < queue.length){
    let poppedNode = queue[i++];
    if(poppedNode === null) continue;
    else{
      console.log(poppedNode.data);
      queue.push(poppedNode.left);
      queue.push(poppedNode.right);
    }
  }
}


