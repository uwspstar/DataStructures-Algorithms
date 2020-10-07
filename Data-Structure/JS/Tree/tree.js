
// insert remove search traverse
// not class inside class
// traverse
// search right place to insert
// stack LIFO
// recursive
// https://www.youtube.com/watch?v=Nuw7X2VzOwg&list=PL9nxfq1tlKKmgTh_FSRzSIChwOsv7qr7v&index=23


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
    insert(value) {
        var newNode = new Node(value);
        if (this.root === null) { // if it is root
            this.root = newNode;
            return this;
        }

        var current = this.root;
        while (true) { // since we do not know how many nodes , so use infinite loop
            if (value === current.value) return undefined; // has the value in the tree
            if (value < current.value) { // left side
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else { //right side
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
    insert1(val) {
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
const Tree = function () {
    const Node = function (val) {
        this.value = val;
        this.left = null;
        this.right = null
    }
}
*/