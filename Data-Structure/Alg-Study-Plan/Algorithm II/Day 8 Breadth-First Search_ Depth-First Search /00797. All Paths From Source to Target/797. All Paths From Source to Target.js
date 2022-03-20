// 797. All Paths From Source to Target
/*
Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1 and return them in any order.

The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).

Input: graph = [[4,3,1],[3,2,4],[3],[4],[]]
Output: [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]
*/
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
    // Number of Ways to Arrive at Destination
}