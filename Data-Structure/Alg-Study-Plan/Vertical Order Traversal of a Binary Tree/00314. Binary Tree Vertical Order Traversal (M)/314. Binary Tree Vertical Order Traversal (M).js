//314. Binary Tree Vertical Order Traversal (M)
{
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
}