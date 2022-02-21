// Time complexity: O(nlogn)
// Space complexity: O(h)


class Tree{
  constructor(data, left = null, right = null){
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function height(root){
	if(root == null) return -1;
	let lefth = height(root.left);
	let righth = height(root.right);
	return 1 + Math.max(lefth, righth);
}

function isBalanced(root){
	if(root == null) return true;
	let lefth = height(root.left);
	let righth = height(root.right);
	return Math.abs(lefth - righth) <= 1 && isBalanced(root.left) && isBalanced(root.right)
}


