//797. All Paths From Source to Target
/*
Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1 and return them in any order.

The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).

Input: graph = [[1,2],[3],[3],[]]
Output: [[0,1,3],[0,2,3]]
Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.

Input: graph = [[4,3,1],[3,2,4],[3],[4],[]]
Output: [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]

Input: graph = [[1],[]]
Output: [[0,1]]

Input: graph = [[1,2,3],[2],[3],[]]
Output: [[0,1,2,3],[0,2,3],[0,3]]
 
Input: graph = [[1,3],[2],[3],[]]
Output: [[0,1,2,3],[0,3]]

输入的这个 graph 其实就是「邻接表」表示的一幅图，graph[i] 存储这节点 i 的所有邻居节点。
题目输入一幅有向无环图，这个图包含 n 个节点，标号为 0, 1, 2,..., n - 1，请你计算所有从节点 0 到节点 n - 1 的路径。
*/
{
    var allPathsSourceTarget = function (graph) {
        let result = []

        for (let nodeIdx of graph[0]) {
            dfs(graph, result, [0, nodeIdx], nodeIdx)
        }

        return result
    };

    function dfs(graph, result = [], placed, idx = 0) {
        if (idx === graph.length - 1) {
            result.push([...placed])
            return result
        }

        let nextEdges = graph[idx]

        for (let edge of nextEdges) {
            placed.push(edge)

            dfs(graph, result, placed, edge)

            placed.pop()
        }
    }
}
{
    var allPathsSourceTarget = function (graph) {
        const stack = [], ans = [];

        const dfs = (graph, x, n) => {
            if (x === n) {
                ans.push(stack.slice());
                return;
            }
            for (const y of graph[x]) {
                stack.push(y);
                dfs(graph, y, n);
                stack.pop();
            }
        }

        stack.push(0);
        dfs(graph, 0, graph.length - 1);
        return ans;
    };
}
{
    var allPathsSourceTarget = function (graph) {
        let myGraph = buildGraph(graph);
        let res = [];
        let path = [];
        let len = graph.length;
        travelPath(graph, 0, res, path);

        return res;
    };

    const buildGraph = arr => {
        let graph = {};
        for (let i = 0; i < arr.length; i++) {
            graph[i] = arr[i];
        }
        return graph;
    }
    const travelPath = (graph, src, res, path) => {
         
    }
}