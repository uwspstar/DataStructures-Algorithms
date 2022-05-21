// 207. Course Schedule
/*
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

 

Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
*/
{

    const buildGraph = (prerequisites) => {
        let graphMap = new Map();
        for (let x of prerequisites) {
            let key = x[1];
            if (graphMap.has(key)) {
                let val = graphMap.get(key);
                val.push(x[0]);
            } else {
                graphMap.set(key, [x[0]]);
            }
        }
        return graphMap;
    }

    const hasCycle = (course, visited, graph) => {
        if (visited[course] === 1) return true; // the node is visiting
        if (visited[course] === 2) return false; // the node has been visited

        visited[course] = 1; // visiting

        let arr = graph.get(course);
        if (arr) {
            for (let x of arr) {
                if (hasCycle(x, visited, graph)) return true;
            }
        }
        visited[course] = 2; // marked as visited

        return false; // before return , need to set visited[course] = 2;
    }

    var canFinish = function (numCourses, prerequisites) {
        // step 1 : build graph
        let graph = buildGraph(prerequisites);

        // step 2 : record the visited node, the paht will backtrack
        let visited = Array(numCourses).fill(0);

        // step 3:  check each node
        for (let course = 0; course < numCourses; course++) {
            if (hasCycle(course, visited, graph)) return false;
        }

        return true;
    };
}