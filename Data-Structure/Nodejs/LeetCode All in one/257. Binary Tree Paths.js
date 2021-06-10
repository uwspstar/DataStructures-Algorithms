//257. Binary Tree Paths
//Given the root of a binary tree, return all root-to-leaf paths in any order.A leaf is a node with no children.
//Input: root = [1,2,3,null,5] Output: ["1->2->5","1->3"]
/*
回溯就隐藏在traversal(cur->left, path + "->", result);中的 path + "->"。 每次函数调用完，path依然是没有加上"->" 的，这就是回溯了。

如果还不理解的话，可以把

traversal(cur->left, path + "->", result);
改成

string tmp = path + "->";
traversal(cur->left, tmp, result);
看看还行不行了，答案是这么写就不行了，因为没有回溯了。
*/
//dfs : recursion
{
    var binaryTreePaths = function(root) {
        if (root === null) return root;
        let res = [];
        
        const dfs = (n, currPath) => {
            
            if (n.left === null && n.right === null) { // only leaf
                currPath += n.val;
                res.push(currPath);
            }  
            
            if (n.left !== null) {
                dfs(n.left, currPath + n.val + "->"); 
            }
            if (n.right !== null) {
                dfs(n.right, currPath + n.val + "->"); 
            }  
        }
        
        dfs(root, ''); 
        
        return res;
    };
}
// iteration
{
    var binaryTreePaths = function(root) {
        if (root === null) return root;
        
        let res = []
        let s = [[root, '']];
        
        while (s.length) {
            
            let [n, currPath] = s.pop(); 
            
            if (n.left === null && n.right === null) { // only leaf
                currPath += n.val;
                res.push(currPath);
            } 
            
            if (n.right !== null) {
                s.push([n.right, currPath + n.val + "->"]);
            } 
            
            if (n.left !== null) {
                s.push([n.left, currPath + n.val + "->"]); 
            }
        }
        return res
        
    }    
}
//Path Sum II
//Smallest String Starting From Leaf