//199. Binary Tree Right Side View
{
    var rightSideView = function (root) {
        if (root === null) return [];

        let rightSide = [];
        let q = [root];

        while (q.length > 0) {
            let sz = q.length;
            for (let i = sz - 1; i >= 0; i--) {
                let n = q.shift();
                if (n.left !== null) {
                    q.push(n.left);
                }
                if (n.right !== null) {
                    q.push(n.right);
                }
                if (i === 0) {
                    rightSide.push(n.val) // only with the last one in the queue
                }
            }
        }
        return rightSide;
    };
}