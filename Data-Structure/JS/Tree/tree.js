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
    //queue , keyword : width
    BFS(fn) {
        const queue = [this.root];
        while (queue.length) {
            const node = queue.shift();
            queue.push(...node.children);
            fn(node);
        }
    }
    //stack
    DFS(fn) {
        const stack = [this.root]
        while (stack.length) {
            const node = stack.shift();
            stack.unshift(...node.children);
            fn(node);
        }

    }
    treeTraversal() {
        this.DFS((x) => { console.log("this is DFS : node", x) });
        this.BFS((x) => { console.log("this is DFS : node", x) });
    }
}