//本质上就是一幅「图」，让你从一个起点，走到终点，问最短路径。这就是 BFS 的本质
//一般来说在找最短路径的时候使用 BFS，其他时候还是 DFS 使用得多一些

//bfs use queue, 
// only iterative
{
    const bfs = (root) => {
        if (root === null) return root;

        const q = [root];

        while (q.length > 0) {
            let sz = q.length;
            for (let i = 0; i < sz; i++) {
                const n = q.shift();
                console.log(n.val); // do logic here
                n.left && q.push(n.left);
                n.right && q.push(n.right);
            }
        }
    }
}

// use children
{
    const bfs = (root) => {
        const q = [root]
        while (q.length > 0) {
            let sz = q.length;
            for (let i = 0; i < sz; i++) {
                const n = q.shift();
                console.log(n.val);
                n.children.forEach(child => q.push(child));
            }

        }
    }
}
{
    // By using a queue (recursively):

    // Time complexity: O(n)
    // Space complexity: O(n)

    class Tree {
        constructor(data, left = null, right = null) {
            this.data = data;
            this.left = left;
            this.right = right;
        }
    }

    function bfs(root, i = 0, queue = [root]) {
        if (i >= queue.length) return;
        else {
            let poppedNode = queue[i];
            if (poppedNode !== null) {
                console.log(poppedNode.data);
                queue.push(poppedNode.left);
                queue.push(poppedNode.right);
            }
            bfs(root, i + 1, queue);
        }
    }
}