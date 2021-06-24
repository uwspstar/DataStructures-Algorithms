{
    // By recursively checking if every node respects its own range:

    // Time complexity: O(n)
    // Space complexity: O(h)

    class Tree {
        constructor(data, left = null, right = null) {
            this.data = data;
            this.left = left;
            this.right = right;
        }
    }

    function isBst(root, min = -Infinity, max = Infinity) {
        if (root === null)
            return true;
        else if (root.data <= min || root.data >= max)
            return false;
        else
            return isBst(root.left, min, root.data) && isBst(root.right, root.data, max);
    }
}
{
    // By checking if values are sorted when performing an inorder traversal:

    // Time complexity: O(n)
    // Space complexity: O(h)

    class Tree {
        constructor(data, left = null, right = null) {
            this.data = data;
            this.left = left;
            this.right = right;
        }
    }

    function isBst(root) {
        let precedent = [-Infinity];
        return isBstRec(root, precedent);
    }

    function isBstRec(root, precedent) {
        if (root === null) return true;
        if (!isBstRec(root.left, precedent)) return false;
        if (root.data <= precedent[0]) return false;
        else precedent[0] = root.data;
        if (!isBstRec(root.right, precedent)) return false;
        return true;
    }
}