var sumNumbers = function (root) {
    const dfs = (root, prevSum) => {
        if (root === null) return 0;
        // 根节点到当前节点数字之和
        let sum = prevSum * 10 + root.val;
        // 如果是叶子节点，就返回sum
        if (root.left === null && root.right === null) return sum;
        // 不是叶子节点，就递归，并把当前的和传给孩子节点
        let leftSum = dfs(root.left, sum);
        let rightSum = dfs(root.right, sum);
        return leftSum + rightSum;
    }
    return dfs(root, 0)
};