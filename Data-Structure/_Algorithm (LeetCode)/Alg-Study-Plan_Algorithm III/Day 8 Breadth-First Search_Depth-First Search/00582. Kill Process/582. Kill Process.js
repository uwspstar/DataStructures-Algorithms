// 582. Kill Process
/*
You have n processes forming a rooted tree structure. You are given two integer arrays pid and ppid, where pid[i] is the ID of the ith process and ppid[i] is the ID of the ith process's parent process.

Each process has only one parent process but may have multiple children processes. Only one process has ppid[i] = 0, which means this process has no parent process (the root of the tree).

When a process is killed, all of its children processes will also be killed.

Given an integer kill representing the ID of a process you want to kill, return a list of the IDs of the processes that will be killed. You may return the answer in any order.

Example 1:
Input: pid = [1,3,10,5], ppid = [3,0,5,3], kill = 5
Output: [5,10]
Explanation: The processes colored in red are the processes that should be killed.
*/
{
    var killProcess = function (pid, ppid, kill) {
        let res = [];
        let stack = [];
        let map = new Map();
        ppid.forEach((p, i) => {
            let c = map.get(p);
            if (c) {
                c.push(pid[i])
            } else {
                map.set(p, [pid[i]])
            }

        })


        stack.push(kill);
        while (stack.length > 0) {
            let node = stack.pop();
            res.push(node);
            let children = map.get(node)
            if (children && children.length > 0) stack.push(...children)
        }


        return res;
    };

    // Bomb Enemy (M)
    // Encode N-ary Tree to Binary Tree (H)
    // Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts (M)
}