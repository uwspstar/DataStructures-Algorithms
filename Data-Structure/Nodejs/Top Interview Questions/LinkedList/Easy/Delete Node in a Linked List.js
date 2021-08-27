//Delete Node in a Linked List
{
    // it is given node, so, we can work with node
    // if it is give head and val, we need to pre and curr
    // when curr find the node, then pre.next = curr.next;
    var deleteNode = function(node) {
        node.val = node.next.val;
        node.next = node.next.next;
    };
}
