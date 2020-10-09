// Left < Parent < right

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
        traverseNode(node.left, callback);
        traverseNode(node.right, callback);
        callback(node.value);
    }
    traversal(callback) {
        traverseNode(root, callback);
    }
    getRoot() {
        return this.root;
    }

}
function print(value) {
    console.log('value: ', value);
}

let t = new Tree();
t.insert(8);
t.insert(3);
t.insert(2);
t.insert(9);
t.traversal(print);

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