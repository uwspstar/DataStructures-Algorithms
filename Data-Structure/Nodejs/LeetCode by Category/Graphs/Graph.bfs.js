{//https://adrianmejia.com/data-structures-for-beginners-graphs-time-complexity-tutorial/#Depth-first-search-DFS-Graph-search
    function* bfs(first) {
        const visited = new Map();
        const visitList = new Queue();//

        visitList.add(first);

        while (!visitList.isEmpty()) {
            const node = visitList.remove();
            if (node && !visited.has(node)) {
                yield node;
                visited.set(node);
                node.getAdjacents().forEach(adj => visitList.add(adj));
            }
        }
    }
}
{
    // 计算从起点 start 到终点 target 的最近距离
    const BFS = (start, target) => {
        let q = []; // 核心数据结构
        let visited = new Set(); // 避免走回头路

        q.push(start); // 将起点加入队列
        visited.add(start);
        let step = 0; // 记录扩散的步数

        while (q.length > 0) {
            let sz = q.length;
            /* 将当前队列中的所有节点向四周扩散 */
            for (let i = 0; i < sz; i++) {
                let cur = q.shift();
                
                if (cur === target) return step;/* 划重点：这里判断是否到达终点 */

                for (let x of cur.adj()) {
                    /* 将 cur 的相邻节点加入队列 */
                    if (!visited.has(x)) {
                        q.push(x);
                        visited.add(x);
                    }
                }
            }
            step++;/* 划重点：更新步数在这里 */
        }
    }
}