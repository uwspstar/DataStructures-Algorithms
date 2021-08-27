//331. 验证二叉树的前序序列化
/*
序列化二叉树的一种方法是使用前序遍历。当我们遇到一个非空节点时，我们可以记录下这个节点的值。如果它是一个空节点，我们可以使用一个标记值记录，例如 #。

     _9_
    /   \
   3     2
  / \   / \
 4   1  #  6
/ \ / \   / \
# # # #   # #
例如，上面的二叉树可以被序列化为字符串 "9,3,4,#,#,1,#,#,2,#,6,#,#"，其中 # 代表一个空节点。力扣的二叉树题目的输入都是这种格式的。

给定一串以逗号分隔的序列，验证它是否是正确的二叉树的前序序列化。编写一个在不重构树的条件下的可行算法。

每个以逗号分隔的字符或为一个整数或为一个表示 null 指针的 '#' 。

你可以认为输入格式总是有效的，例如它永远不会包含两个连续的逗号，比如 "1,,3" .

输入: "9,3,4,#,#,1,#,#,2,#,6,#,#"
输出: true
 
输入: "1,#"
输出: false

输入: "9,#,#,1"
输出: false

https://leetcode-cn.com/problems/verify-preorder-serialization-of-a-binary-tree/solution/pai-an-jiao-jue-de-liang-chong-jie-fa-zh-66nt/

模拟一遍过程：

[9,3,4,#,#] => [9,3,#]，继续
[9,3,#,1,#,#] => [9,3,#,#] => [9,#] ，继续
[9,#2,#,6,#,#] => [9,#,2,#,#] => [9,#,#] => [#]，结束

对于任何有向图，所有顶点的出度之和总是等于入度之和，我们把二叉树看作一个连通无环的有向图，也应该满足这个条件。非空节点的入度总是为1，出度在0-2之间。

*/
{
    const isValidSerialization = preorder => {
        if (preorder == "#") { // 特例
            return true
        }

        let indegree = 0;
        let outDegree = 0;
        const nodes = preorder.split(',')

        for (let i = 0; i < nodes.length; i++) {
            if (i === 0) { // root node
                if (nodes[i] === "#") { // #,#,1 false
                    return false;
                }
                outDegree += 2 // root 出度+2
                continue;
            }

            if (nodes[i] === "#") { // null节点，入度+1
                indegree += 1
            } else { // 非空节点 入度+1 出度+2
                indegree += 1
                outDegree += 2
            }

            //一直保持indegree < outDegree，直到最后才indegree === outDegree，做不到就 false
            if (i !== nodes.length - 1 && indegree >= outDegree) {
                return false;
            }
        }
        return indegree == outDegree // 最后肯定入度===出度
    };

    //https://leetcode-cn.com/problems/verify-preorder-serialization-of-a-binary-tree/solution/shou-hua-tu-jie-cong-ling-yi-ge-jiao-du-2rnzg/
}

{
    const isValidSerialization = preorder => {
        if (preorder == "#") return true;

        let indegree = 0;
        let outDegree = 0;
        const nodes = preorder.split(',');

        for (let i = 0; i < nodes.length; i++) {
            if (i === 0) { // root node
                if (nodes[i] === "#") return false;// #,#,1 false
                outDegree += 2; // root 出度+2

            } else { //not root

                if (nodes[i] === "#") { // null节点，入度+1
                    indegree += 1;
                } else { // 非空节点 入度+1 出度+2
                    indegree += 1;
                    outDegree += 2;
                }

                //一直保持indegree < outDegree，直到最后才indegree === outDegree，做不到就 false
                if (i !== nodes.length - 1 && indegree >= outDegree) return false;
            }
        }
        return indegree === outDegree;
    };
}