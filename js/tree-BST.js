//The BinarySearchTree Class

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
}
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

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
