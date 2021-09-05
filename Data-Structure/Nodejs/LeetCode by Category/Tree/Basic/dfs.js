{   //recursion
    //访问根节点
    //对根节点的children挨个进行深度优先遍历
    const dfs = (root) => {
        console.log(root.val)
        root.children && root.children.forEach(dfs)
        // 防止初学者懵逼，相当于 root.children.forEach(child => dfs(child))
    }
}
{
    const dfs = root => {

        //1
        if (root === null) return root;//1st time to visit the node
        //1

        dfs(root.left);
        //2nd time visit the node, even do noting
        //2


        dfs(root.right)
        //3rd time visit the node, even do noting
        //3

    }
}

{ // recursive : binary tree, visit node 3 times

    /*
               0
            /     \
           1        2
          /  \     / \
         3    4   5   6
        / \  / \ / \ / \
       n  n n  n n  n n  n

 */

  //  0 (1st meet 0*) 
  //, 1, 3, n, 3, n, 3, 1, 4, n, 4, n, 4, 1
  //, 0 (2nd time meet 0, the left side is done),
  //, 2, 5, n, 5, n, 5, 2, 6, n, 6, n, 6, 2,
  //  0 (3rd time meet 0)
}