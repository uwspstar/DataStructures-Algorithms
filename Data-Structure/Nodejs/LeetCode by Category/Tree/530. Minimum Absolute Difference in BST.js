//530. Minimum Absolute Difference in BST
//Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

//遇到在二叉搜索树上求什么最值啊，差值之类的，就把它想成在一个有序数组上求最值，求差值，这样就简单多了。
//考虑对升序数组 aa 求任意两个元素之差的绝对值的最小值，答案一定为相邻两个元素之差的最小值，即
//{ ans }=min{ a[i + 1]−a[i] }
//其中 n 为数组 a 的长度。其他任意间隔距离大于等于 2 的下标对 (i,j) 的元素之差一定大于下标对 (i,i+1) 的元素之差，故不需要再被考虑
//二叉搜索树中序遍历得到的值序列是递增有序的，因此我们只要得到中序遍历后的值序列即能用上文提及的方法来解决。
{
    var getMinimumDifference = function (root) {
        let arr = [];
        const buildArr = root => {
            if (root) {
                root.left && buildArr(root.left);
                arr.push(root.val)
                root.right && buildArr(root.right);
            }
        }
        buildArr(root);
        //非负值的二叉搜索树
        let res = arr[1] - arr[0];
        for (let i = 1; i < arr.length; i++) {
            res = Math.min(arr[i] - arr[i - 1], res);
        }
        return res;
    };
}
{
    var getMinimumDifference = function (root) {
        if (root === null) return 0;
        let pre = -1;
        let minDiff = Infinity;
        let s = [];
        let p = root;
        while (s.length || p) {
            while (p) {
                s.push(p);
                p = p.left;
            }
            let n = s.pop();
            if (pre === -1) {
                pre = n.val;
            } else {
                minDiff = Math.min(minDiff, n.val - pre);
                pre = n.val;
            }
            p = n.right;
        }

        return minDiff;
    }
}
//K-diff Pairs in an Array
{
    var getMinimumDifference = function (root) {
        let pre = null;
        let res = Infinity;
        const dfs = (cur) => {
            if (!cur) return;
            dfs(cur.left);
             
            if (pre) {
                res = Math.min(Math.abs(cur.val - pre.val), res);
            }
            
            pre = cur; // cur node pass to pre;

            dfs(cur.right);
        }
        dfs(root);
        return res;
    }
}