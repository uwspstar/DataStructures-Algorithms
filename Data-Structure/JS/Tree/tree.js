// empty array for storing children
// arr.filter(x=> x > 2) , return a new arr

// Node is part of Tree
class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }
    add(data) {
        this.children.push(new Node(data));
    }
    remove(data) {
        this.children = this.children.filter(node => node.data !== data);
    }
}

class Tree {

    constructor() {
        this.root = null;
    }
    BFS() {

    }
    DFS() {

    }
    treeTraversal() {

    }
}