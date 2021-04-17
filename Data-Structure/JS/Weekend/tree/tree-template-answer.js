//////////////////////
//       a
//      / \
//     b   c
//    / \   \
//   d   e   f
/////////////////////
class Node {
    constructor (val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//console.log('tree', a);

//BFS (Queue) Time: O(N), Space: O(N)
{
    const bfs = root => {
        if (root === null) return;

        const q = [root]; //put head into a queue
        while (q.length > 0) {
            let n = q.shift();
            console.log(n.val);

            if (n.left !== null) {
                q.push(n.left);
            }

            if (n.right !== null) {
                q.push(n.right);
            }
        }
    }
    //console.log('bfs', bfs(a)) //abcdef
}
//DFS  (stack)
//preOrder : Time: O(N), Space: O(N)
{  
    const dfs = root => {
        if (root === null) return;
        let stack = [root];
        while (stack.length > 0) {
            let n = stack.pop();
            console.log(n.val);
            //FILO
            if (n.right !== null) {
                stack.push(n.right);
            }
            if (n.left !== null) {
                stack.push(n.left);
            }
        }
    }
    //console.log('dfs-preOrder', dfs(a)); //abdecf

}
//inOrder (2 while loop with 2 stack)
{
    const inOrder = root => {
        if (root === null) return;
        let stack = [];
        let p = root;
        while (stack.length || p) {
            while (p) {
                stack.push(p); //a, b, d
                p = p.left;
            }
            let n = stack.pop();
            console.log(n.val);
            p = n.right; //d, d-right == null
        }
    }
    console.log('dfs-inOrder',inOrder(a));//dbeacf
}
//postOrder
{  
    const postOrder = root => {
        if (root === null) return;
        let stack = [root];
        while (stack.length > 0) { 
            //FILO
            let n = stack.pop();

            if (n.right !== null) {
                stack.push(n.right);
            }
            if (n.left !== null) {
                stack.push(n.left);
            } 
            console.log(p.val);
        }
    }
    //console.log('dfs-postOrder', postOrder(a)); //abdec
}

//preOrder recursive : Time: O(N), Space: O(N)
{  
    const dfs = root => {
        if (root === null) return; 
        console.log(root.val);
        dfs(root.left);
        dfs(root.right)

    }
    //console.log('dfs-preOrder', dfs(a)); //abdecf

}
//inOrder recursive : Time: O(N), Space: O(N)
{  
    const dfs = root => {
        if (root === null) return;  
        
        dfs(root.left);
        console.log(root.val);
        dfs(root.right) 

    }
    //console.log('dfs-inOrder', dfs(a));

}
//postOrder recursive : Time: O(N), Space: O(N)
{  
    const dfs = root => {
        if (root === null) return;  

        dfs(root.left);
        dfs(root.right)
        console.log(root.val);

    }
    //console.log('dfs-postOrder', dfs(a));

}

