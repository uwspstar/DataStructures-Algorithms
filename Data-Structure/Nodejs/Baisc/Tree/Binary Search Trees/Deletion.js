/*
Case 1: The node has no children.
This is the simplest case. If the node has no child, return null. That node has been deleted now.
Case 2: The node has one child.
If the node has one child, simply return the existing child. That child has now bubbled up and replaced the parent.
Case 3: The node has two children.
If the node has two children, either find the maximum of the left subtree or find the minimum of the right subtree to replace that node.
*/
/*
Time Complexity (for balanced tree): O(log2(n)) Time Complexity (for unbalanced trees): O(n)
Time complexity for deletion is also O(log2(n)) because at most that’s the height that will need to be traversed to find and delete the desired
node.
*/