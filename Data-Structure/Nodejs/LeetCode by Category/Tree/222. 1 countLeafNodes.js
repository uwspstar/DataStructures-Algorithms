{
    var countNodes = function (root) {
        if (root === null) return 0;
        let res = 0;
        let queue = [root];
        while (queue.length) {
            let sz = queue.length;
            for (let i = 0; i < sz; i++) {
                let n = queue.shift();
                n.left && queue.push(n.left);
                n.right && queue.push(n.right);
                if (n.left === null && n.right === null) {
                    res++;
                }
            }
        }
        return res;
    };
}