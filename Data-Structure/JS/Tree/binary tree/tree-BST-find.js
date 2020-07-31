/*
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
            If there is not, we're done searching!
*/

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    findRecursive(value) {
        if (this.value === value) {
            return this;
        }

        if (this.value > value && this.left) {
            return this.left.findRecursive(value);
        } else if (this.value < value && this.right) {
            return this.right.findRecursive(value);
        }

        return null;
    }

    find(value) {
        if (this.root === null) return false;
        var current = this.root,
            found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        return current;
    }
    
    contains(value) {
        if (this.root === null) return false;
        var current = this.root,
            found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
}


//      10
//   5     13
// 2  7  11  16

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)




