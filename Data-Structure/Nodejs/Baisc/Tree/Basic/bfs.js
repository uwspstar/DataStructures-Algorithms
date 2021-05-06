/*
广度优先遍历(bfs)算法口诀 :

新建一个队列，把根节点入队
把队头出队并访问
把对头的children挨个入队
重复第二、三步，直到队列为空

*/
{
    const bfs = (root) => {
        const q = [root]
        while (q.length > 0) {
            const n = q.shift()
            console.log(n.val)
            n.children.forEach(child => q.push(child))
        }
    }
}