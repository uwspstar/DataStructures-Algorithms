
// insert remove search traverse
// not class inside class
class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}
class Tree {
    constructor() {
        this.root = null;
    }
    insertNode(node, newNode) {
        if (newNode.value > node.value) {
            if (node.right === newNode) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode)
            }
        } else {//newNode.value < node.value
            if (node.left === newNode) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        }
    }
    insert(val) {
        const newNode = new Node(val);
        if (this.root == null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    search() { }
    remove() { }
    traverse() { }
    getRoot() {
        return this.root;
    }
}

let t = new Tree();
t.insert(8);
t.insert(2);
t.insert(3);
t.insert(9);
console.log(JSON.stringify(t.getRoot()));
/*

class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}
*/
/*
const Tree = function () {
    const Node = function (val) {
        this.value = val;
        this.left = null;
        this.right = null
    }
}
*/