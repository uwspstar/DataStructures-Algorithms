// isSymmetric
{
    //Time complexity : O(n). Because we traverse the entire input tree once, the total run time is O(n), where nn is the total number of nodes in the tree.

    //Space complexity : The number of recursive calls is bound by the height of the tree. In the worst case, the tree is linear and the height is in O(n). Therefore, space complexity due to recursive calls on the stack is O(n) in the worst case.

    const isSymmetric = root => {

        if (root === null) return true;

        const isMirror = (root1, root2) => {
            if (root1 === null && root2 === null) return true;
            if (root1 === null) return false;
            if (root2 === null) return false;
            if (root1.val !== root2.val) return false;
            return isMirror(root1.left, root2.right) && isMirror(root2.left, root1.right);
        }

        return isMirror(root.left, root.right);
    }
}