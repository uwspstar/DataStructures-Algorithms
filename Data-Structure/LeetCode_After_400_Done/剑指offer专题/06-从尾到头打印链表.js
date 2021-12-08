// 面试题6 从尾到头打印链表
// 题目 输入一个链表的头结点，从尾到头反过来打印出每个结点的值

// 思路:借助栈实现，或使用递归的方法。

{
    const printReverseLinkedList = head => {
        if (head === null) return head;
        let stack = [];
        let curr = head;
        while (curr) {
            stack.push(curr.val);
            curr = curr.next;
        }

        for (let i = stack.length - 1; i >= 0; i--) {
            console.log(stack[i]);
        }
    }
}
{
    function recursivePrint(node) {
        if (node && node.next) {
            console.log(recursivePrint(node.next));
        } else {
            console.log(node.element);
        }
    }
}