//Tree Traversals (Inorder, Preorder and Postorder)
// https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/
/*
Depth First Traversals:
(a) Inorder (Left, Root, Right) : 4 2 5 1 3
(b) Preorder (Root, Left, Right) : 1 2 4 5 3
(c) Postorder (Left, Right, Root) : 4 5 2 3 1

Breadth First or Level Order Traversal : 1 2 3 4 5
Please see this post for Breadth First Traversal.
*/
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class Tree {
    constructor() {
        this.root = null;
    }
    //8,3,2,9
    insertNode(node, newNode) {
        if (node.value > newNode.value) {
            //move to right
            node.right === null
                ? node.right = newNode
                : this.insertNode(node.right, newNode);
        } else if (node.value < newNode.value) {
            //move to left
            node.left === null
                ? node.left = newNode
                : this.insertNode(node.left, newNode);
        }
    }

    insert(value) {
        const newNode = new Node(value);
        return this.root === null
            ? this.root = newNode
            : this.insertNode(this.root, newNode); // cannot use insertNode(this.root, newNode)
    }

    traverseNode(node, callback) {
        if (node === null) return;
        // callback(node.value); // Preorder
        traverseNode(node.left, callback);
        //callback(node.value); // Inorder
        traverseNode(node.right, callback);
        callback(node.value); // Postorder
    }
    traversal(callback) {
        traverseNode(root, this.print);
    }
    getRoot() {
        return this.root;
    }
    print(value) {
        console.log('value: ', value);
    }
}

let t = new Tree();
t.insert(8);
t.insert(3);
t.insert(2);
t.insert(9);

console.log("t-root", JSON.stringify(t));


/*
const Tree = function () {
    const Node = function (value) {
        this.value = value;
        this.left = null; // initial is null
        this.right = null; // initial is null
    }
    var root = null;
    //8,2,3,9
    var insertNode = function (node, newNode) {
        if (newNode.value > node.value) {
            //move right
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode)
            }
        } else if (newNode.value < node.value) {
            //move left
            if (node.left === null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        }
    }
    this.insert = function (value) {
        var newNode = new Node(value)
        if (root === null) return root = newNode;
        return insertNode(root, newNode);
    }

    this.search = function (value) {

    }

    this.traverse = function (value) {

    }

    this.remove = function (value) {

    }

    this.getTree = function () {
        return this.root;
    }
}

let tree = new Tree();
tree.insert(8);
tree.insert(3);
tree.insert(2);
tree.insert(9);
console.log('tree.root', JSON.stringify(tree.getTree()));
*/