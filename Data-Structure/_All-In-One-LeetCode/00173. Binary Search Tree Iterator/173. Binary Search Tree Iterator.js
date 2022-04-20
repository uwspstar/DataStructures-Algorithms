{
    //over the in-order traversal of a binary search tree (BST):
    var BSTIterator = function (root) {
        this.idx = 0;
        this.arr = [];
        this.inorderTraversal(root, this.arr);
    };

    BSTIterator.prototype.inorderTraversal = function (root, arr) {
        if (!root) return;
        this.inorderTraversal(root.left, arr);
        arr.push(root.val);
        this.inorderTraversal(root.right, arr);
    }

    BSTIterator.prototype.next = function () {
        let res = this.arr[this.idx];
        this.idx++;
        return res;
    };

    BSTIterator.prototype.hasNext = function () {
        return this.idx < this.arr.length;
    };
}