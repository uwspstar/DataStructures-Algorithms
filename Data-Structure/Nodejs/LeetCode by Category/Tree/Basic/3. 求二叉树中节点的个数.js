//222. Count Complete Tree Nodes
/*
Given the root of a complete binary tree, return the number of the nodes in the tree.

According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.
*/
{
    var countNodes = function (root) {
        //step 1 : only,if only, have root node
        if (root === null) return 0;
        if (root.left === null && root.right === null) return 1;

        let res = 0;

        //step 2 : only,if only, have root left subtree node
        let leftCount = countNodes(root.left);

        //step 3 : only,if only, have root right subtree node

        let rightCount = countNodes(root.right);

        // think about merge sort (postOrder)
        res = leftCount + rightCount + 1; // 1 is root

        return res;
    }
}
{
    //template
    var countNodes = function (root) {
        //1. only root
        if (root === null) return 0;
        if (root.left === null && root.right === null) return 1;

        let res = 0;
        //2. only left
        let countLeftNodes = countNodes(root.left);
        //3. only right
        let countRightNodes = countNodes(root.right);

        //4. combine result
        res = countLeftNodes + countRightNodes + 1;

        return res;

    }
}
{
    //BFS
    var countNodes = function (root) {
        if (root === null) return 0;
        let q = [root];
        let res = 0;
        while (q.length) {
            let sz = q.length;
            for (let i = 0; i < sz; i++) {
                let n = q.shift();
                n.left && q.push(n.left);
                n.right && q.push(n.right);
            }
            res += sz;
        }
        return res;
    };
}
{
    var countNodes = function (root) {
        if (root === null) return 0;

        let leftCount = countNodes(root.left);
        let rightCount = countNodes(root.right);

        return 1 + leftCount + rightCount;
    };

}
//Lexicographical Numbers
//All Elements in Two Binary Search Trees
//Frequency of the Most Frequent Element
//Kth Smallest Element in a Sorted Matrix
//Maximum Width of Binary Tree
//Path With Minimum Effort
