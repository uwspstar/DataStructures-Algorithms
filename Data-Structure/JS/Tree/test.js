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

        if (node.value > newNode.value) { //left
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else if (node.value < newNode.value) {//right
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    insert(value) {
        const newNode = new Node(value);
        return this.root === null
            ? this.root = newNode
            : this.insertNode(this.root, newNode)
    }

    getRoot() {// test
        return this.root;
    }
}

let t = new Tree();
t.insert(8);
t.insert(3);
t.insert(2);
t.insert(9);

console.log("t-root", JSON.stringify(t));
/*
var Tree = function () {
    var node = function (value) {
        this.value = value;
        this.left = null; // initial is null
        this.right = null; // initial is null
    }
    var root = null;
    //8,2,3,9
    this.insert = function (value) {
        if (this.root === null) return this.root = node(value);

    }

    this.search = function (value) {

    }

    this.traverse = function (value) {

    }

    this.remove = function (value) {

    }
}*/
