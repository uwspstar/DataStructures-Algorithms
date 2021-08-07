//二叉树的遍历
//1. 求二叉树的最大深度
//2. 求二叉树的最小深度 (BFS) use queue
{
    //二叉树的遍历:
    const traversal = root => {
        console.log('preOrder', root.val);
        traversal(root.left);
        console.log('inOrder', root.val);
        traversal(root.right);
        console.log('postOrder', root.val);
    }

}



{
    //1. 求二叉树的最大深度
    const maxDepth = root => {
        if (root === null) return 0;
        if (root.left === 0 && root.right === 0) return 1;

        let res = 0; //current node

        let leftMaxDepth = maxDepth(root.left);
        let rightMaxDepth = maxDepth(root.right);

        res = Math.max(leftMaxDepth, rightMaxDepth) + 1;

        return res;
    }

    const maxDepthBFS = root => {
        if (root === null) return root;
        let q = [root];
        let depth = 0; // root depth = 0
        while (q.length > 0) {
            let sz = q.length;
            for (let i = 0; i < sz; i++) {
                let n = q.shift();
                n.left && q.push(n.left);
                n.right && q.push(n.right);
            }
            depth++;
        }
        return depth;
    }

}
{
    //2. 求二叉树的最小深度 (BFS) use queue
    //111. Minimum Depth of Binary Tree
    //The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
    const minDepth = root => {
        if (root === null) return 0;
        let q = [root];
        let depth = 1;
        while (q.length > 0) {
            let sz = q.length;
            for (let i = 0; i < sz; i++) {
                let n = q.shift();
                if (n.left === null && n.right === null) {
                    return depth;
                }
                n.left && q.push(n.left);
                n.right && q.push(n.right);
            }
            depth++;
        }
        return depth;
    }
    const minDepth = root => {
        if (root === null) return 0;
        if (root.left === null && root.right === null) return 1;

        let res = Infinity;
        root.left && { res = Math.min(res, minDepth(root.left)) }
        root.right && { res = Math.min(res, minDepth(root.right)) }

        return res + 1;
    }
}
{
    //3. 求二叉树中节点的个数
    //222. Count Complete Tree Nodes
    const countNodes = root => {
        if (root === null) return 0;
        if (root.left === null && root.right === null) return 1;

        let leftCount = countNodes(root.left);
        let rightCount = countNodes(root.right);

        return leftCount + rightCount + 1; // 1 is the root

    }
    const countNodesBFS = root => {
        if (root === null) return 0;
        if (root.left === null && root.right === null) return 1;
        let res = 0;
        let q = [root];
        while (q.length > 0) {
            let sz = q.length; 
            res += sz;
            for (let i = 0; i < sz; i++) {
                let n = q.shift();
                n.left && q.push(n.left);
                n.right && q.push(n.right);
            }
        }
        return res;
    }
}
{
    //4. 求二叉树中叶子节点的个数
    const countLeafNodes = root => {
        if (root === null) return 0;

        if (root.left === null && root.right === null) return 1;

        let leftLeafNodes = countLeafNodes(root.left);
        let rightLeafNodes = countLeafNodes(root.right);

        return leftLeafNodes + rightLeafNodes;
    }
}
{
    //5. 求二叉树中第k层节点的个数
    const countKthLevelNodes = (root, k) => {
        if (root === null) return 0;
        if (k === 1) return 1;

        let res = 0;

        if (k === 0) return res;

        let leftCount = countKthLevelNodes(root.left, k - 1);
        let rightCount = countKthLevelNodes(root.right, k - 1);

        res = leftCount + rightCount;

        return res;
    }

}
{
    //6. 判断二叉树是否是[平衡二叉树]
    const getMaxHeight = root => {
        if (root === null) return -1; // can return 0;
        let left = getMaxHeight(root.left);
        let right = getMaxHeight(root.right);
        return Math.max(left, right) + 1;
    }
    const isBalanceTree = root => {
        if (root === null) return true;
        if (root.left === null && root.right === null) return true;

        let leftHeight = getMaxHeight(root.left);
        let rightHeight = getMaxHeight(root.right);

        if (Math.abs(leftHeight - rightHeight) > 1) return false;

        return isBalanceTree(root.left) && isBalanceTree(root.right)
    }
}
{
    //7. 判断二叉树是否是[完全二叉树]

}
{
    //8.两个二叉树是否完全相同

}
{
    //9.两个二叉树是否互为镜像

}
{
    //10.翻转二叉树or镜像二叉树

}
{
    //11. 求一个二叉树的最长直径

}
{
    //12. 二叉树中最大路径和
}
{
    //13. LCA求两个二叉树的最低公共祖先节点

}
{
    //14. LCA求两个[二叉搜索树]的最低公共祖先节点

}
{
    //15. 将二叉树展开为链表
}
{
    //16.将有序数组转换为二叉搜索树
}
{
    //17. 填充二叉树节点的右侧指针. 把二叉树的每一层节点都用next指针连接起来
}
{
    //18. 构造最大二叉树

}
{
    //19. 从前序与中序遍历序列构造二叉树

}
{
    //20. 从中序与后序遍历序列构造二叉树
}
{
    //21. 前序遍历和后序遍历构造二叉树
}