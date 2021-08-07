//429. N-ary Tree Level Order Traversal
{
    var levelOrder = function (root) {
        if (root === null) return [];
        let res = [];
        let q = [root];
        while (q.length > 0) {
            let sz = q.length;
            let tmp = [];
            for (let i = 0; i < sz; i++) {
                let n = q.shift();
                tmp.push(n.val);
                if (n.children !== null) {
                    n.children.forEach(child => {
                        q.push(child);
                    })
                }
            }
            res.push(tmp)
        }
        return res;
    };
}