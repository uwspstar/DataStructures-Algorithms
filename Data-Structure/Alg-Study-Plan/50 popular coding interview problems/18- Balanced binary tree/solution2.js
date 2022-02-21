// Time complexity: O(n)
// Space complexity: O(n)

class Tree{
  constructor(data, left = null, right = null){
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function rec(root, output){
	if(root == null) return -1;
	let lefth = rec(root.left, output);
	let righth = rec(root.right, output);
	if(Math.abs(lefth - righth) > 1) output[0] = false;
	return 1 + Math.max(lefth, righth);
}

function isBalanced(root){
	let output = [true]; // use array as reference
	rec(root, output);
	return output[0];
}


