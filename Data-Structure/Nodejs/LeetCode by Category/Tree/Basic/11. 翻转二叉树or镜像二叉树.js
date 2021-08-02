//翻转二叉树or镜像二叉树, 原地翻转二叉树
//226. Invert Binary Tree
//只要把二叉树上的每一个节点的左右子节点进行交换，最后的结果就是完全翻转之后的二叉树。
/*
     4
   /   \
  2     7
 / \   / \
1   3 6   9

-->
     4
   /   \
  7     2
 / \   / \
9   6 3   1

-----------------

1. only root --> return root
     4
   /   \
 null  null

2. only left tree

    4             4
   /             /    
  2     ->      2
 / \           / \  
1   3         3   1

  
3. only right tree

    4                4
     \                \   
      7     ->         7
     / \              / \  
    6   9            9   6



4. combine result;

     4
   /   \
  7     2     --> [root.left, root.right] = [root.right, root.left] 
 / \   / \
9   6 3   1

*/


{
    //翻转二叉树or镜像二叉树: DFS
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