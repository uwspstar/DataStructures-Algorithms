{   //recursion
    //访问根节点
    //对根节点的children挨个进行深度优先遍历
    const dfs = (root) => {
        console.log(root.val)
        root.children && root.children.forEach(dfs)
        // 防止初学者懵逼，相当于 root.children.forEach(child => dfs(child))
    }
}