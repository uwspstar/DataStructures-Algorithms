// Left < Parent < right

var Tree = function () {
    var Node = function (value) {
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
        insertNode(root, newNode);

    }

    this.search = function (value) {

    }

    this.traverse = function (value) {

    }

    this.remove = function (value) {

    }
}