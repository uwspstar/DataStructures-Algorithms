/*
How to solve (almost) any binary tree coding problem
- https://www.youtube.com/watch?v=s2Yyk3qdy3o
# steps

- step 1: Finding one or more base cases
- step 2: calling the same function on the left subtree
- step 3: calling the same function on the right subtree
- step 4: Join the results
*/
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
//treeSum (sum all nodes' value)
{
    const treeSum = (root) => {
        if (root === null) return 0; // 0

        let leftSum = treeSum(root.left);
        let rightSum = treeSum(root.right);

        return root.val + leftSum + rightSum;
    };
}
//222. Count Complete Tree Nodes
//https://leetcode.com/problems/count-complete-tree-nodes/
//nodeCount (total node)
{
    const nodeCount = (root) => {
        if (root === null) return 0; // 0, after this step, root is 1

        let leftCount = leftCount(root.left);
        let rightCount = leftCount(root.right);

        return 1 + leftCount + rightCount;
    };
}

//treeMaxValue : max value of the tree
{
    const treeMaxValue = (root) => {
        if (root === null) return 0; // 0, after this step, compare with root val also

        let leftMaxValue = treeMaxValue(root.left);
        let rightMaxValue = treeMaxValue(root.right);

        return Math.max(root.val + leftMaxValue + rightMaxValue);
    };
}

//treeMaxHeight :  tree depth
//https://leetcode.com/problems/maximum-depth-of-binary-tree/
{
    const treeMaxHeight = (root) => {
        if (root === null) return 0; // 0

        let leftMaxHeight = treeMaxHeight(root.left);
        let rightMaxHeight = treeMaxHeight(root.right);

        return 1 + Math.max(leftMaxHeight + rightMaxHeight);
    };
}

//https://leetcode.com/problems/invert-binary-tree/
//reverseTree : left to right; right to left
{
    const reverseTree = (root) => {
        if (root === null) return root; // 0

        let leftTree = reverseTree(root.left);
        let rightTree = reverseTree(root.right);
        root.left = rightTree;
        root.right = leftTree;
        return root;
    };
}

{
    const reverseTree = (root) => {
        if (root === null) return root; // 0
        [root.left, root.right] = [root.right, root.left];
        reverseTree(root.left);
        reverseTree(root.right);
        return root;
    };
}
{
    ////postOrder faster
    const reverseTree = (root) => {
        if (root === null) return root; // 0
        reverseTree(root.left);
        reverseTree(root.right);
        [root.left, root.right] = [root.right, root.left];
        return root;
    };
}
//111. Minimum Depth of Binary Tree
{
    var minDepth = function (root) {
        if (root === null) return 0;

        if (root.left === null && root.right === null) { //leaf node
            return 1;
        }

        let treeMinDepth = Infinity;

        if (root.left !== null) {
            treeMinDepth = Math.min(minDepth(root.left), treeMinDepth);
        }

        if (root.right !== null) {
            treeMinDepth = Math.min(minDepth(root.right), treeMinDepth);
        }

        return 1 + treeMinDepth;
    };
}
// total leaf Nodes
{
    const leafNodesCount = root => {
        if (root == NULL) return 0;
        if (root.left === NULL && root.right === NULL) return 1; // think about root
        let leftCount = leafNodesCount(root.left);
        let rightCount = leafNodesCount(root.left);
        return leftCount + rightCount;
    }
}

//617. Merge Two Binary Trees
{
    var mergeTrees = function (root1, root2) {
        if (root1 === null) return root2;
        if (root2 === null) return root1;
        //DFS
        root1.val += root2.val;  // 中     

        root1.left = mergeTrees(root1.left, root2.left);     // 左

        root1.right = mergeTrees(root1.right, root2.right);  // 右 

        return root1;
    };
}
//110. Balanced Binary Tree
//a binary tree in which the left and right subtrees of every node differ in height by no more than 1.
{
    const height = (root) => {
        if (root == null) return -1;
        return 1 + Math.max(height(root.left), height(root.right));
    }
    var isBalanced = function (root) {
        if (root === null) return true;

        return Math.abs(height(root.left) - height(root.right)) < 2
            && isBalanced(root.left)
            && isBalanced(root.right);
    };
}
{
    const height = (root) => {
        if (root == null) return -1;
        let leftHigh = height(root.left);
        let rightHigh = height(root.right);
        return 1 + Math.max(leftHigh, rightHigh);
    }
    var isBalanced = function (root) {
        if (root === null) return true;
        let left = height(root.left);
        let right = height(root.right);
        if (Math.abs(left - right) > 1) return false;
        return isBalanced(root.left) && isBalanced(root.right);
    };
}
//101. Symmetric Tree
{
    const isMirror = (n1, n2) => {
        //check step1 and step in order;
        if (n1 === null && n2 === null) return true; //step1
        if (n1 === null || n2 === null) return false; //step2
        if (n1.val !== n2.val) return false;
        return isMirror(n1.left, n2.right) && isMirror(n2.left, n1.right)
    }

    var isSymmetric = function (root) {
        if (root === null) return true;
        return isMirror(root, root)
    };
}
{
    {
        var sumOfLeftLeaves = function (root) {
            if (root === null) return 0;
            let res = 0;
            //如果左节点不为空，且左节点没有左右孩子，那么这个节点就是左叶子
            const isLeaf = n => {
                return n !== null && n.left === null && n.right === null;
            }

            const dfs = n => {
                if (n === null) return 0;

                if (isLeaf(n.left)) {//understand each node what's happen is the key
                    res += n.left.val;
                }

                if (n.left !== null) {
                    dfs(n.left);
                }
                if (n.right !== null) {
                    dfs(n.right);
                }
            }

            dfs(root);
            return res;
        };
    }
}