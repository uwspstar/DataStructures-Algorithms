//210. Course Schedule II
/*
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

Example 1:
Input: numCourses = 2, prerequisites = [[1,0]]
Output: [0,1]
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].

Example 2:
Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
Output: [0,2,1,3]
Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].
*/
//https://zhuanlan.zhihu.com/p/135094687
{
    /**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
    var findOrder = function (numCourses, prerequisites) {
        let res = Array(numCourses).fill(0);
        let indegree = Array(numCourses).fill(0); //入度

        // get the indegree for each course
        for (let pre of prerequisites) {
            indegree[pre[0]]++;
        }
        // put courses with indegree == 0 to queue
        let queue = [];
        for (let i = 0; i < numCourses; i++) {
            if (indegree[i] == 0) {
                queue.push(i);
            }
        }
        //console.log(queue);
        // execute the course
        let i = 0;
        while (queue.length) {
            let curr = queue.shift();
            res[i++] = curr;
            // remove the pre = curr
            for (let pre of prerequisites) {
                if (pre[1] == curr) {
                    indegree[pre[0]]--;
                    if (indegree[pre[0]] == 0) {
                        queue.push(pre[0]);
                    }
                }
            }
        }

        return i === numCourses ? res : [];
    };
    //Course Schedule Medium
    //Alien Dictionary Hard
    //Minimum Height Trees Medium
    //Sequence Reconstruction Medium
    //Course Schedule III Hard
    //Parallel Courses Medium

}
//https://leetcode.com/problems/course-schedule-ii/discuss/942920/DFS-Topological-sort-JS-Solution
{
    // DFS
    var findOrder = function (numCourses, prerequisites) {
        let adjList = new Array(numCourses).fill(0).map(() => []);
        let visited = new Array(numCourses).fill(false);
        let inDegree = new Array(numCourses).fill(0);
        for (let [course, preCourse] of prerequisites) {
            adjList[preCourse].push(course);
            inDegree[course]++;
        }
        // We can take courses that have no prerequisite or whose pre-requisites have already been taken
        let res = [];
        for (let i = 0; i < numCourses; i++) {
            if (inDegree[i] == 0 && !visited[i]) {
                dfs(i);
            }
        }

        return res.length === numCourses ? res : [];

        function dfs(node) {
            res.push(node);
            visited[node] = true;
            for (let next of adjList[node]) {
                inDegree[next]--;
                if (inDegree[next] == 0 && !visited[next]) {
                    dfs(next);
                }
            }
        }
        // Time Complexity: O(V + E), if there is a valid answer, we visit every node and all of its neighbors (those that current node is pointing to)
        // Space Complexity: O(V + E), for adjacency list  
    };
}
{
    var findOrder = function (numCourses, prerequisites) {
        const adjacencyList = [];
        const inDegree = new Array(numCourses).fill(0);
        for (i = 0; i < numCourses; i++) {
            adjacencyList.push([]);
        }
        for (i = 0; i < prerequisites.length; i++) {
            const req = prerequisites[i];
            adjacencyList[req[1]].push(req[0]);
            inDegree[req[0]]++;
        }

        const q = [];
        const order = [];

        for (i = 0; i < numCourses; i++) {
            if (inDegree[i] === 0) {
                q.push(i);
            }
        }

        while (q.length) {
            const node = q.shift();
            for (let neighbor of adjacencyList[node]) {
                inDegree[neighbor]--;
                if (inDegree[neighbor] == 0) q.push(neighbor);
            }
            order.push(node);
        }
        return order.length === numCourses ? order : []
    }
}