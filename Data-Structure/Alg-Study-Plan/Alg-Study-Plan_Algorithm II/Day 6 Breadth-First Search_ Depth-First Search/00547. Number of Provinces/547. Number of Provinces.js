// 547. Number of Provinces
/*
There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

A province is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

Return the total number of provinces.

Example 1:
Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
Output: 2
*/
{
    var findCircleNum = function (isConnected) {
        const provinces = isConnected.length;
        const visited = new Set();
        let circles = 0;
        for (let i = 0; i < provinces; i++) {
            if (!visited.has(i)) {
                dfs(isConnected, visited, provinces, i);
                circles++;
            }
        }
        return circles;
    };

    const dfs = (isConnected, visited, provinces, i) => {
        for (let j = 0; j < provinces; j++) {
            if (isConnected[i][j] == 1 && !visited.has(j)) {
                visited.add(j);
                dfs(isConnected, visited, provinces, j);
            }
        }
    };
    /*
    Number of Connected Components in an Undirected Graph
    Robot Return to Origin
    Sentence Similarity
    Sentence Similarity II
    The Earliest Moment When Everyone Become Friends
    Detonate the Maximum Bombs
    */
}