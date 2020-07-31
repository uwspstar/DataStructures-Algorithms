//Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    //recursive
    insert(data) {
        //4 cases :
        if (data < this.data && this.left) {
            this.left.insert(data);
        } else if (data < this.data) {
            this.left = new Node(data);
        } else if (data > this.data && this.right) {
            this.right.insert(data);
        } else if (data > this.data) {
            this.right = new Node(data)
        }

    }
}


//The BinarySearchTree Class

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
}
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);

/*
INSERTING A NODE
Steps - Iteratively or Recursively

Create a new node
Starting at the root
Check if there is a root, if not - the root now becomes that new node!
If there is a root, check if the value of the new node is greater than or less than the value of the root
If it is greater
Check to see if there is a node to the right
If there is, move to that node and repeat these steps
If there is not, add that node as the right property
If it is less
Check to see if there is a node to the left
If there is, move to that node and repeat these steps
If there is not, add that node as the left property



Finding a Node in a BST
Steps - Iteratively or Recursively

Starting at the root
Check if there is a root, if not - we're done searching!
If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done!
If not, check to see if the value is greater than or less than the value of the root
If it is greater
Check to see if there is a node to the right
If there is, move to that node and repeat these steps
If there is not, we're done searching!
If it is less
Check to see if there is a node to the left
If there is, move to that node and repeat these steps
If there is not, we're done searching


Big O of BST
Insertion - O(log n)

Searching - O(log n)

NOT guaranteed!



*/
