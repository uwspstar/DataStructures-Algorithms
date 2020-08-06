
// insert remove search traverse
// not class inside class
class Tree {
    constructor() {
        class Node {
            constructor(val) {
                this.value = val;
                this.left = null;
                this.right = null;
            }
        }
        this.root = null;
    }
    insertNode(node, newNode) {
        if (newNode.value > node.value) {
            if (node.right === newNode) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode)
            }
        } else {//newNode.value < node.value
            if (node.left === newNode) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        }
    }
    insert(val) {
        const newNode = new Node(val);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    search() { }
    remove() { }
    traverse() { }

}

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