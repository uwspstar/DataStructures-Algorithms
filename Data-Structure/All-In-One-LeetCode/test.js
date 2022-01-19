{
    const bfs = root => {
        if (root === null) return root;
        let res = [];
        let q = [root]
        while (q.length) {
            let sz = q.length;
            for (let i = 0; i < sz; i++) {
                let n = q.shift();
                res.push(n.val);
                if (n.left) q.push(n.left);
                if (n.right) q.push(n.right);
            }
        }
        return res;
    }
}