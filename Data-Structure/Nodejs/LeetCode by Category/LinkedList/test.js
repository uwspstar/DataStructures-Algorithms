const reverse = (node) => {
    let prev = null;
    while (node !== null) {
        let tmp = node.next;
        node.next = prev;
        prev = node;
        node = tmp;
    }
    return prev;
}
//翻转链表(递归方式) 
const reverse2 = head => {
    if (head.next === null || head === null) {
        return head;
    }
    let reverseNode = reverse2(head.next);
    head.next.next = head;
    head.next = null;
    return reverseNode;
}
{
    const reverse = (node, prev) => {
        if (node === null) return prev;
        
        let tmp = node.next;
        node.next = prev;
        prev = node;
        node = tmp;

        return reverse(node, prev);
    }
}