{
    //二叉树的前序遍历: (self, left, right)
    const preOrder = root => {
        console.log(root.val); // self logic
        preOrder(root.left) // left
        preOrder(root.right) // right
    }

    //前序遍历是中左右，每次先处理的是中间节点，那么先将跟节点放入栈中，然后将右孩子加入栈，再加入左孩子。为什么要先加入 右孩子，再加入左孩子呢？ 因为这样出栈的时候才是中左右的顺序。
    const preOrder = root => {
        let stack = [root];
        while (stack.length > 0) {
            let sz = stack.length;
            for (let i = 0; i < sz; i++) {
                const n = stack.pop();

                console.log(n.val); // self logic

                if (n.right !== null) {
                    stack.push(n.right); //stack is LIFO 
                }

                if (n.left !== null) {
                    stack.push(n.left);
                }
            }
        }
    }
}
{
    //二叉树的中序遍历: (left, self, right)
    const inOrder = root => {
        inOrder(root.left) // left
        console.log(root.val); // self logic
        inOrder(root.right) // right
    }
    {
        var inorderTraversal = function (root) {
            if (root === null) return [];

            let res = [];
            let stack = [];
            let p = root;

            while (stack.length > 0 || p) {
                while (p) { // push all left first
                    stack.push(p);
                    p = p.left;
                }
                let n = stack.pop();
                res.push(n.val);
                p = n.right;
            }
            return res;
        };
    }

    {
        var inorderTraversal = function (root) {
            if (root === null) return [];

            let res = [];

            const dfs_inorderTraversal = n => {
                n.left && dfs_inorderTraversal(n.left);
                res.push(n.val);
                n.right && dfs_inorderTraversal(n.right);
            }

            dfs_inorderTraversal(root);

            return res;
        };
    }
}
{
    //二叉树的后序遍历: (left, right, self)
    const postOrder = root => {
        postOrder(root.left) // left
        postOrder(root.right) // right
        console.log(root.val); // self logic
    }

    {
        const postorder = root => {
            if (!root) return;
            const outputStack = [];
            const stack = [root];

            while (stack.length) {
                const n = stack.pop();
                outputStack.push(n);
                if (n.left) stack.push(n.left);
                if (n.right) stack.push(n.right);
            }

            while (outputStack.length) {
                const n = outputStack.pop()
                console.log(n.val)
            }
        }
    }

}
{
    //求二叉树的最大深度 :DFS, postOrder
    //104. Maximum Depth of Binary Tree
    const maxDepth = root => {
        if (root === null) return 0;
        let leftTreeDepth = maxDepth(root.left);
        let rightTreeDepth = maxDepth(root.right);
        return Math.max(leftTreeDepth, rightTreeDepth) + 1;

    }
    //Time Needed to Inform All Employees

    const maxDepth = root => {
        return root === null ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
    }

    //求二叉树的最大深度 :BFS
    var maxDepth = function (root) {
        if (root === null) return 0;
        let depth = 0; //inside while at least has 1
        let q = [root];
        while (q.length > 0) {
            depth++;
            let sz = q.length;
            for (let i = 0; i < sz; i++) {
                let n = q.shift();
                n.left && q.push(n.left);
                n.right && q.push(n.right);
            }
        }
        return depth;
    }
}
{
    //求二叉树的最小深度 :DFS 
    //111. Minimum Depth of Binary Tree
    const minDepth = root => {
        if (root === null) return 0;
        if (root.left === null && root.right === null) return 1;

        let treeMinDepth = Infinity;
        if (root.left !== null) {
            treeMinDepth = Math.min(minDepth(root.left), treeMinDepth);
        }
        if (root.right !== null) {
            treeMinDepth = Math.min(minDepth(root.right), treeMinDepth);
        }
        return 1 + treeMinDepth;
    }
    //求二叉树的最小深度 :BFS
    const minDepth = root => {
        if (root === null) return 0;
        let depth = 1;
        let q = [root];
        while (q.length > 0) {
            let sz = q.length;
            for (let i = 0; i < sz; i++) {
                let n = q.shift();
                if (n.left === null && n.right === null) return depth;
                n.left && q.push(n.left);
                n.right && q.push(n.right);
            }
            depth++;
        }
        return depth;
    }
}
{
    //求二叉树中节点的个数 :DFS, postOrder
    //222. Count Complete Tree Nodes 
    const countNodes = root => {
        if (root === null) return 0;
        let leftNodesCount = countNodes(root.left);
        let rightNodesCount = countNodes(root.right);
        return 1 + leftNodesCount + rightNodesCount;
    }
    //Serialize and Deserialize BST
    //Maximum Average Subtree
    //Count Ways to Build Rooms in an Ant Colony

    //求二叉树中节点的个数 :BFS
    var countNodes = function (root) {
        if (root === null) return 0;
        let s = [root];
        let res = 0;
        while (s.length > 0) {
            let sz = s.length;
            res += sz;
            for (let i = 0; i < sz; i++) {
                let n = s.shift();
                n.left && s.push(n.left);
                n.right && s.push(n.right);
            }
        }
        return res;
    }
}
{
    //求二叉树中叶子节点的个数 : DFS
    const leafNodeCount = root => {
        if (root === null) return 0;
        if (root.left === null && root.right === null) return 1;

        let leftLeafNodeCount = leafNodeCount(root.left);
        let rightLeafNodeCount = leafNodeCount(root.right);

        return leftLeafNodeCount + rightLeafNodeCount;
    }

    const leafNodeCount = root => {
        if (root === null) return 0;
        let res = 0;
        const dfs = (n, res) => {
            if (n === null) return;
            if (n.left === null && n.right === null) res++;
            n.left && dfs(n.left);
            n.right && dfs(n.right);
        }
        dfs(root, 0);
        return res;

    }

}
{
    //求二叉树中第k层节点的个数 : DFS
    const numsOfkLevelTreeNode = (root, k) => {
        if (root === null || k < 1) return 0;
        if (k === 1) return 1;
        let leftNum = numsOfkLevelTreeNode(root.left, k - 1);
        let rightNum = numsOfkLevelTreeNode(root.right, k - 1);
        return leftNum + rightNum;

    }

    //求二叉树中第k层节点的个数 : BFS
    const numsOfkLevelTreeNode = (root, k) => {
        if (root === null || k < 1) return 0;
        if (k === 1) return 1;
        let level = 1;
        let s = [root];
        let res = 0;
        while (s.length > 0) {
            let sz = s.length;
            if (level === k) {
                return res = sz;
            }
            for (let i = 0; i < sz; i++) {
                let n = s.shift();
                n.left && s.push(n.left);
                n.right && s.push(n.right);
            }
            level++;
        }
        if (level < k) return; // need to ask whether k always smaller than level
        return res;
    }
}
{
    //判断二叉树是否是平衡二叉树 : 如果每个节点的左右子树的高度相差不超过1，它就是一颗平衡二叉树

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

    //Maximum Width of Binary Tree
    //Cracking the Safe
    //Find Elements in a Contaminated Binary Tree
}
{
    //判断一个二叉树是否平衡。树平衡的定义是，对于树上的任意节点，其两侧节点的最大深度 的差值不得大于 1
    //解法类似于求树的最大深度，但有两个不同的地方:一是我们需要先处理子树的深度再进行 比较，二是如果我们在处理子树时发现其已经不平衡了，则可以返回一个-1，使得所有其长辈节 点可以避免多余的判断(本题的判断比较简单，做差后取绝对值即可;但如果此处是一个开销较 大的比较过程，则避免重复判断可以节省大量的计算时间)。
    const isBalanced = root => {
        if (root === null) return true;

        const help = n => {
            if (n === null) return 0;
            let leftDepth = help(n.left);
            let rightDepth = help(n.right);
            if (leftDepth === -1 || rightDepth === -1 || Math.abs(leftDepth - rightDepth) > 1) return -1;
            return 1 + Math.max(leftDepth, rightDepth);
        }

        return help(root) === -1;
    }
}
{
    //判断二叉树是否是完全二叉树 : BFS
    //一棵二叉树至多只有最下面的两层上的结点的度数可以小于2，并且最下层上的结点都集中在该层最左边的若干位置上，则此二叉树成为完全二叉树
    var isCompleteTree = function (root) {
        if (root === null) return true;
        let q = [root];
        while (q.length > 0) {
            let node = q.shift();
            if (node === null) break; // stop when the node is missing
            q.push(node.left);
            q.push(node.right); // cannot check node.left === null
        }
        while (q.length > 0) {
            let node = q.shift();
            if (node !== null) return false;
        }
        return true;
    };
    //Flip Binary Tree To Match Preorder Traversal
    //Sum of Nodes with Even-Valued Grandparent
    //Build Binary Expression Tree From Infix Expression


}
{
    //两个二叉树是否完全相同
    //100. Same Tree
    var isSameTree = function (p, q) {
        if (p === null && q === null) return true; // order is mater
        if (p === null || q === null) return false;
        if (p.val !== q.val) return false;
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    };
    //Binary Tree Tilt
    //Regions Cut By Slashes
    //Smallest Common Region

}
{
    //翻转二叉树or镜像二叉树: DFS
    //226. Invert Binary Tree
    const invertTree = function (root) {
        if (root === null) return root;
        let left = invertTree(root.left)
        let right = invertTree(root.right);
        root.left = right;
        root.right = left;
        return root;
    }

    const invertTree = root => {
        if (root === null) return root;
        invertTree(root.left);
        invertTree(root.right);
        [root.left, root.right] = [root.right, root.left];
        return root;
    }

    // 翻转二叉树or镜像二叉树: BFS
    const invertTree = root => {
        if (root == null) return null;
        let q = [root];
        while (q.length > 0) {
            let sz = q.length;
            for (let i = 0; i < sz; i++) {
                let n = q.shift();
                [n.left, n.right] = [n.right, n.left]; // swap
                n.left && q.push(n.left);
                n.right && q.push(n.right);
            }
        }
        return root;
    };
}
{
    //求一个二叉树的最长直径 (直径的定义是二叉树上任意两节点之间的无向距离)
    //543. Diameter of Binary Tree
    const diameterOfBinaryTree = root => {

        if (!root) return null;
        let max = 0;

        const dfs = (n) => {
            if (!n) return 0;
            let leftLevel = dfs(n.left);
            let rightLevel = dfs(n.right);

            max = Math.max(max, leftLevel + rightLevel);
            // return the longest one between left_path and right_path;
            // remember to add 1 for the path connecting the node and its parent
            return Math.max(leftLevel, rightLevel) + 1; // 1  is root
        }

        dfs(root);
        return max;

    };
    //Diameter of N-Ary Tree
}
{
    // LCA求两个二叉树的最低公共祖先节点
}
{

    //404. Sum of Left Leaves
    ///如果左节点不为空，且左节点没有左右孩子，那么这个节点就是左叶子
    const sumOfLeftLeaves = root => {

    }
}
{
    //Symmetric Tree (Easy) 判断一个二叉树是否对称

    const isSymmetric = root => {

        const isMirror = (n1, n2) => {
            if (n1 === null && n2 === null) return true;
            if (n1 === null && n2 !== null) return false;
            if (n1 !== null && n2 === null) return false;
            if (n1.val !== n2.val) return false;

            return isMirror(n1.left, n2.right) && isMirror(n2.left, n1.right)
        }

        return isMirror(root, root);
    }
    //Closest Binary Search Tree Value II
    //Two Sum IV - Input is a BST
    //Longest ZigZag Path in a Binary Tree
}
{
    //226. Invert Binary Tree (Easy)
}
{
    //617. Merge Two Binary Trees (Easy)
}
{
    //404. Sum of Left Leaves (Easy)
}
{
    //513. Find Bottom Left Tree Value (Easy)
}
{
    //1110. Delete Nodes And Return Forest (Medium)
    var delNodes = function (root, to_delete) {
        let res = [];
        let set = new Set(to_delete);

        const dfs = (n) => {
            if (n === null) return n;
            n.left = dfs(n.left);
            n.right = dfs(n.right);
            if (set.has(n.val)) {
                if (n.left !== null) res.push(n.left);  // 零散的非空子树, push before set n = null
                if (n.right !== null) res.push(n.right);
                n = null;
            }
            return n;  // 本级递归返回值：移除掉特定节点后的二叉树
        }

        let node = dfs(root);
        if (node !== null) {
            res.push(node);
        }

        return res;
    };

}
{
    //给定一个二叉树，求每一层的节点值的平均数
    //637. Average of Levels in Binary Tree (Easy)
}
{
    //105. Construct Binary Tree from Preorder and Inorder Traversal (Medium)
    //给定一个二叉树的前序遍历和中序遍历结果，尝试复原这个树。已知树里不存在重复值的节 点。
    /*
    前序遍历的第一个节点是 4，意味着 4 是根节点。 我们在中序遍历结果里找到 4 这个节点，根据中序遍历的性质可以得出，4 在中序遍历数组位置 的左子数组为左子树，节点数为 1，对应的是前序排列数组里 4 之后的 1 个数字(9);4 在中序 遍历数组位置的右子数组为右子树，节点数为 3，对应的是前序排列数组里最后的 3 个数字。有 了这些信息，我们就可以对左子树和右子树进行递归复原了。为了方便查找数字的位置，我们可 以用哈希表预处理中序遍历的结果。
    */
}