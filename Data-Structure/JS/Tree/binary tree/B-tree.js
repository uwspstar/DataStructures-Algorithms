// Left < Parent < right
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