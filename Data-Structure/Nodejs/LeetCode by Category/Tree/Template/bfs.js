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