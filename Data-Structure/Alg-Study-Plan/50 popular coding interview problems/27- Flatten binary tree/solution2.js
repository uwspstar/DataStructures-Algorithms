// Time complexity: O(n)
// Space complexity: O(h)

class Tree{
  constructor(data, left = null, right = null){
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

let head = null;
function flattenTree(root){
    if(root === null) return;
    else{
        flattenTree(root.right);
        flattenTree(root.left);
        root.left = null;
        root.right = head;
        head = root;
	}
}