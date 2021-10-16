/*
宽度优先搜索 BFS

使用条件
- 拓扑排序(100%)
- 出现连通块的关键词(100%)
- 分层遍历(100%)
- 简单图最短路径(100%)
- 给定一个变换规则，从初始状态变到终止状态最少几步(100%)

复杂度

时间复杂度:O(n + m)
 - n是点数,m是边数

 空间复杂度:O(n)
*/

//代码模版
{
    const bfs = (root) => {
        const q = [root]
        while (q.length > 0) {
            const n = q.shift();
            console.log(n.val);
            n.children.forEach(child => q.push(child));
        }
    }
}