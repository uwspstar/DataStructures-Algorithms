var isValidBST = function (root) {

    const isValidBST = (root, min, max) => {
        if (root === null) return true;

        if (min != null && root.val <= min.val) return false;
        if (max != null && root.val >= max.val) return false;

        return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
    }
    return isValidBST(root, null, null);
};