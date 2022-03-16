//BFS queue
/*
Time Complexity: O(NlogN) where N is the number of nodes in the tree.

In the first part of the algorithm, we do the BFS traversal, 
whose time complexity is  O(N) since we traversed each node once and only once.
*/
var verticalOrder = function (root) {
    if (root === null) return [];
    let res = [];
    let q = [[root, 0]]; // [node, level]

    let columnTable = new Map();

    let minLevel = Infinity;
    let maxLevel = -Infinity

    while (q.length > 0) {
        let [n, level] = q.shift();

        let key = level;

        minLevel = Math.min(minLevel, key);
        maxLevel = Math.max(maxLevel, key);

        let tmp = columnTable.has(key) ? columnTable.get(key) : [];
        tmp.push(n.val);
        columnTable.set(key, tmp);

        if (n.left !== null) {
            q.push([n.left, level - 1]);
        }
        if (n.right !== null) {
            q.push([n.right, level + 1]);
        }
    }

    for (let i = minLevel; i <= maxLevel; i++) {
        res.push(columnTable.get(i));
    }

    return res;
};