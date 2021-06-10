//101. Symmetric Tree (Easy)
//Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
//Input: root = [1,2,2,3,4,4,3] Output: true

//递归：后序，比较的是根节点的左子树与右子树是不是相互翻转
//迭代：使用队列/栈将两个节点顺序放入容器中进行比较

{//recursion
    const isMirror = (n1, n2) => {
        if (n1 === null && n2 === null) return true; // 1
        // if I want to use if (n1 === null || n2 === null) return false; instead of using 2, 3, then I must use 1 first.
        if (n1 === null && n2 !== null) return false; //2
        if (n1 !== null && n2 === null) return false; //3

        if (n1.val !== n2.val) return false;

        return isMirror(n1.left, n2.right) && isMirror(n2.left, n1.right)

    }

    var isSymmetric = function (root) {
        if (root === null) return true;
        return isMirror(root, root)
    };
}

{//iteration
    var isSymmetric = function (root) {
        if (root == null) return true;

        let q = [root, root]; // add two elements into queue at initial time

        while (q.length > 0) {

            let n1 = q.shift(); // shift 2 elements same time
            let n2 = q.shift();

            if (n1 === null && n2 == null) continue; // NOT return, 
            if (!n1 || !n2) return false;  // same as using 2, 3
            //if (n1 === null && n2 !== null) return false; //2
            //if (n1 !== null && n2 === null) return false; //3
            if (n1.val !== n2.val) return false;

            q.push(n1.left, n2.right); // smart : so shift() twice work
            q.push(n1.right, n2.left);
        }
        return true;
    }
}
/*
The Maze II
Construct Binary Search Tree from Preorder Traversal
Frog Position After T Seconds
*/